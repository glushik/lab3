function showLyrics( name ){
    $.ajax({
        url: "./src/lyrics/"+name+".txt",
        crossDomain: true,
        contentType: "text/html;charset=utf-8",
        success: function(data){

            show (name, data)
            console.log(data);
        }
    })
    
    oleg();

}

function show (name, data){
    var select = "#"+name.toString();
    $(select).removeClass("hidden");
    $(select).addClass("poem");
    for (str in data){
        $("select").append("<p>"+str+"</p>");
    }
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
