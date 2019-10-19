(function () {

    $('.mainlist').on('tap','.item',function(){
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
        window.open('./jobinfo','_self');
        
   
    });
    // 发送ajax请求，请求首屏
    var params = {
        page: 1,
        count: 10
    }
    showLoading({top:'0.88rem',bottom:'0.49rem'});
    ajaxData(params,function (dom) {
        $('.list').html(dom);

        hideLoading();
    });
    function ajaxData(params,loadList) {

        $.ajax({
            url: HOME_JOBS_API,
            method: 'GET',
            data: params,
            success: function (data) {
                if (data.status === 0) {

                    console.log(data);
                    // 得到数据，构建首屏的dom
                    var dom = createListDOM(data.data);
                    // 设置dom
                    loadList(dom)

                } else {
                    alert('请求失败');
                }
            },
            fail: function (error) {
                alert('请求失败');
            }
        });

    };

    function createListDOM(data) {
        var tmpDOM = '';
        for (var i = 0, count = data.length; i < count; i++) {
            var item = data[i];

            tmpDOM += `
      <div class="item">
                <div class="companyPic">
                    <img src="${item.companyPic}" alt="" srcset="">
                </div>
    
                <div class="jobInfoBox">
                    <p class="company">${item.company}</p>
                    <p class="job">${item.job} [${item.city}]</p>
                    <p class="time">${item.publish}</p>
                </div>
    
                <div class="dalaryBox item-center">
                    <span>${item.minSalary}k-${item.maxSalary}k</span>
                </div>
            </div>`

        }
        return tmpDOM;
    };

    
    var scroll = new Scroll('.mainlist', {
        refreshData: function (refreshData) {

            scroll.setRefeshData(false);
            showLoading({top:'0.88rem',bottom:'0.49rem'});

            params.page = 1;
            ajaxData(params,function (dom) {
                
                    $('.list').html(dom);
                    refreshData();
                    
                    hideLoading();
                    scroll.setRefeshData(true);

            });


        },
        appendData: function (loadData) {
            
            scroll.setRefeshData(false);
            showLoading({top:'0.88rem',bottom:'0.49rem'});
            params.page++;
            ajaxData(params,function (dom) {
                
                    $('.list').append(dom);
                    loadData();
                    
                    hideLoading();
                    scroll.setRefeshData(true);

            });

        }
    });
})();