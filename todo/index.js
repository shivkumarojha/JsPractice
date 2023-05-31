const tag = ["Job", "Learning", "Home", "Money"]
const addNewTag = document.getElementById("add-new-tag")
const addTagInput = document.getElementById("add-tag-input")
let tagList = document.getElementById("tag-list")
let todoItems = {}


// Render List of Tags
function renderTags() {
    // Loop through each item  in tag list and append to tagList
    tagList.innerHTML = ""
    for (i=0; i<tag.length; i++){
        const newListButton = document.createElement("button")
        newListButton.innerText = tag[i]
        newListButton.id = tag[i]
        let tagButtonId = tag[i]
        // Create individual todoItems objects
        todoItems[tagButtonId] = []

        // Add onClick property to each tag list 
        newListButton.onclick = function () {
            createTodo(tagButtonId)  
        }
        tagList.appendChild(newListButton)
    }
}
renderTags()


// Add new tag to Tag List
function addNewTagToTagList(){
    const addTagInput = document.getElementById("add-tag-input")
    tag.push(addTagInput.value)
    renderTags()
}

// Event Listner on add tag button
addNewTag.addEventListener("click", addNewTagToTagList)


// Show todos in application by every tag name
function showTodos(tagButtonId) {
    let showTodos = document.getElementById('showTodos')
    showTodos.innerHTML = ""
    for (let key in todoItems) {
        let todoCard = document.createElement('div')
        todoCard.id = key
        todoCard.className = "card"
        
        let todoCardUl = document.createElement('ol')
        let cardHeading = document.createElement('h3')
        cardHeading.innerText = key
        todoCard.appendChild(cardHeading)
        
        for (let items in todoItems[key]) {
            let todoCardUlLi = document.createElement('li')
            todoCardUlLi.innerText = todoItems[key][items]
            todoCardUl.appendChild(todoCardUlLi)
        }
    todoCard.appendChild(todoCardUl)
    showTodos.appendChild(todoCard)
    document.getElementById(showTodos)
    }

    // let todo = document.getElementById("showTodos")
    // let todoTagDiv = document.createElement('div')
    // todoTagDiv.id = tagButtonId

    // let todoLi = document.createElement('li')

    // todoLi.innerText = todoItems[tagButtonId]
    // todoUl.appendChild(todoLi)
    // todo.appendChild(todoUl)
    // console.log(todo.innerHTML)
    // todo.appendChild(todoUl)


}


// Create a New Todo Function
function createTodo(tagButtonId) {
    let createTodo = document.getElementById("create-todo")
    if (createTodo.value != "") {
        todoItems[tagButtonId].push(createTodo.value)
        createTodo.value = ""
        showTodos(tagButtonId)
    } else{
        alert("You can not create Blank Todo!")
    }
}
// createTodo()

