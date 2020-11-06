$(document).ready(function () {

})
$('#url').onkeypress(function (e) {
    if (e.keyCode == 13) {
        let url = $('#url').val();
        let show = document.querySelector('input');
        show.placeholder = "saved url :" + url;
        let showurl = '<span>' + show.placeholder + '</span>'
        let outurl = document.getElementById("selector");
        outurl.innerHTML = showurl;
        outurl.classList.add("active");
    }
    let inputurl = document.getElementById("url");
    inputurl.addEventListener("change",);
    $.ajax({
        type: 'POST',
        url: "/transfer",
        data: {
            content: content,
            style: 'D:/privacy/transfer_style/static/img/wave.jpg'
        },
        dataType: 'text',
        success: function (data) {
            console.log(data.content)
            console.log(data.style)
        }
    })
})
}

