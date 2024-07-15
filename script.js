const wrapper = document.querySelector(".wrapper");
const genrateBtn = document.querySelector(".form button");
const qrInput = document.querySelector(".form input");
const qrImg =document.querySelector(".qr-code img");
const downloadBtn = document.querySelector(".qr-download a");

genrateBtn.addEventListener("click",()=>{
    const qrValue = qrInput.value;
    if(!qrValue) return;
    const color = Math.floor(Math.random()*16777215).toString(16);
    genrateBtn.innerText = "Generating..."
    const code = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&color=${color}&data=${qrValue}`;
    qrImg.src = code; 
    qrImg.addEventListener("load",()=>{
        genrateBtn.innerText = "Generate QR Code"
        document.body.style.background = "#"+color;
        downloadBtn.href = code;
        wrapper.classList.add("active");
    });
});

qrInput.addEventListener("keyup",()=>{
    if(!qrInput.value){
        document.body.style.background = "#3498DB";
        wrapper.classList.remove("active");
    }
});
