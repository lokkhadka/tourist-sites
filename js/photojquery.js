
$(function() {
    setTimeout(function() {
     $('.text-animation').removeClass('hidden')
    },500);
}) ();




$(document).ready(function(){
   $('#divContainer img').on({
       mouseover : function(){
           $(this).css({
               'curser': 'pointer',
               'border-color': 'red'
           });
       },
       mouseout : function(){
        $(this).css({
            'curser': 'default',
            'border-color': 'grey'
        });  
       },
       click : function(){
           var imageUrl = $(this).attr('src');
           $('#mainImg').attr('src', imageUrl);
       }
   });
});