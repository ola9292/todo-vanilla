// strike through
$('ul').on('click','li',function(){

   $(this).toggleClass('strike');


  
});

//deleting a li with X
$('ul').on('click','span',function(e){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//adding new todo
$('input').keypress(function(e){
    if(event.which === 13){
        //extracting the value of input
        var todoText = $(this).val();
        $('ul').append('<li><span><i class="fas fa-trash-alt"></i></span> ' + todoText + '</li>')
        $(this).val("");
        
    }
});

$('#icon').on('click',function(){
    $('input').fadeToggle(500); 
})