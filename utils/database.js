import { MongoClient } from 'mongodb'

const uri = process.env.DATABASE_URL
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
