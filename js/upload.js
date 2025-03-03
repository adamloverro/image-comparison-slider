document.addEventListener('DOMContentLoaded', function() {
    const leftUploadBox = document.getElementById('left-upload-box');
    const rightUploadBox = document.getElementById('right-upload-box');
    const leftImage = document.getElementById('left-image');
    const rightImage = document.getElementById('right-image');

    function handleDrop(event, imageElement) {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(e) {
                imageElement.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    }

    function handleDragOver(event) {
        event.preventDefault();
    }

    leftUploadBox.addEventListener('dragover', handleDragOver);
    leftUploadBox.addEventListener('drop', function(event) {
        handleDrop(event, leftImage);
    });

    rightUploadBox.addEventListener('dragover', handleDragOver);
    rightUploadBox.addEventListener('drop', function(event) {
        handleDrop(event, rightImage);
    });
});