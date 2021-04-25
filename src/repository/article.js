const { v4: uuidv4 } = require('uuid');
const AWS = require('aws-sdk')

const ARTICLES_TABLE = 'articles'
const dynamoDb = new AWS.DynamoDB.DocumentClient()

const create = async article => {
    const articleId = uuidv4()
    const newArticle = {
        articleId,
        ...article
    }

    const params = {
        TableName: ARTICLES_TABLE,
        Item: newArticle
    }

    await dynamoDb.put(params).promise()

    return newArticle
}

const get = async articleId => {
    const params = {
        TableName: ARTICLES_TABLE,
        Key: {
            articleId
        }
    }

    const result = await dynamoDb.get(params).promise()

    let a = 0

    for(let i = 1; i < 100000; i++) {
      a = a + i
    }
    console.log(a)

    return result.Item
}

module.exports = {
    create,
    get
}
