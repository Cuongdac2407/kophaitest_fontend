
$(document).ready(function(){
   
    //gắn sự kiện on click vào nút button có class btn-square
    
    $(".btn-square").on("click", function(){
        $(".my-div").removeClass("circle").addClass("square");
    });

    $(".btn-circle").on("click", function(){
      $(".my-div").removeClass("square").addClass("circle");
    });
});
