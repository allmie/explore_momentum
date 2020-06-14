const toDoForm = document.querySelector(".do-list-form");
const toDoInput = toDoForm.querySelector("#to-do");
const toDoList = document.querySelector(".do-List");

const toDoskey = "toDos";
let toDos = [];

const saveToDos = () => {
    localStorage.setItem(toDoskey, JSON.stringify(toDos));
};

const delList = (e) => {
    const {target: {parentNode}}= e;
    parentNode.remove();
    const newToDos = toDos.filter(item => parseInt(parentNode.id) != item.id);
    toDos = newToDos;
    saveToDos();
};

const createToDo = (toDo) => {
    const toDoItem = document.createElement("li");
    const delBtn = document.createElement("button");

    delBtn.addEventListener("click", delList);
    
    const toDoObj = {
        id: toDos.length + 1,
        do: toDo        
    };
    toDos.push(toDoObj);

    toDoItem.innerText = toDo;
    toDoItem.id = toDoObj.id;
    delBtn.innerText = "X";
    toDoItem.appendChild(delBtn);
    toDoList.appendChild(toDoItem);
};

const submitDoList = (e) => {
    e.preventDefault();
    const toDoTitle = toDoInput.value;
    createToDo(toDoTitle);
    saveToDos(toDoTitle);
    toDoInput.value = "";
};

const loadToDos = () => {
    const parseDo = JSON.parse(localStorage.getItem(toDoskey));
    parseDo.forEach(item => {
        createToDo(item.do);
    });
};

const initDo = () => {
    loadToDos();
    toDoForm.addEventListener("submit", submitDoList);
};

initDo();