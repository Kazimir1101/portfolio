$(document).ready(function(){

    // Menu btns

    $('#menu-btn').click(function(){
        $('.new-nav-menu').css('display', 'flex');
        $(this).css('display', 'none');
        $('#close-btn').css('display', 'flex');
        $('body').addClass('no-scroll');
    });

    $('#close-btn').click(function(){
        $('.new-nav-menu').css('display', 'none');
        $(this).css('display', 'none');
        $('#menu-btn').css('display', 'flex');
        $('body').removeClass('no-scroll');
    });

    // Skills

    $('.skill').mouseenter(function(){
        const bgColor = $(this).css('background-color');
        $(this).css('box-shadow', `0 0 14px 4px ${bgColor}`);
    });

    $('.skill').mouseleave(function(){
        $(this).css('box-shadow', 'none');
    });

    // New Skills

    function animateSkills() {
    $('.new-skill').each(function() {
    const $el = $(this);
    $el.addClass('new-skill-rotate');

    setTimeout(() => {
    $el.removeClass('new-skill-rotate');
    }, 2000);
    });
    }

    animateSkills();

    setInterval(animateSkills, 5000);

    // Statistics

    let animated1 = false; 
    $(window).on('scroll', function() {
    const $el1 = $('.clients');
    const elTop1 = $el1.offset().top;
    const scrollBottom1 = $(window).scrollTop() + $(window).height();

    if (!animated1 && scrollBottom1 > elTop1) {
        animated1 = true;

        let count1 = 0;
        const target1 = 27;

        const interval1 = setInterval(() => {
            count1++;
            $el1.text(`${count1}+`);
            if (count1 >= target1) {
                clearInterval(interval1);
            }
        }, 100);
    }
    });


    let animated2 = false; 
    $(window).on('scroll', function() {
    const $el2 = $('.projects');
    const elTop2 = $el2.offset().top;
    const scrollBottom2 = $(window).scrollTop() + $(window).height();

    if (!animated2 && scrollBottom2 > elTop2) {
        animated2 = true;

        let count2 = 0;
        const target2 = 33;

        const interval2 = setInterval(() => {
            count2++;
            $el2.text(`${count2}+`);
            if (count2 >= target2) {
                clearInterval(interval2);
            }
        }, 100);
    }
    });


    let animated3 = false; 
    $(window).on('scroll', function() {
    const $el3 = $('.workplaces');
    const elTop3 = $el3.offset().top;
    const scrollBottom3 = $(window).scrollTop() + $(window).height();

    if (!animated3 && scrollBottom3 > elTop3) {
        animated3 = true;

        let count3 = 0;
        const target3 = 8;

        const interval3 = setInterval(() => {
            count3++;
            $el3.text(`${count3}+`);
            if (count3 >= target3) {
                clearInterval(interval3);
            }
        }, 100);
    }
    });


    let animated4 = false; 
    $(window).on('scroll', function() {
    const $el4 = $('.students');
    const elTop4 = $el4.offset().top;
    const scrollBottom4 = $(window).scrollTop() + $(window).height();

    if (!animated4 && scrollBottom4 > elTop4) {
        animated4 = true;

        let count4 = 0;
        const target4 = 55;

        const interval4 = setInterval(() => {
            count4++;
            $el4.text(`${count4}+`);
            if (count4 >= target4) {
                clearInterval(interval4);
            }
        }, 100);
    }
    });
    

    let animated5 = false; 
    $(window).on('scroll', function() {
    const $el5 = $('.ideas');
    const elTop5 = $el5.offset().top;
    const scrollBottom5 = $(window).scrollTop() + $(window).height();

    if (!animated5 && scrollBottom5 > elTop5) {
        animated5 = true;

        let count5 = 0;
        const target5 = 17;

        const interval5 = setInterval(() => {
            count5++;
            $el5.text(`${count5}+`);
            if (count5 >= target5) {
                clearInterval(interval5);
            }
        }, 100);
    }
    });

    // Dots Rotation
    let dotAngle = 0;

    function rotateDot() {
       dotAngle += 5;
       $('.dot').css('transform', `rotate(${dotAngle}deg)`);
    }

    setInterval(rotateDot, 50);

    $('.new-nav-menu-clicked').click(function(){
        $('#close-btn').css('display', 'none');
        $('#menu-btn').css('display', 'flex');
        $('body').removeClass('no-scroll');
        $('.new-nav-menu').css('display', 'none');
    });

    


});