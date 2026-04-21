import pg from 'pg';

const { Pool } = pg;

let pool: pg.Pool | null = null;

export function getPool() {
	if (!pool) {
		pool = new Pool({
			connectionString: process.env.DATABASE_URL,
			ssl: { rejectUnauthorized: false },
		});
	}
	return pool;
}

export async function initDB() {
	const client = await getPool().connect();
	try {
		await client.query(`
			CREATE TABLE IF NOT EXISTS leads (
				id SERIAL PRIMARY KEY,
				full_name VARCHAR(255) NOT NULL,
				email VARCHAR(255),
				phone VARCHAR(50),
				zip_code VARCHAR(10) NOT NULL,
				incident_type VARCHAR(100) NOT NULL,
				incident_date DATE,
				description TEXT,
				consent_checked BOOLEAN NOT NULL DEFAULT false,
				created_at TIMESTAMPTZ DEFAULT NOW(),
				status VARCHAR(50) DEFAULT 'new',
				assigned_lawyer VARCHAR(255),
				notes TEXT
			)
		`);
	} finally {
		client.release();
	}
}
