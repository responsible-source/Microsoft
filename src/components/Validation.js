

export default function Validation(value) {
    let error = {};

    if (!value.email){
        error.value = "Enter a valid email address, phone number, or Skype name.";
    } 
    if(!!/[^\s@]+@[^\s@]+\.[^\s@]+/.test(value.email)){
        // error.email = "We couldn't find an account with that username. Try another, or get a new Microsoft account."
    }

    return error;
}


// /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/