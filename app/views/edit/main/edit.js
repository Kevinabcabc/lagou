$('.footer').on('tap',function(){

    // localStorage.setItem('[1,2,3,4]')
    window.open('/index','_self');
});

var userJobInfo = JSON.parse(localStorage.getItem('userJobInfo'));

if(!userJobInfo){
    userJobInfo = ['产品经理','上海','10-15k','上市公司'];
}

$.each($('.item'),function(index,val){
    $(val).text(userJobInfo[index]);
    // console.log(val);
    
    
})


$('.job').on('tap',function(){
    window.open('/job','_self');
});

$('.place').on('tap',function(){
    window.open('/place','_self');
});

$('.salary').on('tap',function(){
    window.open('/salary','_self');
});

$('.company').on('tap',function(){
    window.open('/company','_self');
});

