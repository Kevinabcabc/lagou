"use strict";$(".done").on("tap",function(){var e=JSON.parse(localStorage.getItem("userinfo"));e.phone=$(".phone").val(),e.email=$(".email").val(),localStorage.setItem("userinfo",JSON.stringify(e)),window.open("/mine","_self")}),$(".pre").on("tap",function(){window.open("/userinfo","_self")});