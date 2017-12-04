
$(function() {
    $('#opPanel').load('./panel_sho',function(){
        $('#kana_kensaku').on('click','.kana',
            function ($this){ s_text = $this.target.textContent
            $('#content').load("./sho_kana?kana=" + s_text,
                function() {
                    $('#sho_list').on('click','.shoyusha', function ($this){
                        s_text = $this.target.attributes.sho_code.value
                        kana_sub(s_text);
                        //$('#content').load("./sho_kana?kana=" + s_text);
                    });
            
            });
        });
    });

    var kana_sub = function(s_text){
        $('#content').load('./sho_kumi?owner=' + s_text);
        
        console.log(s_text);
    }

});

$(function() {
    $('#content').load('./content_top');
});


//$(function(){
//    $('#opPanel').on('click','.kana',alert())
//});

