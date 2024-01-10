import { NextResponse } from "next/server";
import sqlite3 from "sqlite3";
import path from "path";

export async function GET(req: Request) {
  // Get the absolute path to the 'recipe.db' file in the 'lib' folder
  const dbPath = path.resolve(process.cwd(), "lib", "recipe.db");

  // Create a new SQLite database connection using the absolute path
  const db = new sqlite3.Database(dbPath);

  try {
    const recipes = await new Promise((resolve, reject) => {
      db.all("SELECT * FROM recipe", (err, rows) => {
        if (err) {
          console.error(
            "Error retrieving data from the database:",
            err.message
          );
          reject(err);
        } else {
          console.log("Contents of the 'recipe' table:");
          console.table(rows);
          resolve(rows);
        }
      });
    });

    return NextResponse.json(recipes);
  } catch (error) {
    console.log("[RECIPES_GET]", error);
    console.log("test");
    return new NextResponse("Internal error", { status: 500 });
  } finally {
    // Close the database connection in the 'finally' block to ensure it's always closed
    db.close();
  }
}
