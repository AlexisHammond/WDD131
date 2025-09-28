const themeSelector = document.querySelector("#theme-select");// replace with code to select dropdown element out of the HTML (Hint: document.querySelector)
function changeTheme() {
// check to see what the current value of our select is.
// The current value is conveniently found in themeSelector.value!
let themeValue = themeSelector.value;

// if the value is dark then:
if (themeValue === "dark") {
// add the dark class to the body
    document.body.classList.add("dark");
// change the source of the logo img to point to the white logo.
    let logo = document.querySelector(".logo img");
    logo.setAttribute("src", "images/byui-logo_white.png");
// otherwise
} else {
// remove the dark class
    document.body.classList.remove("dark");
// make sure the logo src is the blue logo.
    let logo = document.querySelector(".logo img");
    logo.setAttribute("src", "images/byui-logo_blue.webp");
}
}

// add an event listener to the themeSelector element here.
// Use the changeTheme function as the event handler function.
themeSelector.addEventListener('change', changeTheme);