document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const successMessage = document.getElementById("success-message");
  const errorMessages = document.querySelectorAll(".error-message");

  form.addEventListener("submit", function (event) {
      event.preventDefault(); 
      let formIsValid = true;

    
      errorMessages.forEach((errorMessage) => {
          errorMessage.style.display = "none";
      });

    
      const firstName = document.getElementById("first-name");
      if (firstName.value.trim() === "") {
          showError(firstName, "First name is required.");
          formIsValid = false;
      }

    
      const lastName = document.getElementById("last-name");
      if (lastName.value.trim() === "") {
          showError(lastName, "Last name is required.");
          formIsValid = false;
      }

   
      const email = document.getElementById("email");
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email.value.trim())) {
          showError(email, "Please enter a valid email address.");
          formIsValid = false;
      }

  
      const queryType = document.querySelector('input[name="query-type"]:checked');
      if (!queryType) {
          showError(document.querySelector(".radio-group"), "Please select a query type.");
          formIsValid = false;
      }

    
      const message = document.getElementById("message");
      if (message.value.trim() === "") {
          showError(message, "Message is required.");
          formIsValid = false;
      }

   
      const consent = document.querySelector('input[name="consent"]');
      if (!consent.checked) {
          showError(consent, "You must consent to being contacted.");
          formIsValid = false;
      }

      
      if (formIsValid) {
          successMessage.textContent = "Thank you! Your message has been sent.";
          successMessage.style.display = "block";
          form.reset(); 
          setTimeout(() => {
              successMessage.style.display = "none";
          }, 3000);
      }
  });

 
  function showError(inputElement, message) {
      const errorMessage = inputElement.closest(".input-group").querySelector(".error-message");
      errorMessage.textContent = message;
      errorMessage.style.display = "block";
      errorMessage.focus(); 
  }
});
