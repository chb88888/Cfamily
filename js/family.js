var wrapper = document.querySelector('.wrapper'),
    slides = [...document.querySelectorAll('.wrapper .slide')],
    index = 0,
    slideW = slides[0].offsetWidth,
    ps = [...document.querySelectorAll('ol li')];


myTouch.swiper(wrapper, 'left', function() {

    index++;

    index = index > slides.length - 1 ? 0 : index;
    wrapper.style.transform = 'translateX(-' + slideW * index + 'px)';

    wrapper.style.transition = 'transform 1s';


    ps.forEach(function(item) {
        item.classList.remove('active')
    })
    ps[index].classList.add('active')
})

myTouch.swiper(wrapper, 'right', function() {

    index--;

    index = index < 0 ? slides.length - 1 : index;
    wrapper.style.transform = 'translateX(-' + slideW * index + 'px)';

    wrapper.style.transition = 'transform 1s';

    ps.forEach(function(item) {
        item.classList.remove('active')
    })
    ps[index].classList.add('active')
})

ps.forEach(function(item, i) {
    item.onclick = function() {
        wrapper.style.transform = 'translateX(-' + slideW * i + 'px)';

        wrapper.style.transition = 'transform 1s';

        ps.forEach(function(item) {
            item.classList.remove('active');
        })
        ps[i].classList.add('active');
        index = i;

    }
})

setInterval(function() {
    index++;

    index = index > slides.length - 1 ? 0 : index;
    wrapper.style.transform = 'translateX(-' + slideW * index + 'px)';

    wrapper.style.transition = 'transform 1s';


    ps.forEach(function(item) {
        item.classList.remove('active')
    })
    ps[index].classList.add('active')
}, 3000)