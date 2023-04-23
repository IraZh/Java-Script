const postContent = document.querySelector('.container__result');
const titleInput = document.querySelector('#title');
const textInput = document.querySelector('#text');
const button = document.querySelector('.button');

button.addEventListener('click', function(createPost) {
    createPost.preventDefault ();
    let newPost = {
        title: document.getElementById ("title").value,
        body: document.getElementById ("text").value
    }
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then(newPost => {
            const newPostDiv = document.createElement('div');
            newPostDiv.innerHTML = `
            <h2 class= "newTitle">${newPost.title}</h2>
            <p class= "newText">${newPost.body}</p>
            `;
            postContent.appendChild(newPostDiv);

            const savedPosts = JSON.parse(localStorage.getItem('posts') || '[]');
            savedPosts.push(newPost);
            localStorage.setItem('posts', JSON.stringify(savedPosts));

            titleInput.value = '';
            textInput.value = '';
        })
        .catch ((error) => console.log (error));
})

window.addEventListener('load', function() {
    const savedPosts = JSON.parse(localStorage.getItem('posts') || '[]');
    savedPosts.forEach(post => {
        const newPostDiv = document.createElement('div');
        newPostDiv.innerHTML = `
        <h2 class= "newTitle">${post.title}</h2>
        <p "newText">${post.body}</p>`;
        postContent.appendChild(newPostDiv);
    });
});