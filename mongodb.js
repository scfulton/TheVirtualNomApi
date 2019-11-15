const MongoClient = require("mongodb").MongoClient;
var json = require("./queryResult.json");

const uri =
  "mongodb+srv://Trevis42:Uy8q7l%21Uavu%5EgOOB@virtualnom-cluster-sqmcw.mongodb.net/test?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

client.connect(err => {
  const collection = client.db("VNOM-DB").collection("Users");
  // perform actions on the collection object
  console.log("connected...");
  console.log(collection.collectionName.toString());
  console.log(json);

  collection.insertOne(json);
  client.close();
});
