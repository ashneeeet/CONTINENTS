function changeImage(element, newSrc) {
    element.setAttribute('src', newSrc);
}

function restoreImage(element) {
    var originalSrc = element.getAttribute('data-original-src');
    if (originalSrc) {
        element.setAttribute('src', originalSrc);
    }
}
