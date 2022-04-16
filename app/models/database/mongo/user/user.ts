import db from '@libs/db'

const DB = new db.mongo(process.env.MONGODB_URI)
DB.dbConnect()
const Mongo = DB.useMongo

const Credential_Schema = new Mongo.Schema({
  email: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: false,
  },
})

const User_Schema = new Mongo.Schema(
  {
    userID: {
      type: String,
      required: true,
      unique: true,
    },
    date: { type: Date, default: Date.now },
    name: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    provider: {
      type: String,
      required: false,
    },
    credential: Credential_Schema,
    image: {
      type: String,
      required: false,
    },
    account: {
      required: false,
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
    emailVerified: {
      required: false,
    },
  },
  { strict: false }
)

const User = Mongo.models.User || Mongo.model('User', User_Schema)
export default User
