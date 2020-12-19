$(document).ready(function(){
    $('.banner-slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        appendDots: $('.banner-tools-dots'),
        appendArrows: $('.banner-tools-arrows'),
    });

    const allSliders = $('.banner-slider-item').length;
    $('.banner-tools-text_pag span:last-child').html(allSliders < 10 ? '0' + allSliders : allSliders);

    $('.banner-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        const current = nextSlide + 1;
        $('.banner-tools-text_pag span:first-child').html(current < 10 ? '0' + current : current);
    });


    $(document).on('click', '.calc-select-heading', function(e){
        e.preventDefault();
        const $this = $(this);
        const $select = $this.parents('.calc-select');
        if(!$select.hasClass('is-active')){
            $('.calc-select').removeClass('is-active');
            $select.addClass('is-active');
        } else{
            $select.removeClass('is-active');
        }
    });

    $(document).on('click', '.calc-select-content li', function(e){
        e.preventDefault();
        const $this = $(this);
        const $select = $this.parents('.calc-select');
        const $heading = $this.parent('.calc-select-content').siblings('.calc-select-heading').children('span')
        const $content = $this.text()
        $heading.text($content);
        $select.removeClass('is-active');
    });

})