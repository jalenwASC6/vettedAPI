const ul = document.getElementById("bored");
let url1 = "https://www.boredapi.com/api/activity";


function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}
//First API Call to Bored API
fetch(url1)
.then((resp) => resp.json())
.then(function (data) {
    let bored = data.activity;
    console.log(bored)
    let li = createNode(`li`),
    h1 = createNode(`h1`);
    h1.innerHTML = `Activity: ${bored}`
    append(li, h1),
    append(ul, li);
    let url2 = `https://api.giphy.com/v1/gifs/translate?api_key=NxqEIKq1AwVlcygATozAPnOMh7AvDchD&s=${bored}`;
    //Second API Call to Giphy API
    fetch(url2)
    .then((resp) => resp.json())
    .then(function (data){
        let gif = data;
        console.log(gif.data.images.original.url)
        let img = createNode("img");
        img.src = gif.data.images.original.url
        append(document.body,img)
    })
    .catch(function (error){

    })
})
