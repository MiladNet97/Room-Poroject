let readURL = input => {
  if (input.files && input.files[0]) {

    let reader = new FileReader();

    reader.onload = e => {
      $('.file-upload-content').show();
      $('.image-upload-wrap').hide();
      let img = document.createElement('img')
      img.classList = ('file-upload-image w-100 h-100')
      img.setAttribute('src', e.target.result);
      $('.file-upload-content').append(img)
      $('#draggable').addClass('active');
    };

    reader.readAsDataURL(input.files[0]);

  } else {
    removeUpload();
  }
}

let removeUpload = () => {
  $('.file-upload-input').replaceWith($('.file-upload-input').clone());
  $('.file-upload-input').val("");
  $('.file-upload-image').remove()
  $('.file-upload-content').hide();
  $('.image-upload-wrap').show();
}
$('.image-upload-wrap').bind('dragover', () => $('.image-upload-wrap').addClass('image-dropping'))
$('.image-upload-wrap').bind('dragleave', () => $('.image-upload-wrap').removeClass('image-dropping'))


$(function () {
  $("#draggable").draggable();
});
$("#draggable").draggable({
  containment: "#containment-wrapper",
  scroll: false
})