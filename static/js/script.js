$(document).ready(function () {

})

function ShowUrlButton() {
    let value = event.target.id;
    let Hidenimg = $(".show_img").hide();
    Hidenimg
    let empty = $('#url').val('');
    empty;
    let Openbutton = $(".upload_button").show();
    let Uploadurl = $(".upload_url").css("display", "flex");
    let url = $("#url").css("display", "flex");
    let Hidenlabel = $("#selector").hide();
    if (value == "1") {
        Openbutton;
        Uploadurl;
        url;
        Hidenlabel;
        let path = $(".photo_frames").attr("alt", "https://github.com/taeyoung-developer/toy_project/blob/master/static/img/la_muse.jpg?raw=true");
    } else if (value == "2") {
        Openbutton;
        Uploadurl;
        url;
        Hidenlabel;
        let path = $(".photo_frames").attr("alt", "https://github.com/taeyoung-developer/toy_project/blob/master/static/img/rain_princess.jpg?raw=true");

    } else if (value == "3") {
        Openbutton;
        Uploadurl;
        url;
        Hidenlabel;
        let path = $(".photo_frames").attr("alt", "https://github.com/taeyoung-developer/toy_project/blob/master/static/img/the_scream.jpg?raw=true");

    } else if (value == "4") {
        Openbutton;
        Uploadurl;
        url;
        Hidenlabel;
        let path = $(".photo_frames").attr("alt", "https://github.com/taeyoung-developer/toy_project/blob/master/static/img/the_shipwreck_of_the_minotaur.jpg?raw=true");

    } else if (value == "5") {
        Openbutton;
        Uploadurl;
        url;
        Hidenlabel;
        let path = $(".photo_frames").attr("alt", "https://github.com/taeyoung-developer/toy_project/blob/master/static/img/udnie.jpg?raw=true");

    } else if (value == "6") {
        Openbutton;
        Uploadurl;
        url;
        Hidenlabel;
        let path = $(".photo_frames").attr("alt", "https://github.com/taeyoung-developer/toy_project/blob/master/static/img/wave.jpg?raw=true");

    } else {
        $(".upload_url").css("display", "none")
    }

}


function enter() {
    if (event.keyCode == 13) {
        let content = $('#url').val();
        $('#url').css('display', 'none')
        $('#selector').css({
            'display': 'flex',
            'background-color': 'rgb(106,123,139)',
            'color': 'rgb(79, 84, 88)',
            'font-weight': 'normal',
            'text-transform': 'uppercase',
            'text-align': 'center',
            'letter-spacing': '2px',
            'font-weight': 'bold'
        });
        let style = $(".photo_frames").attr("alt")
        let show = '<span>saved url : </span>' + content;
        let Outurl = document.getElementById("selector");
        Outurl.innerHTML = show;
        $.ajax({
            type: 'POST',
            url: "/transfer",
            data: {
                content: content,
                style: style
            },
            dataType: 'json',
            success: function (response) {
                $(".upload_button").hide();
                let img = response['output_url'];
                $(".show_img").css("display", "flex");
                $("#origin_img").attr("src", content);
                $("#transfer_img").attr("src", img);
                $("#transfer_url").attr("href", img);

            }
        })
    }
}