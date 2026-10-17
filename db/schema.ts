import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
export const rooms=sqliteTable('chess_rooms',{code:text('code').primaryKey(),state:text('state').notNull(),whiteHash:text('white_hash').notNull(),blackHash:text('black_hash'),revision:integer('revision').notNull().default(0),updatedAt:integer('updated_at').notNull()});
