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


    $(document).on('change', '.calc-checkbox input', function(){
        const id = $(this).data('id');
        $(`.calc-row[data-id="${id}"]`).toggleClass('is-active');
    });

    $(document).on('click', '.technologies-item', function(){
        const $this = $(this);
        const itemCount = $this.data('item');
        $('.technologies-item').removeClass('is-active');
        $this.addClass('is-active');
        $('.technologies-slide').removeClass('is-active');
        $(`.technologies-slide[data-item="${itemCount}"]`).addClass('is-active');
    });

    $(document).on('click', '.technologies-slide-close', function(e){
        e.preventDefault();
        const $this = $(this);
        const item = $this.parents('.technologies-slide')
        const itemCount = item.data('item');
        item.removeClass('is-active');
        $(`.technologies-item[data-item="${itemCount}"]`).removeClass('is-active');
    });

    $('[data-fancybox]').fancybox({
		touch: false,
		scrolling: 'no',
		beforeShow: function(){
			$("body").css({'overflow-y':'hidden'});
		},
		afterClose: function(){
			$("body").css({'overflow-y':'visible'});
		}
	});
})