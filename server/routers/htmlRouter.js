const express =require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.redirect('/index');
});


router.get('/index',(req,res)=>{
    res.render('index');
});

router.get('/company',(req,res)=>{
    res.render('company');
});

router.get('/edit',(req,res)=>{
    res.render('edit');
});

router.get('/index',(req,res)=>{
    res.render('index');
});

router.get('/job',(req,res)=>{
    res.render('job');
});

router.get('/jobinfo',(req,res)=>{
    res.render('jobinfo');
});

router.get('/login',(req,res)=>{
    res.render('login');
});

router.get('/mine',(req,res)=>{
    res.render('mine');
});

router.get('/place',(req,res)=>{
    res.render('place');
});

router.get('/register',(req,res)=>{
    res.render('register');
});

router.get('/salary',(req,res)=>{
    res.render('salary');
});

router.get('/search',(req,res)=>{
    res.render('search');
});

router.get('/userinfo',(req,res)=>{
    res.render('userinfo');
});

router.get('/userinfo2',(req,res)=>{
    res.render('userinfo2');
});

router.get('/userintro',(req,res)=>{
    res.render('userintro');
});






module.exports = router;