const Boom = require('@hapi/boom')
const Joi = require('@hapi/joi')

module.exports = {
  method: 'GET',
  path: '/posts',
  options: {
    validate: {
      query: Joi.object({
        q: Joi.string().max(100),
        limit: Joi.number().integer().min(1).max(100).default(10),
        offset: Joi.number().integer().positive().default(0)
      }).options({ stripUnknown: true })
    }
  },
  handler: async ({ query, server }) => {
    try {
      return await server.methods.getPosts(query) 
    } catch (err) {
      throw Boom.badImplementation(err)
    }
  }
}
