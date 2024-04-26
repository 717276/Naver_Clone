const pwExp = "^[a-zA-Z0-9!@#$%^&*]{3,12}$";
function preventEnter(event){
    event.preventDefault();
}
function checkBlank() {
    let array = document.querySelectorAll(".need");
    for (let i = 0; i < array.length; ++i) {
        let al = document.querySelector("#"+array[i].id + "_a");
        if (array[i].value === "") {
            al.textContent = "필수 입력 사항";
            event.preventDefault();
        } 
    } 
}
function resetForm(input) {
    const i_a = document.querySelector("#" + input.id + "_a");
    if (i_a.textContent !== "") {
        i_a.textContent = "";
    }
}
function checkId() {
    const id = document.querySelector("#id  ")
}
function checkPassword(input) {
    resetForm(input);
    const pw = document.querySelector("#pw");
    const pw_a = document.querySelector("#pw_a");
    if (pw.value === "") {
        pw_a.textContent = "";
        return true;
    }
    if (!pw.value.match(pwExp)) {
        pw_a.textContent = "잘못된 입력";
            return false;
    }
    pw_a.textContent = "";
    return true;
}
function passwordCheck(input) {
    resetForm(input);
    const pc = document.querySelector("#pc");
    const pc_a = document.querySelector("#pc_a");
    const pw = document.querySelector("#pw");
    if (pw.value === "") {
        pc.readOnly = true;
    } else {
        pc.readOnly = false;
        for (let i = 0; i < pw.value.length; ++i) {
            if (pw.value[i] !== pc.value[i] || pw.value.length !== pc.value.length) {
                pc_a.textContent = "불일치";
                return false;
            }
        }
        pc_a.textContent = "일치";
        return true;
    }
}
function checkName(input) {
    resetForm(input);
    const name = document.querySelector("#name");
    const name_a = document.querySelector("#name_a");
    for (let i = 0; i < name.value.length; ++i) {
        if (name.value[i] === " ") {
            name_a.textContent = "공백";
            return false;
        }
    }
    name_a.textContent = "";
    return true;
}
