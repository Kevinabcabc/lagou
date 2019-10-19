(function () {

    $('.next').on('tap', function () {


        var userinfo = {
            name: $('.name').val(),
            school: $('.school').val(),
            worktime: $('.worktime').val()
        }

        localStorage.setItem('userinfo', JSON.stringify(userinfo));
   
        window.open('/userinfo2','_self');
    });
})()