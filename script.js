const fade = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add("visible");
        } else {
            entry.target.classList.remove("visible");
        }
    })
}, {threshold: 0.6});
let hiden = document.querySelectorAll(".hidden");
let hidden = Array.from(hiden)
hidden.forEach(element => {
    fade.observe(element)
})