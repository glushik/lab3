function scroll_to_top(){
    window.scroll({top: 0, behavior: 'smooth'});
    // $("html,body").animate({"scrollTop":0}, 650);
}
// showVideo();
function showVideo(){
    progressBar();
    // show(null);
    $.ajax({
        url: "./nino.mp4",
        crossDomain: true,
        contentType: "video/mp4",
        success: function(data){
        show(data);
        }
    })
}
function show(data){
    document.getElementById("showV").classList.add("hidden");
    document.getElementById("prog").classList.add("hidden");
    document.getElementById("vid").classList.remove("hidden");

}


function progressBar(){
    var pr = document.getElementById("prog");
        setTimeout(function(){
            pr.value = pr.value+1;
            if (pr.value === 100) show(); else
            progressBar();
        }, Math.random()*250);
}