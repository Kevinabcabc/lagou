"use strict";var HOST="http://106.15.251.171:3000",HOME_JOBS_API=HOST+"/api/jobs/list",JOB_DETAIL_API=HOST+"/api/jobs/detail",SEND_CODE_API=HOST+"/api/user/get_code",REGIESTER_API=HOST+"/api/user/regiester/confirm_code",LOGOUT_API=HOST+"/api/user/login_out",SEARCH_API=HOST+"/api/user/search";JOB_DETAIL_API=HOST+"/api/job/detail";function Scroll(n,a){a=a||{},this.setRefeshData=function(n){a.refeshDataFlag=n},this.appendData=function(n){a.appendDataFlag=n};var t=new IScroll(n,Object.assign(a,{probeType:3,refeshDataFlag:!0,appendDataFlag:!0}));t.scrollTo(0,-50*window.devicePixelRatio,0);var o=document.querySelector(".refresh img"),e=document.querySelector(".refresh span"),i=document.querySelector(".loadmore img"),s=document.querySelector(".loadmore span");t.on("beforeScrollStart",function(){t.refresh()}),t.on("scroll",function(){0<=t.y?(o.className="active",e.innerText="释放立即刷新..."):(o.className="",e.innerText="下拉可以刷新...")}),t.on("scrollEnd",function(){0<=t.y?(o.src="/public/assets/loading.gif",e.innerText="正在刷新...",a.refeshDataFlag&&a.refreshData&&a.refreshData(function(){t.refresh(),o.src="/public/assets/arrow.jpg",e.innerText="下拉可以刷新...",t.scrollTo(0,-50*window.devicePixelRatio,300)})):-50<t.y&&t.y<0&&t.scrollTo(0,-50*window.devicePixelRatio,300)}),t.on("scroll",function(){var n=t.maxScrollY;t.y<=n?(i.className="active",s.innerText="释放立即加载更多..."):(i.className="",s.innerText="上拉可以加载更多...")}),t.on("scrollEnd",function(){var n=t.maxScrollY,o=n+50*window.devicePixelRatio,e=t.y;o<=e||(e<o&&n<e?t.scrollTo(0,o,300):e<=n&&(i.src="/public/assets/loading.gif",s.innerText="正在加载中...",a.appendDataFlag&&a.appendData&&a.appendData(function(){t.refresh(),i.src="/public/assets/arrow.jpg",s.innerText="上拉可以加载更多..."})))})}function showLoading(n){var o=(n=n||{}).top||0,e=n.bottom||0,a='\n    <div id ="loading" class="loading">\n        <div class="cover" style="top:'.concat(o,";bottom:").concat(e,'"></div>\n        <div class="loading-panel">\n            <img src="/public/assets/loading.gif" alt="" srcset="">\n            <span>加载中</span>\n        </div>\n    </div>\n    ');$("body").append(a)}function hideLoading(){$("#loading").remove()}function register(n,o,e){$.ajax({url:REGIESTER_API,method:"POST",data:{tel:n,code:o},success:function(n){0===n.status&&(console.log("注册成功"),e())},fail:function(n){console.log(n)}})}function logout(o){$.ajax({url:LOGOUT_API,method:"GET",success:function(n){0===n.status?(console.log("退出成功"),o()):console.log("退出请求失败")},fail:function(n){console.log("退出请求失败")}})}function sendCode(n,o){$.ajax({url:SEND_CODE_API,method:"GET",data:{tel:n},success:function(n){console.log(n),0===n.status?(console.log("成功"),o()):console.log("请求失败")},fail:function(n){console.log("请求失败")}})}!function(n){for(var o=window.location.href.split("/"),e=o[o.length-1].split(".")[0],a="",t=0;t<n.length;t++){var i='\n        <a href="{{a}}" class="iconfont {{icon}} {{active}}">{{content}}</a>\n        '.replace(/{{a}}/,n[t].a);a+=i=(i=(i=i.replace(/{{icon}}/,n[t].icon)).replace(/{{content}}/,n[t].content)).replace(/{{active}}/,e===n[t].id?"active":"")}$(".footer").append(a)}([{id:"index",a:"/index",icon:"icon-home",content:"职位"},{id:"search",a:"/search",icon:"icon-sousuo",content:"搜索"},{id:"mine",a:"/mine",icon:"icon-wode",content:"我的"}]),$(".go-back").on("tap",function(){history.back()}),$(".go-home").on("tap",function(){window.open("/index","_self")}),function(){$(".banner").on("tap","#go-login-btn",function(){window.open("/login","_self")}),$(".banner").on("tap","#go-edit-btn",function(){window.open("/edit","_self")});for(var n="10秒钟定制职位",o="",e=JSON.parse(localStorage.getItem("userJobInfo"))||"",a="",t=0;t<e.length;t++)a+=e[t]+"/";a=(a=a.substring(0,a.length-1))||n,o="true"===localStorage.getItem("userLogFlag")?'\n                    <span class="info-10s">'.concat(a,'</span>\n        <div class="go-login">\n             <span id="go-edit-btn" ><span class="iconfont icon-bianji"></span> 编辑</span>\n        </div>'):'\n        <span class="info-10s">'.concat(n,'</span>\n            <div class="go-login">\n            <span id="go-login-btn">去登陆</span>\n        </div> '),$(".banner").html(o)}(),function(){$(".mainlist").on("tap",".item",function(){console.log(this);var n=$(this).find(".companyPic img")[0].src,o=$(this).find(".company").text(),e=$(this).find(".job").text(),a=e.split("[")[0],t=e.split("[")[1].substring(0,e.split("[")[1].length-1),i=$(this).find(".time").text(),s=$(this).find(".dalaryBox span").text();console.log(n),console.log(o),console.log(a),console.log(t),console.log(i),console.log(s);var c={pic:n,companyName:o,jobAndCity:e,jobName:a,jobCity:t,time:i,dalary:s};localStorage.setItem("jobDetail",JSON.stringify(c)),window.open("./jobinfo","_self")});var n={page:1,count:10};function e(n,e){$.ajax({url:HOME_JOBS_API,method:"GET",data:n,success:function(n){if(0===n.status){console.log(n);var o=function(n){for(var o="",e=0,a=n.length;e<a;e++){var t=n[e];o+='\n      <div class="item">\n                <div class="companyPic">\n                    <img src="'.concat(t.companyPic,'" alt="" srcset="">\n                </div>\n    \n                <div class="jobInfoBox">\n                    <p class="company">').concat(t.company,'</p>\n                    <p class="job">').concat(t.job," [").concat(t.city,']</p>\n                    <p class="time">').concat(t.publish,'</p>\n                </div>\n    \n                <div class="dalaryBox item-center">\n                    <span>').concat(t.minSalary,"k-").concat(t.maxSalary,"k</span>\n                </div>\n            </div>")}return o}(n.data);e(o)}else alert("请求失败")},fail:function(n){alert("请求失败")}})}showLoading({top:"0.88rem",bottom:"0.49rem"}),e(n,function(n){$(".list").html(n),hideLoading()});var a=new Scroll(".mainlist",{refreshData:function(o){a.setRefeshData(!1),showLoading({top:"0.88rem",bottom:"0.49rem"}),n.page=1,e(n,function(n){$(".list").html(n),o(),hideLoading(),a.setRefeshData(!0)})},appendData:function(o){a.setRefeshData(!1),showLoading({top:"0.88rem",bottom:"0.49rem"}),n.page++,e(n,function(n){$(".list").append(n),o(),hideLoading(),a.setRefeshData(!0)})}})}();