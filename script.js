document.addEventListener('DOMContentLoaded', function () {
    var labels = document.querySelectorAll('.btn-cus-menu');

    labels.forEach(function (label) {
        label.addEventListener('click', function () {
            // Remove 'active' class from all labels
            labels.forEach(function (el) {
                el.classList.remove('active');
            });

            // Add 'active' class to the clicked label
            label.classList.add('active');
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    initializeScrollAndCheck('.cus-label', 'section', '.custom-btn-gr');
    initializeScrollAndCheck('.cus-label-mobile', 'section', '.custom-btn-gr-mobile');
});

function initializeScrollAndCheck(buttonSelector, sectionSelector, scrollContainerSelector) {
    const buttons = document.querySelectorAll(buttonSelector);
    const sections = document.querySelectorAll(sectionSelector);
    const scrollContainer = document.querySelector(scrollContainerSelector);

    let activeButton = null;
    let isManualClick = false;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetId = entry.target.id;
                const targetButton = document.querySelector(`${buttonSelector}[data-target="${targetId}"]`);

                if (!isManualClick && activeButton !== targetButton) {
                    updateActiveButton(targetButton);
                    scrollContainer.scrollLeft = targetButton.offsetLeft - scrollContainer.clientWidth / 2;
                }
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => {
        observer.observe(section);
    });

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            isManualClick = true;

            // Uncheck previously active button and remove hover effect
            if (activeButton) {
                activeButton.classList.remove('active', 'hover');
            }

            const targetId = button.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
            isManualClick = false;
        });
    });

    function updateActiveButton(button) {
        if (activeButton) {
            activeButton.classList.remove('active', 'hover');
        }

        if (button) {
            button.classList.add('active');
            activeButton = button;
        }
    }
}


document.getElementById('toggleButton').addEventListener('click', function () {
    var buttonText = this.innerHTML.trim();
    if (buttonText === 'Xem thêm') {
        this.innerHTML = 'Thu gọn';
    } else {
        this.innerHTML = 'Xem thêm';
    }
});

function scrollContainerLeft() {
    btnScrollRight = document.querySelector(".btn-scroll-x");
    btnScrollRight.style.outline = "none";
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
    btnScrollRight = document.querySelector(".btn-scroll-x");
    btnScrollRight.style.outline = "none";
    document.getElementById('productListContainer').scrollBy({
        left: 500,
        behavior: 'smooth'
    });
    document.getElementById('productListContainer2').scrollBy({
        left: 500,
        behavior: 'smooth'
    });
}
function scrollComingsoonLeft() {
    document.getElementById('scrollComingsoon').scrollBy({
        left: -500,
        behavior: 'smooth'
    });
    document.getElementById('scrollComingsoon2').scrollBy({
        left: -500,
        behavior: 'smooth'
    });
}

function scrollComingsoonRight() {
    document.getElementById('scrollComingsoon').scrollBy({
        left: 500,
        behavior: 'smooth'
    });
    document.getElementById('scrollComingsoon2').scrollBy({
        left: 500,
        behavior: 'smooth'
    });
}
function scrolllaptopmoidellLeft() {
    document.getElementById('scrolllaptopmoidell').scrollBy({
        left: -500,
        behavior: 'smooth'
    });
}

function scrolllaptopmoidellRight() {
    document.getElementById('scrolllaptopmoidell').scrollBy({
        left: 500,
        behavior: 'smooth'
    });
}

function scrolllaptopmoihpLeft() {
    document.getElementById('scrolllaptopmoihp').scrollBy({
        left: -500,
        behavior: 'smooth'
    });
}

function scrolllaptopmoihpRight() {
    document.getElementById('scrolllaptopmoihp').scrollBy({
        left: 500,
        behavior: 'smooth'
    });
}

function scrolllaptopmoilenovoLeft() {
    document.getElementById('scrolllaptopmoilenovo').scrollBy({
        left: -500,
        behavior: 'smooth'
    });
}

