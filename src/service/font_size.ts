import {Ref, ref} from "vue";

const fontSize = ref<number>(16)
const isMob = ref<boolean>(false)
function resize() {
    if (window.innerWidth <= 800) {
        fontSize.value = 8
        isMob.value = true
    } else {
        fontSize.value = 16
        isMob.value = false
    }
}
window.addEventListener("resize", resize)
resize()

export function getFontSizePx(): Ref<number> {
    return fontSize
}


export function isMobile(): Ref<boolean> {
    return isMob
}
