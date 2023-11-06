function scrollContainerLeft() {
    document.getElementById('productListContainer').scrollBy({
        left: -250,
        behavior: 'smooth'
    });
    document.getElementById('productListContainer2').scrollBy({
        left: -250,
        behavior: 'smooth'
    });
}

function scrollContainerRight() {
    document.getElementById('productListContainer').scrollBy({
        left: 250,
        behavior: 'smooth'
    });
    document.getElementById('productListContainer2').scrollBy({
        left: 250,
        behavior: 'smooth'
    });
}