const name = prompt("Write name:");
const age = parseInt(prompt("Write age:"));

if (age < 18) {
    alert("You are not allowed to visit this website");
} else if (age >= 18 && age <=22 ) {
  const confirmResult = confirm("Are you sure you want to continue?");
  if(confirmResult) {
    alert(`Welcome, ` + name);
  } else {
    alert("You are not allowed to visit this website");
  }
} else {
    alert(`Welcome ` + name);
  }
