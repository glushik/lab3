function showLyrics( name ){

    $.ajax({
        url: "./src/lyrics/"+name+".txt",
        crossDomain: true,
        contentType: "text/html;charset=utf-8",
        success: function(data){

            show (name, data)
            // console.log(data);
        }
    })
    //  show("happiness", "lollosdfjk#sdjfknsdf\nsdf,#sbdfbsdf,ns#dfsl\nsdf,h#sdkfjblfjsdf");

    oleg();

}
showJSON()
function showJSON(){
    $.ajax({
        url: "./src/songs.json",
        crossDomain: true,
        contentType: "application/json",
        success: function(data){

            console.log(data);
            // console.log(data);
        }
    })
}
function show (name, data){
    var select = "#"+name.toString();
    $(select).removeClass("hidden");
    $(select).addClass("poem");
    data=data.split("#").join("<br />");
    // console.log(data);

    $(select).html(data);

    // for (var str in data){
    //     console.log(str);
    //     $(select).append("<p class = 'evr'>"+str+"</p>");
    // }
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