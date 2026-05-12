<template>
    <header class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div class="max-w-7xl mx-auto px-6 py-4">
            <nav class="flex justify-between items-center">
                <router-link to="/" class="group flex items-center gap-2">
                    <div class="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">
                        <span class="text-white font-black text-xl italic">C</span>
                    </div>
                    <span class="text-lg font-bold text-gray-900 tracking-tight hidden sm:block">Portfolio</span>
                </router-link>

                <div class="flex items-center gap-1 sm:gap-4 md:gap-8">
                    <router-link 
                        v-for="link in navLinks" 
                        :key="link.path"
                        :to="link.path" 
                        class="px-3 py-2 text-sm font-semibold text-gray-500 hover:text-gray-900 transition-all duration-200 relative group [&.router-link-active]:text-gray-900"
                    >
                        {{ link.name }}
                        <span class="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 [&.router-link-active]:scale-x-100 transition-transform duration-300"></span>
                    </router-link>

                    <!-- Conditional Management Link -->
                    <router-link 
                        v-if="accessStore.admin"
                        to="/management" 
                        class="px-3 py-2 text-sm font-bold text-orange-600 hover:text-orange-700 transition-all duration-200 relative group [&.router-link-active]:text-orange-700"
                    >
                        Management
                        <span class="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 scale-x-0 group-hover:scale-x-100 [&.router-link-active]:scale-x-100 transition-transform duration-300"></span>
                    </router-link>
                </div>
<a 
    href="mailto:hello@carlosdiaz.dev" 
    class="hidden md:flex px-5 py-2.5 bg-gray-900 text-white text-sm font-bold rounded-xl hover:bg-gray-800 transition shadow-lg shadow-gray-200 items-center gap-2"
>
    Contact
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
</a>
            </nav>
        </div>
    </header>
</template>

<script setup>
import { useAccessStore } from '@/stores/accessStore'

const accessStore = useAccessStore()

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Studies', path: '/studies' },
    { name: 'Contact', path: '/contact' }
]
</script>

<style scoped>
.router-link-active span {
    transform: scaleX(1);
}
</style>
