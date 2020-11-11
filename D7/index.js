let users;

const fetchUsers = async() =>{
    try{
    const myusers= await fetch(
    `https://jsonplaceholder.typicode.com/users`);
    users = await myusers.json();
    console.log('users from fetch: \n', users);
    let usersContainer = document.getElementsByClassName('users')[0];
    for (let i = 0; i < users.length; i++) {
        usersContainer.innerHTML += `
        <div class='user col-3 col-sm-3 col-md-4 col-lg-3' id='${users[i].id}' onclick=(openUser(${users[i].id}))>
        <h5>${users[i].username}</h5><hr>
        <h6>${users[i].name}</h6>
        <p>${users[i].email}</p>
        </div>
        `
    }
    } catch(err){console.log(err)}

}

const SearchFunction = async function(){

    const myusers= await fetch(`https://jsonplaceholder.typicode.com/users`);
    let users = await myusers.json();
    console.log('reaching users from search', users);

    const myInput = document.getElementById("inputField")
    const mySelect = document.getElementById("select")
    
    const user = users.filter(e=> e[mySelect.value].includes(myInput.value))

    console.log('search result::::::::', user);
    let usersContainer = document.getElementsByClassName('users')[0];
    usersContainer.innerHTML = '';
    usersContainer.innerHTML = `
            <div class='user col-3 col-sm-3 col-md-4 col-lg-3'>
            <h5>${user[0].username}</h5><hr>
            <h6>${user[0].name}</h6>
            <p>${user[0].email}</p>
            </div>
            `

}


const NameList = async function (){

    const myusers= await fetch(`https://jsonplaceholder.typicode.com/users`);
    let users = await myusers.json();
    console.log('reaching users from nameList', users);

    let namesList = []
    users.forEach(element => {
        namesList.push(element.name)
    });

    let namesContainer = document.querySelector('.names');
    namesContainer.innerHTML = `<h5>Names list: </h5><hr>`
    for(let i=0; i<namesList.length; i++){
        namesContainer.innerHTML += `<span>${namesList[i]}, </span>`;
    }
    namesContainer.innerHTML += `<hr>`;
  console.log("namelist::::::::::::", namesList);

}

const addressAsString = async() =>{

    const myusers= await fetch(`https://jsonplaceholder.typicode.com/users`);
    let users = await myusers.json();
    console.log('reaching users from addressAsString', users);

    let addressContainer = document.querySelector('.addresses');
    addressContainer.innerHTML = `<h5>Addresses as Strings: </h5><hr>`;
    let res;

    for(let i=0; i<users.length; i++){
        delete users[i].address.geo;
        addressContainer.innerHTML +=  Object.values(users[i].address).join(" ");
        addressContainer.innerHTML += `<br>`
    }
    
}

function addressesAsArray(users){
    let res =  users.map((user)=>addressAsString(user.address))

   console.log('addresses as arrays: ', res);
   return addressesAsArray;
}

const AscDes = async function(){

    const myusers= await fetch(`https://jsonplaceholder.typicode.com/users`);
    let users = await myusers.json();
    console.log('reaching users from asc/desc: ', users);
    
    let asc = users.map((user)=> user.name).sort();
    console.log('asc::::::::::', asc);

    let userContainer = document.querySelector(".users");
    userContainer.innerHTML = "";
        if(userContainer.className.includes("asc")){
            asc.map((e)=> {
                    console.log('e:::::::::::::::', e);
                    userContainer.innerHTML += `
                    <div class='user col-3 col-sm-3 col-md-4 col-lg-3'>
                    <br><br><h5>${e}</h5><hr>
                    </div>
                    `
          })
          userContainer.classList.remove('asc');
        }else {
            let des = asc.reverse()
            des.map((e)=> {
                console.log('e:::::::::::::::', e);
                userContainer.innerHTML += `
                <div class='user col-3 col-sm-3 col-md-4 col-lg-3'>
                <br><br><h5>${e}</h5><hr>
                </div>
                `
          })
          userContainer.classList.add('asc');
        }

}

const openUser = (id) =>{
    window.open('user.html?id='+ id);
}

window.onload = function(){
    fetchUsers();
    NameList();
    addressAsString();
}
