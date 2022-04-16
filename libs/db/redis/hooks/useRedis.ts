import RedisDB from 'redis'
import { app as serverConfig } from '@config'

const Redis: any = new Object()
const defaultParam: any = new Object()

defaultParam.Expiration = 3600

Redis.client = RedisDB.createClient()
Redis.set = (name, data, exp = defaultParam.Expiration) =>
  Redis.client.setex(`${serverConfig.NAME}_${name}`, exp, JSON.stringify(data))

Redis.get = (name) =>
  Redis.client.get(`${serverConfig.NAME}_${name}`, async (error, data) => {
    if (error) console.error(error)
    if (data != null) {
      return res.json(JSON.parse(data))
    }
  })

Redis.use = (name, callback, exp = defaultParam.Expiration) => {
  return new Promise((resolve, reject) => {
    Redis.client.get(`${serverConfig.NAME}_${name}`, async (error, data) => {
      if (error) return reject(error)
      if (data != null) return resolve(JSON.parse(data))
      const resData = await callback()
      Redis.client.setex(
        `${serverConfig.NAME}_${name}`,
        exp,
        JSON.stringify(resData)
      )
      resolve(resData)
    })
  })
}

export default Redis
