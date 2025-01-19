import config from "@/lib/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

// Ensure this is only executed on the server side
if (typeof window !== "undefined") {
  throw new Error("drizzle.ts should only be used on the server side.");
}

const sql = neon(config.env.databaseUrl);
export const db = drizzle({ client: sql, casing: "snake_case" });
