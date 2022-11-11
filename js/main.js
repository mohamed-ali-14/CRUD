var stName = document.getElementById("sName");
var stGrade = document.getElementById("sGrade");
var stMark = document.getElementById("sMark");
var stRate = document.getElementById("sRate");
var editBtn = document.getElementById("editBtn");
var student;

student = [];

if(localStorage.getItem("data")== null){
    student = [];
}else{
    student=JSON.parse(localStorage.getItem("data"))
    display(student);
}

// add
function add() {
  var st = {
    names: stName.value,
    grade: stGrade.value,
    mark: stMark.value,
    rate: stRate.value,
  };
  student.push(st);
  localStorage.setItem("data",JSON.stringify(student));
  display(student);
  clearForm();
};
// display
function display(student) {
  var box = ``;
  for (var i = 0; i < student.length; i++) {
    box += `<tr>
    <td> ${i + 1} </td>
    <td> ${student[i].names} </td>
    <td> ${student[i].grade} </td>
    <td> ${student[i].mark} </td>
    <td> ${student[i].rate} </td>
    <td> <button onclick=del(${i}) class="btn btn-danger"> DELETE</button> </td>
    <td> <button  onclick=upd(${i}) class="btn btn-primary"> UPDATE </button> </td>
   
    </tr>
    `;
  }

  tableRow.innerHTML = box;
};
function del(i) {
  student.splice(i, 1);
  localStorage.setItem("data", JSON.stringify(student));
  display(student);
};
// clear
function clearForm() {
  stName.value = "";
  stGrade.value = "";
  stMark.value = "";
  stRate.value = "";
}
// edit
editBtn.onclick= function() {
    if (editBtn.innerHTML == "ADD") {
      add();}
  else {
      edit();
    }
  };


var index;
function upd(i) {
  index = i;
  stName.value = student[i].names;
  stGrade.value = student[i].grade;
  stMark.value = student[i].mark;
  stRate.value = student[i].rate;
  editBtn.innerHTML = "EDIT";
};
function edit() {
  student[index].names = stName.value;
  student[index].grade = stGrade.value;
  student[index].mark = stMark.value;
  student[index].rate = stRate.value;
  editBtn.innerHTML = "ADD";
  localStorage.setItem("data", JSON.stringify(student));
  display(student);
};
// search
var term;
function search(e){
   var arr=[];
term=e.value
    for( var i=0 ; i<student.length ;i++){
        if(student[i].names.toLowerCase().includes(term.toLowerCase()))
        arr.push(student[i]);
    }
   
    display(arr);
};