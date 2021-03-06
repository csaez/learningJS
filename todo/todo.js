function toggleVis(elem) {
   if(elem.style.display == "none")
      elem.style.display = "inline";
   else
      elem.style.display = "none";
}

function checkTask() {
    var span = document.getElementById(this.id.replace("cb_", "sp_"));
    if (!this.checked)
        span.className = "";
    else
        span.className = "checked";
}

function editTask() {
    var span = this;
    var ef = document.getElementById(span.id.replace("sp_", "ef_"));
    ef.value = span.textContent;
    toggleVis(span);
    toggleVis(ef);
    ef.focus();
}

function appendTask(text, list) {
    var id = Date.now();

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "cb_" + id;
    checkbox.onclick = checkTask;

    var span = document.createElement("span");
    span.id = "sp_" + id;
    span.textContent = text;
    span.onclick = editTask;

    var editField = document.createElement("input");
    editField.type = "text";
    editField.id = "ef_" + id;
    toggleVis(editField);

    editField.onkeyup = function (e) {if(e.which==13) editField.blur()};
    editField.onblur = function () {
        span.textContent = editField.value;
        toggleVis(editField);
        toggleVis(span);
    };

    var listItem = document.createElement("li");
    listItem.appendChild(checkbox);
    listItem.appendChild(span);
    listItem.appendChild(editField);

    list.appendChild(listItem);
}

var inputText = document.getElementById("inputText");
inputText.onkeyup = function (e) {
    if (e.which != 13 || inputText.value == "") return false;
    appendTask(inputText.value, document.getElementById("todoList"));
    inputText.value = "";
    inputText.focus();
};

inputText.focus();
