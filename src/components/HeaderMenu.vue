<template>
    <header class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div class="max-w-7xl mx-auto px-6 py-4">
            <nav class="flex justify-between items-center">
                <router-link to="/" class="group flex items-center gap-2" @click="isMenuOpen = false">
                    <div class="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">
                        <span class="text-white font-black text-xl italic">C</span>
                    </div>
                    <span class="text-lg font-bold text-gray-900 tracking-tight hidden sm:block">Portfolio</span>
                </router-link>

                <!-- Desktop Navigation -->
                <div class="hidden md:flex items-center gap-4 lg:gap-8">
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

                <div class="flex items-center gap-4">
                    <router-link 
                        to="/contact" 
                        class="hidden md:flex px-5 py-2.5 bg-gray-900 text-white text-sm font-bold rounded-xl hover:bg-gray-800 transition shadow-lg shadow-gray-200 items-center gap-2"
                    >
                        Contact
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </router-link>

                    <!-- Mobile Menu Button -->
                    <button 
                        @click="isMenuOpen = !isMenuOpen"
                        class="md:hidden p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    </button>
                </div>
            </nav>
        </div>

        <!-- Mobile Navigation -->
        <transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="opacity-0 -translate-y-4"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-4"
        >
            <div v-if="isMenuOpen" class="md:hidden bg-white border-b border-gray-100 absolute w-full left-0 shadow-xl">
                <div class="px-6 py-6 space-y-4">
                    <router-link 
                        v-for="link in navLinks" 
                        :key="link.path"
                        :to="link.path" 
                        @click="isMenuOpen = false"
                        class="block px-4 py-3 text-base font-bold text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all"
                    >
                        {{ link.name }}
                    </router-link>

                    <!-- Mobile Conditional Management Link -->
                    <router-link 
                        v-if="accessStore.admin"
                        to="/management" 
                        @click="isMenuOpen = false"
                        class="block px-4 py-3 text-base font-bold text-orange-600 hover:bg-orange-50 rounded-xl transition-all"
                    >
                        Management
                    </router-link>

                    <router-link 
                        to="/contact" 
                        @click="isMenuOpen = false"
                        class="flex items-center justify-center gap-2 w-full py-4 bg-gray-900 text-white rounded-xl font-bold shadow-lg shadow-gray-200"
                    >
                        Contact Me
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </router-link>
                </div>
            </div>
        </transition>
    </header>
</template>

<script setup>
import { ref } from 'vue'
import { useAccessStore } from '@/stores/accessStore'

const accessStore = useAccessStore()
const isMenuOpen = ref(false)

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Studies', path: '/studies' }
]
</script>

<style scoped>
.router-link-active:not(.group) {
    color: #f97316; /* text-orange-500 */
}

.md\:flex .router-link-active span {
    transform: scaleX(1);
}
</style>
