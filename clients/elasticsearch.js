const Elasticsearch = require('@elastic/elasticsearch')

module.exports = new Elasticsearch.Client({  node: 'http://localhost:9200' })
