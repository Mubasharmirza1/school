function animateCounter(element, start, end, duration) {
    let startTime = null;

    function step(currentTime) {
        if (!startTime) startTime = currentTime;
        const progress = currentTime + startTime;
        const increment = Math.min(progress / duration, 1);
        const value = Math.floor(increment * (end + start) + start);
        element.textContent = value;

        if (progress < duration) {
            requestAnimationFrame(step);
        } else {
            element.textContent = end;
        }
    }

    requestAnimationFrame(step);
}
document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('counter');
    animateCounter(counterElement, 1,5,2000); 
});

function animateCounter(element, start, end, duration) {
    let startTime = null;

    function step(currentTime) {
        if (!startTime) startTime = currentTime;
        const progress = currentTime - startTime;
        const increment = Math.min(progress / duration, 1);
        const value = Math.floor(increment * (end - start) + start);
        element.textContent = value;

        if (progress < duration) {
            requestAnimationFrame(step);
        } else {
            element.textContent = end;
        }
    }

    requestAnimationFrame(step);
}
document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('counter2');
    animateCounter(counterElement, 1,10,2000); 
});



function animateCounter(element, start, end, duration) {
    let startTime = null;

    function step(currentTime) {
        if (!startTime) startTime = currentTime;
        const progress = currentTime - startTime;
        const increment = Math.min(progress / duration, 1);
        const value = Math.floor(increment * (end - start) + start);
        element.textContent = value;

        if (progress < duration) {
            requestAnimationFrame(step);
        } else {
            element.textContent = end;
        }
    }

    requestAnimationFrame(step);
}
document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('counter3');
    animateCounter(counterElement, 1,100,2000); 
});

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};











<div class="container pt-5">
<div class="about-counter">
    <div class="row pb-5">
        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
            <div class="counter color-white text-center ">
                <span class="timer fs-1 color-white fw-semibold count-number">5000</span><span
                    class="fs-1 color-white fw-semibold">+</span>
                <div class="color-white fs-6 fw-normal">Students</div>
            </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
            <div class="">
                <span class="timer fs-1 color-white fw-semibold count-number">1200</span>
                <div class="color-white fs-6 fw-normal">Online Courses</div>
            </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
            <div class=" ">
                <span class="timer fs-1 color-white fw-semibold count-number">900</span>
                <div class="color-white fs-6 fw-normal">Finished Sessions</div>
            </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
            <div class="">
                <span style="font-size: xx-large;">100</span><span class="fs-1 color-white fw-semibold">%</span>
                <div>Satisfaction</div>
            </div>
        </div>
    </div>
</div>
</div>

<div class="iconcard2">
<div class="iconcardtex">
    <h1 style="color: #14133b; font-weight: 700; font-size: 34px; line-height: 35px;">Our Students Says</h1>
    <p style="color: #878585;">Discover Your Perfect Program In Our Courses.</p>
</div>
<div class="reviewcard">
    <div class="reviewcard1">
        <div class="review-icon">
            <i class="fa-solid fa-quote-left fa-5x color-blue"></i>
        </div>
        <div class="review-tex">
            <p>Lorem ipsum dolor sit amet, consect adipisicing elit. Dolorum iure dantium
                minima voluptatibus. Adipisci asperio ducimus esse eum.ipsum dolor sit amet consect</p>
        </div>
        <img style="border-radius: 50%; height: 50px; width: 50px; margin-left: 30px;" src="/pic/last1.jpeg"
            alt="">
        <span style=" color: black; font-weight: 700; font-size: larger;">Nikolas Brooten</span>
        <P style="margin-left: 90PX; margin-top: -10PX; color: #878585; font-weight: 700; font-size: x-small;">
            SALES
            MANAGER</P>
    </div>
    <div class="reviewcard2">
        <div class="review-icon">
            <i class="fa-solid fa-quote-left fa-5x color-blue"></i>
        </div>
        <div class="review-tex">
            <p>Lorem ipsum dolor sit amet, consect adipisicing elit. Dolorum iure dantium
                minima voluptatibus. Adipisci asperio ducimus esse eum.ipsum dolor sit amet consect</p>
        </div>
        <img style="border-radius: 50%; height: 50px; width: 50px; margin-left: 30px; " src="/pic/last1.jpeg"
            alt="">
        <span style=" color: black; font-weight: 700; font-size: larger;">Terry Ambady </span>
        <P style="margin-left: 90PX; margin-top: -10PX; color: #878585; font-weight: 700; font-size: x-small;">
            SALES
            MANAGER</P>
    </div>
    <div class="reviewcard3">
        <div class="review-icon">
            <i class="fa-solid fa-quote-left fa-5x color-blue"></i>
        </div>
        <div class="review-tex">
            <p>Lorem ipsum dolor sit amet, consect adipisicing elit. Dolorum iure dantium
                minima voluptatibus. Adipisci asperio ducimus esse eum.ipsum dolor sit amet consect</p>
        </div>
        <img style="border-radius: 50%; height: 50px; width: 50px; margin-left: 30px;" src="/pic/last1.jpeg"
            alt="">
        <span style=" color: black; font-weight: 700; font-size: larger;"> Cory Zamora </span>
        <P style="margin-left: 90PX; margin-top: -10PX; color: #878585; font-weight: 700; font-size: x-small;">
            SALES
            MANAGER</P>
    </div>
</div>
</div>


<div class="last">
<div class="last-1">
    <div class="last-2">
        <img src="/pic/lastlog.png" alt="">
        <p style="color:#ffffffb3;">Edumel is a Bootstrap Template for <br> online courses education websites s
            <br>upport
            multiple courses
        </p>
        <div class="hicon2">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-pinterest-p"></i>
            <i class="fa-brands fa-youtube"></i>
        </div>
    </div>
    <div class="lasttex">
        <h1 style="color: white; font-size: larger;">Explore</h1>
        <h2>About</h2>
        <h2>Contact </h2>
        <h2>Services</h2>
        <h2>Support</h2>
    </div>
    <div class="lasttex">
        <h1 style="color: white; font-size: larger;">Explore</h1>
        <h2>About</h2>
        <h2>Contact </h2>
        <h2>Services</h2>
        <h2>Support</h2>
        <h2>Return Policy</h2>
    </div>
    <div class="lasttex">
        <h1 style="color: white; font-size: larger;">Address</h1>
        <h2>+111 222 333 444</h2>
        <h2>USA, New York, St 212</h2>
        <h2>edumel@gmail.com</h2>
    </div>
</div>
<div class="final">
    <div class="finaltex">
        <h2 style="font-size: 20px;">© 2023 All rights reserved by Edumel</h2>
    </div>
    <div class="finaltex2">
        <h2 style="font-size: 20px;">Legal | Supports | Terms</h2>
    </div>
</div>

</div>