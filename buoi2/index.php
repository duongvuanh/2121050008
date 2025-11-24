<?php
    // cookie   
    # Lưu ở phía người dùng
    # Dùng cho những thông tin ít quan trọng
    $cookieName = "user";
    $cookievalue = "VuAnh";
    // 86400 = 30ngafy
    setcookie($cookieName, $cookievalue, time()+(86400), "/");
    if(isset($_COOKIE[$cookieName])){
        echo "cookie đã tồn tại";
    } else {
        echo "cookie chưa tồn tại";
    }
    //session
    # Thông tin đăng nhập, giỏ hàng, ...
    session_start();
    $_SESSION["name"] = "Vu Anh";
    
    echo $_SESSION["name"];
?>