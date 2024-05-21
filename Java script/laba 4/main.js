class CreateNewUser {

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getLogin() {
        const fName = this.firstName;
        const lName = this.lastName;


        return fName[0].toUpperCase() + lName.toLowerCase();
    }
}


function getFullName() {
    const fullNameinfo = prompt("Введите имя и фамилия")?.trim() || "";


    if (!fullNameinfo) {
        console.log("Поля не должно быть пустым");
        return
    }
    

    const fullName = fullNameinfo.split(" ");


    const fName = fullName[0].trim();
    const lName = fullName[1].trim();


    const createdUser = new CreateNewUser(fName, lName);

    const result = createdUser.getLogin();

    console.log(`fillName: ${fullName.join(" ")}, login: ${result}`)
}

getFullName()