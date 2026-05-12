<template>
  <div class="group bg-white rounded-2xl border border-gray-100 p-6 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 flex flex-col h-full">
    <div v-if="portada" class="relative overflow-hidden rounded-xl mb-6 aspect-[16/10] bg-gray-50">
      <img 
        :src="portada" 
        :alt="titulo"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      >
      <div v-if="categoria" class="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full shadow-sm">
        <span class="text-[10px] font-bold uppercase tracking-wider text-gray-700">{{ categoria }}</span>
      </div>
    </div>

    <div class="flex-grow">
      <div class="flex flex-col mb-4">
        <h3 class="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors mb-1">
          {{ titulo }}
        </h3>
        <div class="flex items-center gap-2 text-xs font-semibold text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
          <span>{{ formatRange }}</span>
        </div>
      </div>
      
      <p class="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
        {{ descripcion }}
      </p>
    </div>

    <!-- Project Links -->
    <div v-if="githubLink || liveLink" class="flex gap-4 mb-6 pt-4 border-t border-gray-50">
      <a v-if="githubLink" :href="githubLink" target="_blank" class="flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-gray-900 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
        GitHub
      </a>
      <a v-if="liveLink" :href="liveLink" target="_blank" class="flex items-center gap-2 text-xs font-bold text-orange-600 hover:text-orange-700 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
        Live Demo
      </a>
    </div>

    <div class="flex flex-wrap gap-2 mt-auto">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  titulo: String,
  descripcion: String,
  fecha: String,
  fechaFinal: String,
  portada: String,
  categoria: String,
  githubLink: String,
  liveLink: String
})

const formatRange = computed(() => {
  if (!props.fecha) return ''
  const start = props.fecha
  const end = props.fechaFinal || 'Present'
  return `${start} — ${end}`
})
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}
</style>
