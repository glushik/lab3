function scroll_to_top(){
    $("html,body").animate({"scrollTop":0}, 650);
}
showVideo();
function showVideo(){
    $.ajax({
        url: "./nino.mp4",
        crossDomain: true,
        contentType: "video/mp4",
        success: function(data){

            
             console.log("loKl");
             show(data);
        }
    })
}
function show(data){
    data.appendTo($(".video"));
}