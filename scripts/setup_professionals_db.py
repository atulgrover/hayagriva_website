#!/usr/bin/env python3
"""
Seed script to create and populate 'apnet_professionals' table in PostgreSQL.
Target DB: 'ibclaw_db' or 'lightrag_db'.
"""

import os
import psycopg2
from psycopg2.extras import RealDictCursor

DB_HOST = os.getenv("POSTGRES_HOST", "localhost")
DB_PORT = int(os.getenv("POSTGRES_PORT", "5432"))
DB_USER = os.getenv("POSTGRES_USER", "db")
DB_PASSWORD = os.getenv("POSTGRES_PASSWORD", "resolutionbazaar2026")
DB_NAME = os.getenv("POSTGRES_DB", "ibclaw_db")

SEED_DATA = [
    {
        "id": "ip-001",
        "name": "IP Atul Grover",
        "designation": "Insolvency Professional",
        "category": "ip",
        "reg_no": "IBBI/IPA-002/IP-N00128/2018-19/10342",
        "firm": "Resolution Bazaar",
        "city": "Chandigarh",
        "state": "Chandigarh (UT)",
        "bench": "NCLT Chandigarh Bench & Principal Bench",
        "lat": 30.7398,
        "lng": 76.7827,
        "email": "resolutionbazaar@gmail.com",
        "phone": "+91 98722 33110",
        "cases_handled": 31,
        "specialization": "Corporate Insolvency Resolution (CIRP), MSME Pre-packs (PPIRP), Section 29A Audits"
    }
]

def main():
    print(f"Connecting to PostgreSQL {DB_HOST}:{DB_PORT}/{DB_NAME} as {DB_USER}...")
    try:
        conn = psycopg2.connect(
            host=DB_HOST,
            port=DB_PORT,
            user=DB_USER,
            password=DB_PASSWORD,
            dbname=DB_NAME
        )
        conn.autocommit = True
        cur = conn.cursor()

        cur.execute("""
            CREATE TABLE IF NOT EXISTS apnet_professionals (
                id VARCHAR(64) PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                designation VARCHAR(255) NOT NULL,
                category VARCHAR(32) NOT NULL,
                reg_no VARCHAR(128) NOT NULL,
                firm VARCHAR(255),
                city VARCHAR(128) NOT NULL,
                state VARCHAR(128),
                bench VARCHAR(255),
                lat NUMERIC(9, 6) NOT NULL,
                lng NUMERIC(9, 6) NOT NULL,
                email VARCHAR(255),
                phone VARCHAR(64),
                cases_handled INTEGER DEFAULT 0,
                specialization TEXT,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
        """)

        print("Table 'apnet_professionals' verified / created.")

        insert_sql = """
            INSERT INTO apnet_professionals 
            (id, name, designation, category, reg_no, firm, city, state, bench, lat, lng, email, phone, cases_handled, specialization)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
            ON CONFLICT (id) DO UPDATE SET
                name = EXCLUDED.name,
                designation = EXCLUDED.designation,
                category = EXCLUDED.category,
                reg_no = EXCLUDED.reg_no,
                firm = EXCLUDED.firm,
                city = EXCLUDED.city,
                state = EXCLUDED.state,
                bench = EXCLUDED.bench,
                lat = EXCLUDED.lat,
                lng = EXCLUDED.lng,
                email = EXCLUDED.email,
                phone = EXCLUDED.phone,
                cases_handled = EXCLUDED.cases_handled,
                specialization = EXCLUDED.specialization;
        """

        for p in SEED_DATA:
            cur.execute(insert_sql, (
                p["id"], p["name"], p["designation"], p["category"], p["reg_no"],
                p["firm"], p["city"], p["state"], p["bench"], p["lat"], p["lng"],
                p["email"], p["phone"], p["cases_handled"], p["specialization"]
            ))

        cur.execute("SELECT COUNT(*) FROM apnet_professionals;")
        total = cur.fetchone()[0]
        print(f"Successfully seeded apnet_professionals. Total rows in database: {total}")
        cur.close()
        conn.close()

    except Exception as e:
        print(f"PostgreSQL seed error: {e}")

if __name__ == "__main__":
    main()
