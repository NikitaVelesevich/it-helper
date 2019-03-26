/* eslint-disable no-undef */
$(function() {
  $('#u4400-4').on('click', function(e) {
    e.preventDefault();

    // clear
    $('#widgetu4401_input, #widgetu4389_input').on('focus', function() {
      $('#u4465, #u4462').css({
        'background-color': '#637795'
      });
    });

    var data = {
      name: $('#widgetu4401_input').val(), //Введите имя
      phoneNumber: $('#widgetu4389_input').val() //Введите номер телефона
    };
    console.log(data);

    $.ajax({
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json',
      url: '/api/get_discount'
    }).done(function(data) {
      console.log(data);
      if (!data.ok) {
        if (data.fields) {
          data.fields.forEach(function(item) {
            if (item == 'name') {
              $('#u4465').css({ 'background-color': 'red' });
              $('#widgetu4401_input').val('');
              $('#widgetu4401_input').attr('placeholder', data.error);
            } else if (item == 'phoneNumber') {
              $('#u4462').css({ 'background-color': 'red' });
              $('#widgetu4389_input').val('');
              $('#widgetu4389_input').attr('placeholder', data.error);
            }
          });
        }
      } else {
        $('#get-discount').html('ОТПРАВЛЕНО!');
        $('#widgetu4401_input').val('');
        $('#widgetu4389_input').val('');
        setTimeout(function() {
          $('#get-discount').html('ПОЛУЧИТЬ СКИДКУ');
        }, 2000);
        //$(location).attr('href', '/');
      }
    });
  });
});
/* eslint-enable no-undef */
