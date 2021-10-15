let readURL = input => {
  if (input.files && input.files[0]) {

    let reader = new FileReader();

    reader.onload = e => {
      $('.file-upload-content').show();
      $('.image-upload-wrap').hide();
      let img = document.createElement('img')
      img.classList = ('file-upload-image w-100 h-100')
      img.setAttribute('src', e.target.result);
      $('.file-upload-content').append(img);
      $('.action-button').addClass('active')
    };

    reader.readAsDataURL(input.files[0]);

  } else {
    removeUpload();
  }
}

let removeUpload = () => {

  if (confirm('Do You Want Remove All Item?')) {
    $('.file-upload-input').replaceWith($('.file-upload-input').clone());
    $('.file-upload-input').val("");
    $('.file-upload-image').remove()
    $('.file-upload-content').hide();
    $('.image-upload-wrap').show();
    $('.action-button').removeClass('active');
    $(".heart-box").children().remove()
  }
}

$('.image-upload-wrap').bind('dragover', () => $('.image-upload-wrap').addClass('image-dropping'))
$('.image-upload-wrap').bind('dragleave', () => $('.image-upload-wrap').removeClass('image-dropping'))




$('.add-heart').click(() => {
  let div = document.createElement('div');
  div.id = `draggable${$('.heart-box').children().length}`;
  div.classList = 'heart-draggable position-absolute align-items-center justify-content-center bg-secondary rounded-pill';
  let icon = document.createElement('i');
  icon.classList = 'fas fa-heart text-light';
  div.appendChild(icon);
  let text = document.createElement('div');
  text.classList = 'heart-draggable-text d-flex align-items-center py-1 px-2 bg-secondary text-white position-absolute';
  text.innerHTML = 'Add to your room';
  
  let action = document.createElement('span');
  action.classList = 'heart-draggable-action d-flex align-items-center px-2 bg-secondary text-white position-absolute';
  action.innerHTML = `
  <a href=""><i class="far fa-thumbs-up draggable-action-icon"></i></a>
  <a href=""><i class="fas fa-share-alt draggable-action-icon"></i></a>
  <a href=""><i class="fas fa-shopping-cart draggable-action-icon"></i></a>
  <a href=""><i class="fas fa-dollar-sign draggable-action-icon"></i></a>
  <a href=""><i class="fas fa-image draggable-action-icon"></i></a>`
  
  text.appendChild(action)
  div.appendChild(text)
  $('.heart-box').append(div)

  for (let i = 0; i < $('.heart-box').children().length; i++) {
    $(`#draggable${i}`).draggable({
      containment: "#containment-wrapper",
      scroll: false,
    })
  }

});