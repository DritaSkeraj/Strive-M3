let users;
window.onload = async function(){

        const myusers= await fetch(
        "https://jsonplaceholder.typicode.com/users"
        )

        users = await myusers.json()
        //console.log(users)

    //   console.log(users[0].name)
      let usersContainer = document.getElementsByClassName('users')[0];
      console.log('usersContainer', usersContainer);
      let users1 = document.createElement('div');
        for (let i = 0; i < users.length; i++) {
            users1.innerHTML += `
            <div class='user col-3 col-sm-3 col-md-4 col-lg-3'>
            <h4>${users[i].username}</h4>
            <h6>${users[i].name}</h6>
            <p>${users[i].email}</p>
            </div>
            `
        }
        usersContainer.appendChild(users1);

      NameList()

}

const NameList = function (){
    let namesList = []
    users.forEach(element => {
        namesList.push(element.name)
    });

    console.log(namesList)

}

const SearchFunction = function(){

    const myInput = document.getElementById("inputField")
    const mySelect = document.getElementById("select")


    const user = users.filter(e=> e[mySelect.value].includes(myInput.value))

    console.log(user)
    let usersContainer = document.getElementsByClassName('users')[0];
    usersContainer.innerHTML = '';
      console.log('usersContainer', usersContainer);
      let users1 = document.createElement('div');
            users1.innerHTML = `
            <div class='user col-3 col-sm-3 col-md-4 col-lg-3'>
            <h4>${user.username}</h4>
            <h6>${user.name}</h6>
            <p>${user.email}</p>
            </div>
            `
        usersContainer.appendChild(users1);

}

function addressAsString(address){
    delete address.geo
    return Object.values(address).join(" ") 
}

function addressesAsArray(users){
    return users.map((user)=>addressAsString(user.address))
}