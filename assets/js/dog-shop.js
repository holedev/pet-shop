const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


//đảo ngược chuỗi (cắt sang mảng -> đảo ngược mảng -> nối lại thành chuỗi)
function reverseString(string){
    return string.split("").reverse().join("")
}

//chuyển số sang dạng chuỗi tiền tệ (xxx.xxx.xxxđ)
function numberToCoin(number){
    const string = number.toString();
    let x = "";
    for (let i = 0; i < string.length; i+=3) {
        if (i < string.length - 3) {
            x += reverseString(string.slice(string.length - (i + 3), string.length - i)) + "."
        } else {
            x += reverseString(string.slice(0, string.length - i))
            return reverseString(x);
        }
    }
}


const app = {
    currentPage: 1,
    itemPerPage: 12,
    startItem: 0,
    endItem: 12,
    quantity: 1,
    countCart: 0,
    products: [
        {
            id: 1,
            path: "./assets/img/dog-shop/corgi-thuan-chung.jpg",
            title: "Corgi thuần chủng",
            content: `Chúng tôi có shipper nhận ship tới nhà bạn trước 18g theo đúng quy định chỉ thị 16+
                    Tìm bố mẹ cho các bé chó Corgi nhà đẻ hơn 2 tháng, ăn cơm, ăn hạt rất khoẻ.
                    Đực - Cái có đủ…
                    Đã chich ngừa đầy đủ và sổ giun!
                    Các bé ngoan và rất thông minh! Mông to, chân lùn!
                    Giá 7,5 triệu/bé
                    Khách muốn ship tận nhà, gửi hình zalo mình ship đến!`,
            price: 7500000,
            sale: 0,
            favorite: 0,
            sold: 225,
            star: 5,
            brand: "Bảo Ngọc",
            origin: "Việt Nam",
            new: 0,
            pathCarousel: {
                path1: "./assets/img/dog-shop/corgi-thuan-chung-1.jpg",
                path2: "./assets/img/dog-shop/corgi-thuan-chung-2.jpg",
            },
            phone: "0122 234 234",
        },
        {
            id: 2,
            path: "./assets/img/dog-shop/poodle-nau-do.jpg",
            title: "Poodle Nâu Đỏ con 66 ngày tuổi",
            content: `Đàn 4 bé cái và đực màu nâu đỏ.
                    Chó nhà nuôi đẻ, đã chích ngừa có sổ sức khoẻ đầy đủ.
                    Giá từ 3,7 triệu…
                    Khách muốn ship tận nhà, gửi hình zalo mình ship đến!`,
            price: 3700000,
            sale: 0,
            favorite: true,
            sold: 157,
            star: 4,
            brand: "Nguyễn Ánh",
            origin: "Việt Nam",
            new: 0,
            pathCarousel: {
                path1: "./assets/img/dog-shop/poodle-nau-do-1.jpg",
                path2: "./assets/img/dog-shop/poodle-nau-do-2.jpg",
            },
            phone: "0122 234 235",
        },
        {
            id: 3,
            path: "./assets/img/dog-shop/corgi-tricolor.jpg",
            title: "Chó Corgi Tricolor siêu đẹp giá sinh viên",
            content: `Nhà có đàn corgi nhà đẻ tricolor phong thuỷ tuyệt đẹp, màu đẹp của dòng Corgi.
                    Chó nhà đẻ, đực cái có đủ
                    Hơn 2.5 tháng
                    Cứng cáp khoẻ mạnh, lanh lợi
                    Giá từ 5tr5
                    Có nhận ship tận nhà!!`,
            price: 5500000,
            sale: 0,
            favorite: 0,
            sold: 179,
            star: 4,
            brand: "Nguyễn An",
            origin: "Việt Nam",
            new: true,
            pathCarousel: {
                path1: "./assets/img/dog-shop/corgi-tricolor-1.jpg",
                path2: "./assets/img/dog-shop/corgi-tricolor-2.jpg",
            },
            phone: "0122 234 234",
        },
        {
            id: 4,
            path: "./assets/img/dog-shop/samoyed-size-bu.jpg",
            title: "Chó Samoyed size bự, nhà đẻ",
            content: `Chúng tôi có shipper nhận ship tới nhà bạn trước 18g theo đúng quy định chỉ thị 16+
                    Rã bầy chó Samoyed thuần chủng nhà đẻ.
                    2 đực 2 cái
                    Size bự, mặt gấu, cực đẹp!
                    Giá từ 6 triệu…
                    Chó nhà đẻ, khoẻ mạnh, bao thuần chủng trọn đời!
                    Xem chó tại nhà!
                    Xin cảm ơn!`,
            price: 6000000,
            sale: 0,
            favorite: 0,
            sold: 206,
            star: 5,
            brand: "An Lê",
            origin: "Việt Nam",
            new: true,
            pathCarousel: {
                path1: "./assets/img/dog-shop/samoyed-size-bu-1.jpg",
                path2: "./assets/img/dog-shop/samoyed-size-bu-2.jpg",
            },
            phone: "0122 234 234",
        },
        {
            id: 5,
            path: "./assets/img/dog-shop/banh-chuong-mini.jpg",
            title: "Đồ chơi banh chuông mini cho chó mèo",
            content: `Sản phẩm sở hữu độ an toàn cao, có màu sắc bắt mắt cùng trọng lượng nhẹ sẽ giúp cho thú cưng dễ dàng di chuyển. Với thiết kế quả cầu tròn có lục lạc phía trong, khi thú cưng của bạn chạm vào thì sẽ phát ra âm thanh nghe rất vui tai
                    👉 Được làm bằng chất liệu nhựa cao cấp, sẽ là món quà ý nghĩa của bạn dành cho thú cưng của mình
                    👉 Bạn cũng có thể dùng sản phẩm chơi cùng với thú cưng của mình để xả stress, hay huấn luyện cho thú cưng tập bắt/tha bóng về
                    Đường kính 4cm`,
            price: 15000,
            sale: 0,
            favorite: true,
            sold: 125,
            star: 4,
            brand: "Arela Pet Shop",
            origin: "Việt Nam",
            new: true,
            pathCarousel: {
                path1: "./assets/img/dog-shop/banh-chuong-mini-1.jpg",
                path2: "./assets/img/dog-shop/banh-chuong-mini-2.jpg",
            },
            phone: "0122 234 234",
        },
        {
            id: 6,
            path: "./assets/img/dog-shop/banh-gai.jpg",
            title: "Đồ chơi banh gai cho chó mèo",
            content: `Bóng  gai là phụ kiện cần thiết cho các chủ nhân khi đang sở hữu những chú chó, chú mèo.
                    Nó không chỉ là đồ chơi cho thú cưng nhà bạn. Bên cạnh đó nó còn là phụ kiện hữu ích để huấn luyện thú cưng được thông minh và nhanh nhẹn qua những lần chúng tiếp xúc với quả bóng và bắt kịp những quả bóng.
                    Với món đồ chơi bóng gặm gai sạch răng cho thú cưng chắc hẳn bạn sẽ không còn lo lắng thú cưng bị buồn chán, hay sau khi chúng ăn xong bạn cũng không phải lo lắng không thể vệ sinh sạch răng cho chúng rồi nhé. Món đồ chơi này sẽ giúp bạn làm việc này. Đây là đồ chơi thực sự cần thiết cho thú cưng của bạn nếu như bạn thực sự quan tâm đến chúng`,
            price: 25000,
            sale: 0,
            favorite: true,
            sold: 189,
            star: 4,
            brand: "Arela Pet Shop",
            origin: "Việt Nam",
            new: false,
            pathCarousel: {
                path1: "./assets/img/dog-shop/banh-gai-1.jpg",
                path2: "./assets/img/dog-shop/banh-gai-2.jpg",
            },
            phone: "0122 234 234",
        },
        {
            id: 7,
            path: "./assets/img/dog-shop/husky-thuan.jpg",
            title: "Chó Husky thuần",
            content: `Chó husky mặt ngáo đáng yêu !
                    Chó husky 2 tháng tuổi , có 2 màu hồng phấn và xám trắng siêu đẹp . Các bé rất ngoan và quấn chủ,biết nghe lời
                    Đã tiêm ngừa đầy đủ
                    Shop có 2 chi nhánh SG và Cần Thơ và Bình Dương nhé`,
            price: 6000000,
            sale: 0,
            favorite: true,
            sold: 156,
            star: 5,
            brand: "Lê Đông Bình",
            origin: "Việt Nam",
            new: true,
            pathCarousel: {
                path1: "./assets/img/dog-shop/husky-thuan-1.jpg",
                path2: "./assets/img/dog-shop/husky-thuan-2.jpg",
            },
            phone: "0122 234 234",
        },
        {
            id: 8,
            path: "./assets/img/dog-shop/husky-lai.jpg",
            title: "Chó Husky lai",
            content: `Do dịch bệnh cần tìm chủ mới chó husky lai`,
            price: 3500000,
            sale: 0,
            favorite: false,
            sold: 198,
            star: 4,
            brand: "Nguyễn Văn Tưởng",
            origin: "Việt Nam",
            new: true,
            pathCarousel: {
                path1: "./assets/img/dog-shop/husky-lai-1.jpg",
                path2: "./assets/img/dog-shop/husky-lai-2.jpg",
            },
            phone: "0122 234 234",
        },
        {
            id: 9,
            path: "./assets/img/dog-shop/pate-hug.jpg",
            title: "Pate Hug cho chó",
            content: `Pate Hug cho chó lon 400gram
                    Thức ăn cho chó hoàn chỉnh dinh dưỡng
                    Phù hợp tất cả các giống chó và mọi giai đoạn phát triển`,
            price: 450000,
            sale: 15,
            favorite: true,
            sold: 151,
            star: 4,
            brand: "Arele Pet",
            origin: "Việt Nam",
            new: true,
            pathCarousel: {
                path1: "./assets/img/dog-shop/pate-hug-1.jpg",
                path2: "./assets/img/dog-shop/pate-hug-2.jpg",
            },
            phone: "0122 234 234",
        },
        {
            id: 10,
            path: "./assets/img/dog-shop/khay-vs-cho.png",
            title: "Khay vệ sinh cho chó",
            content: `Dễ dàng sử dụng, dễ dàng vệ sinh
                    Màu sắc khay đa dạng, bền và chịu lực tốt.
                    Hướng dẫn cún đi vệ sinh vào khay để chúng hình thành thói quen tốt`,
            price: 520000,
            sale: 25,
            favorite: true,
            sold: 115,
            star: 5,
            brand: "Shop Pet",
            origin: "Việt Nam",
            new: false,
            pathCarousel: {
                path1: "./assets/img/dog-shop/khay-vs-cho-1.png",
                path2: "./assets/img/dog-shop/khay-vs-cho-2.png",
            },
            phone: "0122 234 234",
        },
        {
            id: 11,
            path: "./assets/img/dog-shop/alaska-cai-1-tuoi.jpg",
            title: "Chó Alaska Cái 1 tuổi",
            content: `Cần ra đi em chó nhà nuôi bao dễ !! Giống cái chưa sinh sản. Không bệnh - Dễ ăn - Lông đã tỉa.
                    Giá gốc rồi ạ! Xin đừng trả giá nếu thật sự muốn mua!`,
            price: 6000000,
            sale: 0,
            favorite: true,
            sold: 181,
            star: 5,
            brand: "Cún Cưng",
            origin: "Việt Nam",
            new: true,
            pathCarousel: {
                path1: "./assets/img/dog-shop/alaska-cai-1-tuoi-1.jpg",
                path2: "./assets/img/dog-shop/alaska-cai-1-tuoi-2.jpg",
            },
            phone: "0122 234 234",
        },
        {
            id: 12,
            path: "./assets/img/dog-shop/chuong-cho-inox.jpg",
            title: "Chuồng chó Inox",
            content: `Chuyên sản xuất chuồng chó inox tốt hàng dày bảo hành 5 năm có nhiều kích thước
                    Chuồng di chuyển chó mới đẻ`,
            price: 530000,
            sale: 50,
            favorite: true,
            sold: 121,
            star: 5,
            brand: "Thuận Phát",
            origin: "Việt Nam",
            new: true,
            pathCarousel: {
                path1: "./assets/img/dog-shop/chuong-cho-inox-1.jpg",
                path2: "./assets/img/dog-shop/chuong-cho-inox-2.jpg",
            },
            phone: "0122 234 234",
        },
        {
            id: 13,
            path: "./assets/img/dog-shop/cho-phoc-soc-duc.jpg",
            title: "Chó phốc sóc đực 72 ngày",
            content: `Đàn 3 bé phốc sóc đực thuần chủng, chó nhà sinh sản. Có hình chó cha, chó mẹ đăng kèm (2 hình cuối cùng).
                    Các bé đã chích ngừa, có sổ sức khoẻ đầy đủ.
                    Giá từ 5,7 triệu…
                    Khách muốn ship tận nhà, gửi hình zalo mình ship đến!
                    Cám ơn khách đã xem tin!`,
            price: 5700000,
            sale: 0,
            favorite: true,
            sold: 101,
            star: 4,
            brand: "Nguyễn Ánh",
            origin: "Việt Nam",
            new: false,
            pathCarousel: {
                path1: "./assets/img/dog-shop/cho-phoc-soc-duc-1.jpg",
                path2: "./assets/img/dog-shop/cho-phoc-soc-duc-2.jpg",
            },
            phone: "0122 234 234",
        },
        {
            id: 14,
            path: "./assets/img/dog-shop/cho-tini-poodle.jpg",
            title: "Chó tini Poodle trắng",
            content: `Cần rã bầy Tiny Poodle trắng nhà đẻ. Đã tiêm phòng có sổ. Cứng cáp, khoẻ mạnh.
                    Chỉ có đực
                    Xem chó tại nhà và giao chó tận nơi!`,
            price: 3900000,
            sale: 0,
            favorite: false,
            sold: 272,
            star: 5,
            brand: "Nguyễn Ánh",
            origin: "Việt Nam",
            new: false,
            pathCarousel: {
                path1: "./assets/img/dog-shop/cho-tini-poodle-1.jpg",
                path2: "./assets/img/dog-shop/cho-tini-poodle-2.jpg",
            },
            phone: "0122 234 234",
        },
        {
            id: 15,
            path: "./assets/img/dog-shop/sua-tam-yu.jpg",
            title: "Sữa tắm Yú cho chó",
            content: `Cần rã bầy Tiny Poodle trắng nhà đẻ. Đã tiêm phòng có sổ. Cứng cáp, khoẻ mạnh.
                    Chỉ có đực
                    Xem chó tại nhà và giao chó tận nơi!`,
            price: 520000,
            sale: 15,
            favorite: true,
            sold: 275,
            star: 5,
            brand: "Shop Pet",
            origin: "Việt Nam",
            new: true,
            pathCarousel: {
                path1: "./assets/img/dog-shop/sua-tam-yu-1.jpg",
                path2: "./assets/img/dog-shop/sua-tam-yu-2.jpg",
            },
            phone: "0122 234 234",
        },
        {
            id: 16,
            path: "./assets/img/dog-shop/pug.jpg",
            title: "Pug thuần chủng",
            content: `Mình có bầy pug
                    nay được 55 ngày tuổi.
                    ăn uống khỏe mạnh.
                    mình đang cho bé ăn hạt royal ngâm.
                    sổ giun đầy đủ, tiêm ngừa
                    mình có bảo hành sức khoe`,
            price: 3000000,
            sale: 0,
            favorite: true,
            sold: 127,
            star: 5,
            brand: "Shop Pet",
            origin: "Việt Nam",
            new: false,
            pathCarousel: {
                path1: "./assets/img/dog-shop/pug-1.jpg",
                path2: "./assets/img/dog-shop/pug-2.jpg",
            },
            phone: "0122 234 234",
        },
        {
            id: 17,
            path: "./assets/img/dog-shop/poodle-cai.jpg",
            title: "Poodle cái trắng 3 tháng",
            content: `Giống poodle cái
                    3 tháng tuổi
                    Màu trắng
                    Tiêm ngừa có sổ kèm theo`,
            price: 3200000,
            sale: 0,
            favorite: true,
            sold: 298,
            star: 5,
            brand: "Poodle Pet",
            origin: "Việt Nam",
            new: true,
            pathCarousel: {
                path1: "./assets/img/dog-shop/poodle-cai-1.jpg",
                path2: "./assets/img/dog-shop/poodle-cai-2.jpg",
            },
            phone: "0122 234 234",
        },
        {
            id: 18,
            path: "./assets/img/dog-shop/long-banh-xe.jpg",
            title: "Lồng bánh xe di động cao cấp cho chó mèo HSFT-95",
            content: `Lồng được làm bằng sắt cao cấp, độ bền cao, chịu lực tốt, 
                    không bị gỉ sét, và đặc biệt là có 4 bánh xe ở phía dưới nên có thể di chuyển lồng 
                    đến bất cứ nơi đâu bạn muốn mà không phải khiêng cả lồng lên để bảo vệ sàn nhà yêu quý của bạn. 
                    Lồng có kèm khay vệ sinh bên dưới giúp dễ dàng kéo ra vệ sinh ạ.`,
            price: 1750000,
            sale: 75,
            favorite: true,
            sold: 191,
            star: 5,
            brand: "Pet VN",
            origin: "Việt Nam",
            new: true,
            pathCarousel: {
                path1: "./assets/img/dog-shop/long-banh-xe-1.jpg",
                path2: "./assets/img/dog-shop/long-banh-xe.jpg",
            },
            phone: "0122 234 234",
        },
        {
            id: 19,
            path: "./assets/img/dog-shop/pull-phap.jpg",
            title: "Chó Pull Pháp",
            content: `Chó bull pháp bò sữa ( thuần chủng ) Đực
                    Hiện 15 tháng ( ăn uống rất dễ bánh mì không cũng ăn nha
                    Chó bi cà đầy đủ về phối giống tốt
                    Ace thích qua xem trực tiếp bé rất ngoan
                    Chó ngoài đẹp hơn trong hình`,
            price: 4000000,
            sale: 0,
            favorite: true,
            sold: 114,
            star: 5,
            brand: "Pull Shop",
            origin: "Việt Nam",
            new: true,
            pathCarousel: {
                path1: "./assets/img/dog-shop/pull-phap-1.jpg",
                path2: "./assets/img/dog-shop/pull-phap-2.jpg",
            },
            phone: "0122 234 234",
        },
        {
            id: 20,
            path: "./assets/img/dog-shop/samoyed-nhat.jpg",
            title: "Samoyed Nhật 2 tháng",
            content: `Tìm chủ mới cho các bé xù ú nu. Hiện tại các bé đã tiêm tẩy giun đường 
                    ruột, 2 tháng tuổi, ăn cơm mạnh. bạn nào quan tâm vui lòng call trước khi qua 
                    xem bé tại nhà m.`,
            price: 1200000,
            sale: 0,
            favorite: true,
            sold: 164,
            star: 3,
            brand: "Nguyễn An",
            origin: "Việt Nam",
            new: true,
            pathCarousel: {
                path1: "./assets/img/dog-shop/samoyed-nhat-1.jpg",
                path2: "./assets/img/dog-shop/samoyed-nhat-2.jpg",
            },
            phone: "0122 234 234",
        },
        {
            id: 21,
            path: "./assets/img/dog-shop/fox-soc.jpg",
            title: "Chó Fox Sóc nhà nuôi",
            content: `Cún nhà foc sóc bk nhà mình nuôi đẻ 1 bầy , 4 bé đực, 4 bé cái.
                    Đăng tin tìm chủ mới cho các bé cún chân lùn mini, 2 tháng tuổi, các bé ăn cơm mạnh.
                    Bạn nào quan tâm vui lòng điện thoại ghé xem tại nhà m.`,
            price: 1500000,
            sale: 0,
            favorite: true,
            sold: 190,
            star: 4,
            brand: "Fox Shop",
            origin: "Việt Nam",
            new: true,
            pathCarousel: {
                path1: "./assets/img/dog-shop/fox-soc-1.jpg",
                path2: "./assets/img/dog-shop/fox-soc-2.jpg",
            },
            phone: "0122 234 234",
        },
        {
            id: 22,
            path: "./assets/img/dog-shop/pom.jpg",
            title: "Pom F1 500gram 2 tháng",
            content: `cần tìm chủ mới yêu thương cho các bé cún fox f1 mini, đực cái đều có. các bé được 2 tháng tuổi. cực lanh lợi. ăn cơm mạnh. đã tiêm đường ruột và tây giun đầy đủ.
                    các b add zalo để trao đổi thông tin các bé nếu ở xa.
                    ban nào quan tam vui lòng Call trước khi qua xem cún tại nhà m.`,
            price: 1700000,
            sale: 0,
            favorite: true,
            sold: 120,
            star: 3,
            brand: "Pom Shop",
            origin: "Việt Nam",
            new: true,
            pathCarousel: {
                path1: "./assets/img/dog-shop/pom-1.jpg",
                path2: "./assets/img/dog-shop/pom-2.jpg",
            },
            phone: "0122 234 234",
        },
        {
            id: 23,
            path: "./assets/img/dog-shop/long-van-chuyen.jpg",
            title: "Lồng vận chuyển chó mèo",
            content: `Lồng vận chuyển hàng không nhỏ cho chó mèo, chất liệu tốt, không kích ứng da lông, bền, đẹp.
                    Chất liệu nhựa, có tay cầm dễ di chuyển khắp mọi nơi, có lưới thoáng khí.`,
            price: 600000,
            sale: 20,
            favorite: true,
            sold: 290,
            star: 5,
            brand: "Arele Shop",
            origin: "Việt Nam",
            new: true,
            pathCarousel: {
                path1: "./assets/img/dog-shop/long-van-chuyen-1.jpg",
                path2: "./assets/img/dog-shop/long-van-chuyen-2.jpg",
            },
            phone: "0122 234 234",
        },
        {
            id: 24,
            path: "./assets/img/dog-shop/long-banh-xee.png",
            title: "Lồng bánh xe di động cao cấp",
            content: `cần tìm chủ mới yêu thương cho các bé cún fox f1 mini, đực cái đều có. các bé được 2 tháng tuổi. cực lanh lợi. ăn cơm mạnh. đã tiêm đường ruột và tây giun đầy đủ.
                    các b add zalo để trao đổi thông tin các bé nếu ở xa.
                    ban nào quan tam vui lòng Call trước khi qua xem cún tại nhà m.`,
            price: 1450000,
            sale: 15,
            favorite: true,
            sold: 152,
            star: 4,
            brand: "Arele Shop",
            origin: "Việt Nam",
            new: true,
            pathCarousel: {
                path1: "./assets/img/dog-shop/long-banh-xee-1.png",
                path2: "./assets/img/dog-shop/long-banh-xee.png",
            },
            phone: "0122 234 234",
        },
        {
            id: 25,
            path: "./assets/img/dog-shop/rottweiler.jpg",
            title: "Chó Rottweiler thông minh",
            content: `Cần tìm nhà mới cho các bé Rottweiler
                    Giới tính: đực, cái
                    Tuổi: 2 tháng
                    Màu: black
                    Sức khoẻ: Tốt, đã tiêm ngừa
                    Bảo hành: 2 tuần
                    Giao cún toàn quốc và quốc tế`,
            price: 12500000,
            sale: 0,
            favorite: true,
            sold: 62,
            star: 5,
            brand: "Pet Shop",
            origin: "Việt Nam",
            new: true,
            pathCarousel: {
                path1: "./assets/img/dog-shop/rottweiler-1.jpg",
                path2: "./assets/img/dog-shop/rottweiler-2.jpg",
            },
            phone: "0122 234 234",
        },
        {
            id: 26,
            path: "./assets/img/dog-shop/cho-bac-kinh.jpg",
            title: "Chó Bắc Kinh Nhật mini",
            content: `Tìm chủ mới yêu thương cho các bé cún mini mập lùn, ú nu. 
                    Các bé hiện được 2 tháng tuổi, ăn cơm mạnh, đã tiêm 1 mũi tẩy giun, chó nhà nuôi nên ăn mạnh, 
                    liên hệ sdt trước khi qua xem trực tiếp giúp m nhé.`,
            price: 1500000,
            sale: 0,
            favorite: true,
            sold: 129,
            star: 4,
            brand: "Shop Bắc Kinh",
            origin: "Việt Nam",
            new: false,
            pathCarousel: {
                path1: "./assets/img/dog-shop/cho-bac-kinh-1.jpg",
                path2: "./assets/img/dog-shop/cho-bac-kinh-2.jpg",
            },
            phone: "0122 234 234",
        },
        {
            id: 27,
            path: "./assets/img/dog-shop/cho-con.jpg",
            title: "Chó con lai Nhật",
            content: `Bé giống được, sinh ngày 11/6, chưa chích ngừa, chưa sổ lãi, bạn nào muốn bé 
                    về với gia đình mình thì qua nhà mình lấy hoặc book ship qua lấy nha, hỗ trợ mình 500k tiền sữa, cảm ơn!`,
            price: 500000,
            sale: 0,
            favorite: true,
            sold: 241,
            star: 5,
            brand: "Uyên My",
            origin: "Việt Nam",
            new: true,
            pathCarousel: {
                path1: "./assets/img/dog-shop/cho-con-1.jpg",
                path2: "./assets/img/dog-shop/cho-con-2.jpg",
            },
            phone: "0122 234 234",
        },
        {
            id: 28,
            path: "./assets/img/dog-shop/tini-poodle.jpg",
            title: "Tini Poodle 2.5 tháng",
            content: `cần tìm chủ mới yêu thuơng cho bày cún nhỏ, đực cái, đầy đủ. 
                    Cún nhà m nuôi đẻ, bảo đảm sức khỏe. đã tiêm 1 mũi vaccine, sổ sức khỏe đây đủ.`,
            price: 3600000,
            sale: 0,
            favorite: 0,
            sold: 169,
            star: 5,
            brand: "Lê Anh",
            origin: "Việt Nam",
            new: true,
            pathCarousel: {
                path1: "./assets/img/dog-shop/tini-poodle-1.jpg",
                path2: "./assets/img/dog-shop/tini-poodle-2.jpg",
            },
            phone: "0122 234 234",
        },
        {
            id: 29,
            path: "./assets/img/dog-shop/phu-quoc.jpg",
            title: "Chó Phú Quốc F1",
            content: `Cha f1 phú quốc
                    Mẹ lai phú quốc
                    2 cái 2 đực đã ăn đc tốt.
                    Tất cả có xoáy....nhanh nhẹn, quấn chủ.
                    Tìm chủ mới...`,
            price: 2300000,
            sale: 0,
            favorite: true,
            sold: 176,
            star: 5,
            brand: "Văn Quang",
            origin: "Việt Nam",
            new: true,
            pathCarousel: {
                path1: "./assets/img/dog-shop/phu-quoc-1.jpg",
                path2: "./assets/img/dog-shop/phu-quoc-2.jpg",
            },
            phone: "0122 234 234",
        },
        {
            id: 30,
            path: "./assets/img/dog-shop/chuong-inox.jpg",
            title: "Chuồng Inox",
            content: `Bảo hành sản phẩm 10 năm cho khách yên tâm sử dụng, giao hàng toàn quốc.
                    Kb Zalo để xem nhiều clip chuồng và đc tư vấn kĩ hơn về mẫu mã.`,
            price: 700000,
            sale: 35,
            favorite: 0,
            sold: 129,
            star: 5,
            brand: "Hải Trúc",
            origin: "Việt Nam",
            new: true,
            pathCarousel: {
                path1: "./assets/img/dog-shop/chuong-inox-1.jpg",
                path2: "./assets/img/dog-shop/chuong-inox-2.jpg",
            },
            phone: "0122 234 234",
        },
        {
            id: 31,
            path: "./assets/img/dog-shop/vong-co.jpg",
            title: "Vòng cổ cà vạt thú cưng",
            content: `Bảo hành sản phẩm 10 năm cho khách yên tâm sử dụng, giao hàng toàn quốc.
                    Kb Zalo để xem nhiều clip chuồng và đc tư vấn kĩ hơn về mẫu mã.`,
            price: 50000,
            sale: 25,
            favorite: false,
            sold: 156,
            star: 5,
            brand: "Shoppp",
            origin: "Việt Nam",
            new: true,
            pathCarousel: {
                path1: "./assets/img/dog-shop/vong-co-1.jpg",
                path2: "./assets/img/dog-shop/vong-co-2.jpg",
            },
            phone: "0122 234 234",
        },
        {
            id: 32,
            path: "./assets/img/dog-shop/poodle-trang.jpg",
            title: "Poodle trắng",
            content: `Chúng tôi có shipper nhận ship tới nhà bạn trước 18g theo đúng quy định chỉ thị 16+
                    Rã đàn chó Tiny Poodle thuần chủng 2,5 tháng!`,
            price: 3900000,
            sale: 0,
            favorite: true,
            sold: 145,
            star: 5,
            brand: "Thanh An",
            origin: "Việt Nam",
            new: true,
            pathCarousel: {
                path1: "./assets/img/dog-shop/poodle-trang-1.jpg",
                path2: "./assets/img/dog-shop/poodle-trang-2.jpg",
            },
            phone: "0122 234 234",
        },
        {
            id: 33,
            path: "./assets/img/dog-shop/cho-bac-ha.jpg",
            title: "Chó Bắc Hà",
            content: `Mình sắp chuyển nhà cần tìm nhà mới cho chó Bắc hà đực trưởng thành 1 năm tuổi. 
                    Rất dũng mãnh và sung. Chó thông minh, trung thành và bảo vệ chủ.`,
            price: 4500000,
            sale: 0,
            favorite: true,
            sold: 126,
            star: 4,
            brand: "Shop Bắc Hà",
            origin: "Việt Nam",
            new: true,
            pathCarousel: {
                path1: "./assets/img/dog-shop/cho-bac-ha-1.jpg",
                path2: "./assets/img/dog-shop/cho-bac-ha-2.jpg",
            },
            phone: "0122 234 234",
        },
        {
            id: 34,
            path: "./assets/img/dog-shop/bully.jpg",
            title: "Chó Bully",
            content: `Bé ở khu vực Hồ Chí Minh
                    Giá yêu thương cho ba mẹ mới`,
            price: 7500000,
            sale: 0,
            favorite: true,
            sold: 212,
            star: 5,
            brand: "Shop TPHCM",
            origin: "Việt Nam",
            new: true,
            pathCarousel: {
                path1: "./assets/img/dog-shop/bully-1.jpg",
                path2: "./assets/img/dog-shop/bully-2.jpg",
            },
            phone: "0122 234 234",
        },
        {
            id: 35,
            path: "./assets/img/dog-shop/corgi-thuan.jpg",
            title: "Chó Corgi thuần",
            content: `Các bé ở khu vực Hồ Chí Minh
                    Giá cả yêu thương cho các sen`,
            price: 5000000,
            sale: 0,
            favorite: true,
            sold: 124,
            star: 5,
            brand: "Shop TPHCM",
            origin: "Việt Nam",
            new: true,
            pathCarousel: {
                path1: "./assets/img/dog-shop/corgi-thuan-1.jpg",
                path2: "./assets/img/dog-shop/corgi-thuan-2.jpg",
            },
            phone: "0122 234 234",
        },
        {
            id: 36,
            path: "./assets/img/dog-shop/poddle-den.jpg",
            title: "Poodle Đen",
            content: `Bé chó nhà em cần tìm nhà mới`,
            price: 4000000,
            sale: 0,
            favorite: true,
            sold: 181,
            star: 5,
            brand: "Shop Poodle",
            origin: "Việt Nam",
            new: true,
            pathCarousel: {
                path1: "./assets/img/dog-shop/poddle-den-1.jpg",
                path2: "./assets/img/dog-shop/poddle-den-2.jpg",
            },
            phone: "0122 234 234",
        },
        {
            id: 37,
            path: "./assets/img/dog-shop/corgi-soc.jpg",
            title: "Corgi phối sóc",
            content: `Mẹ corgy phối cha phóc sóc trắng cực đẹp và khôn ngoan, được 1,5 tháng tuổi rồi! 
                    Anh chị nào thích thì hãy nhanh tay liên hệ với Mình để chọn 1 bé (chỉ ra đi 1trong 2).
                    2 bé cực kỳ thông minh dễ mến giống như mẹ, biết hôn, biết lạy...`,
            price: 3000000,
            sale: 0,
            favorite: true,
            sold: 145,
            star: 4,
            brand: "An Lê",
            origin: "Việt Nam",
            new: true,
            pathCarousel: {
                path1: "./assets/img/dog-shop/corgi-soc-1.jpg",
                path2: "./assets/img/dog-shop/corgi-soc-2.jpg",
            },
            phone: "0122 234 234",
        },
        {
            id: 38,
            path: "./assets/img/dog-shop/phoc-soc.jpg",
            title: "Chó Phốc Sóc 2 tháng",
            content: `Chó mẹ nhà sinh 3 em Chó Phốc Sóc cần rã bầy
                    - 2 cái 1 đực
                    - Dưới 1kg
                    - Chó nhà sinh được 2 tháng tuổi.
                    - Đã sổ giun, chích ngừa 5 bệnh.`,
            price: 3400000,
            sale: 0,
            favorite: true,
            sold: 124,
            star: 5,
            brand: "Dương Tiễn",
            origin: "Việt Nam",
            new: true,
            pathCarousel: {
                path1: "./assets/img/dog-shop/phoc-soc-1.jpg",
                path2: "./assets/img/dog-shop/phoc-soc-2.jpg",
            },
            phone: "0122 234 234",
        },
        {
            id: 39,
            path: "./assets/img/dog-shop/phoc.jpg",
            title: "Phốc Sóc",
            content: `Phóc sóc , đực , tiêm ngừa đủ , 3 tháng , thuần chủng.`,
            price: 5200000,
            sale: 0,
            favorite: true,
            sold: 118,
            star: 4,
            brand: "Shop pet",
            origin: "Việt Nam",
            new: true,
            pathCarousel: {
                path1: "./assets/img/dog-shop/phoc-1.jpg",
                path2: "./assets/img/dog-shop/phoc-2.jpg",
            },
            phone: "0122 234 234",
        },
        {
            id: 40,
            path: "./assets/img/dog-shop/corgi-pembroke.jpg",
            title: "Chó Corgi Pembroke vàng trắng",
            content: `Giống chó xinh xắn, nhỏ gọn.`,
            price: 4200000,
            sale: 0,
            favorite: true,
            sold: 102,
            star: 5,
            brand: "Dogily Petshop",
            origin: "Việt Nam",
            new: true,
            pathCarousel: {
                path1: "./assets/img/dog-shop/corgi-pembroke-1.jpg",
                path2: "./assets/img/dog-shop/corgi-pembroke-2.jpg",
            },
            phone: "0122 234 234",
        },
        
    ],
    carts: [
        
    ],
    renderProducts: function(arr, component, start, end) {
        const htmls = arr.map(function(product, index){
            if (index >= start && index < end) {
                return `
                <div class="product-item col l-3 m-4 c-6" data-index="${index}">
                    <a onclick="return false" href="" class="home-product-item">
                        <div class="home-product-item__img"
                            style="background-image: url(${product.path}); background-repeat: no-repeat; background-position: center; background-size: cover;">
                        </div>
                        <h4 class="home-product-item__name">
                            ${product.title}
                        </h4>
                        <div class="home-product-item__price">
                            <span style="display: ${product.sale ? "" : "none"}"class="home-product-item__price-old">${numberToCoin(product.price)}đ</span>
                            <span class="home-product-item__price-current">
                                ${product.sale ? numberToCoin((product.price * (100 - product.sale) / 100).toFixed()) : numberToCoin(product.price)}đ
                            </span>
                        </div>
                        <div class="home-product-item__action">
                            <span class="home-product-item__like">
                            <i class="home-product-item__like-icon-empty far fa-heart"></i>
                            <i class="home-product-item__like-icon-fill fas fa-heart"></i>
                            </span>
                            <div class="home-product-item__rating">
                            <i class="${product.star >= 1 ? "home-product-item__rating--gold" : ""} fas fa-star"></i>
                            <i class="${product.star >= 2 ? "home-product-item__rating--gold" : ""} fas fa-star"></i>
                            <i class="${product.star >= 3 ? "home-product-item__rating--gold" : ""} fas fa-star"></i>
                            <i class="${product.star >= 4 ? "home-product-item__rating--gold" : ""} fas fa-star"></i>
                            <i class="${product.star >= 5 ? "home-product-item__rating--gold" : ""} fas fa-star"></i>
                            </div>
                            <span class="home-product-item__sold">
                                ${product.sold} đã bán
                            </span>
                        </div>
    
                        <div class="home-product-item__origin">
                            <span class="home-product-item__brand">${product.brand}</span>
                            <span class="home-product-item__origin-name">${product.origin}</span>
                        </div>
    
                        <div style="display: ${product.favorite ? "block" : "none"}" class="home-product-item__favorite">
                            <i class="fas fa-check"></i>
                            <span>Yêu thích</span>
                        </div>
    
                        <div style="display: ${product.sale ? "block" : "none"}" class="home-product-item__sale-off">
                            <span class="home-product-item__sale-off-percent">${product.sale}%</span>
                            <span class="home-product-item__sale-off-label">GIẢM</span>
                        </div>
                    </a>
                </div>
                `
            }
        })
        component.innerHTML = htmls.join('')
        
    },
    renderShoppingCart: function(arr, id){
        const htmls = `
        <div class="buy-product" data-index="${id}">
            <div class="buy-product__left">
            <div class="buy-product__img" style="background-image: url(${arr[id].path});" >
                
            </div>
            <div class="buy-product__info">
                <div class="buy-product__info-left">
                <div class="buy-product__info-img">
                    <img width="100%" src="./assets/img/avtar.png" alt="avatar">
                </div>
                <div class="buy-product__info-more">
                    <div class="buy-product__info-more__brand">
                        ${arr[id].brand}
                    </div>
                    <div class="buy-product__info-more-content">
                        <div class="buy-product__info-more__origin">
                            ${arr[id].origin}
                        </div>
                        <div class="buy-product__info-more__star">
                        <span>
                            ${arr[id].star}
                        </span>
                        <i class="fas fa-star"></i>
                        </div>
                    </div>
                </div>
                </div>
                <div class="buy-product__info-right">
                <div class="buy-product__info-more-follow">
                    <div class="buy-product__info-more-icon">
                    <i class="fas fa-heartbeat"></i>
                    </div>
                    <div class="buy-product__info-more-text">
                    Theo dõi
                    </div>
                </div>
                </div>
                </div>
            </div>
            <div class="buy-product__right">
            <div class="buy-product__name">
                ${arr[id].title}
            </div>
            <div class="buy-product__price">
                <div class="buy-product__price-new">
                    ${arr[id].sale ? numberToCoin((arr[id].price * (100 - arr[id].sale) / 100).toFixed()) : numberToCoin(arr[id].price)}đ
                </div>
                <div style="display: ${arr[id].sale ? 'flex' : 'none'}" class="buy-product__sale-off">
                    <div class="buy-product__price-old">
                        ${numberToCoin(arr[id].price)}đ
                    </div>
                <div class="buy-product__sale-number">
                    Giảm
                    <span>
                        ${arr[id].sale}
                    </span>
                    %
                </div>
                </div>
                <div class="buy-product__sold">
                <div class="buy-product__sold-icon">
                    <i class="fas fa-cart-arrow-down"></i>
                </div>
                <div class="buy-product__sold-number">
                    ${arr[id].sold} lượt mua
                </div>
                </div>
            </div>
            <hr>
            <div class="buy-product__quantity">
                <div class="buy-product__quantity-left">
                Chọn số lượng:
                </div>
                <div class="buy-product__quantity-right">
                <div class="buy-product__quantity-btn sub-btn active">

                </div>
                <div onclick="return false"class="buy-product__quantity-number">
                    1
                </div>
                <div class="buy-product__quantity-btn add-btn">

                </div>
                </div>
            </div>
            <div class="buy-product__note">
                <div class="buy-product__note-icon">
                <i class="fas fa-exclamation"></i>
                </div>
                <div class="buy-product__text">
                Chỉ được mua tối đa
                <span>
                    5
                </span>
                sản phẩm.
                </div>
            </div>
            <div class="buy-product__action">
                <div class="buy-product__action-cartplus" data-index="${id}">
                <div class="buy-product__action-icon">
                    <i class="fas fa-cart-plus"></i>
                </div>
                <div class="buy-product__action-text">
                    Thêm vào giỏ
                </div>
                </div>
                <div class="buy-product__action-buynow" data-index="${id}">
                <div class="buy-product__action-icon">
                    <i class="far fa-credit-card"></i>
                </div>
                <div class="buy-product__action-text">
                    Mua ngay
                </div>
                </div>
            </div>
            <hr>
            <div class="buy-product__more-list">
                <div class="buy-product__more-item">
                <div class="buy-product__more-title">
                    Ưu đãi dành cho bạn
                </div>
                <div class="buy-product__more-content">
                    <div class="buy-product__more-icon">
                    <i style="color: #14babd" class="fas fa-shipping-fast"></i>
                    </div>
                    <div class="buy-product__more-text">
                    Miễn phí vận chuyển
                    </div>
                </div>
                <div class="buy-product__more-note-icon">
                    <i class="fas fa-exclamation"></i>
                </div>
                </div>
                <hr>
                <div class="buy-product__more-item">
                <div class="buy-product__more-title">
                    Quyền lợi khách hàng
                </div>
                <div class="buy-product__more-content">
                    <div class="buy-product__more-icon">
                    <i style="color: #74bd8f"class="fas fa-user-shield"></i>
                    </div>
                    <div class="buy-product__more-text">
                    48 giờ hoàn trả
                    </div>
                </div>
                <div class="buy-product__more-note-icon">
                    <i class="fas fa-exclamation"></i>
                </div>
                </div>
            </div>
            </div>
        </div>
        `
        $('.buy-render').innerHTML = htmls
    },
    renderCarts: function(){
        const htmls = this.carts.map((cart, index) => {
            return `
            <li class="header__cart-item" data-index="${index}">
            <img src="${cart.path}" alt="" class="header__cart-img">
            <div class="header__cart-item-info">
                <div class="header__cart-item-head">
                <h5 class="header__cart-item-name">
                    ${cart.name}
                </h5>
                <div class="header__cart-item-wrap">
                    <span class="header__cart-item-price">${cart.price}</span>
                    <span class="header__cart-item-mul">x</span>
                    <span class="header__cart-item-quantity">${cart.quantity}</span>
                </div>
                </div>
                <div class="header__cart-item-body">
                <span class="header__cart-item__brand">
                    Shop: ${cart.brand}
                </span>
                <span class="header__cart-item-remove" data-index="${index}">Xóa</span>
                </div>
            </div>
            </li>
            `
        })
        $('.header__cart-list-item').innerHTML = htmls.join("")
    },
    handleEvent: function(){
        const _this = this
        const homeFilterBtns = $$('.btn.home-filter__label-btn')
        const homeProductsList = $('.home-product>.row')

        //signup, login
        showSignUp = function(){
            $('.modal').style.display = 'flex'
            $('.auth-form.signup').style.display = "block"
            $('.auth-form.login').style.display = "none"
            $('.buy-render').classList.remove('active')
            document.body.style.overflow = "hidden"
        }
        showLogin = function(){
            $('.modal').style.display = 'flex'
            $('.auth-form.login').style.display = "block"
            $('.auth-form.signup').style.display = "none"
            $('.buy-render').classList.remove('active')
            document.body.style.overflow = "hidden"
        }
        showInfoProduct = function(){
            $('.modal').style.display = 'flex'
            $('.auth-form.login').style.display = "none"
            $('.auth-form.signup').style.display = "none"
            $('.buy-render').classList.add('active')
            document.body.style.overflow = "hidden"
        }
        closeOverplay = function(){
            $('.modal').style.display = 'none'
            $('.auth-form.login').style.display = "none"
            $('.auth-form.signup').style.display = "none"
            $('.buy-render').classList.remove('active')
            document.body.style.overflow = "auto"
        }

        window.onclick = function(e) {
            if(e.target.classList.contains('modal__overplay')){
                closeOverplay()
            }
        }

        $$('.btn-signUp').forEach((item) => {
            item.onclick = function(){
                showSignUp()
            }
        })

        $$('.btn-login').forEach((item) => {
            item.onclick = function(){
                showLogin()
            }
        })

        $$('.auth-form__control-back').forEach((item) => {
            item.onclick = function(){
                closeOverplay()
            }
        })

        //render thông tin
        $('.home-product').onclick = function(e){
            const x = e.target.closest('.product-item')
            homeFilterBtns.forEach((homeFilterBtn, index) => {
                if(homeFilterBtn.classList.contains('btn--primary')) {
                    _this.renderShoppingCart(homeFilter[index], x.dataset.index)
                    _this.quantity = 1;
                }
            })
            showInfoProduct()
        }


        //mảng sản phẩm mới
        const newList = this.products.filter((product) => product.new)
        //mảng sản phẩm yêu thích
        const favList = this.products.filter((product) => product.favorite)
        //mảng các danh mục 
        const homeFilter = [this.products, newList, favList]

        //array sort a-z (theo giá)
        toArrAZ = function(arr){
            return arr.sort(function(a, b) {return a.price - b.price})
        }
        //array sort z-a (theo giá)
        toArrZA = function(arr){
            return arr.sort(function(a, b) {return b.price - a.price})
        }

        //active home filter btn
        activeHomeFilterBtn = function(btn){
            homeFilterBtns.forEach(item => {
                item.classList.remove('btn--primary');
            });
            btn.classList.add('btn--primary');
        }
        //onclick show list filter
        homeFilterBtns.forEach((homeFilterBtn, index) => {
            homeFilterBtn.onclick = function(){
                activeHomeFilterBtn(this)
                _this.gotoPage(1)
                _this.renderProducts(homeFilter[index], homeProductsList, _this.startItem, _this.endItem)
                renderFilterPage()
            }
        })
        //render list phổ biến khi vào trang
        _this.renderProducts(this.products, homeProductsList, this.startItem, this.endItem)

        //render list giá tăng dần
        $('.sort--a-z').onclick = function(){
            homeFilterBtns.forEach((homeFilterBtn, index) => {
                if(homeFilterBtn.classList.contains('btn--primary')) {
                    _this.renderProducts(toArrAZ(homeFilter[index]), homeProductsList, _this.startItem, _this.endItem)
                }
            })
        }
        //render list giá giảm dần
        $('.sort--z-a').onclick = function(){
            homeFilterBtns.forEach((homeFilterBtn, index) => {
                if(homeFilterBtn.classList.contains('btn--primary')) {
                    _this.renderProducts(toArrZA(homeFilter[index]), homeProductsList, _this.startItem, _this.endItem)
                }
            })
        }

        //render page
        const numberPages = Math.ceil(this.products.length / this.itemPerPage)
        let htmls = ""
        for(let i = 1; i <= numberPages; i++) {
            htmls += `
                <li class="pagination-item" data-index="${i}">
                    ${i}
                </li>
            `
        }
        $('.pagination-list').innerHTML = htmls
        
        //home filter page
        renderFilterPage = function(){
            $('.home-filter__page-num').innerHTML = `
                <span class="home-filter__page-current">
                    ${_this.currentPage}
                </span>
                /${numberPages}
            `
        }
        renderFilterPage()
        
        //active Page
        activePageBtn = function(page){
            $$('.pagination-list li').forEach(item => {
                item.classList.remove('active');
            });
            page.classList.add('active');
        }

        //active page khi load vào trang
        activePageBtn($$('.pagination-list li')[0])

        //renderlist theo phổ biến, mới, yêu thích
        function renderlist(){
            homeFilterBtns.forEach((homeFilterBtn, index) => {
                if(homeFilterBtn.classList.contains('btn--primary')) {
                    _this.renderProducts(homeFilter[index], homeProductsList, _this.startItem, _this.endItem)
                }
            })
        }

        $$('.pagination-list li').forEach((item, index) => {
            item.onclick = function(){
                _this.currentPage = index + 1;
                _this.gotoPage(_this.currentPage)
                renderlist()
                renderFilterPage()
            }
        })

        //next, prev btn page
        $$('.btn-nextPage').forEach((item) => {
            item.onclick = () => {
                _this.nextPage()
                renderlist()
                renderFilterPage()
            }
        })

        $$('.btn-prevPage').forEach((item) => {
            item.onclick = () => {
                _this.prevPage()
                renderlist()
                renderFilterPage()
            }
        })

        //slider
        const slider = ["./assets/img/dog-shop/banner-4.png", "./assets/img/dog-shop/banner-2.jpg", "./assets/img/dog-shop/banner-3.jpg", "./assets/img/dog-shop/banner.jpg"]
        let indexSlider = 0;
        setInterval(function(){
            indexSlider++;
            if (indexSlider > slider.length - 1) {
                indexSlider = 0;
            }
            $('.slider-imgs img').src = slider[indexSlider];
        }, 5000)


        //search mobile
        $('.header-icon-search-mobile').onclick = function(){
            $('.header__search-box').classList.toggle('active');
            closeMenuMobile()
        }

        $('.header__cart').onclick = function(){
            closeMenuMobile()
        }

        //menu mobile
        $('.header-icon-menu-mobile').onclick = () => {
            $('.menu-mobile').classList.toggle('active');
        }

        //close menumobile
        closeMenuMobile = function () {
            $('.menu-mobile').classList.remove('active');
        }

        //show, hide thanh mua hàng trên mobile
        $('.buy-render').onscroll = function () {
            const height = this.offsetHeight;
            const x = $('.buy-product__action').getBoundingClientRect().top
            if (x < height + 40) {
                $('.action-mobile').classList.remove('active')
            }else {
                $('.action-mobile').classList.add('active')
            }
        }

        //check cart rỗng hay không
        checkCart = function(){
            if(_this.carts.length) {
                $('.header__cart-list-no-cart').style.display = 'none'
                $('.header__cart-list-has-cart').style.display = 'block'
            } else {
                $('.header__cart-list-no-cart').style.display = 'block'
                $('.header__cart-list-has-cart').style.display = 'none'
            }
        }

        addProduct = function(component){
            _this.quantity++;
                if(_this.quantity >= 5){
                    _this.quantity = 5;
                    component.classList.add('active')
                }
        }

        subProduct = function(component){
            _this.quantity--;
                if(_this.quantity <= 1){
                    _this.quantity = 1;
                    component.classList.add('active')
                }
                
        }

        //add vào giỏ hàng
        $('.buy-render').onclick = function(e){
            const cartplusBtn = e.target.closest('.buy-product__action-cartplus')
            const addQuantity = e.target.closest('.add-btn')
            const subQuantity = e.target.closest('.sub-btn')
            const quantityBtns = e.target.closest('.buy-product__quantity')
            if (quantityBtns){
                const quantityBtnsArr = quantityBtns.querySelectorAll('.buy-product__quantity-btn')
                quantityBtnsArr.forEach((item) => {
                    item.classList.remove('active')
                })
                if(addQuantity){
                    addProduct(addQuantity)
                }
                if(subQuantity){
                    subProduct(subQuantity)
                }
                $('.buy-product__quantity-number').innerHTML = _this.quantity;
            }
            
            if (cartplusBtn){
                const id = cartplusBtn.dataset.index
                homeFilterBtns.forEach((homeFilterBtn, index) => {
                    if(homeFilterBtn.classList.contains('btn--primary')) {
                        const obj = {
                            id: id,
                            path:  homeFilter[index][id].path,
                            name:  homeFilter[index][id].title,
                            brand:  homeFilter[index][id].brand,
                            price:  homeFilter[index][id].price,
                            quantity: _this.quantity,
                        }
                        _this.carts.unshift(obj)
                        $('.header__cart-notice').innerHTML = ++_this.countCart;
                        _this.quantity = 1
                        $('.buy-product__quantity-number').innerHTML = _this.quantity;
                        _this.renderCarts()
                        checkCart()
                    }
                })
            }
        }

        //xoá sản phẩm trong giỏ
        $('.header__cart-list-item').onclick = function(e){
            const deleteProductBtn = e.target.closest('.header__cart-item-remove')
            const id = deleteProductBtn.dataset.index
            _this.carts.splice(id, 1)
            $('.header__cart-notice').innerHTML = --_this.countCart;
            _this.renderCarts()
            checkCart()
        }


        $('.action-mobile__close').onclick = () => {
            closeOverplay()
        }

        window.onresize = function(){
            if (window.innerWidth > 1024){
                $('.action-mobile').classList.remove('active')
            }
        }

    },
    gotoPage: function (page) {
        this.currentPage = page
        this.startItem = (page - 1) * this.itemPerPage
        this.endItem = page * this.itemPerPage
        activePageBtn($$('.pagination-list li')[this.currentPage - 1])
    },
    nextPage: function () {
        const numberPages = Math.ceil(this.products.length / this.itemPerPage)
        this.currentPage++
        if (this.currentPage > numberPages) {
            this.currentPage = numberPages
        }
        this.startItem = (this.currentPage - 1) * this.itemPerPage
        this.endItem = this.currentPage * this.itemPerPage
        activePageBtn($$('.pagination-list li')[this.currentPage - 1])
    },
    prevPage: function () {
        this.currentPage--
        if (this.currentPage < 1) {
            this.currentPage = 1
        }
        this.startItem = (this.currentPage - 1) * this.itemPerPage
        this.endItem = this.currentPage * this.itemPerPage
        activePageBtn($$('.pagination-list li')[this.currentPage - 1])
    },
    start: function(){
        this.handleEvent()
    }
}

app.start()