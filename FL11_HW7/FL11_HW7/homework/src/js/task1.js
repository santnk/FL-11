const minEmailLength = 6;
const minPassLength = 5;

let theEmail;
let thePassword;
let theOldPassword;
let theNewPassword;

let loginFields
let loginUser = 'user@gmail.com';
let passUser = 'UserPass';
let loginAdmin = 'admin@gmail.com';
let passAdmin = 'AdminPass';
let theNewPassConfirm;

theEmail = prompt('Enter your email please');
if (theEmail === '' || theEmail === null) {
  alert('Canceled');
} else if (theEmail.length < minEmailLength) {
    alert ('I don\'t know any emails having name length less than 6 symbols');
} else if (theEmail === 'user@gmail.com' || theEmail === 'admin@gmail.com') {
    alert('I don’t know you');
    thePassword = prompt('Enter your password please');
    if (thePassword === null || thePassword === '') {
      alert('Canceled');
  } else if (theEmail === loginUser && thePassword !== passUser || theEmail === loginAdmin && thePassword !== passAdmin) {
      alert('Wrong password');
  } else if (!confirm('Do you want to change your password?')) {
      alert('You have failed the change');
  } else {
      theOldPassword = prompt('Enter your old password please');
      if (theOldPassword === null || theOldPassword === '') {
        alert('Wrong password');
    } else {
        theNewPassword = prompt('Please, enter your new password');
        if (!theNewPassword) {
          alert('Canceled');
      } else if (theNewPassword < minPassLength) {
          alert('It’s too short password. Sorry.'); 
      } else {
          theNewPassConfirm = prompt('Confirm your new password please');
          if (theNewPassConfirm !== theNewPassword) {
            alert('You wrote the wrong password');
        } else {
            alert('You have successfully changed your password');
        }
      }
    }
  }
}   