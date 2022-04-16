import { NextApiResponse } from 'next'

export const RES = {
  success: 200,
  created: 201,
  accepted: 202,
  noContent: 204,
  movedPermanently: 301,
  temporaryRedirect: 307,
  permanentRedirect: 308,
  badRequest: 400,
  unauthorized: 401,
  blocked: 403,
  notFound: 404,
  invalidMethod: 405,
  requestTimeout: 408,
  conflict: 409,
  invalidHeader: 412,
  unprocessableEntity: 422,
  tooManyRequestsHeader: 429,
  internalError: 500,
  serverError: 503,
}

export default class Res {
  res: NextApiResponse
  initialData: any
  constructor(res: NextApiResponse, initialData: any = {}) {
    this.res = res
    this.initialData = initialData
  }
  success(data = {}) {
    return this.res
      .status(RES.success)
      .json({ success: true, status: 'success', ...data, ...this.initialData })
  }

  created(data = {}) {
    return this.res
      .status(RES.created)
      .json({ success: true, status: 'success', ...data, ...this.initialData })
  }

  accepted(data = {}) {
    return this.res
      .status(RES.accepted)
      .json({ success: true, status: 'accepted', ...data, ...this.initialData })
  }

  noContent(data = {}) {
    return this.res
      .status(RES.noContent)
      .json({
        success: false,
        status: 'no content',
        ...data,
        ...this.initialData,
      })
  }

  movedPermanently(data = {}) {
    return this.res.status(RES.movedPermanently).json({
      success: false,
      status: 'moved permanently',
      ...data,
      ...this.initialData,
    })
  }

  temporaryRedirect(data = {}) {
    return this.res.status(RES.temporaryRedirect).json({
      success: false,
      status: 'temporary redirect',
      ...data,
      ...this.initialData,
    })
  }

  permanentRedirect(data = {}) {
    return this.res.status(RES.permanentRedirect).json({
      success: false,
      status: 'permanent redirect',
      ...data,
      ...this.initialData,
    })
  }

  badRequest(data = {}) {
    return this.res
      .status(RES.badRequest)
      .json({
        success: false,
        status: 'bad request',
        ...data,
        ...this.initialData,
      })
  }

  unauthorized(data = {}) {
    return this.res
      .status(RES.unauthorized)
      .json({
        success: false,
        status: 'unauthorized',
        ...data,
        ...this.initialData,
      })
  }

  blocked(data = {}) {
    return this.res
      .status(RES.blocked)
      .json({ success: false, status: 'blocked', ...data, ...this.initialData })
  }

  notFound(data = {}) {
    return this.res
      .status(RES.notFound)
      .json({
        success: false,
        status: 'not found',
        ...data,
        ...this.initialData,
      })
  }

  invalidMethod(data = {}) {
    return this.res.status(RES.invalidMethod).json({
      success: false,
      status: 'invalid method',
      ...data,
      ...this.initialData,
    })
  }

  requestTimeout(data = {}) {
    return this.res.status(RES.requestTimeout).json({
      success: false,
      status: 'request timeout',
      ...data,
      ...this.initialData,
    })
  }

  conflict(data = {}) {
    return this.res
      .status(RES.conflict)
      .json({
        success: false,
        status: 'conflict',
        ...data,
        ...this.initialData,
      })
  }

  invalidHeader(data = {}) {
    return this.res.status(RES.invalidHeader).json({
      success: false,
      status: 'invalid header',
      ...data,
      ...this.initialData,
    })
  }

  unprocessableEntity(data = {}) {
    return this.res.status(RES.unprocessableEntity).json({
      success: false,
      status: 'unprocessable entity',
      ...data,
      ...this.initialData,
    })
  }

  tooManyRequestsHeader(data = {}) {
    return this.res.status(RES.tooManyRequestsHeader).json({
      success: false,
      status: 'too many requests',
      ...data,
      ...this.initialData,
    })
  }

  internalError(data = {}) {
    return this.res.status(RES.internalError).json({
      success: false,
      status: 'internal server error',
      ...data,
      ...this.initialData,
    })
  }

  serverError(data = {}) {
    return this.res
      .status(RES.serverError)
      .json({
        success: false,
        status: 'server error',
        ...data,
        ...this.initialData,
      })
  }
}
