import Mock from 'mockjs'

const mock = Mock.mock(/\/lists/, 'get', (options) => {
    const url = options.url

    // https://www.regex-tutorial.com/urlParameter.html
    const pageRegex = new RegExp("[?&]page=([^&]+).*$");
    const numRegex = new RegExp("[?&]num=([^&]+).*$");

    const page = url.match(pageRegex)[1]
    const num = url.match(numRegex)[1]

    // index start from 1.
    const startTid = (num - 1) * page + 1

    let mockingData = `{
      "status": 0,
      "data|${num}": [
        {
          "tid|+1": ${startTid},
          "title": "@title",
          "catalog": "@word()",
          "fav": "@integer(10000,99999)",
          "created": "@integer()",
          "isEnd": "@integer(0,1)",
          "answer": "@integer(0,100)",
          "user": {
            "avatar": "@image()",
            "name": "@name",
            "isVip": "@integer(0,1)",
            "level": "@integer(0,99)"
          }
        }
      ],
      "msg": "返回Mock数据"
    }`

    return Mock.mock(JSON.parse(mockingData))
})

export default mock