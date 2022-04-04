//how to get the # url and remove the # form leftover code?
const { hash } = window.location; //destructuring first

//Base64 to ASCII & removing '#'
const message = atob(hash.replace('#', ''));

//toggle hiding & adding message
if (message) {
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');

    document.querySelector('h1').innerHTML = message;
};

//callback function
document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault(); //prevent automatic behaviour to send form to some backend server (that we dont have here)

    //adding & removing class 'hide' = hiding & unhiding message and link (toggle visibility)
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');

    const input = document.querySelector('#message-input');
    const encrypted = btoa(input.value); //create Base64 code

    const linkInput = document.querySelector('#link-input');
    linkInput.value = `${window.location}#${encrypted}`; //Base64 placing/adding at the end of the string(link)
    linkInput.select(); //auto select link for user when is made
});
