ajaxData(function (data) {
    console.log(data);
    var userinfo = JSON.parse(localStorage.getItem('jobDetail'));
    console.log(userinfo);
    var htmlmode = `
    <div class="jobAndLike item-center">
    <p class="item-center">${userinfo.jobName}</p>
    <div class="like">
        <p>★</p>
        <span>已收藏</span>
    </div>
</div>

<div class="jobinfo">

    <span>${userinfo.dalary}</span>
    <span>${userinfo.jobCity}</span>
    <span>${data.allday}</span>
    <span>${data.workplace}</span>
    <span>${data.scholl}</span>

    <p>${data.reason}</p>


</div>


<div class="company">

    <div class="companyPic">
        <img src="${userinfo.pic}" alt="">
    </div>

    <div class="companyBox">
        <h3>${userinfo.companyName}</h3>
        <p><span>移动互联网</span>/<span>天使论</span>/<span>150-500人</span></p>
    </div>

</div>

<div class="jobIntroHead">职位描述</div>
<div class="jobIntroContent">
    <p>职位描述：</p>
    <p>1、${data.req1}&nbsp;</p>
    <p>2、${data.req2}&nbsp;</p>
    <p>3、${data.req3}&nbsp;</p>
    <p>4、${data.req4}&nbsp;</p>
    <p>岗位要求：&nbsp;</p>
    <p>1、${data.req5}&nbsp;</p>
    <p>2、${data.req6}</p>
    <p>3、${data.req7}</p>
</div>
    
    
    `;
    $('.wrap').html(htmlmode);

    setTimeout(function(){
        var myScroll = new IScroll('.content');

    },500);

});

function ajaxData(cb) {
    $.ajax({
        url: JOB_DETAIL_API,
        method: 'GET',
        // data: params,
        success: function (data) {
            if (data.status === 0) {

                // console.log(data);
                cb(data.data[0]);
                // 得到数据，构建首屏的dom
                // cb(data);

            } else {
                alert('请求失败');
            }
        },
        fail: function (error) {
            alert('请求失败');
        }
    });
};