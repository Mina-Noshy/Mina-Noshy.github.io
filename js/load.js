/*
 *
 * mina noshy
 * mina-noshy@outlook.com
 * +2 01111 257 052
 * 1/3/2021
 * 
 */

var socialtags = [{
    img: "img/github.png",
    link: "https://github.com/Mina-Noshy"
}, {
    img: "img/linkedin.webp",
    link: "https://www.linkedin.com/in/MinaNoshyWahba"
}, {
    img: "img/mail.png",
    link: "mailto:mina-noshy@outlook.com"
}, {
    img: "img/cv.svg",
    link: "https://mina-noshy.github.io/resume/Mina_Noshy_CV.pdf"
}]

function loadSocialIcons() {
    var socialtext = ""
    for (x in socialtags) {
        var data = `<a class="center" href="` + socialtags[x].link + `"> <img class="center" style="padding: 5px!important;width: 40px;" src="` + socialtags[x].img + `"></a>`
        socialtext += data
    }
    document.getElementById("social-list").innerHTML = socialtext;
}

loadSocialIcons()

function dayNightToggle() {
    var element = document.body;
    element.classList.toggle("light-mode");
    var check = window.localStorage.getItem('light-mode');
    if (check == "light") {
        window.localStorage.clear();
    } else {
        window.localStorage.setItem('light-mode', 'light');
    }

}

function checkDayNight() {
    var check = window.localStorage.getItem('light-mode');
    var element = document.body;
    if (check == "light") {
        element.classList.add("light-mode");
    } else {
        element.classList.remove("light-mode");
    }
}

checkDayNight()
