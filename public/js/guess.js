 const loadPosts = () => {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    return posts
};

 const renderGuess = () => {
    const listPosts = loadPosts();
    for (let i = 0; i < listPosts.length; i++) {
        const container = document.querySelector('.container')
        const section = document.createElement('section')
        const h2 = document.createElement('h2')
        const divDate = document.createElement('div')
        section.classList.add('article')
        h2.innerText = listPosts[i].title;
        divDate.innerText = listPosts[i].date;
        divDate.classList.add('date')
        section.appendChild(h2)
        section.appendChild(divDate)
        container.appendChild(section)
    }
}

renderGuess()

document.querySelector('main').addEventListener('click', (e) => {
    const el = e.target // elemento clicado
    const container = document.querySelector('.container')
    if (container.children) {
        for (let i = 0; i < container.children.length; i++) {
            if (container.children[i].children[0] === el) {
                location.href = `guessPost.html?index=${i}`
            }
        }
        
    }
});
