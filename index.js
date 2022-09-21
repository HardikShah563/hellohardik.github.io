// Cursor div drags behind the cursor
const cursor = document.querySelector('.cursor');
document.addEventListener("mousemove", (e) => {
    let leftPosition = e.pageX;
    let topPosition = e.pageY;
    cursor.style.left = leftPosition + "px";
    cursor.style.top = topPosition + "px";
});

// Navbar CSS
var navLines = document.querySelector(".nav-lines");
navLines.addEventListener("click", () => {
    var navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
})

// // Horizontal Text Scroll Effect
// let line1 = document.querySelector(".line-1");
// let box = document.querySelector(".box");
// let pos = window.scrollY;
// console.log(pos);
// line1.style.left = `${pos}px`;
// // box.window.scrollY = () => {
// // }

// My Stack printting divs: 
var stackName = ['HTML', 'CSS', 'JavaScript', 'React', 'Node JS', 'Python', 'C', 'C++', 'Github', 'npm', 'figma', 'Photoshop', 'PremierePro'];
var stackPercentage = ['90', '70', '40', '40', '20', '0', '40', '20', '60', '70', '10', '30', '60', '80'];

var subtitle = document.getElementById("subtitle");

function createStack() {
    for (let i = stackName.length - 1; i >= 0; i--) {
        console.log(stackName[i]);
        let newStack = `<div class="td">
        <div class="stack-name">
            <p>${stackName[i]}</p>
        </div>
        <div class="rank-bar">
            <div class="ranking"></div>
        </div>
        <div class="stack-percentage">
            <p>${stackPercentage[i]}%</p>
        </div>
    </div>`;
        subtitle.insertAdjacentHTML("afterend", newStack);
    }
    console.log("CreateStack works");
}
createStack();

// stack:hover -> edit css of different classes
var rankBar = document.querySelector(".rank-bar");
var ranking = document.querySelector(".ranking");


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
