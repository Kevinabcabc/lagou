$('.content').on('tap','p',function(){
    // console.log(this);
    var userJobInfo =  JSON.parse(localStorage.getItem('userJobInfo'));
    if(!userJobInfo){
        userJobInfo = ['产品经理','上海','10-15k','上市公司'];
    }
    userJobInfo[0] = $(this).text();
    
    localStorage.setItem('userJobInfo',JSON.stringify(userJobInfo));
    window.open('/edit','_self');
})