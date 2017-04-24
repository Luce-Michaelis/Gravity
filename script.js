
$( document ).ready(function() {
    
    $("#pic").click(function(){
        
    setInterval(function(){ 
        
        
        if ( $('#pic'). offset().top > 900) {
            return false;
        }
        
        
        $('#pic').css('top', $('#pic').offset().top + 10);
        
        
    }, 100);
    
    
       // Add some code here to make the picture move DOWN by 10px.
    
    
    });
});
