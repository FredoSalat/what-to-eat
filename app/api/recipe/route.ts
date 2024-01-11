import { NextResponse } from "next/server";
import sqlite3 from "sqlite3";
import path from "path";

import { Recipe } from "@/lib/types";

export async function GET(req: Request) {
  const dbPath = path.resolve(process.cwd(), "lib", "recipe.db");

  const db = new sqlite3.Database(dbPath);

  try {
    const recipes = await new Promise<Recipe[]>((resolve, reject) => {
      db.all("SELECT * FROM recipe", (err, rows) => {
        if (err) {
          console.error(
            "Error retrieving data from the database:",
            err.message
          );
          reject(err);
        } else {
          const parsedRows: Recipe[] = (rows as any[]).map((row) => {
            const { title, imageURL, ingredients } = row as {
              title: string;
              imageURL: string;
              ingredients: string;
            };
            return {
              title,
              imageURL,
              ingredients: ingredients ? JSON.parse(ingredients) : [],
            };
          });

          resolve(parsedRows);
        }
      });
    });

    return NextResponse.json(recipes);
  } catch (error) {
    return new NextResponse("Internal error", { status: 500 });
  } finally {
    db.close();
  }
}
