var phone=document.getElementsByClassName("lin");
var emile=document.getElementsByClassName("centerBg_center")
for(var i=0;i<phone.length;i++){
   phone[i].index=i;
    phone[i].onclick=function(){
      for(var k=0;k<phone.length;k++){
        phone[k].style.color="#ddd";
        emile[k].style.display="none";
      }
        this.style.color="#e31436";
        console.log(emile[this.index])
        emile[this.index].style.display="block";
    }
}