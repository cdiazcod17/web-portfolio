<template>
    <section class="min-h-screen bg-white py-20 px-6">
        <div class="max-w-6xl mx-auto">
            <header class="mb-16 text-center">
                <h2 class="text-4xl md:text-5xl font-black text-gray-900 mb-4">Experience<span class="text-orange-500">.</span></h2>
                <p class="text-gray-500 max-w-2xl mx-auto">Professional background and roles in the tech industry.</p>
            </header>

            <div v-if="sortedExperience.length > 0" 
                 class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ContentCard 
                    v-for="exp in sortedExperience" 
                    :key="exp.id"
                    :titulo="exp.titulo"
                    :descripcion="exp.descripcion"
                    :fecha="exp.fecha_inicial"
                    :fecha-final="exp.fecha_final"
                    :portada="exp.portada"
                />
            </div>

            <div v-else class="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                <p class="text-gray-400 font-medium">No experience recorded yet.</p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { getData } from '@/services/gestion' 
import ContentCard from '@/components/ContentCard.vue'

const tablaExperiencia = ref({ datos: [] })

const sortedExperience = computed(() => {
    return [...(tablaExperiencia.value.datos || [])].sort((a, b) => {
        return new Date(b.fecha_inicial) - new Date(a.fecha_inicial)
    })
})

onMounted(async () => {
    tablaExperiencia.value = await getData('experiencia')
})
</script>

<style scoped>
</style>
