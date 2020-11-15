
const regButton = document.getElementById("reg-btn");
regButton.addEventListener("click", () => {
    window.location.href = "./registered.html";  
  });

let students = [];
const addStudent = (ev)=>{
    //ev.preventDefault(); //stop the form from submitting anyhow
    
    let student = { //create student object
        id:students.length+1,
        firstname:document.getElementById("firstName").value,
        lastname:document.getElementById("lastName").value,
        email:document.getElementById("email").value,
        age:document.getElementById("age").value
    };
      
    if(student.firstname==="" || student.lastname===""||student.email===""||student.age==="")
    {
        alert("Please fill all the fields");   
    }else{
        students.push(student); //add the student to the students array
        //console.log(students);
    }     
};


function drawTable(tbody){
    var tr, td; 
    tbody = document.getElementById(tbody); 
    // loop through data source 
    for (var i = 0; i < students.length; i++) { 
        tr = tbody.insertRow(tbody.rows.length); 
        td = tr.insertCell(tr.cells.length); 
        td.innerHTML = students[i].id; 
        td = tr.insertCell(tr.cells.length); 
        td.innerHTML = students[i].firstname; 
        td = tr.insertCell(tr.cells.length); 
        td.innerHTML = students[i].lastname; 
        td = tr.insertCell(tr.cells.length); 
        td.innerHTML = students[i].email; 
        td = tr.insertCell(tr.cells.length); 
        td.innerHTML = students[i].age; 
    }
}


// let table = getElementById("tabledata");
// function generateTable(table,students){
//     for (let element of students){
//         let row = table.insertRow();
//         for (key in element){
//             let cell = row.insertCell();
//             let text = document.createTextNode(element[key]);
//             cell.appendChild(text);
//         }
//     }
// }



const saveButton = document.getElementById("save-btn");
saveButton.addEventListener("click", () => {
    
    addStudent();
    var Table = document.getElementById("tabledata");
    Table.innerHTML = "";
    drawTable("tabledata");       
    
    document.querySelector("form").reset(); //clear the form for the next entry

    //window.location.href = "./registered.html"; //confirm data is in database
    //window.location.href="./registered.html"+data
    
  });
