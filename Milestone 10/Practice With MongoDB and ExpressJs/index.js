const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const uri =
  "mongodb+srv://EmonHossainHira:qa4X8leDii6j3BGS@practice-mongodb-setup.mu1mkzo.mongodb.net/?appName=Practice-MongoDB-Setup";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection

    const myDB = client.db("myUsers");
    const myColl = myDB.collection("users");

    // All API HERE

    app.get("/users", async (req, res) => {
      const cursor = myColl.find();
      const allValues = await cursor.toArray();
      res.send(allValues);
    });

    app.post("/users", async (req, res) => {
      const newusers = req.body;
      const result = await myColl.insertOne(newusers);
      res.send(result);
    });

    app.delete("/users",async(req,res)=>{
      const id = req.query
    })

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

// const users = [
//   { id: 1, name: "Emon Hossain Hira", email: "emonhossainhira231@gmail.com" },
//   { id: 2, name: "Emon Hossain Hira", email: "emonhossainhira211@gmail.com" },
//   { id: 3, name: "Emon Hossain Hira", email: "emonhossainhira131@gmail.com" },
//   { id: 4, name: "Didar Hossain Piyas", email: "emonhossainhira131@gmail.com" },
// ];

// app.get("/users", (req, res) => {
//   res.send(users);
// });

// app.post("/users", (req, res) => {
//   console.log("After Post Method", req.body);
//   const newusers = req.body;
//   newusers.id = users.length + 1;
//   users.push(newusers);
//   res.send(newusers);
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
