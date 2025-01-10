const loadPosts = () => {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    return posts
};

const renderArticle = () => {
    const listPosts = loadPosts();
    const index = window.location.search.split('=')[1] // obtém o index do post
    const container = document.querySelector('.containerGuess')
    const h2 = document.createElement('h2')
    const divDate = document.createElement('div')
    const Content = document.createElement('p')
    divDate.classList.add('dateGuess')
    container.appendChild(h2)
    container.appendChild(divDate);
    container.appendChild(Content);
    h2.innerText = listPosts[index].title;
    Content.innerText = listPosts[index].Content;
    divDate.innerText = listPosts[index].date
}

renderArticle()