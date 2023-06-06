// Varaible declaration: 
let i = 0;

// Cursor div drags behind the cursor
const cursor = document.querySelector('.cursor');
document.addEventListener("mousemove", (e) => {
    let leftPosition = e.pageX;
    let topPosition = e.pageY;
    cursor.style.left = leftPosition + "px";
    cursor.style.top = topPosition + "px";
});

// Navbar CSS
// var navLines = document.querySelector(".nav-lines");
// navLines.addEventListener("click", () => {
//     var navLinks = document.querySelector(".nav-links");
//     navLinks.classList.toggle("active");
// });

// // Horizontal Text Scroll Effect
// let line1 = document.querySelector(".line-1");
// let box = document.querySelector(".box");
// let pos = window.scrollY;
// console.log(pos);
// line1.style.left = `${pos}px`;
// // box.window.scrollY = () => {
// // }

// My Stack printting divs: 
var stackName = ['HTML',
    'CSS',
    'JavaScript',
    'React',
    'Python',
    'Flask',
    'php',
    'C',
    'C++',
    'Github',
    'npm',
    'Editing'
];

var stackClass = ['fa-brands fa-html5',
    'fa-brands fa-css3',
    'fa-brands fa-square-js',
    'fa-brands fa-react',
    'fa-brands fa-python',
    'fa-solid fa-pepper-hot fa-flip-horizontal',
    'fa-brands fa-php',
    'fa-solid fa-c',
    'fa-solid fa-c',
    'fa-brands fa-github',
    'fa-brands fa-npm',
    'fa-solid fa-sliders',
];


var subtitle = document.getElementById("empty-block");

function createStack() {
    for (i = stackName.length - 1; i >= 0; i--) {
        // console.log(stackName[i]);
        let newStack = `
        <div class="block" id = "${i}" onclick = "activeToggle(${i})">
            <i class="${stackClass[i]}"></i>
            <div class="block-text">${stackName[i]}</div>
        </div>`;
        subtitle.insertAdjacentHTML("afterend", newStack);
    }
    console.log("CreateStack works");
}
createStack();

const block = document.querySelector(".block");
var past = 0;

function activeToggle(id_no) {
    document.getElementById(`${past}`).classList.remove("activeToggle");
    var idNo = document.getElementById(`${id_no}`);
    idNo.classList.add("activeToggle");
    past = id_no;
}

function createDivider() {
    for (i = 0; i < 25; i++) {
        let slashSectionDivider = document.getElementById("divider-img");
        let newSlashDivider = `
        <img id="divider-img" src="./res/divider-paralellogram.png" alt="">
        `;
        slashSectionDivider.insertAdjacentHTML("afterend", newSlashDivider);
    }
}
createDivider();

// Function to convert String to Binary String
function strToBinary(str) {
    let len = str.length;
    let output = '';
    for (let i = 0; i < len; i++) {
        // convert each char to
        // ASCII value
        let val = (str[i]).charCodeAt(0);

        // Convert ASCII value to binary
        let bin = "";
        while (val > 0) {
            if (val % 2 == 1) {
                bin += '1';
            }
            else
                bin += '0';
            val = Math.floor(val / 2);
        }
        bin = reverse(bin);

        output = output.concat(bin);
        output = output + ' ';
    }
    console.log(output);
    return output;
}

function reverse(input) {
    a = input.split("");
    let l, r = 0;
    r = a.length - 1;

    for (l = 0; l < r; l++, r--) {
        // Swap values of l and r
        let temp = a[l];
        a[l] = a[r];
        a[r] = temp;
    }
    return (a).join("");
}

let stringToBePassed = 'STR';
strToBinary(stringToBePassed);

let binary = document.getElementById("exp-binary");
binary.textContent = '>> ' + strToBinary('EXP');

// const navLinkItems = document.querySelectorAll('nav ul li');
// navLinkItems.forEach(link => {
//     link.addEventListener("mouseenter", () => {
//         cursor.classList.add("large");
//     })
// })
// navLinkItems.forEach(link => {
//     link.addEventListener("mouseleave", () => {
//         cursor.classList.remove("large");
//     })
// })

function sendEmail() {
    const name = document.getElementById("name").value;
    const mail = document.getElementById("email-email").value;
    const desc = document.getElementById("description").value;
    var mailBody = `
        Name        : ${name}
        Email       : ${mail}
        Desciption  : ${desc}
    `;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "hellohardik563@gmail.com",
        Password: "BAB014EDEAB24AD5E79EB80F2B6E87014563",
        To: "hellohardik563@gmail.com",
        From: mail,
        Subject: "A message for hello-hardik",
        Body: mailBody
    });
}