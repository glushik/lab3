function showLyrics( name ){
    $.ajax({
        url: "./src/lyrics/"+name+".txt",
        crossDomain: true,
        contentType: "text/html;charset=windows-1251",
        success: function(data){
            $(".name").removeClass("hidden");
            $(".name").addClass("poem");
            $(".name").text(data);
            console.log(data);
        }
    })
    
    oleg();

}


function oleg(){
    document.getElementById("loleg").classList.remove("hidden");
    animate(function(timePassed){
        loleg.style.left = timePassed / 5 + 'px';
    }, document.body.clientWidth*4.45);
    
    function animate(draw, duration){
        var start = performance.now();
        requestAnimationFrame(function animate(time){
            var timePassed = time - start;
            // console.log(time, start);
            if (timePassed > duration ) {
                timePassed = duration;
                document.getElementById("loleg").classList.add("hidden");

            }
            draw(timePassed);
            if (timePassed<duration){
                requestAnimationFrame(animate);
            }
        });
    }

}
