const ElasticsearchClient = require('../clients/elasticsearch')

module.exports = {
  name: 'getPosts',
  method: async ({ q = '', limit, offset }) => {
    const response = await ElasticsearchClient.search({
      body: {
        query: {
          match: {
            published: true
          }
        }
      },
      from: offset,
      index: 'posts',
      size: limit
    })

    return { 
      results: response.body.hits.hits.map(h => h._source),
      offset: offset,
      limit: limit,
      total: response.body.hits.total.value,
    }
  },
  options: {
    cache: {
      dropOnError: false,
      staleIn: 30000, // 30 Seconds
      staleTimeout: 2000, // 2 Seconds
      expiresIn: 60000 * 60 * 24 * 30, // 30 Days
      generateTimeout: 5000, // 5 Seconds
      segment: 'posts'
    },
    generateKey: ({ q = '', limit, offset }) => `${q}-${limit}-${offset}`
  }
}
