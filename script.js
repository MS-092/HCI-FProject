function sendEmail(){
    let parms = {
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        feedback : document.getElementById('feedback').value,
    }

    emailjs.send("service_93hvhxa", "template_yluzjzk", parms).then(alert("Thank you for your feedback. An email has been sent to your account."))
}