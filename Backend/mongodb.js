const { MongoClient, ObjectId } = require('mongodb')

const connectionUrl = 'mongodb://localhost:27017'
const dbName = 'store'

let db

const init = () =>
  MongoClient.connect(connectionUrl, { useNewUrlParser: true }).then((client) => {
    db = client.db(dbName)
  })

const insertItem = (item) => {
  const collection = db.collection('items')
  return collection.insertOne(item)
}

const getItems = () => {
  const collection = db.collection('items')
  return collection.find({}).toArray()
}

const updateQuantity = (id, quantity) => {
  const collection = db.collection('items')
  return collection.updateOne({ _id: ObjectId(id) }, { $inc: { quantity } })
}



const HapiSwagger = require('hapi-swagger');

const port = process.env.PORT || 3000;
const server = new Hapi.Server({
  port,
  routes: {
    cors: {
      origin: ['*'],
    },
  },
});

(async () => {
  const host = process.env.MONGO_URL || 'localhost';
  const connectionString = `mongodb://${host}/heroes`;
  const connection = await MongoClient.connect(connectionString, {
    useNewUrlParser: true,
  });
  console.log('mongo db is running');


module.exports = { init, insertItem, getItems, updateQuantity }