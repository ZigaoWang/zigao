document.addEventListener("DOMContentLoaded", function() {
  var secretCode = "zigao";
  var input = "";
  
  document.addEventListener("keydown", function(event) {
    input += event.key.toLowerCase();
    
    if (input === secretCode) {
      var windowFeatures = "width=600,height=600,left=200,top=200";
      window.open("secret.html", "_blank", windowFeatures);
    }
  });
});
