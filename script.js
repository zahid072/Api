fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    const content = document.getElementById("content");
    for (let post of json) {
      let div1 = document.createElement("div");
      div1.classList.add('container');
      div1.innerHTML = `
         <p>Post: ${post.id}</p>
         <h1 class="text-4xl font-bold">${post.title}</h1>
         <p>${post.body}</p>
      `;
      content.appendChild(div1);
    }
  });
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    
    const content = document.getElementById("user");
    for (let user of data) {
      let div1 = document.createElement("div");
      div1.classList.add('container');
      div1.innerHTML = `
         <p>user: ${user.id}</p>
         <h1 class="text-4xl font-bold">Name: ${user.name}</h1>
         <p>Email: ${user.email}</p>
         <p>City: ${user.address.city}</p>
         <p>street: ${user.address.street}</p>
      `;
      content.appendChild(div1);
    }
  });
fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response) => response.json())
  .then((data) => {
    
    const content = document.getElementById("photo");
    for (let photo of data) {
      let div1 = document.createElement("div");
      div1.classList.add('container');
      div1.innerHTML = `
         <p>photo: ${photo.id}</p>
         <h1 class="text-4xl font-bold my-7">Name: ${photo.title}</h1>
         <p>Image-2: <img class="inline rounded "  src=${photo.thumbnailUrl} alt=""></p>
        
      `;
      content.appendChild(div1);
    }
  });

  





