var item1 = document.getElementById('item1')
var item2 = document.getElementById('item2')
var item3 = document.getElementById('item3')
var item4 = document.getElementById('item4')

var url = 'https://jsonplaceholder.typicode.com/posts'
var allPosts = []

function loadPosts() {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.onload = function () {
        var posts = JSON.parse(xhr.responseText)
        for (var i = 0; i < 4; i++) {
            allPosts.push({
                id: posts[i].id,
                title: posts[i].title,
                body: posts[i].body
            })
        }
    }
    xhr.send()
}

loadPosts()
 
console.log(allPosts)

item1.addEventListener('click', function () {
    insertPosts(allPosts[0].title, allPosts[0].body)
})

item2.addEventListener('click', function () {
    insertPosts(allPosts[1].title, allPosts[1].body)
})

item3.addEventListener('click', function () {
    insertPosts(allPosts[2].title, allPosts[2].body)
})

item4.addEventListener('click', function () {
    insertPosts(allPosts[3].title, allPosts[3].body)
})

function insertPosts(title, body) {
    document.getElementById('title').innerHTML = title
    document.getElementById('body').innerHTML = body
}


