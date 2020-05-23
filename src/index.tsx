import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./Containers/App/App"
import * as serviceWorker from "./serviceWorker"
import $ from "jquery/dist/jquery.min.js"
import "bootstrap/dist/js/bootstrap.min.js"
import "popper.js/dist/popper.min.js"

//Плавная прокрутка страниц при навигации
// document.addEventListener("DOMContentLoaded", () => {
//   if ($ !== undefined) {
//     //Если jquery загрузился
//     let $page = $("html, body")
//     $('a[href*="#"]').click(function () {
//       $page.animate(
//         {
//           scrollTop: $($.attr(this, "href")).offset().top,
//         },
//         400
//       )
//       return false
//     })
//   } else {
//     //Если jquery не загрузился
//     // собираем все якоря; устанавливаем время анимации и количество кадров
//     const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
//       animationTime = 300,
//       framesCount = 20

//     anchors.forEach(function (item) {
//       // каждому якорю присваиваем обработчик события
//       item.addEventListener("click", function (e) {
//         // убираем стандартное поведение
//         e.preventDefault()

//         // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
//         let coordY =
//           document
//             .querySelector(item.getAttribute("href"))
//             .getBoundingClientRect().top + window.pageYOffset

//         // запускаем интервал, в котором
//         let scroller = setInterval(function () {
//           // считаем на сколько скроллить за 1 такт
//           let scrollBy = coordY / framesCount

//           // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
//           // и дно страницы не достигнуто
//           if (
//             scrollBy > window.pageYOffset - coordY &&
//             window.innerHeight + window.pageYOffset < document.body.offsetHeight
//           ) {
//             // то скроллим на к-во пикселей, которое соответствует одному такту
//             window.scrollBy(0, scrollBy)
//           } else {
//             // иначе добираемся до элемента и выходим из интервала
//             window.scrollTo(0, coordY)
//             clearInterval(scroller)
//           }
//           // время интервала равняется частному от времени анимации и к-ва кадров
//         }, animationTime / framesCount)
//       })
//     })
//   }
// })

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)

serviceWorker.unregister()
