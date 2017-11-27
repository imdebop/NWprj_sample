(function () {
    'use strict';
    var imgOpen = document.getElementById('imgOpen');
    var imgSave = document.getElementById('imgSave');
    var imgSaveDialog = document.getElementById('imgSaveDialog');
    var imgResult = document.getElementById('imgResult');
    var nwWindow = require('nw.gui').Window.get();
    var fs = require('fs');
    /**
     * 画像の選択
     */
    imgOpen.addEventListener('change', function () {
        imgResult.src = this.value;
    }, null);
    /**
     * 保存先ダイアログの表示とキャプチャの保存
     */
    imgSaveDialog.addEventListener('change', function () {
        var dist = this.value;
        nwWindow.capturePage(function (buffer) {
            fs.writeFile(dist, buffer, 'base64');
        }, {
            format: 'png',
            datatype: 'buffer'
        });
    }, null);
    imgSave.addEventListener('click', function () {
        imgSaveDialog.click();
    }, null);
}());
