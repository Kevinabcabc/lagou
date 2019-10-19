(function () {
    // let jobInfo = ['前端工程师','深圳','10k-15k','上市公司'];
    
    // localStorage.setItem('userJobInfo',JSON.stringify(jobInfo));

    $('.banner').on('tap', '#go-login-btn', function () {
        window.open('/login','_self');
    });

    $('.banner').on('tap', '#go-edit-btn', function () {
        window.open('/edit','_self');
    });

    var info = "10秒钟定制职位";
    var banerHtml ='';

    var jobStringArr = JSON.parse(localStorage.getItem('userJobInfo')) || '';
    
    var jobString = "";
    for(let i =0; i < jobStringArr.length ; i++){
        // console.log(jobStringArr[i]);
        jobString +=  jobStringArr[i] + "/";
    }
    jobString = jobString.substring(0,jobString.length-1);
    jobString = jobString || info;

    var logFlag = localStorage.getItem('userLogFlag');

    if (logFlag==='true') {
        banerHtml =  `
                    <span class="info-10s">${jobString}</span>
        <div class="go-login">
             <span id="go-edit-btn" ><span class="iconfont icon-bianji"></span> 编辑</span>
        </div>`
    } else {
        banerHtml = `
        <span class="info-10s">${info}</span>
            <div class="go-login">
            <span id="go-login-btn">去登陆</span>
        </div> `
    }

    $('.banner').html(banerHtml);
})();