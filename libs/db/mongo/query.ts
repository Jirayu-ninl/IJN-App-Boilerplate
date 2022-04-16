class MongoQuery {
  DB: any
  constructor(collection: any) {
    this.DB = collection
  }
  find = (query, populate) => {
    let result = this.DB.findOne(query)
    if (populate) result = result.populate(populate)
    return result
  }

  findManyAndPopulate = (query, populate, skip, limit) => {
    if (!skip) skip = 0
    if (!limit) limit = 1000

    let result = this.DB.find(query)
      .limit(limit)
      .skip(skip * limit)

    if (populate) result = result.populate(populate)
    return result
  }

  create = (data) => {
    const collection = new this.DB(data)

    return collection.save()
  }

  update = (collection, data) => {
    const { name } = data
    const current = collection

    if (name) current.name = name

    return collection.save()
  }

  deleteObj = (collection) => collection.deleteOne()

  wrap = (collection) => {
    if (collection === null) return {}
    const { _id, name, user } = collection
    return { _id, name, user }
  }
}

export default MongoQuery
