#!/usr/bin/env python3
"""
AgenticProfessionals.Net - Lightweight Server & API
Serves static frontend assets + REST API for PostgreSQL Directory.
Run:
    python scripts/server.py
"""

import os
from typing import Optional, List
import psycopg2
from psycopg2.extras import RealDictCursor
import uvicorn
from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

DB_HOST = os.getenv("POSTGRES_HOST", "localhost")
DB_PORT = int(os.getenv("POSTGRES_PORT", "5432"))
DB_USER = os.getenv("POSTGRES_USER", "db")
DB_PASSWORD = os.getenv("POSTGRES_PASSWORD", "resolutionbazaar2026")
DB_NAME = os.getenv("POSTGRES_DB", "ibclaw_db")

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

app = FastAPI(
    title="AgenticProfessionals.Net API",
    description="Backend API for AgenticProfessionals directory and LightRAG orchestration",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db_connection():
    return psycopg2.connect(
        host=DB_HOST,
        port=DB_PORT,
        user=DB_USER,
        password=DB_PASSWORD,
        dbname=DB_NAME
    )

@app.get("/api/professionals")
def get_professionals(
    city: Optional[str] = Query(None),
    category: Optional[str] = Query(None),
    query: Optional[str] = Query(None)
):
    try:
        conn = get_db_connection()
        cur = conn.cursor(cursor_factory=RealDictCursor)

        sql = """
            SELECT id, name, designation, category, reg_no, firm, city, state, 
                   bench, lat::float, lng::float, email, phone, cases_handled, specialization
            FROM apnet_professionals
            WHERE 1=1
        """
        params = []

        if city and city.lower() != "all":
            sql += " AND LOWER(city) = LOWER(%s)"
            params.append(city)

        if category and category.lower() != "all":
            sql += " AND LOWER(category) = LOWER(%s)"
            params.append(category)

        if query:
            sql += " AND (LOWER(name) LIKE %s OR LOWER(firm) LIKE %s OR LOWER(reg_no) LIKE %s OR LOWER(city) LIKE %s)"
            q_like = f"%{query.lower()}%"
            params.extend([q_like, q_like, q_like, q_like])

        sql += " ORDER BY name ASC"
        cur.execute(sql, tuple(params))
        rows = cur.fetchall()
        cur.close()
        conn.close()
        return rows
    except Exception as e:
        print(f"Database query failed: {e}")
        return []

# Serve static folders
app.mount("/css", StaticFiles(directory=os.path.join(BASE_DIR, "css")), name="css")
app.mount("/js", StaticFiles(directory=os.path.join(BASE_DIR, "js")), name="js")
if os.path.exists(os.path.join(BASE_DIR, "docs")):
    app.mount("/docs", StaticFiles(directory=os.path.join(BASE_DIR, "docs")), name="docs")
if os.path.exists(os.path.join(BASE_DIR, "static")):
    app.mount("/static", StaticFiles(directory=os.path.join(BASE_DIR, "static")), name="static")

@app.get("/")
def serve_index():
    return FileResponse(os.path.join(BASE_DIR, "index.html"))

if __name__ == "__main__":
    print(f"Starting AgenticProfessionals.Net server on http://localhost:8080...")
    print(f"Static directory: {BASE_DIR}")
    uvicorn.run("server:app", host="0.0.0.0", port=8080, reload=True, app_dir=os.path.join(BASE_DIR, "scripts"))
