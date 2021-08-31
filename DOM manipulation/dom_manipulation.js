const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);
    

const para = document.createElement('p');
para.classList.add('para');
para.textContent = "Hey I'm red!";
para.style.color = 'red';

container.appendChild(para);


const h3 = document.createElement('h3');
h3.classList.add('h3');
h3.textContent = "I'm a blue h3";
h3.style.color = 'blue';

container.appendChild(h3);


const div = document.createElement("div");
div.classList.add("div");
div.style.borderColor = "black";
div.style.backgroundColor = "pink";



const h1 = document.createElement('h1');
h1.classList.add('h1');
h1.textContent = "I'm a div!";

div.appendChild(h1);


const p2 = document.createElement('p');
p2.classList.add('p2');
p2.textContent = "Me too!";

div.appendChild(p2);

container.appendChild(div);
/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert("Hello World");
});

function alertFunction() {
  alert("YAY! YOU DID IT!");
}


btn.addEventListener('click', function (e) {
  e.target.style.background = 'blue';
});
