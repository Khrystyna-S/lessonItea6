// Task 1

const ITEA_COURSES = ["HTML & CSS", "JavaScript базовий курс", "JavaScript поглиблений курс",
    "JavaScript Professional", "Angular 2.4 (базовий)", "Angular 2.4 (поглиблений)", "React.js",
    "React Native", "Node.js", "Vue.js"];

//  1
const arrayLenght = ITEA_COURSES.map(item => item.length);
console.log(arrayLenght);

//  2
ITEA_COURSES.sort().map((item) => {
    const list = document.createElement('li');
    list.append(item);
    document.querySelector('.list').append(list);
});

// 3
document.getElementById('search').oninput = function () {
    const value = this.value.trim();
    const elemList = document.querySelectorAll('.list li');
    console.log(elemList);
    if (value != '') {
        elemList.forEach(function (elem) {
            if (elem.innerText.search(value) == -1) {
                elem.classList.add('hide');
            }
            else {
                elem.classList.remove('hide');
            }
        });
    }
    else {
        elemList.forEach(function (elem) {
            elem.classList.remove('hide');
        });
    }
}


// TASK 2

const stars = ['Elijah Wood', 'Ian McKellen', 'Orlando Bloom', 'Ewan McGregor', ' Liam Neeson',
    'Natalie Portman', 'Ewan McGregor', 'Billy Bob Thornton', 'Martin Freeman'];

const movies = [
    {
        name: "Lord of the Rigs",
        duration: 240,
        starring: ['Elijah Wood', 'Ian McKellen', 'Orlando Bloom']
    },
    {
        name: "Star Wars: Episode I - The Phantom Menace",
        duration: 136,
        starring: ['Ewan McGregor', ' Liam Neeson', 'Natalie Portman']
    },
    {
        name: "Fargo",
        duration: 100,
        starring: ['Ewan McGregor', 'Billy Bob Thornton', 'Martin Freeman']
    },
    {
        name: "V for Vendetta",
        duration: 150,
        starring: ['Hugo Weaving', 'Natalie Portman', 'Rupert Graves']
    }
];

stars.forEach(function (elem, index) {
    const option = document.createElement('option');
    option.value = index;
    option.innerHTML = elem;
    document.getElementById('select1').appendChild(option);
});

const res = movies.find(({ duration }, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.innerHTML = duration;
    document.getElementById('select2').appendChild(option);
});


document.getElementById('combineBtn').onclick = function () {
    const select1 = document.getElementById('select1');
    const val1 = select1.options[select1.selectedIndex].value;
    const select2 = document.getElementById('select2');
    const val2 = select2.options[select2.selectedIndex].value;

    const assignObj1 = stars[val1];
    const assignObj2 = movies[val2];
    const obj = Object.assign(assignObj1, assignObj2);

    document.getElementById('result').innerHTML = `
    Name: ${obj.name},
    Duration: ${obj.duration},
    Starring: ${obj.starring}
    `;
}






