const Mock = require('mockjs');
const url = require('url');

let map = {
  '/api/jobs/list'(response){
    let obj = Mock.mock({
      message: 'ok',
      status: 0,
      'data|10': [
        {
          'id|+1': 1,
           'company': '@ctitle',
           'companyPic': '@image(100x100)',
           'job|1': ['前端开发工程师', 'PHP开发工程师', '产品经理开发工程师'],
           'city': '@city',
           'minSalary|10-15': 0, 
           'maxSalary|15-50': 0, 
           'publish': '@date'
        }
      ]
    });
    let result = JSON.stringify(obj);

    response.setHeader('Content-Type', 'application/json; charset=utf-8');
    response.end(result);

  },
  '/api/job/detail'(response){
    let obj = Mock.mock({
      message: 'ok',
      status: 0,
      'data': [
        {
           'allday|1': ['全职','兼职'],
           'workplace':'@city',
           'scholl|1':['本科','无学历要求','博士'],
            'reason':'@csentence',
            'req1':'@csentence',
            'req2':'@csentence',
            'req3':'@csentence',
            'req4':'@csentence',
            'req5':'@csentence',
            'req6':'@csentence',
            'req7':'@csentence',
            'req8':'@csentence',
            'req9':'@csentence',
           
        }
      ]
    });
    let result = JSON.stringify(obj);

    response.setHeader('Content-Type', 'application/json; charset=utf-8');
    response.end(result);

  },
  '/api/user/get_code'(response){
    const result = {
      message: 'ok',
      status: 0,
      data: null
    };
    response.setHeader('Content-Type', 'application/json; charset=utf-8');
    response.end(JSON.stringify(result));
  },
  '/api/user/regiester/confirm_code'(response){
    const result = {
      message: 'ok',
      status: 0,
      data: null
    };
    response.setHeader('Content-Type', 'application/json; charset=utf-8');
    response.end(JSON.stringify(result));
  },
  '/api/user/login_out'(response){
    const result = {
      message: 'ok',
      status: 0,
      data: null
    };
    response.setHeader('Content-Type', 'application/json; charset=utf-8');
    response.end(JSON.stringify(result));
  }

}


function mockDataMiddleware(request, response, next){

  // 解析请求的url路径，取得请求url中的pathname
  // let {pathname} = url.parse(request.url);
  let result = url.parse(request.url, true);

  let {pathname, query} = result;

  // console.log(query);
  
  // 判断请求是否是需要拦截请求
  map[pathname] ? map[pathname](response) : next();
  
}

// 向外输出
module.exports = mockDataMiddleware;