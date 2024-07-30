let data = () => {
    let arrayData = ''
     fetch('https://jsonplaceholder.typicode.com/posts')
     .then((response) => response.json())
    .then((json) => {
        json.map((val,index) => {
            console.log(val);
            arrayData += `<div class="card">
            <h1>${val.id}</h1>
            <h2>${val.title}</h2>
            <lable>${val.body}</lable>
            <h4>${val.userid}</h4>
        </div>`
        })
            document.getElementById('card-content').innerHTML = arrayData

})
        .catch((err) => console.log(err))

    }
    
        

data();


