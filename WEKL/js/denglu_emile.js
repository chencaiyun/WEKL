 var ass=document.getElementById("phone1")
    var duanxin=document.getElementById("duanxin1")
    var dl=document.getElementById("denglu_id")
     var res;
     var res1;
     ass.onblur=function(){
        res=/^1\d{10}$/.test(this.value);
        if(!res){
            text1.style.display="block";
         }else{
            text1.style.display="none"
         }
     }
    duanxin.onblur=function(){
        res1=/^\d{6}$/.test(this.value);
        if(!res1){
            password1.style.display="block";
        }else{
            password1.style.display="none"
        }
    }
    dl.onclick=function(){
    //手机号正确的  密码正确
        console.log(res)
        console.log(res1)
        if(res&&res1){
        alert("注册成功")
               }
  }