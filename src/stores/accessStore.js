import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAccessStore = defineStore('acceso', () => {
    const admin = ref(localStorage.getItem('isAdmin') === 'true')
    
    function setAdmin(newValue) {
        admin.value = newValue
        localStorage.setItem('isAdmin', newValue)
    }

    function logout() {
        admin.value = false
        localStorage.removeItem('isAdmin')
    }

    return { admin, setAdmin, logout }
})
