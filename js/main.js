// $('.Loading-screen').hide(4000);



let PortfolioSect=$("#about").offset().top;

$(document).ready(function (){
    $('.Loading-screen .loader').fadeOut(1000,function() {
        $('.Loading-screen').fadeOut(2000,function () {
            $('.Loading-screen').remove();
            $("body").css('overflow', 'auto');
            
        })
        
    })
    
})


$(window).scroll(
    function(){
        let wScroll=$(window).scrollTop();
        if (wScroll>PortfolioSect -600 ) {
            // $("#mainNav").css('backgroundColor' ,'rgba(0, 0, 0, 0.902) ');
            $("#mainNav").css('backgroundColor' ,'rgba(0, 0, 0, 0.747)');
            $('#btn-up').fadeIn(500);
        } 
        else {
            $("#mainNav").css('backgroundColor' ,'transparent');
            $('#btn-up').fadeOut(1000);
        }
    }
)

// =================== btn scroll up =======================

$('#btn-up').click(function(){
        $('html,body').animate({scrollTop:0},500);
    }
)

// =======================  click nav link scroll =====================

$(" a[href^='#']").click(function (e) {
    // $(e.target).parent().css("border-bottom" , '2px solid #89BF55' );
    // $(e.target).parent().css("backgroundColor" , '#89BF55 );
    $(e.target).parent().siblings().css("border-bottom" , 'none' );
    // $(e.target).parent().siblings().css("backgroundColor" , 'transparent' );


    let linkHref=$(e.target).attr('href');
    let sectionOffset=$(linkHref).offset().top;
    $('html,body').animate({scrollTop:sectionOffset +10} , 500);
})
