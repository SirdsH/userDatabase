let f = () => {

    let commentCont = document.getElementById('commentCont')
    let d = window.location.search.split("=")[1]
    let btn = document.getElementById('post')
    btn.addEventListener('click', commentOut)


    function commentOut() {
        let comment = document.getElementById('commenting')
        const data2 = {
            body: comment.value
        }
        fetch('http://167.172.175.168/9f7c75e9-6dfa-44f0-be35-456e466ce394/Clients/' + d + '/Comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data2),
        })
            .then(response => response.json())
            .then(cmout => {
                console.log(cmout)
                location.reload();
            })
    }

    fetch('http://167.172.175.168/9f7c75e9-6dfa-44f0-be35-456e466ce394/Clients/' + d + '/Comments', {
        method: 'GET'
    }).then((response) => response.json())
        .then((data) => {
            console.log(data)
            for (let i = 0; i < data.length; i++) {
                let commentBox = document.createElement('ul')
                commentBox.classList.add('list-group')
                commentBox.innerHTML = `
 <li class="list-group-item">${data[i].body}</li>
   `
                commentCont.appendChild(commentBox)
            }
        })

}

window.onload = f;