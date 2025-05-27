var result = document.getElementById("result");
var buttons = document.querySelectorAll("#calcu input[type=button]");

buttons.forEach(function(button) {
    button.addEventListener("click", function(){
        if (this.value === "=") {
          try {
              resultInput.value = eval(resultInput.value)
          } catch (error) {
              result.value = "Error";
          }
        } else if (this.value === "c") {
            resultInput.value = "";
        } else {
            resultInput.value += this.value;
        }
    });
});