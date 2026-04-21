import postgres from 'postgres';

let sql: postgres.Sql | null = null;

export function getSQL() {
	if (!sql) {
		sql = postgres(process.env.DATABASE_URL!, {
			ssl: 'require',
			max: 5,
		});
	}
	return sql;
}

export async function initDB() {
	const sql = getSQL();
	await sql`
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
	`;
}
