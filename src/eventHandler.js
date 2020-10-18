import Utils from './utils';

export default class EventHandler {
    static setEvent () {
        document.addEventListener("scroll", function () {
            const parent = document.querySelector("[data-reading-position-bar-wrapper=true]")

            const indicator = document.querySelector(".reading-position-bar__wrapper__indicator")
            if(!indicator || typeof indicator === 'undefined') {
                return
            }

            // 対象DOMの位置を取得
            const elementYPos = Utils.getElementYPos(parent)
            const wrapper = document.querySelector(".reading-position-bar__wrapper")
            wrapper.style.top = elementYPos + 'px'
            wrapper.style.display = 'block'

            const readRate = Utils.getReadRate(parent)
            const elemBottomY = parent.offsetTop + parent.getBoundingClientRect().height
            const barHeight = Utils.getBarHeight(readRate, elementYPos, elemBottomY)
            indicator.style.height = barHeight + "px"

            const text = document.querySelector(".reading-position-bar__wrapper__text")
            text.innerHTML = readRate + "%"
            if (barHeight === 0) {
                text.style.marginTop = "-32px"
            }else {
                text.style.marginTop = "-20px"
            }
            if (readRate === 100) {
                wrapper.style.height = barHeight + "px"
            } else {
                wrapper.style.height = "100%"
            }
        })
    }
}