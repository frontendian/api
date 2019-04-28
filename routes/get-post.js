const Boom = require('@hapi/boom')
const Elasticsearch = require('@elastic/elasticsearch')

module.exports = {
  method: 'GET',
  path: '/posts/{id}',
  handler: async ({ params, server }) => {
    try {
      return await server.methods.getPost(params.id) 
    } catch (err) {
      if (err instanceof Elasticsearch.errors.ResponseError) {
        if (err.statusCode === 404) throw Boom.notFound()
      } 

      throw Boom.badImplementation(err)
    }
  }
}
