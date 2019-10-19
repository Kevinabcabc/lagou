;
$('.content').hide();
createCityBar();

var userJobInfo =  JSON.parse(localStorage.getItem('userJobInfo'));
     $('.citySelect').html(userJobInfo[1] + '<b>></b>') ;

$('.citySelect').on('tap',function(){
    $('.content').show();
    var myScroll = new IScroll('.content');
});



$('.content').on('tap','p',function(){
    // console.log(this);
    var userJobInfo =  JSON.parse(localStorage.getItem('userJobInfo'));
    userJobInfo[1] = $(this).text();
    $('.citySelect').html(userJobInfo[1] + '<b>></b>') ;
    localStorage.setItem('userJobInfo',JSON.stringify(userJobInfo));
    // window.open('./search.html','_self');

    $('.content').hide();
});






$('.search').on('tap',function(){
    
    if($('.city').val()){
        searchList(function(dom){
            $('.listWrap').html(dom);
            $('.loadMore').remove();

            var load = `
            <div class="loadMore item-center">
            点击加载更多
        </div>
            `
            $('.listWrap').append(load);
        });
    }

});

$('.mainlist').on('tap','.loadMore',function(){
    // console.log(1);
    searchList(function(dom){
        $('.loadMore').remove();
        $('.listWrap').append(dom);

        var load = `
        <div class="loadMore item-center">
        点击加载更多
    </div>
        `
        $('.listWrap').append(load);
    });
});


$('.mainlist').on('tap','.item',function(){
    // console.log(1);

    console.log(this);
    var pic = $(this).find('.companyPic img')[0].src;
    var companyName = $(this).find('.company').text();
    var jobAndCity = $(this).find('.job').text();
    var jobName = jobAndCity.split('[')[0];
    var jobCity = jobAndCity.split('[')[1].substring(0,jobAndCity.split('[')[1].length-1);
    var time = $(this).find('.time').text();
    var dalary = $(this).find('.dalaryBox span').text();
    console.log(pic);
    console.log(companyName);
    console.log(jobName);
    console.log(jobCity);
    console.log(time);
    console.log(dalary);

    var jobDetail = {pic,companyName,jobAndCity,jobName,jobCity,time,dalary }
    localStorage.setItem('jobDetail',JSON.stringify(jobDetail));
   
    window.open('jobinfo','_self');
});