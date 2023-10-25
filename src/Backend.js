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
    const database = client.db('sample_mflix');
    const movies = database.collection('movies');
    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await movies.findOne(query);
    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })