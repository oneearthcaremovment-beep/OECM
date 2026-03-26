function verify(){
let m = document.getElementById("mobile").value;
if(m.length==10){
alert("OTP Verified");
document.getElementById("form").style.display="block";
}else{
alert("Invalid");
}
}
function toBase64(file){
return new Promise((resolve)=>{
let reader = new FileReader();
reader.readAsDataURL(file);
reader.onload = ()=> resolve(reader.result.split(',')[1]);
});
}
async function submitForm(){
let photo = await toBase64(document.getElementById("photo").files[0]);
let idproof = await toBase64(document.getElementById("idproof").files[0]);
let data = {name:name.value,father:father.value,address:address.value,blood:blood.value,reference:reference.value,type:type.value,mobile:mobile.value,aadhar:aadhar.value,photo:photo,aadharFile:idproof};
fetch("YOUR_SCRIPT_URL",{method:"POST",body: JSON.stringify(data)})
.then(res=>res.json())
.then(res=>{alert("ID: "+res.id);});
}