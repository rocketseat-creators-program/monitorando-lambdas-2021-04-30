const AWSXRay = require('aws-xray-sdk-core')
const AWS = AWSXRay.captureAWS(require('aws-sdk'))

const articleRepository = require('./repository/article')

const create = async event => {
  const article = JSON.parse(event.body)
  const result = await articleRepository.create(article)
  return {
    statusCode: 200,
    body: JSON.stringify(result),
  }
}

const get = async event => {
  const sns = new AWS.SNS()
  const { id } = event.pathParameters

  const result = await articleRepository.get(id)

  await sns.publish({
    Message: JSON.stringify(result),
    TopicArn: process.env.CF_ArticleRequestedTopic,
  }).promise()

  return {
    statusCode: 200,
    body: JSON.stringify(result),
  }
}

module.exports = {
  create,
  get,
}
