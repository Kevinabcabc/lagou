;(function(){
    var info = JSON.parse(localStorage.getItem('userinfo'));
    var html = `
    <h3 class="item-center">${info.name}</h3>

    <p class="item-center">基本信息</p> 

    <div class="infobox">
        <p>最高学历：<span> ${info.school}</span></p>
        <p>工作年限: <span> ${info.worktime}</span></p>
        <p>联系电话: <span> ${info.phone}</span></p>
        <p>邮箱: <span> ${info.email}</span></p>

    </div>
    

    <p class="item-center">我目前已离职，可快速到岗</p>
    
    `;

    $('.content').html(html);
})();