(function () {
    'use strict';
    var imgOpen = document.getElementById('imgOpen');
    var imgSave = document.getElementById('imgSave');
    var imgSaveDialog = document.getElementById('imgSaveDialog');
    var imgResult = document.getElementById('imgResult');
    var nwWindow = require('nw.gui').Window.get();
    var fs = require('fs');
    /**
     * �摜�̑I��
     */
    imgOpen.addEventListener('change', function () {
        imgResult.src = this.value;
    }, null);
    /**
     * �ۑ���_�C�A���O�̕\���ƃL���v�`���̕ۑ�
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
