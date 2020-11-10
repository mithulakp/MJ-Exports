const prevIcon = '<img src="dist/images/left.svg"class="prev-btn">Prev';
const nextIcon = 'Next<img src="dist/images/right.svg"class="next-btn">';


$('.banner-slide').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    pagination: false,
    autoplay: 1000,
    autoplaySpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 1
        }
    }
})


$('.company-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    pagination: false,
    dots: true,
    animateOut: 'fadeOut',
    autoplay: 1000,
    autoplaySpeed: 1000,

    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

/**accordion */
var accordions = document.getElementsByClassName("accordion");

for (var i = 0; i < accordions.length; i++) {
    accordions[i].onclick = function() {
        this.classList.toggle('is-open');

        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            // accordion is currently open, so close it
            content.style.maxHeight = null;
        } else {
            // accordion is currently closed, so open it
            content.style.maxHeight = content.scrollHeight + "px";
        }
    }
}

/**tab */
$(document).ready(function() {

    $(".tabs-list li a").click(function(e) {
        e.preventDefault();
    });

    $(".tabs-list li").click(function() {
        var tabid = $(this).find("a").attr("href");
        $(".tabs-list li,.tabs div.tab").removeClass("active"); // removing active class from tab
        $(".tab").hide(); // hiding open tab
        $(tabid).show(); // show tab
        $(this).addClass("active"); //  adding active class to clicked tab


    });

});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



jQuery(document).ready(function() {
    jQuery(window).scroll(function() {
        var scroll = jQuery(window).scrollTop();

        if (scroll >= 100) {
            jQuery("header").addClass("actve");
        } else {
            jQuery("header").removeClass("actve");
        }
    });
});