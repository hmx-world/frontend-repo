

import()



(function(){
    emailjs.init('user_ewg19GGrhR5GQrCsQTsdq');
})();


window.onload = function() {
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();
            // generate the contact number value
            emailjs.sendForm('hmxmail', 'template_R2J15wDx', this);
        });
    }
