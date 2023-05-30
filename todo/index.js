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

// Create a New Todo Function
function createTodo(tagButtonId) {
    let createTodo = document.getElementById("create-todo")
    let todo = document.getElementById("todo")
    todoItems[tagButtonId].push(createTodo.value)
    createTodo.value = ""
    let todoLi = document.createElement('li')
    todoLi.innerText = todoItems[tagButtonId]
    todo.appendChild(todoLi)

}
// createTodo()
