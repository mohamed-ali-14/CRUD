var stName = document.getElementById("stName");
var stGrade = document.getElementById("stGrade");
var stMark = document.getElementById("stMark");
var stRating = document.getElementById("stRating");

var students;

(function(){
  if( localStorage.getItem("data")== null){
    students = [];
  }
  else{
    students=JSON.parse(localStorage.getItem("data"));
    view();
  }
}

)();

function add() {
  var st = {
    names: stName.value,
    grades: stGrade.value,
    marks: stMark.value,
    rate: stRating.value,
  };
  students.push(st);
  localStorage.setItem( "data" , JSON.stringify(students))
       view();
       clr();
};


function view(){
  var box=``;
   for( var i=0 ; i<students.length ; i++)
   {
    box+=`<tr>
    <td> ${i + 1} </td>
    <td> ${students[i].names} </td>
    <td> ${students[i].grades} </td>
    <td> ${students[i].marks} </td>
    <td> ${students[i].rate} </td>
    <td> <button onclick=del(${i}) class="btn btn-danger"> DELETE</button> </td>
    <td> <button  onclick=upd(${i}) class="btn btn-primary"> UPDATE </button> </td>
   
    </tr>
    `
   }
   tableRow.innerHTML= box ;
}
 function del(i)
 {
  students.splice(i ,1 );
  localStorage.setItem("data",JSON.stringify(students));
view()
 };
function clr()
{
  stName.value = "";
  stGrade.value = "";
    stMark.value = "";
   stRating.value = "";

}
function upd(index){
  

}