
$('#idAdd').click(function (){
    if($('#elementId').val() !== '') {
        let data = $('#elementId').val()
        $('#id-contain').append(`<div class="taglist border-style">${data}</div>`);
    }
})
$('#classAdd').click(function (){
    if($('#classId').val() !== '') {
        let data = $('#classId').val()
        $('#class-contain').append(`<div class="taglist border-style">${data}</div>`);
    }
  })
$('#tagAdd').click(function (){

    if($('#tag').val() !== '') {
        let data = $('#tag').val()
         $('#tag-contain').append(`<div class="taglist border-style">${data}</div>`);
    }
  })

$('#start').click(function (){

    let tagArray = [];
    let idArray = [];
    let classArray = [];
    $('input:checkbox:checked').each(function (){
            tagArray.push($(this).attr('id'));
        });
    $('#tag-contain .taglist').each(function (){
        tagArray.push($(this).text())
    });
    $('#id-contain .taglist').each(function (){
        idArray.push($(this).text())
    })
    $('#class-contain .taglist').each(function (){
        classArray.push($(this).text())
    })
    if(tagArray.length){
        chrome.storage.sync.set({'tag': tagArray}, function() {
            console.log('success！');
        });
    }
   if(idArray.length){
       chrome.storage.sync.set({'id': idArray}, function() {
           console.log('success！');
       });
   }
  if(classArray.length){
      chrome.storage.sync.set({'class': classArray}, function() {
          console.log('success！');
      });
  }
    var bg = chrome.extension.getBackgroundPage();
    bg.getCurrentTabId();
})
$('#reset').click(function (){
    location.reload();
})