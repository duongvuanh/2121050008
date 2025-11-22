let danhSachPhim = [
    {
        id: 1,
        tenPhim: "Conan Movie 5: Ngôi sao năm cánh triệu đô",
        namPhatHanh: 2022,
        thoiLuong: 1.5,
        quocGia: "Nhật Bản",
        poster: "conan.jpg",
        theLoai: "Phim Hoạt Hình"
    },
    {
        id: 2,
        tenPhim: "Cô giáo em là số 1",
        namPhatHanh: 2025,
        thoiLuong: 2,
        quocGia: "Hàn",
        poster: "cogiaoemlaso1.jpg",
        theLoai: "Phim Hàn"
    },
    {
        id: 3,
        tenPhim: "Người đẹp và Quái Thú",
        namPhatHanh: 2020,
        thoiLuong: 2,
        quocGia: "Mỹ",
        poster: "beautyandthebeaets.jpg",
        theLoai: "Phim Cổ tích"
    },
    {
        id: 4,
        tenPhim: "Bỗng Dưng Trúng Số",
        namPhatHanh: 2020,
        thoiLuong: 2,
        quocGia: "Hàn",
        poster: "bongdungtrungso.jpg",
        theLoai: "Phim Hài"
    },
    {
        id: 5,
        tenPhim: "KungFu Panda 4",
        namPhatHanh: 2020,
        thoiLuong: 1.5,
        quocGia: "Mỹ",
        poster: "kungfupanda.jpg",
        theLoai: "Phim Hoạt Hình"
    },
    {
        id: 6,
        tenPhim: "John Wick",
        namPhatHanh: 2020,
        thoiLuong: 2,
        quocGia: "Mỹ",
        poster: "johnwi.jpg",
        theLoai: "Phim Hành Động"
    },
    {
        id: 7,
        tenPhim: "Kẻ Ăn Hồn",
        namPhatHanh: 2020,
        thoiLuong: 2,
        quocGia: "Việt Nam",
        poster: "keanhon.jpg",
        theLoai: "Phim Kinh Dị"
    },
    {
        id: 8,
        tenPhim: "Kẻ Cắp Mặt Trăng",
        namPhatHanh: 2020,
        thoiLuong: 2,
        quocGia: "Mỹ",
        poster: "minion.jpg",
        theLoai: "Phim Hoạt Hình"
    },
    {
        id: 9,
        tenPhim: "Đi tìm Nemo",
        namPhatHanh: 2020,
        thoiLuong: 2,
        quocGia: "Mỹ",
        poster: "nemo.jpg",
        theLoai: "Phim Hoạt Hình"
    },
    {
        id: 10,
        tenPhim: "Câu Chuyện Đồ Chơi",
        namPhatHanh: 2020,
        thoiLuong: 2,
        quocGia: "Mỹ",
        poster: "toys.jpg",
        theLoai: "Phim Hoạt Hình"
    },
    
];

let banner = document.getElementsByClassName("advertisement-1")[0].getElementsByTagName("img")[0];
let info = document.querySelector(".advertisement-1 .movie-info");

function chonPhim(idPhim) {
    for (let i = 0; i < danhSachPhim.length; i++) {
        if (danhSachPhim[i].id === idPhim) {
            banner.src = danhSachPhim[i].poster;
            
            info.innerHTML =
                '<h3>' + danhSachPhim[i].tenPhim + '</h3>' +
                '<p>Thể loại: ' + danhSachPhim[i].theLoai + '</p>' +
                '<p>Năm: ' + danhSachPhim[i].namPhatHanh + '</p>' +
                '<p>Thời lượng: ' + danhSachPhim[i].thoiLuong + ' giờ</p>' +
                '<p>Quốc gia: ' + danhSachPhim[i].quocGia + '</p>';
        }
    }
}