function scrolllaptopmoilenovoRight() {
    document.getElementById('scrolllaptopmoilenovo').scrollBy({
        left: 500,
        behavior: 'smooth'
    });
}
function scrolllaptopmoiasusLeft() {
    document.getElementById('scrolllaptopmoiasus').scrollBy({
        left: -500,
        behavior: 'smooth'
    });
}

function scrolllaptopmoiasusRight() {
    document.getElementById('scrolllaptopmoiasus').scrollBy({
        left: 500,
        behavior: 'smooth'
    });
}
function scrolllaptopmoiacerLeft() {
    document.getElementById('scrolllaptopmoiacer').scrollBy({
        left: -500,
        behavior: 'smooth'
    });
}

function scrolllaptopmoiacerRight() {
    document.getElementById('scrolllaptopmoiacer').scrollBy({
        left: 500,
        behavior: 'smooth'
    });
}
function scrolllaptopmoimsiLeft() {
    document.getElementById('scrolllaptopmoimsi').scrollBy({
        left: -500,
        behavior: 'smooth'
    });
}

function scrolllaptopmoimsiRight() {
    document.getElementById('scrolllaptopmoimsi').scrollBy({
        left: 500,
        behavior: 'smooth'
    });
}
function scrolllaptopmoimicrosoftLeft() {
    document.getElementById('scrolllaptopmoimicrosoft').scrollBy({
        left: -500,
        behavior: 'smooth'
    });
}

function scrolllaptopmoimicrosoftRight() {
    document.getElementById('scrolllaptopmoimicrosoft').scrollBy({
        left: 500,
        behavior: 'smooth'
    });
}
function scrolllaptopgamingLeft() {
    document.getElementById('scrolllaptopgaming').scrollBy({
        left: -500,
        behavior: 'smooth'
    });
}

function scrolllaptopgamingRight() {
    document.getElementById('scrolllaptopgaming').scrollBy({
        left: 500,
        behavior: 'smooth'
    });
}
function scrolllaptopdellcuLeft() {
    document.getElementById('scrolllaptopdellcu').scrollBy({
        left: -500,
        behavior: 'smooth'
    });
}

function scrolllaptopdellcuRight() {
    document.getElementById('scrolllaptopdellcu').scrollBy({
        left: 500,
        behavior: 'smooth'
    });
}
function scrolllaptophpcuLeft() {
    document.getElementById('scrolllaptophpcu').scrollBy({
        left: -500,
        behavior: 'smooth'
    });
}

function scrolllaptophpcuRight() {
    document.getElementById('scrolllaptophpcu').scrollBy({
        left: 500,
        behavior: 'smooth'
    });
}
function scrolllaptoplenovocuLeft() {
    document.getElementById('scrolllaptoplenovocu').scrollBy({
        left: -500,
        behavior: 'smooth'
    });
}

function scrolllaptoplenovocuRight() {
    document.getElementById('scrolllaptoplenovocu').scrollBy({
        left: 500,
        behavior: 'smooth'
    });
}
function scrolllaptopasuscuLeft() {
    document.getElementById('scrolllaptopasuscu').scrollBy({
        left: -500,
        behavior: 'smooth'
    });
}

function scrolllaptopasuscuRight() {
    document.getElementById('scrolllaptopasuscu').scrollBy({
        left: 500,
        behavior: 'smooth'
    });
}

function scrollpcgamingLeft() {
    document.getElementById('scrollpcgaming').scrollBy({
        left: -500,
        behavior: 'smooth'
    });
}

function scrollpcgamingRight() {
    document.getElementById('scrollpcgaming').scrollBy({
        left: 500,
        behavior: 'smooth'
    });
}
function scrollpcdohoaLeft() {
    document.getElementById('scrollpcdohoa').scrollBy({
        left: -500,
        behavior: 'smooth'
    });
}

function scrollpcdohoaRight() {
    document.getElementById('scrollpcdohoa').scrollBy({
        left: 500,
        behavior: 'smooth'
    });
}
function scrollpcvanphongLeft() {
    document.getElementById('scrollpcvanphong').scrollBy({
        left: -500,
        behavior: 'smooth'
    });
}

