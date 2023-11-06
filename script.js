function scrollContainerLeft() {
    document.getElementById('productListContainer').scrollBy({
        left: -500,
        behavior: 'smooth'
    });
    document.getElementById('productListContainer2').scrollBy({
        left: -500,
        behavior: 'smooth'
    });
}

function scrollContainerRight() {
    document.getElementById('productListContainer').scrollBy({
        left: 500,
        behavior: 'smooth'
    });
    document.getElementById('productListContainer2').scrollBy({
        left: 500,
        behavior: 'smooth'
    });
}