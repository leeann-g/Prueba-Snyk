const prompt = require("prompt-sync")();
let name = prompt("escribe tu nombre: ");

let civil_state = prompt("escribe tu estado (S, soltero, C, casado, V, viudo: ");

let cambio = civil_state.toUpperCase();

console.log(cambio)
function unir (cambio){
    switch (cambio){
        case "S":
            return "soltero";
            break;
        case "C":
            return "casado";
            break;
        case "V":
            return "viudo";
            break;
        default:
            return "letra incorrecta" 
    }
}
let mensaje = unir(cambio);
console.log (`tu nombre es: ${name} y tu estado es: ${mensaje}`);

// Mala práctica: Variable global para la URL de la API
apiURL = "https://api.example.com/users/";

// Mala práctica: Variable global para los datos del usuario
userData;

// Mala práctica: Función con nombre muy corto y poco descriptivo
function getData(id) {
  // Mala práctica: Uso inconsistente de var (podría haber usado let o const)
  var url = apiURL + id;
  console.log("Fetching data from: " + url);

  // Simulación de una llamada a la API con setTimeout (Callback Hell en potencia)
  setTimeout(function() {
    // Mala práctica: Uso inconsistente de var dentro del callback
    var response = {
      status: 200,
      data: {
        n: "John", // Mala práctica: Nombre de propiedad abreviado
        a: 30,    // Mala práctica: Nombre de propiedad abreviado
        e: "john.doe@example.com", // Mala práctica: Nombre de propiedad abreviado
        roles: ["admin", "editor"]
      }
    };

    if (response.status == 200) { // Mala práctica: Uso de ==
      // Mala práctica: Asignación directa a una variable global
      userData = response.data;
      // Mala práctica: Llamada a otra función anidada (más anidamiento)
      processData(userData);
    } else {
      console.error("Error fetching data");
    }
  }, 1500); // Simula un retardo de 1.5 segundos
}

// Mala práctica: Función con nombre poco descriptivo
function processData(data) {
  // Mala práctica: Acceso directo a propiedades con nombres abreviados
  console.log("User Name: " + data.n);
  console.log("Age: " + data.a);
  console.log("Email: " + data.e);

  // Mala práctica: Uso de un bucle for con var
  for (var i = 0; i < data.roles.length; i++) {
    console.log("Role: " + data.roles[i]);
  }

  // Mala práctica: Llamada a otra función anidada
  formatAndDisplay(data, "INFO");
}

// Mala práctica: Función con nombre poco claro y argumento mutado
function formatAndDisplay(obj, type) {
  // Mala práctica: Uso de un valor mágico (2)
  if (type.length > 2) {
    // Mala práctica: Mutación directa del argumento del objeto
    //obj.formattedInfo = [${type}] ${obj.n} (${obj.a}), Email: ${obj.e};
    // Mala práctica: Uso de console.log directamente sin considerar el contexto
    console.log("Formatted Info: " + obj.formattedInfo);
  } else {
    console.warn("Type is too short.");
  }
}

// Mala práctica: Llamada a la función sin un contexto claro
getData(123);

// Mala práctica: Intentando acceder a la variable global inmediatamente después de la llamada asíncrona (no estará definida aún)
console.log("Intentando acceder a userData inmediatamente: ", userData);

// Un comentario aparentemente útil pero que solo describe lo obvio
// Esta función obtiene los datos del usuario.