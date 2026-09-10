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
        "name": "Rajesh K. Sharma",
        "designation": "Insolvency Professional",
        "category": "ip",
        "reg_no": "IBBI/IPA-001/IP-P00214/2017-2018/10412",
        "firm": "Apex Restructuring Advisors LLP",
        "city": "New Delhi",
        "state": "Delhi",
        "bench": "NCLT Principal Bench (New Delhi)",
        "lat": 28.6139,
        "lng": 77.2090,
        "email": "rk.sharma@apexinsolvency.in",
        "phone": "+91 98110 44219",
        "cases_handled": 18,
        "specialization": "Manufacturing, Real Estate CIRP, Fast-track Liquidation"
    },
    {
        "id": "ip-002",
        "name": "Sunita Deshmukh",
        "designation": "Insolvency Professional",
        "category": "ip",
        "reg_no": "IBBI/IPA-002/IP-N00108/2018-2019/10291",
        "firm": "Deshmukh & Associates",
        "city": "Mumbai",
        "state": "Maharashtra",
        "bench": "NCLT Mumbai Bench",
        "lat": 18.9220,
        "lng": 72.8347,
        "email": "sunita@deshmukhresolution.com",
        "phone": "+91 98201 88314",
        "cases_handled": 24,
        "specialization": "EPC Contractors, Financial Services, Cross-Border Insolvency"
    },
    {
        "id": "rv-003",
        "name": "Arunachalam Venkataraman",
        "designation": "Registered Valuer (L&B, P&M)",
        "category": "rv",
        "reg_no": "IBBI/RV/02/2019/11842",
        "firm": "Southern Valuation Partners",
        "city": "Bengaluru",
        "state": "Karnataka",
        "bench": "NCLT Bengaluru Bench",
        "lat": 12.9716,
        "lng": 77.5946,
        "email": "arun@southernvaluation.org",
        "phone": "+91 94480 55123",
        "cases_handled": 32,
        "specialization": "Industrial Plant & Machinery, Technology Tech Parks"
    },
    {
        "id": "counsel-004",
        "name": "Adv. Vikramjit Singh Khurana",
        "designation": "Senior Restructuring Counsel",
        "category": "counsel",
        "reg_no": "D/1248/2004",
        "firm": "Khurana & Chambers",
        "city": "Chandigarh",
        "state": "Punjab & Haryana",
        "bench": "NCLT Chandigarh Bench",
        "lat": 30.7333,
        "lng": 76.7794,
        "email": "vikramjit@khuranachambers.com",
        "phone": "+91 98722 33110",
        "cases_handled": 45,
        "specialization": "NCLAT Appeals, Section 7/9 Petitions, Personal Guarantor Insolvency"
    },
    {
        "id": "ip-005",
        "name": "Bhavin H. Patel",
        "designation": "Insolvency Professional",
        "category": "ip",
        "reg_no": "IBBI/IPA-001/IP-P00582/2018-2019/11033",
        "firm": "Gujarat Turnaround Advisory",
        "city": "Ahmedabad",
        "state": "Gujarat",
        "bench": "NCLT Ahmedabad Bench",
        "lat": 23.0225,
        "lng": 72.5714,
        "email": "bhavin@gujarat-turnaround.com",
        "phone": "+91 98250 99421",
        "cases_handled": 14,
        "specialization": "Textiles, Chemicals, MSME Pre-Packaged Insolvency (PPIRP)"
    },
    {
        "id": "rv-006",
        "name": "Priyanka Roy Choudhury",
        "designation": "Registered Valuer (SFA)",
        "category": "rv",
        "reg_no": "IBBI/RV/05/2020/13219",
        "firm": "Eastern Financial Valuation Corp",
        "city": "Kolkata",
        "state": "West Bengal",
        "bench": "NCLT Kolkata Bench",
        "lat": 22.5726,
        "lng": 88.3639,
        "email": "priyanka.roy@easternval.com",
        "phone": "+91 98310 77215",
        "cases_handled": 28,
        "specialization": "Securities & Financial Assets, Intangibles, DCF Valuation"
    },
    {
        "id": "ip-007",
        "name": "K. R. Narayanan",
        "designation": "Insolvency Professional",
        "category": "ip",
        "reg_no": "IBBI/IPA-003/IP-N00219/2019-2020/11450",
        "firm": "Coromandel Insolvency Group",
        "city": "Chennai",
        "state": "Tamil Nadu",
        "bench": "NCLT Chennai Bench",
        "lat": 13.0827,
        "lng": 80.2707,
        "email": "kr.narayanan@coromandelip.in",
        "phone": "+91 94440 12890",
        "cases_handled": 16,
        "specialization": "Automotive, Ports & Logistics, Section 66 Fraudulent Trading"
    },
    {
        "id": "counsel-008",
        "name": "Adv. Srinivas Rao Goud",
        "designation": "Insolvency Litigator",
        "category": "counsel",
        "reg_no": "TS/889/2008",
        "firm": "Deccan Law Associates",
        "city": "Hyderabad",
        "state": "Telangana",
        "bench": "NCLT Hyderabad Bench",
        "lat": 17.3850,
        "lng": 78.4867,
        "email": "srinivas@deccanlaw.in",
        "phone": "+91 98490 66321",
        "cases_handled": 39,
        "specialization": "Pharma Restructuring, Avoidance Applications (Sec 43, 45, 66)"
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
