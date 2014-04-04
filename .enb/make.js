module.exports = function(config) {
    config.setLanguages(["ru"]);
    config.mode("development", function() {
        config.node("desktop.bundles/index", function(nodeConfig) {
            nodeConfig.addTechs([
                [ require("enb/techs/file-copy"), { sourceTarget: "?.js", destTarget: "_?.js" } ],
                [ require("enb/techs/file-copy"), { sourceTarget: "?.css", destTarget: "_?.css" } ],
                [ require("enb/techs/file-copy"), { sourceTarget: "?.ie6.css", destTarget: "_?.ie6.css" } ],
                [ require("enb/techs/file-copy"), { sourceTarget: "?.ie7.css", destTarget: "_?.ie7.css" } ],
                [ require("enb/techs/file-copy"), { sourceTarget: "?.ie8.css", destTarget: "_?.ie8.css" } ],
                [ require("enb/techs/file-copy"), { sourceTarget: "?.ie9.css", destTarget: "_?.ie9.css" } ]
            ]);
        });
    });
    config.mode("production", function() {
        config.node("desktop.bundles/index", function(nodeConfig) {
            nodeConfig.addTechs([
                [ require("enb/techs/borschik"), { sourceTarget: "?.js", destTarget: "_?.js", minify: true, freeze: true } ],
                [ require("enb/techs/borschik"), { sourceTarget: "?.css", destTarget: "_?.css", minify: true, freeze: true } ],
                [ require("enb/techs/borschik"), { sourceTarget: "?.ie6.css", destTarget: "_?.ie6.css", minify: true, freeze: true } ],
                [ require("enb/techs/borschik"), { sourceTarget: "?.ie7.css", destTarget: "_?.ie7.css", minify: true, freeze: true } ],
                [ require("enb/techs/borschik"), { sourceTarget: "?.ie8.css", destTarget: "_?.ie8.css", minify: true, freeze: true } ],
                [ require("enb/techs/borschik"), { sourceTarget: "?.ie9.css", destTarget: "_?.ie9.css", minify: true, freeze: true } ]
            ]);
        });
    });

    config.node("desktop.bundles/index", function(nodeConfig) {
        function getLevels() {
            return [
                {"path":"vendors/bem-bl/blocks-common","check":false},
                {"path":"vendors/bem-bl/blocks-desktop","check":false},
                {"path":"vendors/bem-components/common.blocks","check":false},
                {"path":"vendors/bem-components/desktop.blocks","check":false},
                {"path":"desktop.blocks","check":true}
            ].map(function(l) { return config.resolvePath(l); });
        }

        nodeConfig.addTechs([
            [ require("enb/techs/levels"), { levels: getLevels() } ],
            [ require("enb/techs/file-provider"), { target: "?.bemjson.js" } ],
            require("enb/techs/bemdecl-from-bemjson"),
            require("enb/techs/deps-old"),
            require("enb/techs/files"),
            [ require('enb-xjst/techs/bemhtml'), { devMode: false } ],
            [ require("enb/techs/html-from-bemjson"), { destTarget: "_?.html"} ],
            require('enb/techs/js'),
            require("enb/techs/css"),
            [ require("enb/techs/css-ie6"), { sourceSuffixes: ['css', 'ie.css', 'ie6.css'] }],
            [ require("enb/techs/css-ie7"), { sourceSuffixes: ['css', 'ie.css', 'ie7.css'] }],
            [ require("enb/techs/css-ie8"), { sourceSuffixes: ['css', 'ie.css', 'ie8.css'] }],
            [ require("enb/techs/css-ie9"), { sourceSuffixes: ['css', 'ie9.css'] }]
        ]);
        nodeConfig.addTargets(["?.bemhtml.js", "_?.html", "_?.css", "_?.ie6.css", "_?.ie7.css", "_?.ie8.css", "_?.ie9.css", "_?.js"]);
    });
};