function makesvg(percentage, inner_text=""){

  var abs_percentage = Math.abs(percentage).toString();
  var percentage_str = percentage.toString();
  var classes = "success-stroke"

 var svg = '<svg class="circle-chart" viewbox="0 0 33.83098862 33.83098862" xmlns="http://www.w3.org/2000/svg">'
     + '<circle class="circle-chart__background" cx="16.9" cy="16.9" r="15.9" />'
     + '<circle class="circle-chart__circle '+classes+'"'
     + 'stroke-dasharray="'+ abs_percentage+',100"    cx="16.9" cy="16.9" r="15.9" />'

  return svg
}

(function( $ ) {

    $.fn.circlechart = function() {
        this.each(function() {
            var percentage = $(this).data("percentage");
            var inner_text = $(this).text();
            $(this).html(makesvg(percentage, inner_text));
        });
        return this;
    };

}( jQuery ));