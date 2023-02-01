var sup= angular.module("mysup",[]);
function myInfo($scope){
    $scope.hoten = "Nguyễn Trung Tín";
    $scope.ngaysinh = "18-05-2003";
    $scope.gioitinh= "Nam";
    $scope.photo = "anhdaidien.jpg"
    $scope.diemtb = 9.5;

    $scope.ifo={
        hoten : "Nguyễn Trung Tín",
        ngaysinh : "18-05-2003",
        gioitinh: "Nam",
        photo : "anhdaidien.jpg",
        diemtb : 9.5,
    };
    $scope.info=[
        {
            hoten : "Nguyễn Trung Tín",
            ngaysinh : "18-05-2003",
            gioitinh: "Nam",
            photo : "anh/anhdaidien.jpg",
            diemtb : 9.5,
        },
        {
            hoten : "Han An",
            ngaysinh : "22-07-2003",
            gioitinh: "Nữ",
            photo : "anh/an.jpg",
            diemtb : 8.5,
        },
        {
            hoten : "Ha Nguyen",
            ngaysinh : "11-08-2003",
            gioitinh: "Nữ",
            photo : "anh/ha.jpg",
            diemtb : 9.0,
        },
    ];

    $scope.calculate= function(){
        var a = parseFloat($scope.width);
        var b = parseFloat($scope.length);
        $scope.acreage= a*b;
        $scope.perimeter= (a+b) * 2;
        
    }

}

sup.controller("infoController",myInfo);