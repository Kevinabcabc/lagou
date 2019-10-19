(function(){
    $('.go-back').on('tap',function(){
        history.back();
    });   
    $('.go-home').on('tap',function(){
        window.open('/index','_self');
    });   
})();

/* <header class="header item-center">
        <span class="iconfont icon-zuo go-back"></span>
        <span>拉勾网</span>
        <span class="iconfont icon-home go-home"></span>
    </header> */