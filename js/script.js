$(document).ready(function () {
    alert("C'est parti !!")
    
});

// .(function ($) {
//     alert("C'est parti !!")
    
// }) (jQuery);


// $(document).ready(function() {
//     $('.title').bind("mouseover", function(){
//         var color  = $(this).css("background-color");

//         $(this).css("background", "#380606");

//         $(this).bind("mouseout", function(){
//             $(this).css("background", color);
//         })    
//     })    
// })


$(".title").mouseover(function(){
    $('.title').css('background-color', 'pink');  
});