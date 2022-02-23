window.onload = () => {

    let updateBtn = document.getElementById('updateBtn');
    let writeOut = document.getElementById('writeOut');
    updateBtn.addEventListener('click', write);
    let d = window.location.search.split("=")[1]

    fetch('http://167.172.175.168/9f7c75e9-6dfa-44f0-be35-456e466ce394/Clients/' + d, {
        method: 'GET'
    })
        .then((response) => response.json())
        .then(wr => {

            let names = document.createElement('div');
            names.classList.add('text-center')
            names.innerHTML = `
                    <h2>Updating: ${wr.firstName} ${wr.lastName}</h2>
                    `;
            console.log("name: " + wr.firstName)
            writeOut.appendChild(names);

        })



    function write() {
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
/*for (let i = 0; i < wr.length; i++) {
                    let names = document.createElement('div')
                    names.innerHTML = `
                    <div>${wr[i].firstName} ${wr[i].lastName}</div>
                    `;
                    console.log("name: " + wr[i].firstName)
                    writeOut.appendChild(names);

                }*/