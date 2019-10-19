function register(tel,code,cb){
    $.ajax({
        url:REGIESTER_API,
        method:"POST",
        data:{
            tel:tel,
            code:code
        },
        success:function(data){
            if(data.status ===0){
                console.log('注册成功');
                cb();
            }
        },
        fail: function(error){
          console.log(error);
        }
    });
}


function logout(cb/*有成功和失败的情况*/){
    // 发送注册的请求
    $.ajax({
      url: LOGOUT_API,
      method: 'GET',
      success: function(data){
        if(data.status === 0){
          console.log('退出成功');
          cb();
        }else{
          console.log('退出请求失败');
        }
      },
      fail: function(error){
        console.log('退出请求失败');
      }
    })
  }


  function sendCode(tel, cb/*有成功和失败的情况*/){
    // 发送验证码的请求
    $.ajax({
      url: SEND_CODE_API,
      method: 'GET',
      data: {
        tel: tel
      },
      success: function(data){
        console.log(data);
        if(data.status === 0){
          console.log('成功');
          cb();
        }else{
          console.log('请求失败');
        }
      },
      fail: function(error){
        console.log('请求失败');
      }
    });
  
  }
  