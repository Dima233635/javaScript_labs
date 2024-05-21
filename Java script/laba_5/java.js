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

    setBirthday(birthday) {
        const [day, month, year] = birthday.split(".");
        this.birthday = new Date(year, month - 1, day); 
    }

    getAge() {
        const today = new Date();
        const birthDate = this.birthday;
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    getPassword() {
        const fNameInitial = this.firstName[0].toUpperCase();
        const lNameLower = this.lastName.toLowerCase();
        const birthYear = this.birthday.getFullYear();
        return fNameInitial + lNameLower + birthYear;
    }
}

function getFullName() {
    const fullNameinfo = prompt("Введите имя и фамилия")?.trim() || "";

    if (!fullNameinfo) {
        console.log("Поля не должно быть пустым");
        return;
    }

    const fullName = fullNameinfo.split(" ");
    const fName = fullName[0].trim();
    const lName = fullName[1].trim();

    const createdUser = new CreateNewUser(fName, lName);
    const birthday = prompt("Введите дату рождения в формате dd.mm.yyyy");
    createdUser.setBirthday(birthday);

    const result = createdUser.getLogin();
    const age = createdUser.getAge();
    const password = createdUser.getPassword();

    console.log(`fillName: ${fullName.join(" ")}, login: ${result}, age: ${age}, password: ${password}`);
}

getFullName();