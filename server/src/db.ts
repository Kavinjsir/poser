import { MongoClient } from "mongodb";
import { PoseName, Pose } from "./types";
import Config from "./config.json";

const { URI, DB_NAME, COLLECTION_NAME } = Config;

class DB {
  mongoClient: MongoClient;

  constructor() {
    this.mongoClient = new MongoClient(URI);
  }

  async getPoseNames(): Promise<PoseName[]> {
    const poseNames: PoseName[] = [];
    try {
      await this.mongoClient.connect();
      const dbCollection = this.mongoClient.db(DB_NAME).collection(COLLECTION_NAME);

      const projection = { name: 1 };
      const cursor = dbCollection.find().project(projection);
      await cursor.forEach((c) => {
        const { name } = c;
        poseNames.push({ name });
      });
    } catch (error) {
      console.error(error);
    } finally {
      await this.mongoClient.close();
      return poseNames;
    }
  }

  async getPoseByName(name: string): Promise<Pose[]> {
    const poses: Pose[] = [];
    try {
      await this.mongoClient.connect();
      const dbCollection = this.mongoClient.db(DB_NAME).collection<Pose>(COLLECTION_NAME);
      const cursor = dbCollection.find({ name });

      if ((await cursor.count()) === 0) {
        console.warn("No documents found!");
        return poses;
      }
      await cursor.forEach((c) => {
        delete (c as any)._id;
        poses.push(c);
      });
    } catch (error) {
      console.error(error);
    } finally {
      await this.mongoClient.close();
      return poses;
    }
  }
}

const db = new DB();

export default db;
