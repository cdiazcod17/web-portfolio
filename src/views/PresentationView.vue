<template>
  <main class="min-h-screen bg-[#fafafa] flex flex-col items-center justify-center px-6 relative overflow-hidden">
    <!-- Subtle Background Decoration -->
    <div class="absolute top-[-10%] right-[-5%] w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-50"></div>
    <div class="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>

    <div class="max-w-4xl mx-auto text-center z-10">
      <h1 class="text-7xl md:text-8xl font-black text-gray-900 tracking-tight mb-4">
        Carlos<span class="text-orange-500">.</span>
      </h1>
      
      <p class="text-2xl md:text-3xl font-medium text-gray-700 mb-6 max-w-2xl mx-auto leading-tight">
        Building <span class="text-gray-900 italic">robust</span> backend and frontend solutions with modern technologies.
      </p>

      <p class="text-lg text-gray-500 mb-12 max-w-xl mx-auto">
        Full Stack Developer specializing in Python (FastAPI), Vue 3, and scalable architectures.
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
        <router-link 
          to="/projects" 
          class="px-8 py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition shadow-xl shadow-gray-200"
        >
          View Projects
        </router-link>
        <router-link 
          to="/experience" 
          class="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-xl font-bold hover:border-gray-300 transition"
        >
          Work Experience
        </router-link>
      </div>

      <!-- Main Stack Section -->
      <div class="pt-8 border-t border-gray-100">
        <p class="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Core Tech Stack</p>
        <div class="flex flex-wrap justify-center gap-6 md:gap-10 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-500">
          <div class="flex flex-col items-center gap-2 group">
            <div class="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-sm border border-gray-100 group-hover:border-blue-200 transition">
              <span class="text-xl font-bold text-gray-800">Py</span>
            </div>
          </div>
          <div class="flex flex-col items-center gap-2 group">
            <div class="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-sm border border-gray-100 group-hover:border-green-200 transition">
              <span class="text-xl font-bold text-gray-800">API</span>
            </div>
          </div>
          <div class="flex flex-col items-center gap-2 group">
            <div class="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-sm border border-gray-100 group-hover:border-orange-200 transition">
              <span class="text-xl font-bold text-gray-800">Vue</span>
            </div>
          </div>
          <div class="flex flex-col items-center gap-2 group">
            <div class="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-sm border border-gray-100 group-hover:border-blue-200 transition">
              <span class="text-xl font-bold text-gray-800">DB</span>
            </div>
          </div>
          <div class="flex flex-col items-center gap-2 group">
            <div class="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-sm border border-gray-100 group-hover:border-blue-500 transition">
              <span class="text-xl font-bold text-gray-800">Dk</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

main {
  font-family: 'Inter', sans-serif;
}
</style>
