import { function1, function2, function3, function4, function5, function6, function7, function8, function9, function10, function11, function12, function13, function14, function15, function16, function17, function18 } from "./functions.js";
import { notDeepEqual } from 'assert';
import { resolve } from 'path';
import readline from 'readline';

// setting
export let students = [{
    age: 32,
    examScores: [],
    gender: 'male',
    name: 'edu'
},
{
    age: 29,
    examScores: [],
    gender: 'female',
    name: 'silvia'
}]

export const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
export const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'isabel', 'virginia'];
export const availableGenders = ['male', 'female'];

// Crear interface

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Aparecer la lista de ordenes

let list = ["1- Mostrar en formato de tabla todos los alumnos.",
    "\n2- Mostrar por consola la cantidad de alumnos que hay en clase.",
    "\n3- Mostrar por consola todos los nombres de los alumnos.",
    "\n4- Eliminar el último alumno de la clase.",
    "\n5- Eliminar un alumno aleatoriamente de la clase.",
    "\n6- Mostrar por consola todos los datos de los alumnos que son chicas.",
    "\n7- Mostrar por consola el número de chicos y chicas que hay en la clase.",
    "\n8- Mostrar true o false por consola si todos los alumnos de la clase son chicas.",
    "\n9- Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.",
    "\n10- Añadir un alumno nuevo",
    "\n11- Mostrar por consola el nombre de la persona más joven de la clase.",
    "\n12- Mostrar por consola la edad media de todos los alumnos de la clase.",
    "\n13- Mostrar por consola la edad media de las chicas de la clase.",
    "\n14- Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su listado de notas.",
    "\n15- Ordenar el array de alumnos alfabéticamente según su nombre.",
    "\n16- Mostrar por consola el alumno de la clase con las mejores notas.",
    "\n17- Mostrar por consola la nota media más alta de la clase y el nombre del alumno al que pertenece.",
    "\n18- Añadir un punto extra a cada nota existente de todos los alumnos. Recordad que la nota máxima posible es 10. Si los alumnos aún no tienen registrada ninguna nota, les pondremos un 10.",
    "\nIntroduce el número: "
]
//Definir diferentes funcioniones según el número ingresado por el usuario

//
// Preguntar por un numero en la consola
export function getNumberFromConsole() {

    const promise = new Promise((resolve, reject) => {
        rl.question(list, (num) => {
            list = "\nIntroduce el número: "
            rl.pause();
            resolve(num)
        })
    })

    return promise;
}

let numberFromConsole;
//Imprimir contenido en la consola según el número ingresado

export async function verifyNumber(numberFromConsole) {
    const promise = new Promise(async (resolve, reject) => {
        let stop = false
        if (numberFromConsole == "1") {
            resolve(function1());
        }
        else if (numberFromConsole == "2") {
            resolve(function2())
        }
        else if (numberFromConsole == "3") {
            resolve(function3())
        }
        else if (numberFromConsole == "4") {
            resolve(function4())
        }
        else if (numberFromConsole == "5") {
            resolve(function5())
        }
        else if (numberFromConsole == "6") {
            resolve(function6())
        }
        else if (numberFromConsole == "7") {
            resolve(function7())
        }
        else if (numberFromConsole == "8") {
            resolve(function8())
        }
        else if (numberFromConsole == "9") {
            resolve(function9())
        }
        else if (numberFromConsole == "10") {
            resolve(function10())
        }
        else if (numberFromConsole == "11") {
            resolve(function11())
        }
        else if (numberFromConsole == "12") {
            resolve(function12())
        }
        else if (numberFromConsole == "13") {
            resolve(function13())
        } else if (numberFromConsole == "14") {
            resolve(function14())
        } else if (numberFromConsole == "15") {
            resolve(function15())
        } else if (numberFromConsole == "16") {
            resolve(function16())
        } else if (numberFromConsole == "17") {
            resolve(function17())
        } else if (numberFromConsole == "18") {
            resolve(function18())
        }
        else {
            stop = true
            rl.close()
            resolve(console.log("se ha ido de la aplicación"))
        }

    });
    return promise

}

// numberFromConsole = await getNumberFromConsole();
// verifyNumber(numberFromConsole)
//     .then(askagain(numberFromConsole))
// // Pregunta por otr número si el usuario  no ha pulsado 0 o otras teclas
// async function askagain(num) {
//     while (num in Array.from({ length: 19 }, (x, i) => i)) {
//         let numberFromConsole = await getNumberFromConsole();
//         verifyNumber(numberFromConsole)
//         num = numberFromConsole
//     }
//     rl.close()
//     console.log("END")
// }

export async function play() {
    let numberFromConsole = await getNumberFromConsole();
    await verifyNumber(numberFromConsole)
    while (numberFromConsole in Array.from({ length: 19 }, (x, i) => i)) {
        numberFromConsole = await getNumberFromConsole();
        await verifyNumber(numberFromConsole)
    }
    rl.close()
    console.log("END")
}

