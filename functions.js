import { students, availableMaleNames, availableFemaleNames, availableGenders } from "./application.js"


// num.1
export const function1 = () => {
    console.table(students)
}
// num.2
export const function2 = () => {
    console.log("Cantidad de alumnos: ", students.length)
}
// num.3
export const function3 = () => {
    const names = []
    for (let student of students) {
        names.push(student.name)
    }
    console.log("Lista de alumnos: ", names)
}
// num.4
export const function4 = () => {
    students.pop()
    console.log("Se ha eliminado el ultimo alumno de la clase \n", "Lista actualizada de la clase:")
    function1()
}
//num.5
export const randomnumber = function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const function5 = () => {
    try {
        const numToEliminate = randomnumber(0, students.length - 1)
        const Deletedname = students[numToEliminate].name
        students.splice(numToEliminate, 1)
        console.log("Se ha eliminado", Deletedname, "de la clase \n", "Lista actualizada de la clase:")
        function1()
    }
    catch {
        console.log("Actualmente no queda alumno en la lista, ingresa 10 para agregar nuevo alumno.")
    }
}
//num6.

export const function6 = () => {
    const name = students.filter(student => student.gender == "female")
    console.log("Lista de alumnas:", name)
}
//num7
export const function7 = () => {
    const qtyMale = students.filter(student => student.gender == "male").length;
    const qtyFemale = students.filter(student => student.gender == "female").length;
    console.log("Cantidad de chicos: ", qtyMale, "\nCantidad de chicas: ", qtyFemale)
}
//num8
export const function8 = () => {
    const qtyMale = students.filter(student => student.gender == "male").length;
    if (qtyMale > 0) {
        console.log("No todos los alumnos son chicas, hay", qtyMale, "chico(s)")
    }
    else if (students.length === 0) { console.log("Actualmente no queda alumno en la lista, ingresa 10 para agregar nuevo alumno.") }
    else {
        console.log("Son tadas chicas")
    }
}
//num9
export const function9 = () => {
    const list = students.filter((student) => student.age >= 20 && students.age <= 25)
    const names = []
    for (let student of list) {
        names.push(student.name)
    }
    if (names.length == 0) { console.log("Nadie en la clase es de entre 20 y 25 años") }
    else { console.log("Lista de alumnos de entre 20 y 25 años:", names) }
}
//num10
export const function10 = () => {

    const list = [availableMaleNames, availableFemaleNames];
    let randomList;
    if (availableFemaleNames.length > 0 || availableMaleNames.length > 0) {
        if (availableFemaleNames.length > 0 && availableMaleNames.length > 0) { randomList = list[randomnumber(0, 1)] }
        else if (availableFemaleNames.length > 0) {
            randomList = availableFemaleNames
        }
        else if (availableMaleNames.length > 0) {
            randomList = availableMaleNames
        }
        const randomName = randomList[randomnumber(0, randomList.length - 1)]
        let randomGender;
        if (availableFemaleNames.includes(randomName)) {
            randomGender = "female";
            availableFemaleNames.splice(availableFemaleNames.indexOf(randomName), 1)
        }
        else {
            randomGender = "male"
            availableMaleNames.splice(availableMaleNames.indexOf(randomName), 1)
        }

        const randomAge = randomnumber(20, 50)
        const randomElement = {
            age: randomAge,
            examScores: [],
            gender: randomGender,
            name: randomName
        }
        students.push(randomElement)
        console.log("Se ha añadido", randomName, "a la clase, de forma aleatoria. Lista actual: \n", "Lista actualizada de la clase:")
        function1()

    }
    else {
        console.log("No tenemos más alumnos libres para añadir")
    }
}

//num11
export const function11 = () => {
    const ageList = students.map((student) => student.age)
    const youngests = students.filter((student) => student.age == Math.min.apply(Math, ageList))
    const returnName = (array) => {
        for (let person of array) {
            return person.name
        }
    }
    console.log("La persona más jóven es", returnName(youngests), ", con", Math.min.apply(Math, ageList), "años")
}
//num12
export const function12 = () => {
    const ageList = students.map((student) => student.age)
    const sum = ageList.reduce((a, b) => a + b)
    const mediaAge = (sum / ageList.length).toFixed(2)
    console.log("La edad media es ", mediaAge, "años")
}

//num13
export const function13 = () => {
    const ageList = students.filter((student) => student.gender == "female").map((student) => student.age)
    const sum = ageList.reduce((a, b) => a + b)
    const mediaAge = sum / ageList.length
    console.log("La edad media de chica es ", mediaAge, "años")
}

//num14
export const function14 = () => {
    students.map((student) => student.examScores.push(randomnumber(0, 10)))
    console.log("Se ha añadido nota a cada alumno de forma aleatoria", "Lista actualizada de la clase:")
    function1()
}

//num15
export const function15 = () => {
    students.sort(
        (a, b) => {
            const nameA = a.name.toUpperCase()
            const nameB = b.name.toUpperCase()
            if (nameA < nameB) {
                return -1
            }
            if (nameA > nameB) {
                return 1
            }
            return 0
        }
    )
    console.log("Se ha ordenado la lista de alumnos alfabéticamente según su nombre", "Lista actualizada de la clase:")
    function1()
}
//num16
const getMaxOfArray = (numArray) => {
    return Math.max.apply(null, numArray);
}

export const function16 = () => {
    try {
        const scoreList = []
        const scoreSum = []
        for (let student of students) {
            scoreList.push(student.examScores)
        }
        for (let scores of scoreList) {
            const sum = scores.reduce((a, b) => a + b)
            scoreSum.push(sum)
        }
        const maxScore = getMaxOfArray(scoreSum)
        const maxIndex = scoreSum.indexOf(maxScore)
        const maxStudent = students[maxIndex].name
        console.log("El alumno con mejores notas es: ", maxStudent)
        console.log(students[maxIndex])

    }
    catch { console.log("No se ha añadido la nota, ingresa número 14 para agregar nueva nota a todos.") }

}

//num17
export const function17 = () => {
    try {
        const medialist = []
        const scoreList = []
        for (let student of students) {
            scoreList.push(student.examScores)
        }
        for (let scores of scoreList) {
            const sum = scores.reduce((a, b) => a + b)
            if (sum === 0) { medialist.push(0) }
            else {
                medialist.push(sum / scores.length)
            }
        }
        const maxScore = getMaxOfArray(medialist)
        const maxIndex = medialist.indexOf(maxScore)
        const maxStudent = students[maxIndex].name
        console.log("El alumno con la nota media más alta es: ", maxStudent, "con la nota media de", maxScore)
        function1()
    }

    catch { console.log("Hay alumno que no tiene nota, ingresa número 14 para agregar nueva nota a todos.") }

}
//num18
export const function18 = () => {
    const scoreList = []
    for (let i = 0; i < students.length; i++) {
        scoreList.push(students[i].examScores)
        if (students[i].examScores.length === 0) { scoreList[i].push(10) }
        for (let j = 0; j < scoreList[i].length; j++) {
            if (scoreList[i][j] < 10) { scoreList[i][j] += 1 }
        }
    }
    students.map((student) => { student.examScores = scoreList[students.indexOf(student)] })
    console.log("Se ha añadido un punto extra a cada nota existente de todos los alumnos")
    function1()
}