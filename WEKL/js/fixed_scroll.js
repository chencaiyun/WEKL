  var ass=document.getElementById("fixed")
                
                document.onscroll=function(){
                    if(document.documentElement.scrollTop<570){
                        ass.style.display="none";
                    }else if(document.documentElement.scrollTop>7200){
                         ass.style.display="none";
                    }else{
                        ass.style.display="block";
                    }
                }