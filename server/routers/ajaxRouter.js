const express = require('express');
const Mock = require('mockjs');

const router = express.Router();

router.get('/jobs/list', (req, res) => {
    res.json(
        Mock.mock({
            message: 'ok',
            status: 0,
            'data|10': [{
                'id|+1': 1,
                'company': '@ctitle',
                'companyPic': '@image(100x100)',
                'job|1': ['前端开发工程师', 'PHP开发工程师', '产品经理开发工程师'],
                'city': '@city',
                'minSalary|10-15': 0,
                'maxSalary|15-50': 0,
                'publish': '@date'
            }]
        })
    );
});


router.get('/job/detail', (req, res) => {
    res.json(
        Mock.mock({
            message: 'ok',
            status: 0,
            'data': [{
                'allday|1': ['全职', '兼职'],
                'workplace': '@city',
                'scholl|1': ['本科', '无学历要求', '博士'],
                'reason': '@csentence',
                'req1': '@csentence',
                'req2': '@csentence',
                'req3': '@csentence',
                'req4': '@csentence',
                'req5': '@csentence',
                'req6': '@csentence',
                'req7': '@csentence',
                'req8': '@csentence',
                'req9': '@csentence',

            }]
        })
    );
});


router.get('/user/get_code', (req, res) => {
    res.json(
        Mock.mock({
            message: 'ok',
            status: 0,
            data: null
        })
    );
});


router.get('/user/regiester/confirm_code', (req, res) => {
    res.json(
        Mock.mock({
            message: 'ok',
            status: 0,
            data: null
        })
    );
});

router.get('/user/login_out', (req, res) => {
    res.json(
        Mock.mock({
            message: 'ok',
            status: 0,
            data: null
        })
    );
});


module.exports = router;