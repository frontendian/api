const PostSchema = require('../schemas/post')

module.exports = {
  method: 'PUT',
  path: '/posts/{id}',
  options: {
    auth: { 
      strategy: 'simple' 
    },
    validate: { 
      payload: PostSchema
    }
  },
  handler: async () => { throw Boom.notImplemented() }
}
