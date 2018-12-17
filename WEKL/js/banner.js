// 轮播切换时  出现页面 opacity 1  其他图片opacity 0
    var i=0;
    var oimg=document.getElementsByClassName("banner_img");
    var timer=null;
    // 开启定时器
    autoplay();
    function changeImage(){
        for(var k=0;k<oimg.length;k++){
            oimg[k].style.opacity=0;
        }
        oimg[i].style.opacity=1;
    }
    next.onclick=function(){
        if(i>=4){
            i=-1;
        }
        i++;
        changeImage();
        pageColorChange();
    }
    pre.onclick=function(){
        if(i<=0){
            i=5;
        }
        i--;
        changeImage();
        pageColorChange();
    }
    // 圆圈按钮   点击 切换页面
    var page=document.querySelectorAll("#page li");
    for(var t=0;t<page.length;t++){
        page[t].index=t;
        page[t].onclick=function(){
            // 全局i 等于  你点击的这个按钮代表的页码
            i=this.index;
            // 切换到此时的图片
            changeImage();
            pageColorChange();
        }
    }
    function pageColorChange(){
        // 清除所有按钮的背景色
        for(var k=0;k<page.length;k++){
            page[k].style.background="#fff";
        }
        // 指定的按钮变色
        page[i].style.background="hotpink";
    }
    // 鼠标进入 定时器停止  鼠标移除 定时器开启
    banner.onmouseover=function(){
        clearInterval(timer)
        next.style.opacity=1;
        pre.style.opacity=1;
    }
    banner.onmouseout=function(){
        autoplay();
        next.style.opacity=0;
        pre.style.opacity=0;
    }
    function autoplay(){
        timer=setInterval(function(){
        if(i>=4){
            i=-1;
        }
        // 所有图片 opacity 0  指定当前图片 opacity 1;
        i++;
        changeImage();
        pageColorChange();
    },2000) 

    }