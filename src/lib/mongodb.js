import { MongoClient } from "mongodb";

const uri = "mongodb+srv://todoapp:todoapp@cluster0.octp8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // Add this to your .env file
const options = {};

let client;
let clientPromise;



if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so the client is not recreated
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
