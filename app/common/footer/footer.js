(function () {
    function loadingFooterNav(list) {
        var herfList = window.location.href.split('/');
        var nowPage = herfList[herfList.length - 1].split('.')[0];
        // console.log(nowPage);
        var footerHtmlItem = `
        <a href="{{a}}" class="iconfont {{icon}} {{active}}">{{content}}</a>
        `;
        var footerHtml="";
        for(let i = 0;i<list.length;i++){
            var item = footerHtmlItem.replace(/{{a}}/,list[i].a);
            item = item.replace(/{{icon}}/,list[i].icon);
            item = item.replace(/{{content}}/,list[i].content);
            item = item.replace(/{{active}}/,nowPage===list[i].id?'active':'');
            footerHtml+= item;
        }
        $('.footer').append(footerHtml);

    };



    var list = [{
            id: "index",
            a: "/index",
            icon: "icon-home",
            content: "职位"
        },
        {
            id: "search",
            a: "/search",
            icon: "icon-sousuo",
            content: "搜索"
        },
        {
            id: "mine",
            a: "/mine",
            icon: "icon-wode",
            content: "我的"
        }
    ];

    loadingFooterNav(list);

})();



// ('.footer').html()