import {monsters} from './monstar.js';
console.log(monsters);

for(let monsterDiv of monsters ){
    showMonsters(monsterDiv);
}
// const monsters = document.getElementById('monsters');
// showMonsters(monsterDiv);
function showMonsters(monsterDiv) {
    const monster = document.createElement('div');
    monster.className = 'monster item2';

    const img = document.createElement('img');
    img.src = `https://robohash.org/${monsterDiv.id}?set=set2`;
    img.alt = monsterDiv.name;

    const mname = document.createElement('p');
    mname.className = 'name';
    mname.innerText = monsterDiv.name;


    const email = document.createElement('p');
    email.className = 'email';
    email.innerText = monsterDiv.email;

    monster.append(img, mname, email);

    document.querySelector('.monsters').append(monster);
    console.log(monster);
}

notFound();
function notFound() {
    const notFoundDiv = document.createElement('div');
    notFoundDiv.className = 'p-5 not-found';
    notFoundDiv.style.display = 'none';

    const span = document.createElement('span');
    span.innerText = '404';

    const h1 = document.createElement('h1');
    h1.innerText = 'No Monster Found';

    notFoundDiv.append(span, h1);
    document.querySelector('.monsters').append(notFoundDiv);
}

document.querySelector('#search-monster').addEventListener('keyup', function(e){
    const keyword = e.target.value.toLowerCase();
    console.log(e);
    console.log(keyword);
});
