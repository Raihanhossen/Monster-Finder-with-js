/* <div class="monster">
            <img src="https://robohash.org/6?set=set2" alt="">
            <p class="name">Shahnewaz Saadi</p>
            <p class="email">shahnewazsaadi@gmail.com</p>
        </div>
        <div class="p-5 not-found" style="display: none;">
            <span>404</span>
            <h1>No monster found</h1>
        </div> */

const monsters = document.getElementById('monsters');
showMonsters();
function showMonsters() {
    const monster = document.createElement('div');
    monster.className = 'monster';

    const img = document.createElement('img');
    img.src = 'https://robohash.org/6?set=set2';
    img.alt = 'Shahnewaz Saadi';

    const mname = document.createElement('p');
    mname.className = 'name';
    mname.innerText = 'Shahnewaz Saadi';


    const email = document.createElement('p');
    email.className = 'email';
    email.innerText = 'shahnewzsaddi@gmail.com';

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
}
