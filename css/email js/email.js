// Auto-Confirmation Email to submitter

// THE SIMPLEST WAY

function AutoConfirmation(e){
    var theirFirst = e.values[2];
    var theirEmail = e.values[5];
    var theEvent = e.values[1];
    var subject = "Form Submitted";
    var message = "Thank you, " + theirFirst + " for the expressed interest in our " + theEvent;

 MailApp.sendEmail (theirEmail, subject, message);
 }