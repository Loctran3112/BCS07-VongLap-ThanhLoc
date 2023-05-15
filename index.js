// Bài 1: Tìm 1 số nguyên dương nhỏ nhất sao cho: 1 + 2 +...+ n > 10000
function soNguyenToNhoNhat() {
    var soNguyenCanTim = + document.getElementById("so").value;
    var tongNguyenTo = 0;
    for (var i = 0; i <= soNguyenCanTim; i++) {
        tongNguyenTo += i;
    }
    return i;
}
document.querySelector(".bg-light").innerHTML = "số nguyên dương nhỏ nhất lớn hơn 10000 là: " + soNguyenToNhoNhat();

// Bài 2: Viết chương trình nhập vào 2 số x, y tính tổng : S(y) = x + x^2 + x^3 +...+ x^y ( sử dụng vòng lặp và hàm)
function tinhTongKySoBinhPhuong() {
    var soX = document.getElementById("soX").value * 1;
    var soY = document.getElementById("soY").value * 1;
    // do-while:
    var soXBinhPhuongY = 1;
    var tongKySoS = 0;
    do {
        tongKySoS += Math.pow(soX, soXBinhPhuongY);
        soXBinhPhuongY++;
    }
    while (soXBinhPhuongY <= soY);
    document.querySelector(".bg-primary").innerHTML = "tính tổng ký số bình phương " + tongKySoS;

    // for:
    // for (var i=1; i <= soY; i++){
    //     tongKySoS += Math.pow(soX,i);
    // }
    // document.querySelector(".bg-primary").innerHTML = "Tổng S(y) là : " + tongKySoS;
}

// Bài 3: Nhập vào n. Tính giai thừa 1*2*...n.
function tinhGiaiThuaCacKySo() {
    var soNBatKy = document.getElementById("soN").value * 1;
    var giaiThuaCacKySo = 1;

    // do-while:
    // var noiBatDau = 1;
    // do {
    //     giaiThuaCacKySo *= noiBatDau;
    //     noiBatDau++;
    // }
    // while (noiBatDau <= soNBatKy);
    // document.querySelector(".bg-danger").innerHTML = "Giai thừa các ký số từ 1 cho tới N là " + giaiThuaCacKySo;

    // for:
    for (var i = 1; i <= soNBatKy; i++) {
        giaiThuaCacKySo *= i;
    }
    document.querySelector(".bg-danger").innerHTML = "Giai thừa các ký số từ 1 cho tới N là " + giaiThuaCacKySo;
}

// Bài 4: Hãy viết chương trình khi click vào button sẽ in ra 10 thẻ div.Nếu div vào vị trí chẵn thì bg- đỏ, lẻ thì bg-xanh
function clickOnButton() {
    var theDiv = "";
    for (var i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            theDiv +=
                "<div style='background-color:red; width:30%; color:black;  '>Thẻ div chẵn " + i + "</div>";
        } else {
            theDiv +=
                "<div style='background-color:blue; width:30%; color:black;  '>Thẻ div lẻ " + i + "</div>";
        }
    }
    document.getElementById("theDiv").innerHTML = theDiv;
}

// Bài 5: Viết chương trình có 1 ô input, 1 button. Khi click vào button thì in ra các số nguyên tố từ 1 tới giá trị của ô input
function tinhCacSoNguyenTo() {
    var soNguyen = document.getElementById("soNguyenDuong").value * 1;
    var number = "";
    var n = 1;
    if (soNguyen >= 2) {
        function check(soNguyen) {
            for (var i = 2; i < soNguyen; i++) {
                if (soNguyen % i == 0) {
                    var check = "ko";
                    break;
                }
            }
            if (check != "ko") {
                number += "Số: " + soNguyen.toLocaleString() + "<br>";
                var soLuong = n++;
                document.getElementById("soLuong").innerHTML = "Tìm được " + soLuong.toLocaleString() + " số nguyên tố là:";
            }
        }
        for (var x = 2; x <= soNguyen; x++) {
            check(x);
            document.getElementById("soNguyenTo").innerHTML = number;
        }
    } else {
        alert("Nhập vào số > 1");
    }
}
