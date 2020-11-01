var btn = document.querySelector(".add-go-btn")
var addText = document.querySelector(".task-adder")
var ulElementTag = document.querySelector(".todo-list")
btn.addEventListener("click", addTaskFunction)
// console.log(ulElementTag)
function addTaskFunction() {
    var x = addText.value
    if (x) {
        var divCover = document.createElement("div")
        divCover.classList.add("task-cover")
        var liElement = document.createElement("li")
        liElement.classList.add("task-item")
        var dltBtn = document.createElement("button")
        dltBtn.classList.add("dlt-btn")
        dltBtn.textContent = "❌"
        dltBtn.addEventListener("click",deleteTaskFunction)
        liElement.textContent = x
        divCover.appendChild(liElement)
        divCover.appendChild(dltBtn)
        ulElementTag.appendChild(divCover)
        console.log(divCover)
        // console.log(x)
    }

}

var clearAllbtn = document.querySelector(".clr-btn")
clearAllbtn.addEventListener("click", deleteAllTaskFunction)

function deleteAllTaskFunction() {
    while (ulElementTag.firstChild) {
        ulElementTag.removeChild(ulElementTag.firstChild)
    }
}

var btn1 = document.querySelector(".delete-go-btn")
var addText1 = document.querySelector(".task-deleter")
// console.log(btn1,addText1)

btn1.addEventListener("click", deleteTaskFunctionByName)

var dltIndividualElement = document.querySelectorAll(".dlt-btn")
dltIndividualElement.forEach((x) => {
    x.addEventListener("click",deleteTaskFunction)
})

function deleteTaskFunction(e) {
    console.log(e.target.parentNode)
    e.target.parentNode.remove()
}

function deleteTaskFunctionByName(e) {
    console.log(e.target)
}

function deleteTaskFunctionByName() {
    var x = addText1.value, y = -1
    var allLi = document.querySelectorAll(".task-item")

    for (let i = 0; i < allLi.length; i++) {
        if (allLi[i].textContent.trim() == x) 
        {
            y = i;
            // console.log(y)
            if (y != -1) {
                console.log(allLi[i].parentNode)
                allLi[i].parentNode.remove()
                y = -1;
            }
        }
    }

}