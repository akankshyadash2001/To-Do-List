document.addEventListener("DOMContentLoaded", function() {
    const newItemButton = document.getElementById("new-item-button");
    const newItemInput = document.getElementById("new-item-input");
    const itemList = document.getElementById("item-list");

    // Function to create a new to-do item
    function createNewItem(text) {
        const newItem = document.createElement("li");
        newItem.classList.add("item");

        const newItemInput = document.createElement("input");
        newItemInput.type = "text";
        newItemInput.value = text;
        newItemInput.classList.add("item-input");
        newItemInput.disabled = true;

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.classList.add("edit-button");
        editButton.addEventListener("click", function() {
            newItemInput.disabled = !newItemInput.disabled;
            if (newItemInput.disabled) {
                editButton.textContent = "Edit";
            } else {
                editButton.textContent = "Save";
            }
        });

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-button");
        removeButton.addEventListener("click", function() {
            newItem.remove();
        });

        newItem.appendChild(newItemInput);
        newItem.appendChild(editButton);
        newItem.appendChild(removeButton);

        itemList.appendChild(newItem);
    }

    // Event listener for adding a new item
    newItemButton.addEventListener("click", function() {
        const newItemText = newItemInput.value.trim();
        if (newItemText !== "") {
            createNewItem(newItemText);
            newItemInput.value = "";
        }
    });

    // Event listener for pressing enter key to add a new item
    newItemInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            newItemButton.click();
        }
    });
});
