let input = document.getElementById('input');
let listContainer = document.getElementById('list-container');
let clickButton = document.querySelector('.submit');
let removeIcon = document.querySelectorAll(".listDelete")
let inputDelete = document.querySelector('.input-delete')
let sort = document.querySelector('.sort')
let listDeleteImg = document.querySelectorAll('.listDeleteImg')
let inputDeleteImg = document.querySelector('.input-delete-img')
let toDoArray = [];

function setArray() {
    let text = ""
    toDoArray.forEach((item, index) => {
        text += `<li><p>${item}</p><img class="listDeleteImg" onclick="deleteSelectedTask(${index})" src="../assets/delete.svg"></li>`;
    });
    listContainer.innerHTML = text;
    localStorage.setItem('data', JSON.stringify(toDoArray));
}

let existedData = localStorage.getItem('data', (toDoArray))
console.log(existedData);
if (existedData) {
    toDoArray = JSON.parse(existedData)
    console.log(toDoArray);
    setArray();
}

function showAlert() {
    if (input.value === '') {
        alert('You must write something!');
    }
    else {
        toDoArray.push(input.value);
        setArray();
        input.value = '';
    }
}
clickButton.addEventListener('click', showAlert);

function deleteSelectedTask(toDoIndex) {
    toDoArray = toDoArray.filter((item, index) => {
        if(index!==toDoIndex){
            return item
        }
    })
    setArray()
}

sort.addEventListener('mouseover', (e) => {
    if (e.target.getAttribute("src") =="../assets/filter-up.svg") {
        e.target.setAttribute("src", "../assets/filter-hover-up.svg");
    } else  {
        
        e.target.setAttribute("src", "../assets/filter-hover-down.svg");
    }
});

sort.addEventListener('mouseout', (e) => {
    if (e.target.getAttribute("src") == "../assets/filter-hover-up.svg") {
        e.target.setAttribute("src", "../assets/filter-up.svg");
    } else  {
        e.target.setAttribute("src", "../assets/filter-down.svg");
    }
});

sort.addEventListener("click", (e)=>{
    if (e.target.getAttribute("src") == "../assets/filter-hover-down.svg"){
        toDoArray.sort();
        setArray(toDoArray);
        e.target.setAttribute("src", "../assets/filter-hover-up.svg")
    }
    else{
        toDoArray.sort().reverse();
        setArray(toDoArray);
        e.target.setAttribute("src", "../assets/filter-hover-down.svg")
    }
})

inputDeleteImg.addEventListener('click', () =>{
        input.value='';
});