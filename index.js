var tasklist = [];
var task = document.getElementById("task");
var content = document.getElementById("content");
var i = 1
function addtask() {
  console.log(task.value);
  if (task.value != '') {
    text =
      "<li id='" + i + "'><input type='checkbox' onclick=taskdone()><span>" +
      task.value +
      "</span><button type=button onclick=deltask(document.getElementById('" +
      i +
      "'))>DELETE</button></li>";
    content.insertAdjacentHTML("beforeend", text);
    task.value = ''
    i += 1;
  }
}

function deltask(task) {
  task.remove()

}
