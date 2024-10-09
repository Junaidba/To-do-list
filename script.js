const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function AddTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        inputBox.value = ''; // Clear the input box after adding the task
        
        // Create a "span" element with a delete (❌) button
        let span = document.createElement("span");
        span.innerHTML = "❌";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveDate();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); // Corrected classlist to classList
        saveDate();
    } else if (e.target.tagName === "SPAN") { // Corrected to uppercase "SPAN"
        e.target.parentElement.remove(); // Remove the parent element (li)
        saveDate();
    }
}, false);

function saveDate(){
    localStorage.setItem("data", listContainer.innerHTML);

}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}  
showTask();



