// services/db.js
import pg from 'pg'

const pool = new pg.Pool({
  user: process.env.PG_USER ?? 'postgres',
  host: process.env.PG_HOST ?? 'localhost',
  database: process.env.PG_DATABASE ?? 'brief5',
  password: process.env.PG_PASSWORD ?? 'postgres',
  port: process.env.PG_PORT ?? 5432
})

export default pool