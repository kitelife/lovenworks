function validateRegEx(regex, input, helpText, helpMessage) {
        // See if the input data validates OK
          if (!regex.test(input)) {
          // The data is invalid, so set the help message and return false
          if (helpText != null)
            helpText.innerHTML = helpMessage;
          return false;
        }
        else {
          // The data is OK, so clear the help message and return true
          if (helpText != null)
            helpText.innerHTML = "";
          return true;
        }
      }




function validateNonEmpty(inputField, helpText) {
        // See if the input value contains any text
        return validateRegEx(/.+/,
          inputField.value, helpText,
          "Your address is empty.");
      }

function validateLength(minLength, maxLength, inputField, helpText) {
        // See if the input value contains at least minLength but no more than maxLength characters
        return validateRegEx(new RegExp("^.{" + minLength + "," + maxLength + "}$"),
          inputField.value, helpText,
          "Your theme is empty. " + "(" + minLength + " to " + maxLength +
          " characters in length)");
      }
	  
function validateTextarea() {
	var str=document.getElementById("message").value;
  if(str==""){
    document.getElementById("message_help").innerHTML = "Please leave your message for me.";
   return false;
  }
  else {
         if (str != null)
            document.getElementById("message_help").innerHTML ="";
          return true;
        }
}
	
function validateEmail(inputField, helpText) {
        // First see if the input value contains data
        if (!validateNonEmpty(inputField, helpText))
          return false;

        // Then see if the input value is an email address
        return validateRegEx(/^[\w\.-_\+]+@[\w-]+(\.\w{2,3})+$/,
          inputField.value, helpText,
          "Please enter an email address (for example, johndoe@acme.com).");
      }


function placeOrder(form) {
        if (validateLength(1, 50, form["subject"], form["subject_help"])  &&
          validateEmail(form["email"], form["email_help"])&&
          validateTextarea(form["message"], form["message_help"])) {
          // Submit the order to the server
          form.submit();
        } 
		else {
          alert("I'm sorry but there is something wrong with your form :(");
        }
      }