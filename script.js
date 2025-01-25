function toggleMenu() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "250px";
    }
}

function closeMenu() {
    var sidebar = document.getElementById("sidebar");
    sidebar.style.width = "0";
}



document.addEventListener('DOMContentLoaded', function () {
    const readMoreButtons = document.querySelectorAll('.read-more-btn');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', function () {
            const target = this.getAttribute('data-target');
            const moreText = document.getElementById('more-text-' + target);

            moreText.classList.toggle('show');

            if (moreText.classList.contains('show')) {
                this.textContent = 'Read Less';
            } else {
                this.textContent = 'Read More';
            }
        });
    });
});



new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,
  
    // Pagination  bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    //Responsive breakpoints

    breakpoints: {
        0: {
            slidesPerView: 1
        },

        768: {
            slidesPerView: 2
        },

        1024: {
            slidesPerView: 3
        },
    }
  });

// Define the admin password
const ADMIN_PASSWORD = "Chrispin";

function adminLogin() {
    const passwordInput = document.getElementById('admin-password').value;

    if (passwordInput === ADMIN_PASSWORD) {
        document.getElementById('admin-login').style.display = 'none';
        document.getElementById('image-upload-form').style.display = 'block';
    } else {
        alert('Incorrect password. Access denied.');
    }
}

function addImage() {
    const fileInput = document.getElementById('file-input');
    const imageList = document.getElementById('image-list');

    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imgContainer = document.createElement('div');
            imgContainer.classList.add('image-container');
            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = 'Product Image';
            imgContainer.appendChild(img);
            imageList.appendChild(imgContainer);
        }
        reader.readAsDataURL(fileInput.files[0]);
    }
}

