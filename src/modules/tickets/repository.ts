import type { Database } from '@/database'

export default (db: Database) => ({
  findById: async (id: number) =>
    db.selectFrom('tickets').selectAll().where('userId', '=', id).execute(),

  addTicket: async (data) =>
    db
      .insertInto('tickets')
      .values({
        userId: data.userId,
        screeningId: data.screeningId,
      })
      .executeTakeFirst(),

  removeTicketFromScreening: async (id) => {
    const leftTickets =
      Number(
        db.selectFrom('screenings').selectAll().where('id', '=', id).execute()
      ) - 1
  },
})
