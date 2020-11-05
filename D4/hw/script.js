const getBooks = () =>{
    let booksDiv = document.getElementById('books');
    fetch("https://striveschool-api.herokuapp.com/books", {
            "method": "GET"
            })
            .then(response => response.json())
            .then(book => {
                book.forEach(element => {
                    booksDiv.innerHTML += `
                    <div class="card col-3 mt-3" style='display: inline-block; width: 250px; height: 380px;'>
                    <img src="${element.img}" class="card-img-top" alt="book" style="width: 200px; height: 250px;">
                    <div class="card-body">
                        <h6 class="card-title" style='width: 200px; height: 50px;'>${element.title}</h6>
                        <a class="btn btn-danger addBook" onclick='addToCart(${element.asin})'>Add to cart</a>
                    </div>
                    </div>
                    `
                });
            })
            .catch(err => {
                console.error(err);
            });
}
let cart = [];
const addToCart = (id) =>{
    console.log('button clicked::::::::::::::::', id);
    cart.push(id);
    // let btn = document.getElementsByClassName('addBook');
    // console.log(btn.filter(book => book.asin === id));
}
const otherBooks = () =>{
    let others = document.getElementById('other-books');
    others.innerHTML += `<h2 class='m-5'>books you added to cart</h2></hr>`
    fetch("https://striveschool-api.herokuapp.com/books", {
            "method": "GET"
            })
            .then(response => response.json())
            .then(book => {
                book.forEach(element => {
                    if(cart.includes(element.asin)){
                        others.innerHTML += `
                        <div class="card col-3 mt-3" style='display: inline-block; width: 250px; height: 380px;'>
                        <img src="${element.img}" class="card-img-top" alt="book" style="width: 200px; height: 250px;">
                        <div class="card-body">
                            <h6 class="card-title" style='width: 200px; height: 50px;'>${element.title}</h6>
                            <a href="#" class="btn btn-danger addBook" onclick='addToCart(${element.asin})'>Add to cart</a>
                        </div>
                        </div>
                        `
                    }
                });
            })
            .catch(err => {
                console.error(err);
            });
}

window.onload = function(){
    getBooks();
    otherBooks();
}