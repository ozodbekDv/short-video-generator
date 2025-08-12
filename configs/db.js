import { drizzle } from "drizzle-orm/neon-http";

const db = drizzle(process.env.NEXT_PUBLIC_DRIZZLE_DATABASE_URL);

export const result = await db.execute("select 1");
