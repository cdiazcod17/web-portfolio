<template>
    <section class="min-h-screen bg-gray-50 py-20 px-6">
        <div class="max-w-6xl mx-auto">
            <header class="mb-16 text-center">
                <h2 class="text-4xl md:text-5xl font-black text-gray-900 mb-4">Studies<span class="text-orange-500">.</span></h2>
                <p class="text-gray-500 max-w-2xl mx-auto">Academic background, certifications, and lifelong learning.</p>
            </header>

            <div v-if="sortedStudies.length > 0" 
                 class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ContentCard 
                    v-for="estudio in sortedStudies" 
                    :key="estudio.id"
                    :titulo="estudio.titulo"
                    :descripcion="estudio.descripcion"
                    :fecha="estudio.fecha_inicial"
                    :fecha-final="estudio.fecha_final"
                    :portada="estudio.portada"
                />
            </div>

            <div v-else class="text-center py-20 bg-white rounded-3xl border border-gray-100">
                <p class="text-gray-400 font-medium">No studies recorded yet.</p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { getData } from '@/services/gestion' 
import ContentCard from '@/components/ContentCard.vue'

const tablaEstudios = ref({ datos: [] })

const sortedStudies = computed(() => {
    return [...(tablaEstudios.value.datos || [])].sort((a, b) => {
        return new Date(b.fecha_inicial) - new Date(a.fecha_inicial)
    })
})

onMounted(async () => {
    tablaEstudios.value = await getData('estudios')
})
</script>

<style scoped>
</style>
