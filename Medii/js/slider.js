$(function(){
   $(".srch").hover(function(){
//    $(".srch").animate({
//        height : "+=50px",
//        width : "+=50px"
//        
//    });
       
      $(".srch").toggleClass("neew", 700);
      $(".srch").fadeToggle("slow", 0.8);
   });
});
    
$(function(){
    $(".cht").hover(function(){
        $(".cht").toggleClass("neew", 700);
        $(".cht").fadeToggle("slow", 0.8);
   }); 
});

// opposite is mouse out



