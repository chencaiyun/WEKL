
        var box1=document.getElementById("box1");
				var box=document.getElementById("box");
 var boxmr=document.getElementById("boxmr");
        var ajax=new XMLHttpRequest();
        ajax.open("get","2.php",true);
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
        box1.innerHTML=str;
				box.innerHTML=str;
						boxmr.innerHTML=str;
						console.log(1)
      }
    }
    