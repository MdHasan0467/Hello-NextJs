const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = "mongodb+srv://NextJs:HIRgYhMp2r3Sv7dE@cluster0.dewgdxt.mongodb.net/?retryWrites=true&w=majority";

let cacheClient = null;

async function dbConnect() {
  if (cacheClient) return cacheClient;

  try {
    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    cacheClient = client;
    return client;
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}



export default dbConnect;
