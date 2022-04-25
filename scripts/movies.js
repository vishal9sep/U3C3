// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let api = `http://www.omdbapi.com/?i=tt3896198&apikey=ed5c9c4d`;

let amtData = JSON.parse(localStorage.getItem("amount"))

    let wallet = document.getElementById("wallet")
wallet.innerText = amtData;
    
async function movieData() {
    try {
        let res = await fetch(api);
        let data = await res.json();

        appendData(data);

        let title = data.Title;
        let imgSrc = data.Poster;
        console.log(title,imgSrc)
    }
    catch (err) {
        console.log(err)        
    }
}
let id;
async function  debounce(func, d){
    if (id) {
        clearTimeout(id);
    }
    id = setTimeout(() => {
        func();
    }, d);
}
movieData();

function appendData(data) {
    data.forEach((el) => {
        let div = document.createElement("div");
        
        let Pimg = document.createElement("img");
        Pimg.src = el.Poster;

        let title = document.createElement("p");
        title.innerText = el.Title;

        let btn = document.createElement("button");
        btn.innerText = "Book Now";
        btn.setAttribute = ("class", "book_now")
        
        btn.addEventListener("click", function () {
            bookMovie(el)
        })
        console.log(Pimg, title, btn);
        div.append(Pimg, title, btn)
        document.getElementById("movies").append(div);
    });
}