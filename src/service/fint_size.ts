
import {Ref, ref} from "vue";

export function getFontSizePx(): Ref<number> {
    const r = ref<number>(16)
   const resize = function () {
        if (window.innerWidth <= 800) {
            r.value = 8
        } else {
            r.value = 16
        }
    }
    window.addEventListener("resize", resize)

    resize()

    return r
}
