({
    block: 'b-page',
    title: 'Instates. Покупка и доставка из США. Одежда, электроника, косметика.',
    head: [
        { elem: 'css', url: './post.index.css', ie: false },
        { elem: 'css', url: './post.index', ie: true },
        { elem: 'js', url: '//yandex.st/jquery/1.8.3/jquery.min.js' },
        { elem: 'js', url: './post.index.js' },
        // Это необходимо подключать только тогда, когда у вас используются лайки со счётчиками
        // { elem: 'js', url: '//yandex.st/share/cnt.share.js' },

        // FIXME: незабываем заменить favicon на иконку своего сервиса
        // { elem: 'favicon', url: '/www/favicon.ico' },

        // FIXME: Меты для поисковой оптимизации
        { elem: 'meta', attrs: { name: 'description', content: 'Покупка одежды, обуви, электроники, негабаритных товаров во всех магазинах Америки по низкой цене! Объединение товаров в одну посылку. Доставка по России до квартиры от 300 рублей за 1 кг.' } },
        { elem: 'meta', attrs: { name: 'keywords', content: '' } },

        // FIXME: Меты OpenGraph протокола http://developers.facebook.com/docs/opengraph/
        { elem: 'meta', attrs: { property: 'og:title', content: 'Покупка и доставка из США. Одежда, электроника, косметика.' } },
        { elem: 'meta', attrs: { property: 'og:description', content: 'Покупка одежды, обуви, электроники, негабаритных товаров во всех магазинах Америки по низкой цене! Объединение товаров в одну посылку. Доставка по России до квартиры от 300 рублей за 1 кг.' } },
        { elem: 'meta', attrs: { property: 'og:image', content: 'http://instates.ru/www/share.jpg' } },
        { elem: 'meta', attrs: { property: 'og:type', content: 'website' } }
    ],

    // Это приводит IE в режим совместимости с IE7, если оно не нужно -- удаляйте строку
    'x-ua-compatible': 'IE=EmulateIE7, IE=edge',
    js: true,
    content: [
        {
            elem: 'section',
            content: [
                {
                    block: 'header'
                }
            ]
        },
        {
            block: 'content',
            mix: [{block: 'b-page', elem: 'section'}],
            content: [
                {
                    elem: 'p',
                    mix: [{block: 'font', elem: 'capture-it'}],
                    content: [
                        'Хочешь купить в Америке ',
                        {
                            elem: 'variant',
                            content: [
                                'джинсы',
                                'сумку',
                                'купальник',
                                'пылесос',
                                'помаду',
                                'тушь',
                                'тени',
                                'ноутбук',
                                'кросовки',
                                'туфли',
                                'телефон',
                                'нижнее белье',
                                'iPhone',
                                'книгу',
                                'календарь',
                                'детские вещи',
                                'игрушки',
                                'удочку',
                                'сноуборд',
                                'сапоги',
                                'пальто',
                                'куртку',
                                'свитер',
                                'рубашку',
                                'футболку',
                                'ремень',
                                'галстук',
                                'часы',
                                'украшения',
                                'платье'
                            ]
                        },
                        '?'
                    ]
                },
                {
                    elem: 'p',
                    mix: [{block: 'font', elem: 'capture-it'}],
                    attrs: {
                        style: 'margin-left:-19px;'
                    },
                    content: [
                        'Отличная идея, давно пора!'
                    ]
                },
                {
                    elem: 'p',
                    mix: [{block: 'font', elem: 'capture-it'}],
                    content: [
                        'Тебе сюда:',
                    ]
                },
                {
                    elem: 'p',
                    mix: [{block: 'font', elem: 'capture-it'}],
                    attrs: {
                        style: 'margin-left:70px;'
                    },
                    content: [
                        {
                            block: 'b-link',
                            url: 'https://vk.com/instates',
                            target: '_blank',
                            title: 'vk.com/instates',
                            content: 'vk.com/instates'
                        }
                    ]
                },
            ]
        },
        {
            block: 'stripe'
        },
        '<script type="text/javascript">(function (d, w, c) {(w[c] = w[c] || []).push(function() {try {w.yaCounter24580112 = new Ya.Metrika({id:24580112,webvisor:true,clickmap:true,trackLinks:true,accurateTrackBounce:true});} catch(e) { }});var n = d.getElementsByTagName("script")[0],s = d.createElement("script"),f = function () { n.parentNode.insertBefore(s, n); };s.type = "text/javascript";s.async = true;s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";if (w.opera == "[object Opera]") {d.addEventListener("DOMContentLoaded", f, false);} else { f(); }})(document, window, "yandex_metrika_callbacks");</script><noscript><div><img src="//mc.yandex.ru/watch/24580112" style="position:absolute; left:-9999px;" alt="" /></div></noscript>'
    ]
})