function checkPin(){

let pin=document.getElementById("pincode").value;

if(pin.length==6){
document.getElementById("pinmsg").innerText="Service available ✔";
}else{
document.getElementById("pinmsg").innerText="Invalid Pincode";
}

}

function buyNow(){
location.href="address.html";
}
