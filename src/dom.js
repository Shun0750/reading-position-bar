export default class Dom {
    static createDoms (elem) {
        const wrapper = document.createElement('div')
        wrapper.className = 'reading-position-bar__wrapper'
        wrapper.style.setProperty("--barWidth", '10px')
        wrapper.style.setProperty("--barRight", '0')
        wrapper.style.setProperty("--zIndex", '1000')
        wrapper.style.setProperty("--offsetTop", '0')

        const indicator = document.createElement('div')
        indicator.className = 'reading-position-bar__wrapper__indicator'
        indicator.style.setProperty("--bgColor", "black");
        wrapper.append(indicator)

        const text = document.createElement('div')
        text.className = 'reading-position-bar__wrapper__text'
        text.style.setProperty("--bgColor", "black");
        wrapper.append(text)

        elem.setAttribute('data-reading-position-bar-wrapper','true')
        elem.append(wrapper)
    }

    static setBgColor (color) {
        const indicator = document.querySelector(".reading-position-bar__wrapper__indicator")
        indicator.style.setProperty("--bgColor", color)

        const text = document.querySelector(".reading-position-bar__wrapper__text")
        text.style.setProperty("--bgColor", color)
    }

    static disableText () {
        const text = document.querySelector(".reading-position-bar__wrapper__text")
        text.parentNode.removeChild(text)
    }

    static setBarWidth (width) {
        const barWidth = parseInt(width)
        const wrapper = document.querySelector(".reading-position-bar__wrapper")
        wrapper.style.setProperty("--barWidth", barWidth + 'px')
    }

    static setBarRight (right) {
        const barRight = parseInt(right)
        const wrapper = document.querySelector(".reading-position-bar__wrapper")
        wrapper.style.setProperty("--barRight", barRight + 'px')
    }

    static setZIndex (zIndex) {
        const barZIndex = parseInt(zIndex)
        const wrapper = document.querySelector(".reading-position-bar__wrapper")
        wrapper.style.setProperty("--zIndex", barZIndex)
    }

    static setOffsetTop (offsetTop) {
        const wrapper = document.querySelector(".reading-position-bar__wrapper")
        wrapper.style.setProperty("--offsetTop", offsetTop)
        wrapper.dataset.offsetTop = offsetTop
    }
}