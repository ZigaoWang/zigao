document.addEventListener("DOMContentLoaded", function() {
  var secretCode = "zigao";
  var input = "";
  
  document.addEventListener("keydown", function(event) {
    input += event.key.toLowerCase();
    
    if (input === secretCode) {
      var windowFeatures = "width=400,height=400,left=200,top=200";
      window.open("secret.html", "_blank", windowFeatures);
    }
  });
});
