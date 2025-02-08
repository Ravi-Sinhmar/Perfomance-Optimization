$(document).ready(function(){
$("#sendnow").click(function() {
        var name = $('#name').val().trim();  
          var category = $('#category').val().trim();
          var movingfrom = $('#movingfrom').val().trim();
             var movingto = $('#movingto').val().trim();
         var mobile = $('#mobile').val().trim();
        var email=$('#email').val().trim(); 
            var movingdate = $('#movingdate').val().trim();
           var address = $('#address').val().trim();
         $.ajax({
        method:"POST",
        url: "contact_action.php",
        data:{name: name, category: category, mobile: mobile, movingfrom: movingfrom, movingto: movingto, email: email, address: address, movingdate: movingdate },
        beforeSend: function() {
               $('#sendnow').hide(); 
                 $('#subloader').show();
              $('#subloader').html('<img src="assets/icon/loading.gif" height="70">');
           },
           success: function(data){
          //$('#msg').html(data);

         var obj = JSON.parse(data);
$('#msg').html(obj.errors);
  var status=obj.status ; 
  $('#subloader').hide();
  $('#subloader').html("");
  $('#sendnow').show(); 
  if(status=='success')
  {
    $('#hide_form').hide();
    $('#success').html('Thank you ' +name + ' ! Your message has been sent . We will contcat you soon as possible.. ');

  }$("#captcha").attr('src','captchaimg.php');
          
    }
});
    });
});
