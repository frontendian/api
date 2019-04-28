const Hapi = require('@hapi/hapi')

const initialize = async () => { 
  const server = Hapi.server({
    port: process.env.PORT || 8000,
    cache: require('@hapi/catbox-redis')
  })

  await server.register(require('@hapi/basic'))

  server.auth.strategy('simple', 'basic', require('./auth/simple'))

  server.method(require('./methods/get-post'))
  server.method(require('./methods/get-posts'))

  server.route(require('./routes/get-post.js'))
  server.route(require('./routes/get-posts'))
  server.route(require('./routes/put-post'))

  await server.start() 
}

initialize()
