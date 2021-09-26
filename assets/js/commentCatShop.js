// Ham scroll to Top
$(document).ready(function() {
    $("#gototop").hide()

    $(window).scroll(function() {
        if ($(this).scrollTop() >= 420)
            $("#gototop").show("slow")
        else
            $("#gototop").hide("slow")
    })

    $("#gototop").click(function() {
        $("html, body").animate({
            scrollTop: 0
        })
    })
})

// Ham scroll fix bug Header che khuat
$(document).ready(function() {
    const headerHeight = 200
    $("#pets").click(function() {
        $("html, body").animate({
            scrollTop: 0
        })   
    })

    $("#stuffs").click(function() {
        const h = $(this).attr('href')
        const t = $(h).prop("offsetTop")
        $("html, body").animate({
            scrollTop: (t - headerHeight)
        }, 2000)
    })
})

// Ham them + xoa binh luan
$(document).ready(function() {
    $("#add-item").click(function() {
        var content = $("#add-comment").val()

        $("div.ctrl").prepend(`
            <div class="item active-comment">
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

        setTimeout(function() {
            $("div.item").removeClass("active-comment")
        }, 1000)
    })

    $("div.ctrl").on("click", "div.item input[type=button]", function() {
        if (confirm("Bạn có muốn xóa dòng bình luận này?") == true)
            $(this).parent().parent().remove()
    })
})

// Ham xoa san pham "Thu Cung" khi click "Chot Don"
$(document).ready(function() {
    $("div.cat").on("click", "div.main-content-classify__pet-item-member__img-button", function() {
        $(this).parent().parent().parent().remove()
    })
})