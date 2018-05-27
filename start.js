function scroll_to_top(){
    $("html,body").animate({"scrollTop":0}, 650);
}
function showVideo(){
    $.ajax({
        url: "./nino.mp4",
        crossDomain: true,
        contentType: "video/mp4",
        success: function(data){

            
             console.log(data);
        }
    })
}
function show(){
    $(".video").append("video")
}