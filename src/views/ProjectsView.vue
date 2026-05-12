<template>
    <section class="min-h-screen bg-[#fafafa] py-20 px-6">
        <div class="max-w-6xl mx-auto">
            <header class="mb-16 text-center">
                <h2 class="text-4xl md:text-5xl font-black text-gray-900 mb-4">Projects<span class="text-orange-500">.</span></h2>
                <p class="text-gray-500 max-w-2xl mx-auto">Featured works, from full-stack applications to technical experiments.</p>
            </header>

            <div v-if="sortedProjects.length > 0" 
                 class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ContentCard 
                    v-for="proyecto in sortedProjects" 
                    :key="proyecto.id"
                    :titulo="proyecto.titulo"
                    :descripcion="proyecto.descripcion"
                    :fecha="proyecto.fecha_inicial"
                    :fecha-final="proyecto.fecha_final"
                    :portada="proyecto.portada"
                    :categoria="proyecto.categoria"
                    :github-link="proyecto.githubLink"
                    :live-link="proyecto.liveLink"
                >
                    <template #footer>
                        <span class="px-3 py-1 bg-orange-50 text-orange-600 text-[10px] font-bold rounded-full border border-orange-100 uppercase tracking-tight">
                            Vue.js
                        </span>
                        <span class="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold rounded-full border border-blue-100 uppercase tracking-tight">
                            FastAPI
                        </span>
                    </template>
                </ContentCard>
            </div>

            <div v-else class="text-center py-20 bg-white rounded-3xl border border-gray-100">
                <p class="text-gray-400 font-medium">No projects to show at the moment.</p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { getData } from '@/services/gestion' 
import ContentCard from '@/components/ContentCard.vue'

const tablaProyectos = ref({ datos: [] })

const sortedProjects = computed(() => {
    return [...(tablaProyectos.value.datos || [])].sort((a, b) => {
        return new Date(b.fecha_inicial) - new Date(a.fecha_inicial)
    })
})

onMounted(async () => {
    tablaProyectos.value = await getData('proyectos')
})
</script>

<style scoped>
</style>
