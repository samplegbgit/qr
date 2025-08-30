const generateBtn = document.querySelector(".btn");
const qrImg = document.getElementById("qr-img");
const imgBox = document.getElementById("img-box");
const qrText = document.getElementById("qr-text");
const downloadBtn = document.createElement("button");

downloadBtn.textContent = "Download QR Code";
downloadBtn.classList.add("btn");
downloadBtn.style.display = "none"; 
document.body.appendChild(downloadBtn);

generateBtn.addEventListener("click", () => {
  if (qrText.value.trim()) {
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrText.value.trim())}`;
    qrImg.src = qrUrl;
    imgBox.classList.add("show-img");
    downloadBtn.style.display = "inline-block"; 
  } else {
    alert("Please enter some text or URL to generate a QR code.");
  }
});

downloadBtn.addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = qrImg.src;
  link.download = "qrcode.png";
  link.click();
});
