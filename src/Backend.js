const express = require('express')
const app = express()
const port = 3000

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://jacquelinecai2004:yg4g30UcP6fyH1xb@cluster.hcgs4bn.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function main() {
  // we'll add code here soon
}

async function run() {
  try {
    // const database = client.db('sample_mflix');
    // const movies = database.collection('comments');
    // // Query for a comment that has the name 'Taylor Scott'
    // const query = { name: 'Taylor Scott' };
    // const movie = await movies.findOne(query);
    // console.log(movie);

    const db = client.db('cu-supplies');
    const sellers = db.collection('sellers');

    let sellerDocument = {
      "name": "Michael Clarkson",
      "email": "michael.clarkson@cornell.edu",
      "products": ["iClicker", "camels"]
    }

    const p = await sellers.insertOne(sellerDocument);

    const filter = { "name": "Michael Clarkson" };
    const document = await sellers.findOne(filter);
    console.log(document);

    // app.get('/seller', (req, res) => {
    //   res.send(sellers.find())
    // })

    app.get('/seller/clarkson', (req, res) => {
      res.send(JSON.stringify(document))
    })

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