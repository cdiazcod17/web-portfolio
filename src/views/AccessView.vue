<template>
    <section id="" class="h-[90vh] flex justify-center items-center">
        <div class="shadow-md w-full max-w-md p-8 rounded-3xl bg-white border border-gray-100 flex flex-col items-center gap-8">
            <h2 class="font-black text-3xl text-gray-900">Admin Access<span class="text-orange-500">.</span></h2>
            <p class="text-gray-500 text-center">Please enter the password to access the management panel.</p>
            <input type="password" placeholder="Enter password" v-model="inputPassword" class="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all outline-none">
            <button @click="getAccess()" class="w-full py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition shadow-lg shadow-gray-200">Access Panel</button>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import  router  from '@/router'
import { useAccessStore } from '@/stores/accessStore'
import { useToast } from 'vue-toastification'

const toast = useToast()

const password = import.meta.env.VITE_PASSWORD
const inputPassword = ref('')
const accessStore = useAccessStore()


const getAccess = () =>{
    if(inputPassword.value == password){
        accessStore.setAdmin(true)
        router.push('/management')
        toast.success('Welcome back, Carlos')
    } else{
        toast.error('Invalid password')
    }
}
</script>

