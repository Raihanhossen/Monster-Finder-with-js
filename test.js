const header = document.createElement('h1');
header.innerText = 'CatPhotoApp';

const section = document.createElement('section');

const subHeader = document.createElement('h2');
subHeader.innerText = 'Cat Photos';

const paragraph = document.createElement('p');
paragraph.innerHTML='See more <a target="_blank" href="https://freecatphotoapp.com">cat photos</a> in our gallery.';

const linkImg = document.createElement('a');
linkImg.src = 'https://freecatphotoapp.com';
linkImg.target = "_blank";
linkImg.innerHTML = '<img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">';

section.append(subHeader,paragraph,linkImg);

document.querySelector('body').append(header,section);

// <h1>CatPhotoApp</h1>
// <section>
//   <h2>Cat Photos</h2>
//   <p>See more <a target="_blank" href="https://freecatphotoapp.com">cat photos</a> in our gallery.</p>
//   <a href="https://freecatphotoapp.com"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>
// </section>