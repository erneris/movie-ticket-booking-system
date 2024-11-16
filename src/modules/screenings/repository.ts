import type { Database } from '@/database'

export default (db: Database) => ({
  findAll: async (limit = 10, offset = 0) =>
    db
      .selectFrom('screenings')
      .selectAll()
      .limit(limit)
      .offset(offset)
      .execute(),

  findByIds: async (ids: number[]) =>
    db.selectFrom('screenings').selectAll().where('id', 'in', ids).execute(),

  addScreening: async (data: string[]) =>
    db
      .insertInto('screenings')
      .values({
        timestamp: data.timestamp,
        movie_id: data.movie_id,
        numbers_of_tickets: data.tickets,
        numbers_of_tickets_left: data.tickets,
      })
      .executeTakeFirst(),
})
