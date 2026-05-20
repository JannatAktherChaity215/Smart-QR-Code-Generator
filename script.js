function generateQR() {

    let qrText = document.getElementById("qrText").value.trim();
    let qrImage = document.getElementById("qrImage");

    // empty check
    if (qrText === "") {
        alert("Please enter text or link");
        return;
    }

    // show loading text (optional)
    qrImage.alt = "Generating QR...";

    // QR generate API
    let qrURL =
        "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="
        + encodeURIComponent(qrText);

    qrImage.src = qrURL;
}