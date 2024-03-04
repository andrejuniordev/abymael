$(document).ready(function() {
    // Scroll suave para as seções
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();

        var target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    // Efeito para destacar o item do menu conforme você rola a página
    $(window).scroll(function() {
        var scrollDistance = $(window).scrollTop();

        $('.section').each(function(i) {
            if ($(this).position().top <= scrollDistance) {
                $('ul li a.active').removeClass('active');
                $('ul li a').eq(i).addClass('active');
            }
        });
    });

    // Envio de formulário (substitua com sua lógica de envio de formulário real)
    $('#form-contato').submit(function(event) {
        event.preventDefault();
        alert('Formulário enviado! (Esta é apenas uma simulação. Implemente a lógica real no seu servidor.)');
    });
});
