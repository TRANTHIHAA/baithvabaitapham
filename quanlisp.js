var matHang=["Sony Xperia","Samsung Galaxy","Nokia 6","Xiaomi RedmiNote 4","Apple iPhone 6S","Xiaomi Mi 5s Plus","Apple iPhone 8 plus","Fujitsu F-04E","Oppo A71"];
function hienThi(matHang) {
    let s="";
    for (let i=0;i<matHang.length;i++){
        s=s+(i+1)+". "+matHang[i]+ "<button onclick=\"edit("+i+")\"> Edit</button>\n" +
            "<button onclick=\"xoa("+i+")\">Delete</button>\n" +"<br>" ;
    }
    return s;
}

function add() {
    let newMatHang =document.getElementById("them_san_pham").value;
    matHang.push(newMatHang);
    document.getElementById("ds").innerHTML = hienThi(matHang);
}

function edit(index) {
    //let index = prompt("Nhập số thứ tự muốn sửa: ");
    let newMatHang = prompt("Nhập tên mặt hàng thay thế: ");
    matHang[index] = newMatHang;
    document.getElementById("ds").innerHTML = hienThi(matHang);
}

function xoa(index) {
    //let index = prompt("Nhập số thứ tự muốn xóa: ");
    matHang.splice(index,1);
    document.getElementById("ds").innerHTML = hienThi(matHang);
}
document.getElementById("ds").innerHTML = hienThi(matHang);