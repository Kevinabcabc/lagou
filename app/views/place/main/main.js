$('.content').on('tap','p',function(){
    // console.log(this);
    var userJobInfo =  JSON.parse(localStorage.getItem('userJobInfo'));
    userJobInfo[1] = $(this).text();
    
    localStorage.setItem('userJobInfo',JSON.stringify(userJobInfo));
    window.open('/edit','_self');
});

createCityBar();