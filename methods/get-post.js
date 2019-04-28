const ElasticsearchClient = require('../clients/elasticsearch')

module.exports = {
  name: 'getPost',
  method: async (id) => {
    const response = await ElasticsearchClient.get({
      id,
      index: 'posts'
    })
  
    return response.body._source
  },
  options: {
    cache: {
      dropOnError: false,
      staleIn: 30000, // 30 Seconds
      staleTimeout: 2000, // 2 Seconds
      expiresIn: 60000 * 60 * 24 * 30, // 30 Days
      generateTimeout: 5000, // 5 Seconds
      segment: 'post'
    },
    generateKey: (id) => id
  }
}
