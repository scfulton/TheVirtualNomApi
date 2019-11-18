const MongoClient = require("mongodb").MongoClient;
var json = require("./queryResult.json");
require("dotenv").config();
const mongodb_key = process.env.MONGODB_KEY; //contains the username and password for mongodb atlas connection

const uri = `mongodb+srv://${mongodb_key}@virtualnom-cluster-sqmcw.mongodb.net/test?retryWrites=true&w=majority`; //use for connecting to cloud server for mongodb

//const uri = 'mongodb://localhost:27017/<database name>'; use this for local dev...might be best for quick testing so we dont connect too often to cloud server (replace <database name> with actual name)

const userName = "Test1"; //we will get this from else where (used for testing)
const password = "securePswd"; //we will get this from else where (used for testing)

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

client.connect(err => {
  const collection = client.db("VNOM-DB").collection("Users");
  // perform actions on the collection object
  console.log("connected...");
  console.log(collection.collectionName.toString());

  //collection.insertOne(json);
  collection.insertOne({
    username: userName,
    password: password,
    qResult: json
  });

  console.error(err);
  client.close();
});
