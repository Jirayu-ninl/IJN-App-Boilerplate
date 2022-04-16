import { v4 as uuidv4 } from 'uuid'
import { User, Profile } from '@models/database/mongo'

const SignIn_Provider = async (user, account) => {
  const isAllowedToSignIn = true
  if (isAllowedToSignIn) {
    try {
      if (user.provider === 'credentials') {
        user.email = user.credential.email
        return user
      } else {
        const email = user.email
        const Req_User = await User.findOne({
          provider: account.provider,
          email: email,
        })
        if (Req_User) {
          return true
        } else {
          const generatedUserId = uuidv4()
          account.userID = generatedUserId
          account.email = email
          user.userID = generatedUserId
          user.provider = account.provider
          user.userRole = 'standard'
          user.active = 1
          user.date = Date.now()
          const userProfile = {
            userID: generatedUserId,
          }
          await linkAccount(user, account)
          await Profile.create(userProfile)
          return true
        }
      }
    } catch (error) {
      console.log(error)
    }
  } else {
    return false
  }
}

const linkAccount = (user, account) => {
  user.account = {
    ...user.account,
    [account.provider]: {
      email: account.email,
      providerAccountId: account.providerAccountId,
    },
  }
  return user
}

export default SignIn_Provider
