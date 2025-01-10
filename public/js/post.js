export const loadPosts = () => {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    return posts
};

export const savePost = (newPost)=>{
    const title = document.querySelector('#articleName')
    const Content = document.querySelector('#articleContent')
    const date = document.querySelector('#articleDate')
    newPost = loadPosts();
    const post = {
            title: title.value,
            Content: Content.value,
            date: date.value
        };
    newPost.push(post)    
    
    localStorage.setItem('posts',JSON.stringify(newPost))
};   

export const editPost = () => {
    const title = document.querySelector('#articleName')
    const Content = document.querySelector('#articleContent')
    const date = document.querySelector('#articleDate')
    const newPost = loadPosts();
    for(let i =0; i < newPost.length; i++){
        if( `http://localhost:3000/edit.html?index=${i}` === window.location.href){ // verificar se a url é igual a url de edição
            console.log('entrou')
            newPost[i].title = title.value
            newPost[i].Content = Content.value
            newPost[i].date = date.value
            localStorage.setItem('posts',JSON.stringify(newPost))
        }
    }

};

document.querySelector('.container').addEventListener('click', (e) => {
    if(e.target.classList.contains('btnPublish')){
        savePost();
        location.href = 'admin.html'    
    }
    else if(e.target.classList.contains('btnEdit')){
        editPost();
        location.href = 'admin.html'
    }
        
});

 