function NhanVien(){
    this.tknv = '';
    this.name = '';
    this.email = '';
    this.password = '';
    this.datepicker = '';
    this.luongCB = '';
    this.chucvu = '';
    this.gioLam = '';
    this.tongLuong = function(){
        if(this.chucvu == 'Sếp'){
            return this.luongCB*3;
        }
        else if(this.chucvu = 'Trưởng phòng'){
            return this.luongCB*2;
        }
        else{
            return this.luongCB*1;
        }
    }
    this.xepLoai = function(){
        if(this.gioLam <= 160){
            return 'Trung bình';
        }
        else if(this.gioLam <= 176){
            return 'Khá';
        }
        else if(this.gioLam <= 192){
            return 'Giỏi';
        }
        else {
            return "Xuất sắc";
        }
    }
}
