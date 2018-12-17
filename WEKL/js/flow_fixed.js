
            var timer;
            var lis=document.getElementsByClassName("ass")
            for(var i=0;i<lis.length;i++){
                lis[i].index=i
                lis[i].onclick=function(){
                    if(1000*this.index>=document.documentElement.scrollTop){
                        fn("bottom",740*this.index)
                    }else{
                        fn("top",500*this.index)
                    }
                }
            }
            function fn(a,b){
                clearInterval(timer)
                if(a==="top"){
                    timer=setInterval(function(){
                        document.documentElement.scrollTop=document.documentElement.scrollTop-100
                        if(document.documentElement.scrollTop<=b){
                            document.documentElement.scrollTop=b
                            clearInterval(timer)
                        }
                    },10)
                }else{
                    timer=setInterval(function(){
                        document.documentElement.scrollTop=document.documentElement.scrollTop+50
                        if(document.documentElement.scrollTop>=b){
                            document.documentElement.scrollTop=b
                            clearInterval(timer)
                        }
                    },10)
                }
            }
      