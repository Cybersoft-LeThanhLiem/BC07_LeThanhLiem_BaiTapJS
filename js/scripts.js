/**
 * Bài 3: Quy đổi tiền
 */

/**
 * Input:
 * amountUSD
 * rate
 * 
 * Process:
 * 1. Khai báo biến inputs
 * 2. Gán giá trị cho biến inputs
 * 3. Tính tiền VND:
 * amountVND = amountUSD * rate;
 * 4. Hiện kết quả
 * 
 * Output:
 * amountVND
 */

var amountUSD = 0;
var rate = 23500;
var amountVND = 0;

document.getElementById("bai3").onclick = function () {
    amountUSD = Number(prompt("Nhập vào số lượng USD: "));
    amountVND = rate * amountUSD;
    alert("Số tiền VND: " + amountVND + " VND");
}

/**
 * Bài 4: Tính diện tích, chu vi hình chữ nhật
 */

/**
 * Input:
 * width, height
 * 
 * Process:
 * 1. Khai báo biến inputs
 * 2. Gán giá trị cho biến inputs
 * 3. Tính diện tích HCN
 * s = width * height;
 * 4. Tính chu vi HCN
 * p = (width + height) * 2;
 * 4. Hiện kết quả
 * 
 * Output:
 * s, p
 */

var width = 0;
var height = 0;
var s = 0;
var p = 0;

document.getElementById("bai4").onclick = function () {
    width = Number(prompt("Nhập chiều rộng: "));
    height = Number(prompt("Nhập chiều dài: "));
    s = width * height;
    p = (width + height) * 2;
    alert("Diện tích HCN: " + s);
    alert("Chu vi HCN: " + p);
}

/**
 * Bài 5: Tính tổng 2 chữ số
 */

/**
 * Input:
 * n
 * 
 * Process:
 * 1. Khai báo biến input
 * 2. Gán giá trị cho biến input
 * 3. Tìm chữ số hàng chục
 * ten = Math.floor(n / 10);
 * 4. Tìm chữ số hàng đơn vị
 * unit = n % 10;
 * 4. Tính tổng 2 chữ số
 * sum = ten + unit;
 * 4. Hiện kết quả
 * 
 * Output:
 * sum
 */

var n = 0;
var ten = 0;
var unit = 0;
var sum = 0;

document.getElementById("bai5").onclick = function () {
    n = Number(prompt("Nhập số n có 2 chữ số: "));
    ten = Math.floor(n / 10);
    unit = n % 10;
    sum = ten + unit;
    alert("Tổng 2 chữ số của n: " + sum);
}
 



