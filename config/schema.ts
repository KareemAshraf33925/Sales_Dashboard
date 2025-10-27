import { boolean, integer, json, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  meeting: varchar({ length: 255 }).notNull(),
});
// export const coursesTable=pgTable("courses",{
// id: integer().primaryKey().generatedAlwaysAsIdentity(),
// cid: varchar().notNull().unique(),
// name: varchar(),
// description: varchar(),
// level: varchar().notNull(),
// Category : varchar(),
// imageURL:varchar().default(""),
// email:varchar('email').references(() =>usersTable.email)
// })

