window.onload = () => {

    let d = window.location.search.split("=")[1]

    fetch('http://167.172.175.168/9f7c75e9-6dfa-44f0-be35-456e466ce394/Clients/' + d, {
        method: 'GET'
    })
        .then((response) => response.json())
        .then(wr => {

            let names = document.createElement('div');
            names.innerHTML = `
              
    <div class="form-group">
        <label for="inputEmail">Email address</label>
        <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp"
               placeholder="${wr.email}">
    </div>
    <div class="form-group">
        <label for="firstName">First Name</label>
        <input class="form-control" id="firstName" aria-describedby="firstNameHelp"
               placeholder="${wr.firstName}">
    </div>
    <div class="form-group">
        <label for="lastName">Last Name</label>
        <input class="form-control" id="lastName" aria-describedby="lastNameHelp"
               placeholder="${wr.lastName}">
    </div>
    
`
            ;

            console.log("name: " + wr.firstName)
            writeOut.appendChild(names);

        })


    let writeOut = document.getElementById('writeOut');
    let updateBtn = document.getElementById('updateBtn');
    updateBtn.addEventListener('click', updateWrite);


    function updateWrite() {
        let email = document.getElementById('inputEmail');
        let firstName = document.getElementById('firstName');
        let lastName = document.getElementById('lastName');
        const data = {
            email: email.value,
            firstName: firstName.value,
            lastName: lastName.value
        }


        console.log(d)
        /*const params = new Proxy(new URLSearchParams(), {
            get: (searchParams, prop) => searchParams.get(prop),
        });
        let value = params.id;*/


        fetch('http://167.172.175.168/9f7c75e9-6dfa-44f0-be35-456e466ce394/Clients/' + d, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(wr => {
                console.log(wr)
                location.href = 'index.html'
            })
    }
}