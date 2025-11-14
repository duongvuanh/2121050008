CREATE DATABASE IF NOT EXISTS quan_ly_web_phim;

CREATE TABLE nguoi_dung;
	
1.thể loại
	- id int PRIMARY KEY
    - tenTheLoai varchar(50)
2. user
	- admin int PRIMARY KEY
    - nguoi_dung int
    - ten_dang_nhap varchar(50) *đạo diễn, diễn viên ko cần có cái này
    - mat_khau varchar(50) *đạo diễn, diễn viên ko cần có cái này
    - ho_ten varchar(50)
    - email varchar(50)
    - sđt varchar(10)
    - role_id int
    - ngay_sinh datetime
3. role
	- id 
3.phim
	- id int PRIMARY KEY
	- ten_phim varchar
    - dao_dien_id int 
    - dien_vien_id int
    - thoi_luong int
    - ma_phat_hanh int
    - poster varchar(max)
    - so_tap int
4.phim dien vien
    - id int PRIMARY KEY
    - phim_id int
    - dien_vien_id
5.phim_the_loai
    -id int
    - phim_id int 
    - the_loai_id
3.thể loại
	- id int PRIMARY KEY
    - tenTheLoai varchar(50)
4.quốc gia
    - id int 
    - ten_quoc_gia varchar(50)
    - quoc_gia_id int
5.tập phim
	- id int
    - maPhim int
6.