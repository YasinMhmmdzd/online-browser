// Yasin Mohammadzadeh (github.com/Yasinmhmmdzd)
// get date start
get_Date = () => {
    let date = new persianDate()
    let new_date = date.toLocale('fa').format("DD/ MM / YYYY")
    let date_part = document.querySelector(".date-part")
    date_part.innerHTML = "امروز : " + new_date
}
// get date end
//get data start
get_Data = () =>{
    let theme = localStorage.getItem("theme")
    if(theme == "light"){
        lightMode()
    }
    else{
        darkMode()
    }
    let font_family = localStorage.getItem("font-family")
    let body = document.querySelector("body")
    if(font_family == "vazir"){
        body.style.fontFamily = "vazir"
    }
    else if(font_family == "iransans"){
        body.style.fontFamily = "iransans"
    }
    else{
        body.style.fontFamily = "tanha"
    }
}
//get data end
//header scripts start
openBurgerMenu = () => {
    let burger_menu = document.querySelector(".burger-menu")
    burger_menu.classList.replace("hidden", "active-block")
}
closeBurgerMenu = () => {
    let burger_menu = document.querySelector(".burger-menu")
    burger_menu.classList.replace("active-block", "hidden")
    burger_menu.classList.add("slide-back-effect")
}
openHomePage = () => {
    let first_nav = document.querySelector(".nav-item-first")
    let second_nav = document.querySelector(".nav-item-second")
    let third_nav = document.querySelector(".nav-item-third")
    let fourth_nav = document.querySelector(".nav-item-fourth")
    let home_page = document.querySelector(".home-page");
    let weather_page = document.querySelector(".weather-page")
    let setting_page = document.querySelector(".setting-page")
    let about_us_page = document.querySelector(".about-us-page")
    let burger_menu = document.querySelector(".burger-menu")
    first_nav.classList.add("active-menu-item")
    second_nav.classList.remove("active-menu-item")
    third_nav.classList.remove("active-menu-item")
    fourth_nav.classList.remove("active-menu-item")
    home_page.classList.add("active-block")
    home_page.classList.remove("hidden")
    weather_page.classList.add("hidden")
    weather_page.classList.remove("active-block")
    setting_page.classList.add("hidden")
    setting_page.classList.remove("active-block")
    about_us_page.classList.add("hidden")
    about_us_page.classList.remove("active-block")
    burger_menu.classList.add("hidden")
    burger_menu.classList.remove("active-block")
}
openWeatherPage = () => {
    let first_nav = document.querySelector(".nav-item-first")
    let second_nav = document.querySelector(".nav-item-second")
    let third_nav = document.querySelector(".nav-item-third")
    let fourth_nav = document.querySelector(".nav-item-fourth")
    let home_page = document.querySelector(".home-page");
    let weather_page = document.querySelector(".weather-page")
    let setting_page = document.querySelector(".setting-page")
    let about_us_page = document.querySelector(".about-us-page")
    let burger_menu = document.querySelector(".burger-menu")
    first_nav.classList.remove("active-menu-item")
    second_nav.classList.add("active-menu-item")
    third_nav.classList.remove("active-menu-item")
    fourth_nav.classList.remove("active-menu-item")
    home_page.classList.add("hidden")
    home_page.classList.remove("active-block")
    weather_page.classList.add("active-block")
    weather_page.classList.remove("hidden")
    setting_page.classList.add("hidden")
    setting_page.classList.remove("active-block")
    about_us_page.classList.add("hidden")
    about_us_page.classList.remove("active-block")
    burger_menu.classList.add("hidden")
    burger_menu.classList.remove("active-block")
}
openSettingPage = () => {
    let first_nav = document.querySelector(".nav-item-first")
    let second_nav = document.querySelector(".nav-item-second")
    let third_nav = document.querySelector(".nav-item-third")
    let fourth_nav = document.querySelector(".nav-item-fourth")
    let home_page = document.querySelector(".home-page");
    let weather_page = document.querySelector(".weather-page")
    let setting_page = document.querySelector(".setting-page")
    let about_us_page = document.querySelector(".about-us-page")
    let burger_menu = document.querySelector(".burger-menu")
    first_nav.classList.remove("active-menu-item")
    second_nav.classList.remove("active-menu-item")
    third_nav.classList.add("active-menu-item")
    fourth_nav.classList.remove("active-menu-item")
    home_page.classList.add("hidden")
    home_page.classList.remove("active-block")
    weather_page.classList.add("hidden")
    weather_page.classList.remove("active-block")
    setting_page.classList.add("active-block")
    setting_page.classList.remove("hidden")
    about_us_page.classList.add("hidden")
    about_us_page.classList.remove("active-block")
    burger_menu.classList.add("hidden")
    burger_menu.classList.remove("active-block")
}
openAboutPage = () => {
    let first_nav = document.querySelector(".nav-item-first")
    let second_nav = document.querySelector(".nav-item-second")
    let third_nav = document.querySelector(".nav-item-third")
    let fourth_nav = document.querySelector(".nav-item-fourth")
    let home_page = document.querySelector(".home-page");
    let weather_page = document.querySelector(".weather-page")
    let setting_page = document.querySelector(".setting-page")
    let about_us_page = document.querySelector(".about-us-page")
    let burger_menu = document.querySelector(".burger-menu")
    first_nav.classList.remove("active-menu-item")
    second_nav.classList.remove("active-menu-item")
    third_nav.classList.remove("active-menu-item")
    fourth_nav.classList.add("active-menu-item")
    home_page.classList.add("hidden")
    home_page.classList.remove("active-block")
    weather_page.classList.add("hidden")
    weather_page.classList.remove("active-block")
    setting_page.classList.add("hidden")
    setting_page.classList.remove("active-block")
    about_us_page.classList.add("active-block")
    about_us_page.classList.remove("hidden")
    burger_menu.classList.add("hidden")
    burger_menu.classList.remove("active-block")
}
// header scripts end
//main page scipts start
//home page scripts start
let search = document.querySelector(".search-input")
function startSearch() {
    let search_engine = localStorage.getItem("search-engine")
    const url_google = "https://google.com/search?q=" + search.value
    const url_bing = "https://bing.com/search?q=" + search.value
    if(search_engine == "google"){
    window.open(url_google, '_self')
    }
    else{
        window.open(url_bing , '_self')
    }
}
search.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault()
        document.querySelector(".search-button").click()
    }
});
// home page scripts end
//weather page scripts start
let weather_search_input = document.querySelector(".weather-search-input")
weather_search_input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault()
        document.querySelector(".weather-search-button").click()
    }
});
async function checkWeahter() {
    let message = document.querySelector(".message")
    let infos = document.querySelector(".informations")
    message.classList.add("loadinganim")
    message.innerHTML = "درحال یافتن اطلاعات..."
    let city_name = document.querySelector(".weather-search-input")
    let temp_html_c = document.getElementById("temp-c")
    let temp_html_f = document.getElementById("temp-f")
    let region_province_html = document.getElementById("state-province")
    let country_html = document.getElementById("region")
    let status_image_html = document.querySelector(".map-icon")
    let key = "56cf9f35a7c447a4b0384546222305"
    let weather_url = await fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${city_name.value}`)
    let data = await weather_url.json()
    if (navigator.onLine) {
        if (data) {
            message.classList.remove("loadinganim")
            if (data.error) {
                infos.classList.add("hidden")
                message.classList.add("danger")
                console.clear()
                message.innerHTML = "متاسفانه شهر موردنظر شما پیدا نشد   :("
            }
            else {
                message.classList.remove("danger")
                message.classList.add("success")
                infos.classList.remove("hidden")
                let temp_ca = parseInt(data.current.temp_c)
                let temp_fa = parseInt(data.current.temp_f)
                let new_region = data.location.region
                let new_country = data.location.country
                let status_image = data.current.condition.icon
                message.innerHTML = city_name.value
                temp_html_c.innerHTML = "دمای هوا (سانتی گراد) : " + temp_ca + " درجه"
                temp_html_f.innerHTML = "دمای هوا (فارنهایت) : " + temp_fa + " درجه"
                region_province_html.innerHTML = "استان / ایالت :" + new_region
                country_html.innerHTML = "کشور : " + new_country
                status_image_html.setAttribute("src", "https:" + status_image)
                Notification.requestPermission()
                    .then(function showWeatherNotif() {
                        let weather_notif = new Notification(
                            city_name.value, {
                            body: temp_ca,
                            icon: status_image
                        }
                        )
                    })
            }
        }
    }
}
//weather page scripts end
//setting page scripts start
function lightMode(){
    let  body = document.querySelector("body")
    let input_container = document.querySelector(".search-input-container")
    let input = document.querySelector("input")
    let weather_input = document.querySelector(".weather-search-input")
    let weather_search_btn = document.querySelector(".weather-search-button")
    let search_btn =   document.querySelector(".search-button")
    let box = document.getElementsByClassName("box")
    body.classList.add("light-mode")
    body.classList.remove("dark-mode")
    input_container.classList.add("light-mode")
    input_container.classList.remove("dark-mode")
    input.classList.remove("dark-mode")
    input.classList.add("light-mode")
    search_btn.classList.remove("dark-mode")
    search_btn.classList.add("light-mode")
    weather_input.classList.remove("dark-mode")
    weather_input.classList.add("light-mode")
    weather_search_btn.classList.remove("dark-mode")
    weather_input.classList.add("light-mode")
    for(var i=0; i< box.length; i++){
        box[i].classList.remove("dark-style")
    }
    localStorage.setItem("theme" , "light")
}
function darkMode(){
    let body = document.querySelector("body")
    let input_container = document.querySelector(".search-input-container")
    let input = document.querySelector("input")
    let weather_input = document.querySelector(".weather-search-input")
    let weather_search_btn = document.querySelector(".weather-search-button")
    let search_btn =   document.querySelector(".search-button")
    let box = document.getElementsByClassName("box")
    body.classList.add("dark-mode")
    body.classList.remove("light-mode")  
    input_container.classList.add("dark-mode")
    input_container.classList.remove("light-mode")
    input.classList.add("dark-mode")
    input.classList.remove("light-mode")
    search_btn.classList.add("dark-mode")
    search_btn.classList.remove("light-mode")
    weather_input.classList.add("dark-mode")
    weather_input.classList.remove("light-mode")
    weather_search_btn.classList.add("dark-mode")
    weather_input.classList.remove("light-mode")
    for(var i=0; i< box.length; i++){
        box[i].classList.add("dark-style")
    }
    localStorage.setItem("theme" , "dark")
}
function saveSetting(){
    let search_engine = document.getElementById("search-engine")
    let selected_search_engine = search_engine.options[search_engine.selectedIndex].value
    let font_family = document.getElementById("font-family")
    let selected_font_family = font_family.options[font_family.selectedIndex].value
    localStorage.setItem("search-engine" , selected_search_engine)
    localStorage.setItem("font-family" , selected_font_family)
    alert("تغییرات با موفقیت ذخیره شد.")
    location.reload();
}
//setting page scripts end
// main page scripts end
