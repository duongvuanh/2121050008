let danhSachPhim = [
    // {
    //     id: 1,
    //     tenPhim: "Kungfu Panda 4",
    //     namPhatHanh: 2025,
    //     thoiLuong: 2,
    //     quocGia: "Mỹ",
    //     poster: 'kungfupanda.jpg',
    //     theLoai: "Phim Thiếu Nhi"
    // },
    {
        id: 1,
        tenPhim: "Connan",
        namPhatHanh: 2022,
        thoiLuong: 1.5,
        quocGia: "Nhật Bản",
        poster: 'conan.jpg',
        theLoai: "Phim Hoạt Hình"
    },
    {
        id: 2,
        tenPhim: "Kungfu Panda 4",
        namPhatHanh: 2025,
        thoiLuong: 2,
        quocGia: "Mỹ",
        poster: 'kungfupanda.jpg',
        theLoai: "Phim Thiếu Nhi"
    },
    {
        id: 3,
        tenPhim: "John Wick",
        namPhatHanh: 2020,
        thoiLuong: 20,
        quocGia: "Mỹ",
        poster: 'johnwi.jpg',
        theLoai: "Phim Hành Động"
    }
]

let banner = document.getElementsByClassName(advertisement-1)[0];

function chonPhim(idPhim) {
    for (let i = 0; i < danhSachPhim.length; i++) {
        if (danhSachPhim[i].id == idPhim) {
            banner.src = danhSachPhim[i].poster;
        }  
    }
}
