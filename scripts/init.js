
$(function() {
    $('#opPanel').load('./panel_sho',function(){
        $('#kana_kensaku').on('click','.kana',
            function ($this){ s_text = $this.target.textContent
            $('#content').load("./sho_kana?kana=" + s_text,
                function() {
                    $('#sho_list').on('click','.shoyusha', function ($this){
                        s_text = $this.target.textContent
                        kana_sub(s_text);
                        //$('#content').load("./sho_kana?kana=" + s_text);
                    });
            
            });
        });
    });

    var kana_sub = function(obj){
        console.log(obj);
    }

});

$(function() {
    $('#content').load('./content_top');
});


//$(function(){
//    $('#opPanel').on('click','.kana',alert())
//});

