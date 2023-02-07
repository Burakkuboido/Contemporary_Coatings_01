function sendMail(contactForm) {
    emailjs.send("Milestone_Project_Two", "template_u93f1dk", {
        "from_name": contactForm.name.value,
        "phone": contactForm.phone.value,
        "email": contactForm.email.value,
        "address": contactForm.address.value,
        "service": contactForm.service.value,
        "message": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;
}