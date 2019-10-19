(function () {

    $('.done').on('tap', function () {
        var userinfo = JSON.parse(localStorage.getItem('userinfo'));

        userinfo.phone  = $('.phone').val();
        userinfo.email  = $('.email').val();
        
        localStorage.setItem('userinfo', JSON.stringify(userinfo));
        window.open('/mine','_self');
        
        
    });


    $('.pre').on('tap', function () { 
        
      window.open('/userinfo','_self');
        
    });

    
})()