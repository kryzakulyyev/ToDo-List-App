// add item event listener
document.getElementById('add_item').addEventListener('click',addItem)

// add item functiton
function addItem() {
  if(document.getElementById('input_box').value.trim()){
    const listItem = document.createElement('li');
    listItem.className = 'list-item';
    listItem.innerHTML = `
      <span class="todo-item">${document.getElementById('input_box').value}</span>
      <span class="edit-item">(edit)</span>
      <span class="remove-item">(remove)</span>
    `
    document.getElementById('ul_list').appendChild(listItem)
    // Add event listener to remove item
    listItem.querySelector('.remove-item').addEventListener('click',removeItem)
    // Add event listener to complete item
    listItem.querySelector('.todo-item').addEventListener('click', completeItem)
    // Clear input box
    document.getElementById('input_box').value = "";
  } else {
    alert('Please enter a value!')
  }
}

// remove item functiton
function removeItem(e) {
  // document.getElementById('ul_list').removeChild(e.target.parentElement);
  e.target.parentElement.remove();
}

// complete item functiton
function completeItem(e) {
  if(e.target.style.textDecoration === 'line-through') {
    e.target.style.textDecoration = 'none';
  } else {
    e.target.style.textDecoration = 'line-through';
  }
}

