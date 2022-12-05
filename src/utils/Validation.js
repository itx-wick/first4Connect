/*
 * Declare all the validation functions, which are usin in the app.
 * */

//Function for Validate Text
export function validateInput(data, message) {
  if (data == '' || data == undefined || data == null) {
    return {status: false, error: message};
  } else {
    return {status: true, error: ''};
  }
}

//Function for Validate email
export function validateEmail(email) {
  var emailRegex =
    /^[A-Z0-9_]+([\.][A-Z0-9_]+)*@[A-Z0-9-]+(\.[a-zA-Z]{2,5})+$/i;
  email = email.trim();
  if (email == '' || email == undefined || email == null) {
    return {status: false, error: 'Please Enter Your Email Address'};
  } else if (!emailRegex.test(email)) {
    return {status: false, error: 'Please Enter a Valid Email Address'};
  } else {
    return {status: true, error: ''};
  }
}

//Function for Validate mobile number
export function validateMobileNo(mobileNo) {
  mobileNo = mobileNo.trim();
  if (mobileNo == '' || mobileNo == undefined || mobileNo == null) {
    return {status: false, error: 'Please enter mobile number.'};
  } else if (mobileNo.length <= 10) {
    return {
      status: false,
      error: 'Mobile number should contain 11 digits.',
    };
  } else {
    return {status: true, error: ''};
  }
}

//Function for Validate password
export function validatePassword(password) {
  password = password.trim();
  if (password == '' || password == undefined || password == null) {
    return {status: false, error: 'Please Enter Your Password'};
  } else if (password.length < 6 || password.length > 16) {
    return {status: false, error: 'Password Must Contain 6 Characters.'};
  } else {
    return {status: true, error: ''};
  }
}
