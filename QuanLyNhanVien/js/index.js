var arrNhanVien = [];
var arrIdNhanVien = ['tknv','name','email','password','datepicker','luongCB','chucvu','gioLam'];
var spanIdNhanVien = ['tbTKNV','tbTen','tbEmail','tbMatKhau','tbNgay','tbLuongCB','tbChucVu','tbGiolam'];
function getValueNhanVien(){
    var isValid  = true;
    var nhanVien= new NhanVien();
    var value;
    var valueSpanIdNhanVien;
    for(var i = 0 ; i < arrIdNhanVien.length;i++){
        nhanVien[arrIdNhanVien[i]] = document.getElementById(arrIdNhanVien[i]).value;
        value = document.getElementById(arrIdNhanVien[i]).value;
        valueSpanIdNhanVien = spanIdNhanVien[i]
        // check tài khoản
        if(arrIdNhanVien[i] == 'tknv'){
            isValid &= checkValue(value,valueSpanIdNhanVien) && checkTKNV(value,valueSpanIdNhanVien);
        }  
        // check name
        else if(arrIdNhanVien[i] == 'name'){
            isValid &= checkValue(value,valueSpanIdNhanVien) && checkName(value,valueSpanIdNhanVien);
        }
        
        else if(arrIdNhanVien[i] == 'email'){
            isValid &= checkValue(value,valueSpanIdNhanVien) && checkEmail(value,valueSpanIdNhanVien);
        }
        else if(arrIdNhanVien[i] == 'password'){
            isValid &= checkValue(value,valueSpanIdNhanVien) && checkPassword(value,valueSpanIdNhanVien);
        }
        else if(arrIdNhanVien[i] == 'datepicker'){
            isValid &= checkValue(value,valueSpanIdNhanVien)
        }
        else if(arrIdNhanVien[i] == 'luongCB'){
            isValid &= checkValue(value,valueSpanIdNhanVien) && checkLuongCb(value,valueSpanIdNhanVien);
        }
        else if(arrIdNhanVien[i] == 'chucvu'){
            isValid &= checkValue(value,valueSpanIdNhanVien) && checkChucVu(value,valueSpanIdNhanVien);
        }
        else if(arrIdNhanVien[i] == 'gioLam'){
            isValid &= checkValue(value,valueSpanIdNhanVien) && checkGioLam(value,valueSpanIdNhanVien);
        }
        console.log(isValid);
    }
  
    if(isValid ==  true){
        return nhanVien;
    }
    else{
        return false;
    }
}

function addNhanVien(){
    event.preventDefault();
    if(getValueNhanVien()){
        var nhanVien = getValueNhanVien();
        arrNhanVien.push(nhanVien);
        console.log(arrNhanVien);
        renderArrNhanVien();
        document.getElementById('form_QLNV').reset();
    }
}

function deleteNhanVien(taiKhoanNhanVien){
    console.log(taiKhoanNhanVien);
    var index = -1;
    for(var i = 0; i < arrNhanVien.length ; i++){
        if(arrNhanVien[i].tknv == taiKhoanNhanVien){
            index = i;
        }
    }
    arrNhanVien.splice(index,1);
    renderArrNhanVien();
}

function showValue(taiKhoanNhanVien){
    var index = -1;
    for(var i = 0; i < arrNhanVien.length ; i++){
        if(arrNhanVien[i].tknv == taiKhoanNhanVien){
            index = i;
        }
    }
    var nhanVien =  arrNhanVien[index];
    for(var j = 0; j < arrIdNhanVien.length; j++){
        document.getElementById(arrIdNhanVien[j]).value = nhanVien[arrIdNhanVien[j]];
        if(arrIdNhanVien[j] == 'tknv'){
            document.getElementById('tknv').readOnly = true;
        }
    }
}

function updateNhanVien(){
    console.log(document.getElementById('tknv').value);
    var index = -1;
    for(var i = 0; i < arrNhanVien.length ; i++){
        if(arrNhanVien[i].tknv == document.getElementById('tknv').value){
            index = i;
        }
    }
    if(getValueNhanVien()){
        var nhanVien = getValueNhanVien();
        arrNhanVien[index] = nhanVien;
        renderArrNhanVien();
        document.getElementById('form_QLNV').reset();
    }
}


function sapXepNhanVien(){
    event.defaultPrevented();
    var valueSearch  = document.getElementById('searchName').value;
    var content = '';
    for(var i = 0; i < arrNhanVien.length; i++){
        if(arrNhanVien[i].xepLoai == valueSearch){
            content += 
            `
                <tr>
                <th>${arrNhanVien[i].tknv}</th>
                <th>${arrNhanVien[i].name}</th>
                <th>${arrNhanVien[i].email}</th>
                <th>${arrNhanVien[i].datepicker}</th>		
                <th>${arrNhanVien[i].chucvu}</th>
                <th>${arrNhanVien[i].tongLuong()}</th>
                <th>${arrNhanVien[i].xepLoai()}</th>
                <th><button onclick="deleteNhanVien('${
                    arrNhanVien[i].tknv
                }')" class="btn btn-danger">Xoá</button>
                <button data-toggle="modal"
                data-target="#myModal" onclick="showValue('${
                    arrNhanVien[i].tknv
                }')" class="btn btn-dark">Cập nhật</button></th>
                </tr>
            `  
            console.log(content);
        }
    }
    document.getElementById('tableDanhSach').innerHTML = content;
}





function renderArrNhanVien(){
    var content = '';
    for (var i = 0; i < arrNhanVien.length;i++){
        content += 
    `
        <tr>
        <th>${arrNhanVien[i].tknv}</th>
        <th>${arrNhanVien[i].name}</th>
        <th>${arrNhanVien[i].email}</th>
        <th>${arrNhanVien[i].datepicker}</th>		
        <th>${arrNhanVien[i].chucvu}</th>
        <th>${arrNhanVien[i].tongLuong()}</th>
        <th>${arrNhanVien[i].xepLoai()}</th>
        <th><button onclick="deleteNhanVien('${
            arrNhanVien[i].tknv
          }')" class="btn btn-danger">Xoá</button>
          <button data-toggle="modal"
          data-target="#myModal" onclick="showValue('${
            arrNhanVien[i].tknv
          }')" class="btn btn-dark">Cập nhật</button></th>
        </tr>
    `  
    }
    document.getElementById('tableDanhSach').innerHTML = content;
}

