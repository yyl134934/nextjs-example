
import { MongoClient } from "mongodb";

const uri = "mongodb://dinnerDB:a406010853@cluster0-shard-00-00.ajgqk.mongodb.net:27017,cluster0-shard-00-01.ajgqk.mongodb.net:27017,cluster0-shard-00-02.ajgqk.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-up2idw-shard-0&authSource=admin&retryWrites=true&w=majority";

export const showlog= async()=>{
    const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = await client.db('dinnerDB');
   const collection= await db.collection("dish_info");

    const  result = await collection.find({_id:"611b768241f87bb78e0c2110"}).toArray();
      
      client.close();
      
      console.info(result);
    return result;
}