function scrollpcvanphongRight() {
    document.getElementById('scrollpcvanphong').scrollBy({
        left: 500,
        behavior: 'smooth'
    });
}
function scrollpcallinoneLeft() {
    document.getElementById('scrollpcallinone').scrollBy({
        left: -500,
        behavior: 'smooth'
    });
}

function scrollpcallinoneRight() {
    document.getElementById('scrollpcallinone').scrollBy({
        left: 500,
        behavior: 'smooth'
    });
}
function scrollpcminiLeft() {
    document.getElementById('scrollpcmini').scrollBy({
        left: -500,
        behavior: 'smooth'
    });
}

function scrollpcminiRight() {
    document.getElementById('scrollpcmini').scrollBy({
        left: 500,
        behavior: 'smooth'
    });
}
function scrolldellmtLeft() {
    document.getElementById('scrolldellmt').scrollBy({
        left: -500,
        behavior: 'smooth'
    });
}

function scrolldellmtRight() {
    document.getElementById('scrolldellmt').scrollBy({
        left: 500,
        behavior: 'smooth'
    });
}
function scrollhpmtLeft() {
    document.getElementById('scrollhpmt').scrollBy({
        left: -500,
        behavior: 'smooth'
    });
}

function scrollhpmtRight() {
    document.getElementById('scrollhpmt').scrollBy({
        left: 500,
        behavior: 'smooth'
    });
}
function scrolllenovomtLeft() {
    document.getElementById('scrolllenovomt').scrollBy({
        left: -500,
        behavior: 'smooth'
    });
}

function scrolllenovomtRight() {
    document.getElementById('scrolllenovomt').scrollBy({
        left: 500,
        behavior: 'smooth'
    });
}
function scrollacermtLeft() {
    document.getElementById('scrollacermt').scrollBy({
        left: -500,
        behavior: 'smooth'
    });
}

function scrollacermtRight() {
    document.getElementById('scrollacermt').scrollBy({
        left: 500,
        behavior: 'smooth'
    });
}

function scrollsamsungmhLeft() {
    document.getElementById('scrollsamsungmh').scrollBy({
        left: -500,
        behavior: 'smooth'
    });
}

function scrollsamsungmhRight() {
    document.getElementById('scrollsamsungmh').scrollBy({
        left: 500,
        behavior: 'smooth'
    });
}
function scrollmsimhLeft() {
    document.getElementById('scrollmsimh').scrollBy({
        left: -500,
        behavior: 'smooth'
    });
}

function scrollmsimhRight() {
    document.getElementById('scrollmsimh').scrollBy({
        left: 500,
        behavior: 'smooth'
    });
}
function scrollmsimhLeft() {
    document.getElementById('scrollmsimh').scrollBy({
        left: -500,
        behavior: 'smooth'
    });
}

function scrollmsimhRight() {
    document.getElementById('scrollmsimh').scrollBy({
        left: 500,
        behavior: 'smooth'
    });
}
function scrolldellmhLeft() {
    document.getElementById('scrolldellmh').scrollBy({
        left: -500,
        behavior: 'smooth'
    });
}

function scrolldellmhRight() {
    document.getElementById('scrolldellmh').scrollBy({
        left: 500,
        behavior: 'smooth'
    });
}
function scrollhpmhLeft() {
    document.getElementById('scrollhpmh').scrollBy({
        left: -500,
        behavior: 'smooth'
    });
}

function scrollhpmhRight() {
    document.getElementById('scrollhpmh').scrollBy({
        left: 500,
        behavior: 'smooth'
    });
}
function scrolllenovomhLeft() {
    document.getElementById('scrolllenovomh').scrollBy({
        left: -500,
        behavior: 'smooth'
    });
}

function scrolllenovomhRight() {
    document.getElementById('scrolllenovomh').scrollBy({
        left: 500,
        behavior: 'smooth'
    });
}
function scrollviewsonicmhLeft() {
    document.getElementById('scrollviewsonicmh').scrollBy({
        left: -500,
        behavior: 'smooth'
    });
}

