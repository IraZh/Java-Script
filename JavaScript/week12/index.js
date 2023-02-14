
const nameInput = document.querySelector('#name');
const avatarInput = document.querySelector('#avatar');
const textInput = document.querySelector('#comment');
const button = document.querySelector('#send');
const containerComment = document.querySelector('.message');
const choiceYes=document.querySelector('#radio_1');


const avatarCollection = [
    'assets/images/avatar.png',
    'assets/images/circle.png',
    'assets/images/flat.png',
    'assets/images/image.png',
    'assets/images/girl_face.png',
];

function randomAvatar() {
    let random = Math.floor(Math.random() * avatarCollection.length);
    return avatarCollection[random];
}

const createComment=()=>{
    let message = document.createElement('div');
    message.className = 'massage';
    containerComment.append(message);

    let messageComment = document.createElement('p');
    messageComment.className ='message_comment';
    messageComment.textContent = checkSpam(textInput.value);
    containerComment.prepend(messageComment);

    let messageName = document.createElement('p');
    messageName.className ='message_Name';
    if (choiceYes.checked===true){
        messageName.textContent = checkName(nameInput.value);
    }
    else {
        messageName.textContent = "username";
    }
    containerComment.prepend(messageName);

    let messageAvatar = document.createElement('img');
    messageAvatar.className = 'message_Avatar';
    if( avatarInput.value !=='' ) {
        messageAvatar.src = avatarInput.value; }
    else{
        messageAvatar.src = randomAvatar();
    }
    containerComment.prepend(messageAvatar);

    let messageTime = document.createElement('div');
    messageTime.className ='message_time';
    messageTime.textContent = new Date();
    containerComment.prepend(messageTime);
}

const checkSpam = (string) =>{
    let spamChecked = string.replace(/xxx|viagra/gi, '***');
    let spamChecked1 = spamChecked.toLowerCase();
    return spamChecked1;
}

const checkName = (name) =>{
    let username = name;
    let username0 = username.toLowerCase().trim();
    let username1 = username0.charAt(0).toUpperCase() + username0.slice(1);
    return username1;
}

button.addEventListener('click', () =>{
    createComment();
})
