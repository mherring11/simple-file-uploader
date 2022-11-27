const form = document.getElementById('form'),
    fileInput = document.getElementById('file-input'),
    progressArea = document.getElementById('progress-area'),
    uploadedArea = document.getElementById('uploaded-area');
var ifRunning = false;

// form click Event
form.addEventListener("click", () => {
    if (ifRunning) {
        alert('Please wait another file is uploading..')
        return
    }

    fileInput.click();
})

