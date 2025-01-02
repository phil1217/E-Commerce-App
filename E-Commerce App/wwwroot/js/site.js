function setSelectWidth() {
    var sel = $('#sel');
    $('#templateOption').text(sel.val());
    sel.width($('#template').width() * 1.03);
}