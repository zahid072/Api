fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    const content = document.getElementById("content");
    for (let post of json) {
      let div1 = document.createElement("div");
      div1.classList.add('container');
      div1.innerHTML = `
         <p>${post.id}</p>
         <h1 class="text-4xl font-bold">${post.title}</h1>
         <p>${post.body}</p>
      `;
      content.appendChild(div1);
    }
  });