function scrollviewsonicmhRight() {
    document.getElementById('scrollviewsonicmh').scrollBy({
        left: 500,
        behavior: 'smooth'
    });
}
function scrollacermhLeft() {
    document.getElementById('scrollacermh').scrollBy({
        left: -500,
        behavior: 'smooth'
    });
}

function scrollacermhRight() {
    document.getElementById('scrollacermh').scrollBy({
        left: 500,
        behavior: 'smooth'
    });
}
function scrolllgmhLeft() {
    document.getElementById('scrolllgmh').scrollBy({
        left: -500,
        behavior: 'smooth'
    });
}

function scrolllgmhRight() {
    document.getElementById('scrolllgmh').scrollBy({
        left: 500,
        behavior: 'smooth'
    });
}
function scrolltaingheLeft() {
    document.getElementById('scrolltainghe').scrollBy({
        left: -500,
        behavior: 'smooth'
    });
}

function scrolltaingheRight() {
    document.getElementById('scrolltainghe').scrollBy({
        left: 500,
        behavior: 'smooth'
    });
}
function scrollsaclaptopLeft() {
    document.getElementById('scrollsaclaptop').scrollBy({
        left: -500,
        behavior: 'smooth'
    });
}

function scrollsaclaptopRight() {
    document.getElementById('scrollsaclaptop').scrollBy({
        left: 500,
        behavior: 'smooth'
    });
}
function scrollchuotLeft() {
    document.getElementById('scrollchuot').scrollBy({
        left: -500,
        behavior: 'smooth'
    });
}

function scrollchuotRight() {
    document.getElementById('scrollchuot').scrollBy({
        left: 500,
        behavior: 'smooth'
    });
}
function scrollbanphimLeft() {
    document.getElementById('scrollbanphim').scrollBy({
        left: -500,
        behavior: 'smooth'
    });
}

function scrollbanphimRight() {
    document.getElementById('scrollbanphim').scrollBy({
        left: 500,
        behavior: 'smooth'
    });
}
function scrollocungLeft() {
    document.getElementById('scrollocung').scrollBy({
        left: -500,
        behavior: 'smooth'
    });
}

function scrollocungRight() {
    document.getElementById('scrollocung').scrollBy({
        left: 500,
        behavior: 'smooth'
    });
}
function scrollramLeft() {
    document.getElementById('scrollram').scrollBy({
        left: -500,
        behavior: 'smooth'
    });
}

function scrollramRight() {
    document.getElementById('scrollram').scrollBy({
        left: 500,
        behavior: 'smooth'
    });
}

//time count down
function updateCountdown() {
    var now = new Date();
    var midnight = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1, // Ngày tiếp theo
        0, 0, 0 // 12h đêm
    );
    var timeUntilMidnight = midnight - now;

    var hours = Math.floor(timeUntilMidnight / (1000 * 60 * 60));
    var minutes = Math.floor((timeUntilMidnight % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeUntilMidnight % (1000 * 60)) / 1000);

    hours = hours.toString().padStart(2, '0'); // Format giờ thành số kép
    minutes = minutes.toString().padStart(2, '0'); // Format phút thành số kép
    seconds = seconds.toString().padStart(2, '0'); // Format giây thành số kép

    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Cập nhật lại thời gian đến 12h đêm sau khi đếm ngược kết thúc
    if (timeUntilMidnight <= 0) {
        updateCountdown();
    }
}

// Cập nhật thời gian mỗi giây
var x = setInterval(updateCountdown, 1000);

const containers = document.querySelectorAll('.scrollable-list-container');
const cards = document.querySelectorAll('.icon-list-custom-ul');

function checkOverflow(container, card) {
    if (card.scrollWidth > container.clientWidth) {
        card.style.justifyContent = 'space-between';
        card.style.paddingBottom = "10px"
    } else {
        card.style.justifyContent = 'center';
    }
}

function handleResize(container, card) {
    window.addEventListener('resize', function () {
        checkOverflow(container, card);
    });
}

containers.forEach((container, index) => {
    checkOverflow(container, cards[index]);
    handleResize(container, cards[index]);
});