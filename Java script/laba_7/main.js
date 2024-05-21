
const listElement = document.getElementById("list");


function renderList(array) {
    
    const listItems = array.map(item => `<li>${item}</li>`).join("")
    console.log(listItems)
    
    listElement.innerHTML += listItems;
    // listElement.innerHTML = listItems;
}

const array1 = ['hello', 'world', 'Kiev', 'Kharkiv', 'Odessa', 'Lviv'];
const array2 = ['1', '2', '3', 'sea', 'user', 23];


// renderList(array1);

// renderList(array2);
