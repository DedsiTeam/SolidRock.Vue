import { defineStore } from 'pinia'
import { ref } from "vue"

export const useLayoutSettingStore = defineStore('layoutSettingStore', function (){
    // 控制菜单的折叠隐藏
    const menuIconValue = ref(false)
    function setMenuIconValue(){
        menuIconValue.value = !menuIconValue.value
    }

    return {
        menuIconValue,
        setMenuIconValue
    }
})