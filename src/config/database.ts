import { MongoClient } from 'mongodb';

export default async function connectMongo(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = "mongodb://0.0.0.0:27017/lista-de-tarefas";

    const client = new MongoClient(uri);
    
    try {
        // Connect to the MongoDB cluster
        await client.connect();
    
        // Make the appropriate DB calls

        const collection =  client.db().collection('lista-de-tarefas');
    
        await collection.insertMany([
            { title: 'Dangal', rating: 'Not Rated' },
            { title: 'The Boss Baby', rating: 'PG' }
           ]);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}
