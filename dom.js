function klik1(){
    document.getElementById("btn1").innerHTML = "Berhasil"
}

function mose(){
    document.getElementById("btn2").innerHTML = "X RPL MERAH"
    btn2.style.color = "red"
}

function out(){
    document.getElementById("btn2").innerHTML = "X RPL HIJAU"    
    btn2.style.color = "green"
}

function hapus(){
    const element = document.getElementById("btn1");
    element.remove();
}

function hapus2(){
    const element = document.getElementById("btn2");
    element.remove();
}