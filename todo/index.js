const tag = ["Job", "Learning", "Home", "Money"]
const addNewTag = document.getElementById("add-new-tag")
const addTagInput = document.getElementById("add-tag-input")
let tagList = document.getElementById("tag-list")
let todoItems = {}
let doneTodo = {}

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
    addTagInput.value = ""
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

            
            // Done Todo functionality
            let todoDoneButton = document.createElement('button')
            todoDoneButton.innerText = "Done"
            todoCardUlLi.appendChild(todoDoneButton)
            todoDoneButton.addEventListener('click', function () {
                todoCardUlLi.style = "color:red; text-decoration: line-through;"
            })


            // Delete Todo functionality 
            let todoCardUlLiDeleteButton = document.createElement('button')
            
            todoCardUlLiDeleteButton.innerText = "Delete"
            todoCardUlLi.appendChild(todoCardUlLiDeleteButton)
            todoCardUlLiDeleteButton.addEventListener('click', function () {
                deleteTodo(key, items)
            })

            todoCardUl.appendChild(todoCardUlLi)
        }
    todoCard.appendChild(todoCardUl)
    showTodos.appendChild(todoCard)
    document.getElementById(showTodos)
    }

}

// Delete Todo
function deleteTodo(key, item) {
    delete(todoItems[key][item])
    showTodos()
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

