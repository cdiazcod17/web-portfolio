<script setup>
import HeaderMenu from './components/HeaderMenu.vue';
</script>

<template>
  <div class="min-h-screen bg-[#fafafa] font-sans text-gray-900 selection:bg-orange-100 selection:text-orange-900">
    <HeaderMenu />
    
    <main>
      <router-view v-slot="{ Component }">
        <transition 
          name="fade" 
          mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer class="bg-white border-t border-gray-100 py-12 px-6">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
              <span class="text-white font-black text-sm italic">C</span>
            </div>
            <span class="text-lg font-bold tracking-tight">Carlos</span>
          </div>
          <p class="text-gray-500 text-sm max-w-xs">
            Full Stack Developer specialized in building modern, scalable, and recruiter-ready web applications.
          </p>
        </div>

        <div class="flex gap-8">
          <a href="https://www.linkedin.com/in/carlosdiaz0517" target="_blank" rel="noopener noreferrer" class="text-sm font-bold text-gray-400 hover:text-gray-900 transition-colors uppercase tracking-widest">LinkedIn</a>
          <a href="https://github.com/cdiazcod17" target="_blank" rel="noopener noreferrer" class="text-sm font-bold text-gray-400 hover:text-gray-900 transition-colors uppercase tracking-widest">GitHub</a>
          <a href="https://twitter.com/cdiazcod17" target="_blank" rel="noopener noreferrer" class="text-sm font-bold text-gray-400 hover:text-gray-900 transition-colors uppercase tracking-widest">Twitter</a>
        </div>

        <p class="text-gray-400 text-xs font-medium">
          © 2026 Carlos Diaz Dev.
        </p>
      </div>
    </footer>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

:root {
  font-family: 'Plus Jakarta Sans', sans-serif;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
