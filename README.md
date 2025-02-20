# Personal Blog

This is a simple personal blog application built with Express.js for the backend and vanilla JavaScript for the frontend. It allows users to log in, create, edit, and delete blog posts. Guests can view the posts without logging in.

## Features

- User authentication
- Create, edit, and delete blog posts
- View posts as a guest

## Project Structure

```
Personal-Blog/
├── public/
│   ├── css/
│   ├── js/
│   │   ├── admin.js
│   │   ├── guess.js
│   │   ├── guessArticle.js
│   │   ├── post.js
│   ├── script/
│   │   └── login.js
│   ├── admin.html
│   ├── edit.html
│   ├── guest.html
│   ├── guessPost.html
│   ├── index.html
├── routes/
│   └── auth.js
├── index.js
└── README.md
```

## Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/Personal-Blog.git
    cd Personal-Blog
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the server:
    ```sh
    npm start
    ```

4. Open your browser and navigate to `http://localhost:3000`.

## Usage

### Authentication

- Navigate to the login page at `http://localhost:3000`.
- Use the following credentials to log in:
  - Username: `admin`
  - Password: `1234`
- Guests can view posts without logging in by clicking on "Sou Convidado".

### Creating and Editing Posts

- After logging in, you will be redirected to the admin page where you can create new posts or edit existing ones.
- To create a new post, fill in the form and click "Publish".
- To edit a post, click the "Edit" button next to the post you want to edit.

### Viewing Posts

- Guests can view posts by navigating to `http://localhost:3000/guest.html`.
- Click on a post title to view the full content.

## License

This project is licensed under the MIT License.
