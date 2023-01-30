
const nameInput = document.querySelector('#name');
const avatarInput = document.querySelector('#avatar');
const textInput = document.querySelector('#comment');
const button = document.querySelector('#send');
const containerComment = document.querySelector('.message');

const createComment=()=>{
    let message = document.createElement('div');
    message.className = 'massage';
    containerComment.append(message);

    let messageComment = document.createElement('p');
    messageComment.className ='message_Comment';
    messageComment.textContent = checkSpam(textInput.value);
    containerComment.prepend(messageComment);

    let messageName = document.createElement('p');
    messageName.className ='message_Name';
    messageName.textContent = checkName(nameInput.value);
    containerComment.prepend(messageName);


    let messageAvatar = document.createElement('img');
    messageAvatar.className = 'message_Avatar';
    messageAvatar.src = avatarInput.value;
    containerComment.prepend(messageAvatar);
}

const checkSpam = (string) =>{
    let spamChecked = string.replace(/xxx|viagra/gi, '***');
    let spamChecked1 = spamChecked.toLowerCase();
    return spamChecked1;
}

const checkName = (name) =>{
    let Username = name;
    let Username0 = Username.toLowerCase().trim();
    let Username1 = Username0.charAt(0).toUpperCase() + Username0.slice(1);
    return Username1;
}

button.addEventListener('click', () =>{
    createComment();
})