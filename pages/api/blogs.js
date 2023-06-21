// import client from "./db_config";

import dbConnect from "@/lib/db_config";
import { ObjectId } from "mongodb";

const blogs = async (req, res) => {
  const client = await dbConnect();
  const db = client.db("Next_Hello");

  const blogCollection = db.collection("blogs");

  if (req.method === "GET") {
    const data = await blogCollection.find().toArray();
    res.send(data);
  } else if (req.method === "POST") {
    const post = req.body;
    const result = await blogCollection.insertOne(post);
    res.status(201).send(result);
  }
  else if(req.method === 'PUT'){
    const post = req.body;
    const id = req.query.id
    const query = {_id: new ObjectId(id)}
    const updatedDoc = {
      $set : post
    }
    const result = await blogCollection.updateOne(query, updatedDoc);
    res.status(201).send(result);
  }
  else if(req.method === 'DELETE'){
    const id = req.query.id
    const query = {_id: new ObjectId(id)}
    const result = await blogCollection.deleteOne(query);
    res.status(201).send(result);
  }
  
};
export default blogs;
