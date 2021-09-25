$(document).ready(function() {
    $("#add-item").click(function() {
        var content = $("#add-comment").val()

        $("div.ctrl").prepend(`
            <div class="item">
                <div class="avatar col10">
                    <img src="./assets/img/avtar.png" alt="avatar" width="50%">
                </div>
                <div class="content-comment col80">
                    ${content}
                </div>
                <div class="delete col10">
                    <input type="button" name="delete" value="Xóa">
                </div>
            </div>
        `)
    })
})