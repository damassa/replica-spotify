import { MongoClient } from "mongodb";

const client = new MongoClient(`${import.meta.env.URI}`);

export const db = client.db("spotifree");
