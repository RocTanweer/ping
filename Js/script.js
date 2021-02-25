const inputField = document.getElementById('email');
const submitBtn = document.getElementById('submit');
const closingBtn = document.getElementById('close');


submitBtn.addEventListener('click', emailSubmit);
closingBtn.addEventListener('click', closeNotification);

function emailSubmit(e) {
    e.preventDefault();
    let inputText = inputField.value;
    let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(emailRegex.test(inputText)) {
        let notification = document.getElementById('notification');
        notification.style.display = 'flex';
        inputField.value = '';
    }
    else{
        let warning = document.getElementById('warning');
        warning.style.display = 'block';
        inputField.style.borderColor = '#ff5263';
    }

}

function closeNotification(){
    let notification = document.getElementById('notification');
    notification.style.display = 'none';
}