const apiUrl = `https://demo-api.siit.ro/api`;


function getStudentList(){
    const requestUrl = `${apiUrl}/students`
    fetch(requestUrl)
        .then(response => response.json())
        .then(data => console.log(data))
}


function getStudent(studentId){
    const requestUrl = `${apiUrl}/students/${studentId}`
    fetch(requestUrl)
        .then(response => response.json())
        .then(data => console.log(data))
}


function addStudent(student) {
    const requestOptions = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }, 
        method: 'POST',
        body: JSON.stringify(student)
    }

    const requestUrl = `${apiUrl}/students`
    fetch(requestUrl, requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))
}


function updateStudent(StudentId, student) {
    const requestOptions = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }, 
        method: 'PUT',
        body: JSON.stringify(student),
    }

    const requestUrl = `${apiUrl}/books/${studentId}`
    fetch(requestUrl, requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))
}


function deleteStudent(StudentId){
    const requestOptions = {
        method: 'DELETE'
    }

    const requestUrl = `${apiUrl}/students/${studentId}`
    fetch(requestUrl, requestOptions)   // response is 204 no content, so the response does not need to be parsed
}


// CREATE

// const newStudent = {
//     name: `Roxy Poxy`,
//     email: 'roxy_poxy@yahoooooo.com',
//     phone: '123456789'
// }
// addStudent(newStudent);



// READ
// get the resource list (collection)
getStudentList();

// get the resource havig the id 8
getStudent(8);


// UPDATE

// const updStudent = {
//     name: `Roxana banana`,
//     email: 'roxy_pox@yahoo.com',
       phone: '123456789'
// }
// updateStudent(8, updStudent);


// DELETE
// deleteStudent(8);