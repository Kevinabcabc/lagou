;(function(){
    $('.nologInbox').show();
    $('.yeslogInbox').hide();
    $('.logOut').hide();
     var logFlag = localStorage.getItem('userLogFlag');

    if(!logFlag){
        $('.nologInbox').show();
        $('.yeslogInbox').hide();
        $('.logOut').hide();

        $('.toolsBox').on('tap','.item',function(){
            window.open('/login','_self');

        });
        $('.content').on('tap','.log-in-out',function(){
            window.open('/login','_self');
        });

    }else{
        $('.nologInbox').hide();
        $('.yeslogInbox').show();
        $('.logOut').show();
        $('.logOut').on('tap',function(){
            localStorage.setItem('userLogFlag','');
            window.location.reload();
        });
    };
    var username = JSON.parse(localStorage.getItem('userinfo')).name;
     $('.username').text(username);

    $('.user-intro').on('tap',function(){
        window.open('/userintro','_self');
    });
    
})();