function checkValue(value, valueSpanIdNhanVien){
    if(value == ''){
        document.getElementById(valueSpanIdNhanVien).style.display = "block";
        document.getElementById(valueSpanIdNhanVien).innerHTML = 'Vui lòng không được bỏ trống';
        return false;
    }
    else{
        document.getElementById(valueSpanIdNhanVien).innerHTML = '';return true;
    }
}


function checkTKNV(value, valueSpanIdNhanVien){
    if(value.length>= 4 && value.length<= 6){
        document.getElementById(valueSpanIdNhanVien).innerHTML = '';
        return true;
    }
    else{
        document.getElementById(valueSpanIdNhanVien).style.display = "block";
        document.getElementById(valueSpanIdNhanVien).innerHTML = 'Tên tài khoản phải dài 4 đến 6 kí tự';
        return false;
    }
}

function checkName(value,valueSpanIdNhanVien){
    if (/^[a-zA-Z ]+$/.test(value)){
        document.getElementById(valueSpanIdNhanVien).innerHTML = '';
        return true;

    }
    else{
        document.getElementById(valueSpanIdNhanVien).style.display = "block";
        document.getElementById(valueSpanIdNhanVien).innerHTML = 'Vui lòng nhập chữ';
        return false;
    }
}

function checkEmail(value,valueSpanIdNhanVien){
    if(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(value)){
        document.getElementById(valueSpanIdNhanVien).innerHTML = '';
        return true;

    }
    else{
        document.getElementById(valueSpanIdNhanVien).style.display = "block";
        document.getElementById(valueSpanIdNhanVien).innerHTML = 'Định dạng email không đúng';
        return false;
    }
}

function checkPassword(value,valueSpanIdNhanVien){
    if(value.length>= 6 && value.length<=10){
        if(/^(?=.*[0-9])(?=.*[A-Z])(?=.*\W)/.test(value)){
            document.getElementById(valueSpanIdNhanVien).innerHTML = '';
            return true;
    
        }
        else{
            document.getElementById(valueSpanIdNhanVien).style.display = "block";
            document.getElementById(valueSpanIdNhanVien).innerHTML = 'Mật Khẩu chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt';
            return false;
        }
    }
    else{
        document.getElementById(valueSpanIdNhanVien).style.display = "block";
        document.getElementById(valueSpanIdNhanVien).innerHTML = 'Mật Khẩu dài từ 6-10 ký tự';
        return false;
    }
    
}

function checkLuongCb(value,valueSpanIdNhanVien){
    if(value*1 >= 1000000 && value*1 <= 20000000 ){
        document.getElementById(valueSpanIdNhanVien).innerHTML = '';
        return true;
    }
    else{
        document.getElementById(valueSpanIdNhanVien).style.display = "block";
        document.getElementById(valueSpanIdNhanVien).innerHTML = 'Lương CB nằm trong khoảng 1tr-20tr';
        return false;
    }
}

function checkChucVu(value,valueSpanIdNhanVien){
    if(value == 'Sếp' || value == 'Trưởng phòng' || value == 'Nhân viên'){
        document.getElementById(valueSpanIdNhanVien).innerHTML = '';
        return true;
    }
    else{
        document.getElementById(valueSpanIdNhanVien).style.display = "block";
        document.getElementById(valueSpanIdNhanVien).innerHTML = 'Vui lòng chọn Chức Vụ';
        return false;
    }
}

function checkGioLam(value,valueSpanIdNhanVien){
    if(value >= 80 && value <= 200){
        document.getElementById(valueSpanIdNhanVien).innerHTML = '';
        return true;
    }
    else{
        document.getElementById(valueSpanIdNhanVien).style.display = "block";
        document.getElementById(valueSpanIdNhanVien).innerHTML = 'Số giờ làm phải trong khoảng [80 : 200]';
        return false;
    }
}




