import { MongoClient, type Db } from "mongodb";

declare global {
  var alairMongoClientPromise: Promise<MongoClient> | undefined;
}

function getMongoUri() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("MONGODB_URI is not configured.");
  }

  return uri;
}

export async function getMongoDb(): Promise<Db> {
  const dbName = process.env.MONGODB_DB || "olettrasocials";

  if (!global.alairMongoClientPromise) {
    const client = new MongoClient(getMongoUri());
    global.alairMongoClientPromise = client.connect();
  }

  const client = await global.alairMongoClientPromise;

  return client.db(dbName);
}
