let cart = [];

const getBooks = () =>{
    let booksDiv = document.getElementById('books');
    fetch("https://striveschool-api.herokuapp.com/books", {
            "method": "GET"
            })
            .then(response => response.json())
            .then(books => {
                books.forEach(element => {
                    booksDiv.innerHTML += `
                    <div class="card col-3 mt-3" style='display: inline-block; width: 250px; height: 380px;'>
                    <img src="${element.img}" class="card-img-top" alt="book" style="width: 200px; height: 250px;">
                    <div class="card-body">
                        <h6 class="card-title" style='width: 200px; height: 50px;'>${element.title}</h6>
                        <div class='d-flex flex-row'>
                            <a class="btn btn-info addBook m-1" id="${element.asin}" onclick='addToCart(${element.asin})'>Add to cart</a>
                            <a class="btn btn-danger skip m-1" id="${element.asin}skip" onclick='skip(${element.asin})'>X</a>
                        </div>
                    </div>
                    </div>
                    `
                });
            })
            .catch(err => {
                console.error(err);
            });
}

const addToCart = (id) =>{
    cart.push(id+"");
    let selectedBook = document.getElementById(id);
    selectedBook.classList.remove('btn-info');
    selectedBook.classList.add('btn-success');

    let cartBooks = document.getElementById('other-books');
    fetch("https://striveschool-api.herokuapp.com/books", {
            "method": "GET"
            })
            .then(response => response.json())
            .then(books => {
                books.filter(book => book.asin == id)
                     .forEach(element => {
                        cartBooks.innerHTML += `
                         <div class="card col-3 mt-3" style='display: inline-block; width: 250px; height: 380px;'>
                         <img src="${element.img}" class="card-img-top" alt="book" style="width: 200px; height: 250px;">
                         <div class="card-body">
                             <h6 class="card-title" style='width: 200px; height: 50px;'>${element.title}</h6>
                             <div class='d-flex flex-row'>
                                <a class="btn btn-success addBook m-1" id="${element.asin}" onclick='addToCart(${element.asin})'>Add to cart</a>
                                <a class="btn btn-danger skip m-1" id="${element.asin}skip" onclick='skip(${element.asin})'>X</a>
                             </div>
                         </div>
                         </div>
                         `
                     });
            })
            .catch(err => {
                console.error(err);
            });
}

const skip = (id) =>{
    let books = document.getElementsByClassName('card');
    for(let i=0; i<books.length; i++){

    }
}

window.onload = function(){
    getBooks();
}