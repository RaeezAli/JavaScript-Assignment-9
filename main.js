// TODO Question No.01

function show() {
    
    let displayName = document.getElementById("nameInput").value;
    let displayEmail = document.getElementById("EmailInput").value;
    let displayPassword = document.getElementById("passwordInput").value;
    console.log("Name       : " + displayName);
    console.log("Email      : " + displayEmail);
    console.log("Password   : " + displayPassword);
}

// TODO Question No.02

let readMoreBtn = document.querySelector('.see-more');
let text = document.querySelector('.text');
readMoreBtn.addEventListener('click', (e)=>{
text.classList.toggle('show-more');

    if(readMoreBtn.innerText === 'Read More') {
    readMoreBtn.innerText = 'Read Less';
    }

    else{
    readMoreBtn.innerText = 'Read More';
    }
})

// TODO Question No.03

function deleteRow(a) {

    let row = a;
    document.getElementById(row).remove();
}

function addingRow() {

    let table = document.getElementById('studentData');
    let newRow = table.insertRow(table.rows.length);

    let number = newRow.insertCell(0);
    number.textContent = "05";

    let name = newRow.insertCell(1);
    name.textContent = "Ezhan";

    let semeter = newRow.insertCell(2);
    semeter.textContent = "8th Semester";

    let deletecell = newRow.insertCell(3);
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    deleteButton.onclick = function () {
      deletebutt(this);
    };

    deletecell.appendChild(deleteButton);
}


function deletebutt(button) {

    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

