<?php
 
$errors         = array();      // array to hold validation errors
$data           = array();      // array to pass back data

// validate the variables ======================================================
    // if any of these variables don't exist, add an error to our $errors array
    $name = $_POST['name']; // required 
    $email_from = $_POST['email']; // required
    $message = $_POST['message']; // required
 


    if (empty($name)){
        $errors['name'] = 'Name is required.';
    }
    else{
        
        $string_exp = "/^[A-Za-z .'-]+$/";
 
        if(!preg_match($string_exp,$name)) {
 
          $errors = 'Sorry, the name you entered does not appear to be valid.';
 
        }
    }

    if (empty($email_from)){
        $errors['email'] = 'Email is required.';
    }
    else{
        
        $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
        if(!preg_match($email_exp,$email_from)) {
 
        $errors = 'Sorry, the email you entered does not appear to be valid.';
 
        }

    }

    if (empty($message)){
        $errors['message'] = 'Message is required.';

    }
    else{
      if(strlen($message) < 2) {
 
      $errors = 'The message you entered do not appear to be valid.<br />';
 
      }
    }
    
// return a response ===========================================================

    // if there are any errors in our errors array, return a success boolean of false
    if ( ! empty($errors)) {

        // if there are items in our errors array, return those errors
        $data['success'] = false;
        $data['errors']  = $errors;
    } else {

        // if there are no errors process our form, then return a message

        // DO ALL YOUR FORM PROCESSING HERE

        $email_to = "hello@3vell.com";
 
        $email_subject = "Customer Question";
 
        $email_message = "Query below...\n\n";
 
     
 
        function clean_string($string) {
 
        $bad = array("content-type","bcc:","to:","cc:","href");
 
        return str_replace($bad,"",$string);
 
        }
 
        $email_message .= "First Name: ".clean_string($name)."\n";
  
        $email_message .= "Email: ".clean_string($email_from)."\n";
 
        $email_message .= "Message: ".clean_string($message)."\n";
 
        // create email headers
 
        $headers = 'From: '.$email_from."\r\n".
 
        'Reply-To: '.$email_from."\r\n" .
 
        'X-Mailer: PHP/' . phpversion();
 
        @mail($email_to, $email_subject, $email_message, $headers); 
 
  
        // show a message of success and provide a true success variable
        $data['success'] = true;
        $data['message'] = 'Thank You! Your email has been successfully sent.';
    }

    // return all our data to an AJAX call
    echo json_encode($data);

?>