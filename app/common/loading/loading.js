function showLoading(params){
    params = params || {};
    var top = params.top || 0;
    var bottom = params.bottom || 0;

    var loadingTem = `
    <div id ="loading" class="loading">
        <div class="cover" style="top:${top};bottom:${bottom}"></div>
        <div class="loading-panel">
            <img src="/public/assets/loading.gif" alt="" srcset="">
            <span>加载中</span>
        </div>
    </div>
    `;

    $('body').append(loadingTem);

};


function hideLoading(){

    $('#loading').remove();

};