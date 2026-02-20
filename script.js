window.addEventListener("load", () => {
    const img = document.getElementById("hiddenImage");

    img.onerror = () => {
        console.error("Error: Invalid image format.");
        console.warn("Hint: Maybe the file header is wrong?");
    };

    img.onload = () => {
        console.log("Image loaded successfully.");
    };
});
