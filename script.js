function number(num){
    let res=document.getElementById("screen")
    res.value+=num//res=res+num
   
   }
   function result(){
       let res= document.getElementById("screen")
       res.value=eval(res.value)
   
   }
   function remove(){
       let res=document.getElementById("screen")
       res.value=""
   
   }
   function removeone(){
       let res=document.getElementById("screen")
       res.value=res.value.slice(0,-1)
   }