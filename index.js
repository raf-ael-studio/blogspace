
// adding request method syntax
// fetch('https://apis.scrimba.com/jsonplaceholder/todos', {method:"POST", body})


// fetch('https://apis.scrimba.com/jsonplaceholder/posts')
// .then(response => response.json())
// .then(data => console.log(data.slice(0,4)))

// const div = document.getElementById('data')

// fetch("https://apis.scrimba.com/jsonplaceholder/posts")
//     .then(res => res.json())
//     .then(data => {
//         const postsArr = data.slice(0, 5)

//         for (let i = 0; i < postsArr.length; i++){
//             div.innerHTML+=`
//             <h1>Title: ${postsArr[i].title}</h1>
//             <p>${postsArr[i].body}</p>
//             `        
//             console.log(div)
//     }})


    fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        const postsArr = data.slice(0, 5)
        let html = ""
        for (let post of postsArr) {
            html += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr />
            `
        }
        document.getElementById("blog-list").innerHTML = html
    })


    const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('post-title').value;
    const body = document.getElementById('post-body').value;
    const data = {
        "title": title,
        "body": body
        }
    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type":"application/json"
        }

    }

    fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
        .then(res => res.json())
        .then(data=>console.log(data))
})

const myHeaders = new Headers();
myHeaders.append("Content-Type","application/json");

fetch("https://apis.scrimba.com/jsonplaceholder/todos", {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({
        title: "Buy Milk",
        completed: false
    })
})
    .then(res => res.json())
    .then(data => console.log(data))