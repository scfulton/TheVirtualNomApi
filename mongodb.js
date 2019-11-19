const MongoClient = require("mongodb").MongoClient;
var json = require("./queryResult.json");
require("dotenv").config();
const mongodb_key = process.env.MONGODB_KEY; //contains the username and password for mongodb atlas connection

const uri = `mongodb+srv://${mongodb_key}@virtualnom-cluster-sqmcw.mongodb.net/test?retryWrites=true&w=majority`; //use for connecting to cloud server for mongodb

//const uri = 'mongodb://localhost:27017/<database name>'; //use this for local dev...might be best for quick testing so we dont connect too often to cloud server (replace <database name> with actual name)

const userName = "Test1"; //we will get this from else where (used for testing)
const password = "securePswd"; //we will get this from else where (used for testing)

//This creates a new MongoClient
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true //both of these optional parameters are needed due to some deprecated code
});

//client.connect uses the URI and connects to whichever connection string we have assigned to the client.
client.connect(err => {
  //Here we are using .db("DatabaseName") to connect the the DB on Atlas (or local) and .collection("CollectionName") to connect to the collection we want.
  //it might be good to separate this collection call as a separate variable, incase we make more and what to utilize them.
  const collection = client.db("VNOM-DB").collection("Users");

  console.log("connected...");
  console.log(collection.collectionName.toString()); //logging the name of the collection to test if we have a connection and received the right collection

  //perform actions on the collection object
  //.insertOne({object}) will insert a new document into the collection
  collection.insertOne({
    username: userName,
    password: password,
    qResult: json //This is the query result of the search. We will need to generate it per user and pass in here.
  });

  console.error(err);

  client.close();
});
