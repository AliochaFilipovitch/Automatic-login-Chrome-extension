!function() {
  var myVar = setTimeout(
    function () {
      var username = document.getElementById('login_field')
      var password = document.getElementById('password')

      if (username && password) {
        // Update login value
        username.value = "your-username";
        // Update password value
        password.value = "your-password";
        // Submit the form
        document.forms[0].submit();
      } 
    }, 1000); // 1s
} ()