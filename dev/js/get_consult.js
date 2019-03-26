/* eslint-disable no-undef */
$(function() {
  $('#u585-4').on('click', function(e) {
    e.preventDefault();

    // clear
    $('#widgetu580_input, #widgetu4488_input').on('focus', function() {
      $('#u581-3, #u4489-4').css({
        'background-color': '#637795'
      });
    });

    var data = {
      name: $('#widgetu580_input').val(), //Введите имя
      phoneNumber: $('#widgetu4488_input').val() //Введите номер телефона
    };
    //console.log(data);

    $.ajax({
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json',
      url: '/api/get_consult'
    }).done(function(data) {
      //console.log(data);
      if (!data.ok) {
        if (data.fields) {
          data.fields.forEach(function(item) {
            if (item == 'name') {
              $('#u581-3').css({ 'background-color': 'red' });
              $('#widgetu580_input').val('');
              $('#widgetu580_input').attr('placeholder', data.error);
            } else if (item == 'phoneNumber') {
              $('#u4489-4').css({ 'background-color': 'red' });
              $('#widgetu4488_input').val('');
              $('#widgetu4488_input').attr('placeholder', data.error);
            }
          });
        }
      } else {
        $('#get-consult').html('отправлено!');
        $('#widgetu580_input').val('');
        $('#widgetu4488_input').val('');
        setTimeout(function() {
          $('#get-consult').html('получить консультацию');
        }, 2000);
        //$(location).attr('href', '/');
      }
    });
  });
});
/* eslint-enable no-undef */
