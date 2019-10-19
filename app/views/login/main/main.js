(function () {
    var timer = null;
    $('.code').on('tap', function () {
        if (timer) {
            return;
        }
        var phoneNum = $('.phone-num input').val();
        // var phoneCode = $('.phone-code input').val();
        // console.log(phoneNum,phoneCode);

        if (phoneNum) {

            sendCode(phoneNum, function () {
                console.log('已发送验证码');
            })



            var num = 61;
            undateTime();

            function undateTime() {
                num--;
                $('.code').text(num + 's');
                if (num <= 0) {
                    $('.code').text('获取验证码');
                    clearInterval(timer);
                }
            }
            timer = setInterval(undateTime, 1000);

        }
    });

    $('.logIn').on('tap', function () {

        var phoneNum = $('.phone-num input').val();
        var phoneCode = $('.phone-code input').val();
        if (phoneNum && phoneCode) {
            
            register(phoneNum, phoneCode, function () {
                localStorage.setItem('userLogFlag',true);
                window.open('/index','_self');
            })
        }

    });
    $('.register').on('tap',function(){
        window.open('/register','_self');
    });

})()