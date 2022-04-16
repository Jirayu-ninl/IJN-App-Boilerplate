import db from '@libs/db'

const DB = new db.mongo(process.env.MONGODB_URI)
DB.dbConnect()
const Mongo = DB.useMongo

const Profile_Schema = new Mongo.Schema(
  {
    userID: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      maxlength: [20, 'First name cannot be more than 20 characters'],
    },
    lastName: {
      type: String,
      maxlength: [20, 'Last name cannot be more than 20 characters'],
    },
    about: {
      type: String,
      maxlength: [200, 'About cannot be more than 200 characters'],
    },
  },
  { strict: false }
)

const Profile = Mongo.models.Profile || Mongo.model('Profile', Profile_Schema)
export default Profile
