
const regButton = document.getElementById("reg-btn");
regButton.addEventListener("click", () => {
    window.location.href = "./registered.html";  
  });

let students = [];
const addStudent = (ev)=>{
    //ev.preventDefault(); //stop the form from submitting anyhow

    let student = { //create student object
        id:1,
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
        console.log(students);
    }
};


const saveButton = document.getElementById("save-btn");
saveButton.addEventListener("click", () => {
    addStudent();  
    document.querySelector("form").reset(); //clear the form for the next entry
    //drawTable("tabledata");
    window.location.href = "./registered.html"; //confirm data is in database
  });

