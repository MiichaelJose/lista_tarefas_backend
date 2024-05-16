import { MongoClient } from 'mongodb';

export default async function connectMongo(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = "mongodb://localhost:27017/lista-de-tarefas";

    const client = new MongoClient(uri);
    
    try {
        // Connect to the MongoDB cluster
        await client.connect();

        const collection = client.db().collection('tasks')

        collection.insertOne({title:"oi"})
    
        // Make the appropriate DB calls
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}
