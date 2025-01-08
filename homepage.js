const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0, yValue = 0;

// window.addEventListener("mousemove", (o) => {
//     xValue = o.clientX - window.innerWidth / 2;
//     yValue = o.clientY - window.innerHeight / 2;

//     parallax_el.forEach((el) => {
//        el.style.transform = `translateX(calc(-50% + ${-xValue}px)) translateY
//        (calc-(50% + ${yValue}px))`;
//     });
// });

window.addEventListener("mousemove", (o) => {
    const xValue = o.clientX - window.innerWidth / 2;
    const yValue = o.clientY - window.innerHeight / 2;

    parallax_el.forEach((el) => {
        el.style.transform = `translateX(calc(-50% + ${-xValue}px)) translateY(calc(-50% + ${yValue}px))`;
    });
});