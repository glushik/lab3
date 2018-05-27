function scroll_to_top(){
    $("html,body").animate({"scrollTop":0}, 650);
}
function dropHandler(ev){
    ev.stopPropagation();
    ev.preventDefault();
    var file = ev.dataTransfer.files[0];
    //console.log(file);
    $("#reset").trigger('click');
    showInfo(file);
    if ( file.type.match(/image\/(jpeg|jpg|png|gif)/))  showThumbnail(file);

 //   removeDragData(ev);
}
function showThumbnail(data){
    var reader = new FileReader();
    reader.addEventListener('load', function(event){
        // var img  = document.createElement('img');
        // var itemPreview = itemPreviewTemplate.clone();
        // var itemPreview;
        // $("#thumbnails-zone").attr('src',event.target.result);
        $("#thumbnails-zone").html("");
        // $("#drop-info").html("");
        $("#thumbnails-zone").append("<img class='small' src = "+event.target.result+">");
        // itemPreview.data('id', data.name)
    });
    reader.readAsDataURL(data);
    // var fr = new FileReader();
    // $("#thumbnails-zone").html("");
    // $("#thumbnails-zone").append("<label style.backgroudImage = >"</label>")  ;
    
}
function dragOverHandler(ev){
    ev.stopPropagation();
    ev.preventDefault();
}

function showInfo(data){
    console.log(data);
    $("#drop-info").removeClass("hidden");
    $("#drop-info").html("");
    $("#thumbnails-zone").html("");
    $("#drop-info").append("<p>File name:"+data.name+"</p>");
    $("#drop-info").append("<p>File type:"+data.type+"</p>");
    $("#drop-info").append("<p>File size:"+data.size+"</p>");
}
function uploadFile(){
    $('input[type=file]')[0].files[0];  
    var data = $('#choose-file')[0].files[0];
    showInfo(data);
    if (data.type.substring(0,5) ==="image" ) showThumbnail(data);
}

function bestSong(){
    var radio = document.getElementsByName("song");
    var result;
    for (var i = 0; i < radio.length; ++i){
        if (radio[i].checked)  result = radio[i].value;
    }
    
    var obj = {
        email: document.getElementById("email").value,
        song: result
    };
    localStorage.setItem(document.getElementById("email").value, JSON.stringify(obj));
    //console.log(document.getElementById("email").value);
    //console.log(JSON.parse(localStorage.getItem(document.getElementById("email").value)));
    return false;
}

function showSong(){
    var email = document.getElementById("checkemail").value;
    console.log(email);
    alert(JSON.parse(localStorage.getItem(email)).song+" - это ваша любимая песня");
    return false;
}


