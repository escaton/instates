;(function($){
 
    $.fn.shuffle = function() {
 
        var allElems = this.get(),
            getRandom = function(max) {
                return Math.floor(Math.random() * max);
            },
            shuffled = $.map(allElems, function(){
                var random = getRandom(allElems.length),
                    randEl = $(allElems[random]).clone(true)[0];
                allElems.splice(random, 1);
                return randEl;
           });
 
        this.each(function(i){
            $(this).replaceWith($(shuffled[i]));
        });
 
        return $(shuffled);
 
    };
 
})(jQuery);

BEM.DOM.decl('content', {

    onSetMod: {
        js: {
            inited: function() {

                var self = this;

                self.current = 0;

                self.shuffle();

                self.rotate();
                window.setInterval(function() {
                    self.rotate();
                }, 2000);


            }
        }
    },

    shuffle: function() {

        var self = this,
            variants = self.elem('variant-item');

        variants.shuffle();

    },

    rotate: function() {


        var self = this,
            variants = self.findElem('variant-item'),
            current = self.current;

        for( var i = 0; i<variants.length; i++) {

            var pos = variants.eq(i).data('pos') || i - current;

            pos--;

            if (pos <= -variants.length/2) {
                pos = Math.floor(variants.length/2);
            }

            variants.eq(i).css({
                'top': pos*40,
                'transform': 'rotateX('+pos*-10+'deg) translateZ('+Math.abs(pos)*-5+'px)',
                'opacity': 1-Math.abs(pos)/3
            })
            .data('pos', pos);
        }

        self.current = (current+1)%variants.length;
        self.elem('variant').width(variants.eq(self.current).width() + 5);

    }

});