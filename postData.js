window.onload = () => {

    let btn = document.getElementById('btn');
    btn.addEventListener('click', write);

    function write() {
        let email = document.getElementById('inputEmail');
        let firstName = document.getElementById('firstName');
        let lastName = document.getElementById('lastName');
        const data = {
            email: email.value,
            firstName: firstName.value,
            lastName: lastName.value
        }

    fetch('http://167.172.175.168/9f7c75e9-6dfa-44f0-be35-456e466ce394/Clients ', {
        method: 'POST',
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