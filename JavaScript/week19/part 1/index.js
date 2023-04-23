const container = document.querySelector('.container');

function display(object) {
    let cardPost = '';
        cardPost = `
            <div class="container">
                <div class="container__title">${object.title}</div>
                <div class="container__text"> ${object.body}</div>
            </div>`

        container.innerHTML += cardPost;
}

document.addEventListener("DOMContentLoaded", function() {

    fetch('https://jsonplaceholder.typicode.com/posts',
    {
        method: 'GET'
    })
    .then (response => response.json())
    .then (post => {
        post.forEach(item => {
            display(item);
        });
    })
    .catch((error) => console.log(error));
})




