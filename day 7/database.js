const { MongoClient } = require("mongodb")

const URL = "mongodb+srv://mdarish_db_user:ue5egG7sLjPcPruS@arish-node.sciymdt.mongodb.net/"

const client = new MongoClient(URL)

const dbName = "HelloWorld"

async function main() {
    await client.connect()
    console.log("Connected Successfully to Server")
    const db = client.db(dbName)
    const collection = db.collection("User")

    // Insert
    const data = {
        firstname : "Umar",
        lastname : "...",
        age : 71,
        city : "tokyo"
    }
    const insertResult = await collection.insertOne(data)

    // Read
    const findResult = await collection.find({}).toArray()
    console.log("Found Documents ==> ",findResult)

    return "done"
}

main()
 .then(console.log)
 .catch(console.error)
 .finally(() => client.close())