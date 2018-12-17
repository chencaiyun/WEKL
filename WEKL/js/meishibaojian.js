
          var boxms=document.getElementById("boxms");
				var boxmy=document.getElementById("boxmy");
var boxjj=document.getElementById("boxjj");
var boxdp=document.getElementById("boxdp");
var box99=document.getElementById("box99");
        var ajax=new XMLHttpRequest();
        ajax.open("get","3.php",true);
        ajax.send(null);
        ajax.onreadystatechange=function(){
          if(ajax.readyState===4){
            var bast=JSON.parse(ajax.responseText);
        var str="";
        bast.forEach(item=>{
          str+=` <li> <div class="liv">
                    <a href="#">
                            <img src="${item.imas}"  alt="">
                            <h4>"${item.word}"</h4>
                    </a>
                    <p>"${item.name}"</p>
                    <div class="case2_b">
                        <span>￥<i>${item.money}</i><em>￥${item.one}</em></span>
                        <a href="#">立刻购买</a>
                    </div>
                    </div>
                </li>`
        })
                str+=`<div class="clear"></div>`
        boxms.innerHTML=str;
						boxmy.innerHTML=str;
						boxjj.innerHTML=str;
						 boxdp.innerHTML=str;
						box99.innerHTML=str;
      }
    }