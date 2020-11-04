$(document).ready(function () {

})

function ImgUpload() {
    let content = $('#Uploadimg').val()
    content.replace('\\', '/')
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
}