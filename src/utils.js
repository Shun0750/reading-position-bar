export default class Utils {
    static getReadRate (elem) {
        const windowHeight = window.innerHeight
        const yOffSet = window.pageYOffset

        const pageHeight = Math.max( elem.scrollHeight, elem.offsetHeight )

        const rate = (window.scrollY + windowHeight - elem.offsetTop) * 100 / pageHeight
        let intRate = parseInt(rate.toString(), 10)
        if (intRate > 100) {
            intRate = 100
        }

        return intRate
    }

    static getBarHeight (rate, elemYPos, elemBottomY, offsetTop) {
        const elemVisibleHeight = window.innerHeight - elemYPos
        const height = elemVisibleHeight * rate / 100
        let intHeight = parseInt(height.toString(), 10)
        if (window.innerHeight + window.scrollY > elemBottomY) {
            intHeight -= parseInt(window.innerHeight + window.scrollY - elemBottomY,10)
        }
        if (intHeight < 0) {
            intHeight = 0
        }
        return intHeight
    }

    static getElementYPos (elem) {
        let relativeY = elem.offsetTop - window.scrollY
        if (relativeY < 0) {
            relativeY = 0
        }
        return relativeY
    }
}