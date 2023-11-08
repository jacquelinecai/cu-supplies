const express = require('express')
const app = express()
const port = 3000

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://jacquelinecai2004:yg4g30UcP6fyH1xb@cluster.hcgs4bn.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function main() {
  await client.connect();
}

async function run() {
  try {
    const db = client.db('cu-supplies');
    const sellers = db.collection('sellers');

    let sellerDocument = {
      "name": "Michael Clarkson",
      "email": "michael.clarkson@cornell.edu",
      "products": ["iClicker", "camels"]
    }

    let mathDoc = {
      "name": "Alex Townsend",
      "email": "alex.townsend@cornell.edu",
      "products": ["ice cream", "sponge", "banana"]
    }

    const filter = { "name": "Michael Clarkson" };
    const filter2 = { "name": "Alex Townsend" };
    const document = await sellers.findOne(filter);
    const doc2 = await sellers.findOne(filter2);
    if (document == null) {
      await sellers.insertOne(sellerDocument)
    }
    if (doc2 == null) {
      await sellers.insertOne(mathDoc)
    }

    const sellerList = await sellers.find().toArray();

    app.get('/seller', (req, res) => {
      try {
        res.send(JSON.stringify(sellerList))
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
    })

    app.get('/seller/clarkson', (req, res) => {
      res.send(JSON.stringify(document));
    });

    await main();

  } catch (err) {
    console.log(err.stack);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/update', (req, res) => {
  res.send('update!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})