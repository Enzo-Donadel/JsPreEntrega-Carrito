/* Summary:
-----------------------------------------------------------------
// Sistem for user login for an educational platform.
----------------------------------------------------------------- */
let users = [];
/*
//Ejecutar una vez para cargar el localStorage con stock --> Planificado modificarse a un archivo JSON de base de datos directo.
//localStorage.clear();
let aux = new User('Enzo','Donadel','edonadel','1234Enzo');
aux.setAge(28);
aux.addCourse('Unity');
aux.addCourse('Javascript');
users.push(aux);
aux = new User('Alejo','Fernandez','afernandez','1234Alejo');
aux.setAge(32);
aux.addCourse('Javascript');
users.push(aux);
aux = new User('Ramiro','Gutierrez','rgutierrez','1234Ramiro');
aux.setAge(24);
aux.addCourse('C#');
users.push(aux);
console.log(users);
///guardo el array en el localStorage
localStorage.setItem('users',JSON.stringify(users));
*/

////traerme los elementos del dom
const tabla = document.getElementById('users');
const AddButton = document.getElementById('AddUser');

//Main Call
main();

function main(){
  mostrarTabla();
  EventListeners(); 
}

function EventListeners()
{

  AddButton.addEventListener('click', (e) =>
  {
    e.preventDefault();
    const name = prompt('Ingrese nombre del nuevo usuario:');
    const lastName = prompt('Ingrese apellido del nuevo usuario:');
    const userName = prompt('Ingrese username del nuevo usuario:');
    const password = prompt('Ingrese password del nuevo usuario:');
    const age = prompt('Ingrese edad del nuevo usuario:');
    const newUser = new User(name, lastName, userName, password);
    newUser.setAge(age);
    users.push(newUser);
    localStorage.setItem('users',JSON.stringify(users));
    mostrarTabla();
  });
}
function mostrarTabla() {
  tabla.innerHTML = ``; //Clean table
  let counter = 1;
  users = JSON.parse(localStorage.getItem('users'));
  users.forEach((user) => {
    tabla.innerHTML = tabla.innerHTML +
      `
        <tr>
          <th> ${counter} </th>
          <td> ${user.name} </td>
          <td> ${user.lastName} </td>
          <td> ${user.username} </td>
          <td> ${user.age} </td>
          <td> ${user.activeCourses} </td>
        </tr>
      `;
     counter++;
  });
 }