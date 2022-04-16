import db from '@libs/db'

const DB = new db.mongo(process.env.MONGODB_URI)
DB.dbConnect()
const Mongo = DB.useMongo

const UserCredentials_Schema = new Mongo.Schema({
  userID: {
    type: String,
    required: true,
    unique: true,
  },
  date: { type: Date, default: Date.now },
  account: {
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  userRole: {
    type: String,
    required: true,
    default: 'user',
  },
  active: {
    type: Number,
    required: true,
    default: 1,
  },
})

const UserCredentials =
  Mongo.models.UserCredentials ||
  Mongo.model('UserCredentials', UserCredentials_Schema)
export default UserCredentials