import { Kysely, SqliteDatabase } from 'kysely'

/** Migration used to initialize empty database tables for the test database. */
export async function up(db: Kysely<SqliteDatabase>) {
  await db.schema
    .createTable('screenings')
    .ifNotExists()
    .addColumn('id', 'integer', (c) => c.primaryKey().autoIncrement().notNull())
    .addColumn('numbers_of_tickets', 'integer', (c) => c.notNull())
    .addColumn('numbers_of_tickets_left', 'integer', (c) => c.notNull())
    .addColumn('timestamp', 'timestamp', (c) => c.notNull())
    .addColumn('movie_id', 'integer', (c) =>
      c.notNull().references('movies.id')
    )
    .execute()
}

export async function down() {
  // unnecessary, as this is the first migration, we can just delete the database
}
