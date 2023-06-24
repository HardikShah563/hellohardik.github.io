console.log(console.clear());
console.log(`Do not type to mess up anything in the console! It can be too dangerous...
Especially Try not playing aorund up with the elements on the page, you'll ruin your own experience! 
`);
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

// My Stack printting divs: 
var stackName = [
    'React',
    'Node',
    'Python',
    'Flask',
    'php',
    'JavaScript',
    'C',
    'C++',
    'HTML',
    'CSS',
    'Vers. Ctrl',
    'Editing'
];

var stackClass = [
    'fa-brands fa-react',
    'fa-brands fa-node',
    'fa-brands fa-python',
    'fa-solid fa-pepper-hot fa-flip-horizontal',
    'fa-brands fa-php',
    'fa-brands fa-square-js',
    'fa-solid fa-c',
    'fa-solid fa-c',
    'fa-brands fa-html5',
    'fa-brands fa-css3',
    'fa-brands fa-git',
    'fa-solid fa-sliders',
];


var subtitle = document.getElementById("empty-block");

function createStack() {
    for (i = stackName.length - 1; i >= 0; i--) {
        let newStack = `
        <div class="block" id = "${i}" onclick = "activeToggle(${i})">
            <i class="${stackClass[i]}"></i>
            <div class="block-text">${stackName[i]}</div>
        </div>`;
        subtitle.insertAdjacentHTML("afterend", newStack);
    }
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