let f = () => {
    console.log('Search' + window.location.search)
    let writeOut = document.getElementById('writeOut');
    writeOut.innerHTML = ""

    fetch('http://167.172.175.168/9f7c75e9-6dfa-44f0-be35-456e466ce394/Clients', {
        method: 'GET'
    }).then((response) => response.json())
        .then((data) => {
            console.log(data)
            for (let i = 0; i < data.length; i++) {
                let card = document.createElement('div');
                card.classList.add('card-small')
                card.innerHTML = `<div class="card" style="width: 21.5rem;">
<div class="card-body">
<h5 class="card-title">${data[i].firstName} ${data[i].lastName}</h5>
<h6 class="card-subtitle mb-2 text-muted">${data[i].id}</h6>
<p class="card-text">${data[i].email}</p>
<button type="button" id="deleteBtn" class="btn btn-danger">Delete</button>
<a type="button" onclick="location.href='update.html?id=${data[i].id}'" id="updateBtn" class="btn btn-warning">Update</a>
<a type="button" onclick="location.href='comment.html?id=${data[i].id}'" id="commentBtn" class="btn btn-info">Comment</a>


</div>
</div>`;
                writeOut.appendChild(card)
                let deleteBtn = card.querySelector("#deleteBtn")
                deleteBtn.addEventListener('click', () => {
                    fetch('http://167.172.175.168/9f7c75e9-6dfa-44f0-be35-456e466ce394/Clients/' + data[i].id, {
                        method: 'DELETE'
                    })
                        .then((response) => f())
                })
            }
        })
}

window.onload = f;
