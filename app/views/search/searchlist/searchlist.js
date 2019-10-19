;function searchList(cb){
    var params = {
        city:$('.citySelect').text()
    }
    $.ajax({
        // url:SEARCH_API,
        url: HOME_JOBS_API,
        method:'GET',
        data:params,
        success:function(data){
            if(data.status === 0){
               cb(createListDOM(data.data));
                
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