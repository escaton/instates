({
    block: 'b-page',
    title: 'Instates',
    head: [
        { elem: 'css', url: './post.index.css', ie: false },
        { elem: 'css', url: './post.index', ie: true },
        { elem: 'js', url: '//yandex.st/jquery/1.8.3/jquery.min.js' },
        { elem: 'js', url: './post.index.js' },
        // Это необходимо подключать только тогда, когда у вас используются лайки со счётчиками
        // { elem: 'js', url: '//yandex.st/share/cnt.share.js' },

        // FIXME: незабываем заменить favicon на иконку своего сервиса
        { elem: 'favicon', url: '//yandex.st/lego/_/pDu9OWAQKB0s2J9IojKpiS_Eho.ico' },

        // FIXME: Меты для поисковой оптимизации
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'keywords', content: '' } },

        // FIXME: Меты OpenGraph протокола http://developers.facebook.com/docs/opengraph/
        { elem: 'meta', attrs: { property: 'og:title', content: '' } },
        { elem: 'meta', attrs: { property: 'og:description', content: '' } },
        { elem: 'meta', attrs: { property: 'og:image', content: '' } },
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
                        'Хочешь купить в Америке джинсы',
                        // {
                        //     block: 'roulette',
                        //     content: [
                        //         {
                        //             elem: 'wrap',
                        //             content: [
                        //                 {
                        //                     elem: 'item',
                        //                     content: 'ноутбук'
                        //                 },
                        //                 {
                        //                     elem: 'item',
                        //                     content: 'сумку'
                        //                 },
                        //                 {
                        //                     elem: 'item',
                        //                     mods: {state: 'current'},
                        //                     content: 'джинсы'
                        //                 },
                        //                 {
                        //                     elem: 'item',
                        //                     content: 'телефон'
                        //                 },
                        //                 {
                        //                     elem: 'item',
                        //                     content: 'футболку'
                        //                 }
                        //             ]
                        //         }
                        //     ]
                        // },
                        '?'
                    ]
                },
                {
                    elem: 'p',
                    mix: [{block: 'font', elem: 'capture-it'}],
                    attrs: {
                        style: 'margin-left:-10px;'
                    },
                    content: [
                        'Умничка, давно пора!'
                    ]
                },
                {
                    elem: 'p',
                    mix: [{block: 'font', elem: 'capture-it'}],
                    content: [
                        'Пойдем, я тебе всё расскажу ',
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
        }
    ]
})