const get = () => {
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err))
  .finally(() => console.log("Finally"));
}

const save = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((err) => console.log(err));
}

const update = () => {
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err));
}

const deletedata = () => {
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
  })
  .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err));
}

async function getanddelete(){
  try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await res.json();
      console.log(data[50].id);

      const res2 = await fetch('https://jsonplaceholder.typicode.com/posts/' + data[50].id , {
        method: 'DELETE',
      })
        const data2 = await res2.json()
        console.log(data2);

    
  } catch (err) {
    console.log(err);
  }
}

getanddelete();