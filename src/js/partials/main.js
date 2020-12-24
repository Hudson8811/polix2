$(document).ready(function(){
    $('.banner-slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        appendDots: $('.banner-tools-dots'),
        appendArrows: $('.banner-tools-arrows'),
    });

    $('.objects-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendArrows: $('.objects-arrows'),
    });

    $('.types').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        appendDots: $('.types-pag'),
        appendArrows: $('.types-arrows'),
    });

    const TypesAllSliders = $('.types-catalog').length;
    $('.types-text-pag span:last-child').html(TypesAllSliders < 10 ? '0' + TypesAllSliders : TypesAllSliders);

    $('.types').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        const current = nextSlide + 1;
        $('.types-text-pag span:first-child').html(current < 10 ? '0' + current : current);
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
    

    $('.header-menu > li > a').hover(function(e){
        e.preventDefault();

        if($(window).width() > 1300){
            const $this = $(this);
            const id = $(this).data('id');
            $('.header-menu a').removeClass('is-active');
            $this.addClass('is-active');
            $('.bigMenu').addClass('is-active');
            $('.bigMenu-content').removeClass('is-active');
            $(`.bigMenu-content[data-id="${id}"]`).addClass('is-active');
            
        }
    });

    $('.header-menu > li > a').click(function(e){
        e.preventDefault();

        if($(window).width() < 1301){
            const $this = $(this);
            if(!$(this).hasClass('is-active')){
                $('.header-menu a').removeClass('is-active');
                $('.header-menu-siblings').slideUp();
                $this.addClass('is-active');
                $this.siblings('.header-menu-siblings').slideDown();
            } else{
                $this.removeClass('is-active');
                $this.siblings('.header-menu-siblings').slideUp();
            }
        }
    });

    $('.bigMenu-overlay').hover(function(e){
        $('.header-menu a').removeClass('is-active');
        $('.bigMenu').removeClass('is-active');
        $('.bigMenu-content').removeClass('is-active');
    });

    $('.prices-heading-tabs-item').click(function(){
        const content = $(this).data('content');
        $('.prices-heading-tabs-item').removeClass('is-active');
        $(this).addClass('is-active');
        $('.prices-content').hide();
        $(`.prices-content[data-content="${content}"]`).show();
    });

    $(document).on('focus','.application-form-label input[type="text"], .application-form-label input[type="email"], .application-form-label textarea', function(){
        $(this).parent('.application-form-label').addClass('is-active');
    } );

    $(document).on('blur','.application-form-label input[type="text"], .application-form-label input[type="email"], .application-form-label textarea', function(){
        if($(this).val() == ""){
            $(this).parent('.application-form-label').removeClass('is-active');
        }
    } );

    $(document).on('change','.application-form-label input[type="file"]', function(){
        var file = $(this)[0].files[0]
            if (file){
            $(this).parent('.application-form-label').addClass('is-active');
              $('.application-form-file-name').text(file.name);
            }
    });

    $(document).on('change','input[type="color"]', function(){
        const color = $(this).val()
        $(this).siblings('.task-color-value').text(color);
    });

    $('.tabs-heading-item').click(function(){
        const content = $(this).data('tabs');
        $(this).siblings('.tabs-heading-item').removeClass('is-active');
        $(this).addClass('is-active');
        $(this).parent('.tabs-heading').siblings('.tabs-content-wrapper').children('.tabs-content').removeClass('is-active');
        $(this).parent('.tabs-heading').siblings('.tabs-content-wrapper').children(`.tabs-content[data-tabs="${content}"]`).addClass('is-active');
    });

    $('.tabs-scroll').mCustomScrollbar({
        axis:"y",
    });

   $('.contacts-form-btn').click(function(e){
       e.preventDefault();
       $(this).toggleClass('is-active');
       $('.contacts-form').toggleClass('is-active');
   });

   $('.header-mobile-burger').click(function(e){
       e.preventDefault();
       $(this).toggleClass('is-active');
       $('.header-mobile-wrapper').toggleClass('is-active');

   });

   $('.calc-result-btn').click(function(e){
       e.preventDefault();
       $(this).hide();
       $('.calc-row-result').addClass('is-active');
   });

    

    function polixCatalogInit(){
        if($(window).width() < 1301){
            $('.polix-catalog').slick({
                infinite: false,
                slidesToShow: 2,
                slidesToScroll: 2,
                appendArrows: $('.polix-tools'),
            });
        } else{
            $(".polix-catalog").slick('destroy')
        }
    };

    polixCatalogInit();

    $(window).resize(function(e){
        polixCatalogInit();
    });

    const polixAllSliders = $('.polix-item').length;
    const polixAllSlidersPoints = Math.ceil(polixAllSliders / 2) 
    $('.polix-pag span:last-child').html(polixAllSlidersPoints < 10 ? '0' + polixAllSlidersPoints : polixAllSlidersPoints);

    $('.polix-catalog').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        const current = nextSlide + 1;
        const currentPoints =  Math.ceil(current / 2)
        $('.polix-pag span:first-child').html(current < 10 ? '0' + currentPoints : currentPoints);
    });
   
})

