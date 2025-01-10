import { loadPosts} from './post.js'


const container = document.querySelector('.container')

const renderPosts = () => { 
    const listPosts = loadPosts();
    for (let i = 0; i < listPosts.length; i++) {
        const section = document.createElement('section')
        const h2 = document.createElement('h2')
        const divEdit = document.createElement('div')
        const divDelet = document.createElement('div')
        section.classList.add('article')
        h2.classList.add('title')
        divEdit.classList.add('edit')
        divDelet.classList.add('delete')
        h2.innerText = listPosts[i].title;
        divEdit.innerText = 'Edit'
        divDelet.innerText = 'Delete'
        section.appendChild(h2)
        section.appendChild(divEdit)
        section.appendChild(divDelet)
        container.appendChild(section)

    }
}

container.addEventListener('click', (e) => {
    e.preventDefault()
    const listPosts = loadPosts()
    if (e.target.classList.contains('delete')) {
        for (let i = 0; i < container.children.length; i++) {
            if (container.children[i].children[2] === e.target) { 
                container.children[i].remove() // remove o post do container
                listPosts.splice(i, 1) // remove o post do array
                localStorage.setItem('posts', JSON.stringify(listPosts)) 
            }
        }
    } else if (e.target.classList.contains('edit')) {
        for (let i = 0; i < container.children.length; i++) {
            if (container.children[i].children[1] === e.target) {
                location.href = `edit.html?index=${i}`
            }
        }
    }
});


renderPosts()


