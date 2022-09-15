const navSlide = () => {
    const lines = document.querySelector('.lines');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //Toggle Nav
    lines.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;
            console.log(index / 5 + 0.5);
        });

        // Lines Animation
        lines.classList.toggle('toggle');
    });
}
navSlide();

const cursor = document.querySelector('.cursor');
document.addEventListener("mousemove", (e) => {
    let leftPosition = e.pageX;
    let topPosition = e.pageY;

    cursor.style.left = leftPosition + "px";
    cursor.style.top = topPosition + "px";
})
const navLinkItems = document.querySelectorAll('nav ul li');
navLinkItems.forEach(link => {
    link.addEventListener("mouseenter", () => {
        cursor.classList.add("large");
    })
})
navLinkItems.forEach(link => {
    link.addEventListener("mouseleave", () => {
        cursor.classList.remove("large");
    })
})