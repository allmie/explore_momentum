const userTitle = document.querySelector(".user-title")
const userForm = document.querySelector(".user-form");
const doListForm = document.querySelector(".do-list-form");
const user = userForm.querySelector("#username");
const doInput = document.querySelector("#to-do");

const localStorageKey = "username";

const saveUser = (user) => {
    localStorage.setItem(localStorageKey, user);
};

const checkUser = () => localStorage.getItem(localStorageKey);

const submitUser = (e) => {
    e.preventDefault();
    saveUser(user.value);
    userCheck();
};

const userCheck = () => {
    if(checkUser()){
        const h2 = document.createElement("h2");
        h2.innerHTML = checkUser();
    
        userForm.removeChild(user);
        userTitle.append(h2);
        doInput.type = "text";
    }else{
        userForm.appendChild(user);
        doInput.type = "hidden";
    }
};

const initUser = () => {
    userCheck();
    userForm.addEventListener("submit", submitUser);
};

initUser();