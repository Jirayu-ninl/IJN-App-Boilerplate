import { NextApiRequest, NextApiResponse } from 'next'
import { v4 as uuidv4 } from 'uuid'
import bcrypt from 'bcrypt'
import { User, Profile } from '@models/database/mongo'
import Res from '@libs/utils/res/status'

const Auth = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req
  const setRes = new Res(res)
  switch (method) {
  case 'POST':
    try {
      const { cookies } = req
      if (
        cookies.tempToken.length === 32 &&
          req.body.token === cookies.tempToken
      ) {
        switch (req.body.type) {
        case 'signup':
          try {
            const { email, password } = req.body
            const existingEmail = await User.findOne({
              credential: { email: email },
            })
            if (existingEmail) {
              return setRes.success({
                msg: 'User already exists. Please login',
              })
            }
            const generatedUserId = uuidv4()
            const hashedPassword = await bcrypt.hash(password, 10)
            const user = {
              userID: generatedUserId,
              name: email.toLowerCase(),
              image: '/user/default/profile.png',
              provider: 'credentials',
              credential: {
                email: email.toLowerCase(),
                password: hashedPassword,
              },
              account: {},
              userRole: 'standard',
              active: 1,
            }
            await User.create(user)
            const userProfile = {
              userID: generatedUserId,
            }
            await Profile.create(userProfile)
            return setRes.created({
              userID: generatedUserId,
              email: email.toLowerCase(),
              msg: 'Sign up successfully',
              // user: addUser,
            })
          } catch (error) {
            return setRes.internalError({ msg: 'Can\'t process database' })
          }
          break
        case 'signin':
          try {
            const { email, password } = req.body
            const thisUser = await User.findOne({ email })
            const correctPassword = await bcrypt.compare(
              password,
              thisUser.password
            )
            if (thisUser && correctPassword) {
              return setRes.accepted({
                success: true,
                password: 'match',
                userID: thisUser.userID,
                email: email.toLowerCase(),
                userRole: thisUser.userRole,
              })
            }
            return setRes.badRequest({ msg: 'Invalid Credentials' })
          } catch (error) {
            return setRes.internalError({ msg: 'Can\'t process database' })
          }
          break
        default:
          return setRes.notFound({ msg: 'Invalid Type' })
          break
        }
      } else {
        return setRes.unauthorized({ msg: 'Invalid Token' })
      }
    } catch (error) {
      return setRes.invalidHeader({ msg: 'Invalid Header' })
    }
    break
  default:
    return setRes.invalidMethod({ msg: 'Invalid method' })
    break
  }
}

export default Auth
