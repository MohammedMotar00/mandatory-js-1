// Changing h1 to Fruits & Vegetables Corp
let h1 = document.querySelector('h1').textContent = 'Fruits & Vegetables Corp';



// Changing href and text in last item in <ul>
let a = document.querySelector('ul li:last-child a');

// change href
a.href = '#vegetables';

// change text
a.textContent = 'Vegetables';



// swap order
let main = document.getElementById('main');

// section about
let about = document.getElementById('about');

// 2 sections
main.insertBefore(about, main.childNodes[1]);




// Creating <h2> tagg for <section> id=""
let section = document.getElementById('main'),
    myContact = document.getElementById('contact'),
    myAbout = document.getElementById('about');


    // creating <h2> tagg for <section id="contact">
    let contactH2 = document.createElement('h2');
    contactH2.textContent = 'Contact';


    // creating <h2> tagg for <section id="about">
    let aboutH2 = document.createElement('h2');
    aboutH2.textContent = 'About';


    // check if one of <section> in <main>
    if (section.contains(myContact)) {
        // insert <h2> in <section>
        myContact.insertBefore(contactH2, myContact.childNodes[0]);
    };
    if (section.contains(myAbout)) {
        // insert <h2> in <section>
        myAbout.insertBefore(aboutH2, myAbout.childNodes[0]);
    };


// wraping text in a <p> tagg
let text = document.getElementById('about').childNodes[1],
    p = document.createElement('p');

p.appendChild(text);
about.insertBefore(p, about.childNodes[1]);




let thead = document.querySelector('thead tr');
console.log(thead);

let td1 = thead.getElementsByTagName('td')[0],
    td2 = thead.getElementsByTagName('td')[1];

let th = document.createElement('th'),
    th1 = document.createElement('th')
th.innerHTML = td1.innerHTML;
th1.innerHTML = td2.innerHTML;

td1.parentNode.appendChild(th);
td1.parentNode.removeChild(td1);

td2.parentNode.appendChild(th1);
td2.parentNode.removeChild(td2);


let css = document.createElement('link');
css.rel = 'stylesheet';
css.type = 'text/css';
css.href = 'main.css';

document.head.appendChild(css);


let title = document.querySelector('title').innerHTML = 'Fruits &amp; Vegetables Corp';