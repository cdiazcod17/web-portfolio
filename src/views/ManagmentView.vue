<template>
  <section class="min-h-screen bg-gray-50 py-12 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="flex justify-between items-center mb-12">
        <h1 class="text-3xl font-black text-gray-900">Content Management<span class="text-orange-500">.</span></h1>
        <button 
          @click="accessStore.logout(); $router.push('/')" 
          class="px-4 py-2 bg-white text-red-500 border border-red-100 rounded-lg font-bold hover:bg-red-50 transition text-sm"
        >
          Logout
        </button>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <!-- Form Section -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-200/50 sticky top-24">
            <h2 class="text-xl font-bold text-gray-900 mb-6">{{ isEditing ? 'Edit Item' : 'Add New Content' }}</h2>
            <form @submit.prevent="handleSubmit" class="space-y-4">
              <div class="space-y-1">
                <label class="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Title</label>
                <input type="text" v-model="form.titulo" required placeholder="Project Name" class="w-full px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all outline-none">
              </div>

              <div class="space-y-1">
                <label class="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Description</label>
                <textarea v-model="form.descripcion" required rows="4" placeholder="Brief description..." class="w-full px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all outline-none resize-none"></textarea>
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div class="space-y-1">
                  <label class="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Start Date</label>
                  <input type="date" v-model="form.fecha_inicial" required class="w-full px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all outline-none">
                </div>
                <div class="space-y-1">
                  <label class="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">End Date</label>
                  <input type="date" v-model="form.fecha_final" class="w-full px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all outline-none">
                </div>
              </div>

              <!-- Links Section (Only for Projects) -->
              <div v-if="form.categoria === 'proyectos'" class="space-y-4 pt-4 border-t border-gray-50">
                <div class="space-y-1">
                  <label class="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">GitHub Link</label>
                  <input type="url" v-model="form.githubLink" placeholder="https://github.com/..." class="w-full px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all outline-none">
                </div>
                <div class="space-y-1">
                  <label class="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Live Demo Link</label>
                  <input type="url" v-model="form.liveLink" placeholder="https://..." class="w-full px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all outline-none">
                </div>
              </div>

              <div class="space-y-1">
                <label class="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Category</label>
                <select v-model="form.categoria" required :disabled="isEditing" class="w-full px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all outline-none appearance-none">
                  <option value="" disabled>Select Category</option>
                  <option value="proyectos">Projects</option>
                  <option value="experiencia">Experience</option>
                  <option value="estudios">Studies</option>
                </select>
              </div>

              <div class="space-y-1">
                <label class="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Cover URL (optional)</label>
                <input type="url" v-model="form.portada" placeholder="https://..." class="w-full px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all outline-none">
              </div>

              <div class="flex gap-3 pt-4">
                <button type="submit" class="flex-grow py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition shadow-lg shadow-gray-200">
                  {{ isEditing ? 'Update Item' : 'Save Item' }}
                </button>
                <button v-if="isEditing" @click="cancelEdit" type="button" class="px-6 py-3 bg-white text-gray-500 border border-gray-100 rounded-xl font-bold hover:bg-gray-50 transition">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>

        <!-- List Section -->
        <div class="lg:col-span-2 space-y-8">
          <div v-for="cat in categories" :key="cat.id" class="space-y-4">
            <h3 class="text-sm font-bold text-gray-400 uppercase tracking-widest">{{ cat.label }}</h3>
            <div v-if="dataList[cat.id]?.length" class="grid gap-4">
              <div v-for="item in dataList[cat.id]" :key="item.id" class="bg-white p-4 rounded-2xl border border-gray-100 flex items-center justify-between group hover:border-orange-100 transition-all">
                <div class="flex items-center gap-4">
                  <div v-if="item.portada" class="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                    <img :src="item.portada" class="w-full h-full object-cover">
                  </div>
                  <div class="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500 flex-shrink-0" v-else>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/></svg>
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900">{{ item.titulo }}</h4>
                    <p class="text-xs text-gray-400">{{ item.fecha_inicial }}</p>
                  </div>
                </div>
                <div class="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button @click="editItem(item, cat.id)" class="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition" title="Edit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
                  </button>
                  <button @click="deleteItem(item.id, cat.id)" class="p-2 text-red-500 hover:bg-red-50 rounded-lg transition" title="Delete">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
                  </button>
                </div>
              </div>
            </div>
            <p v-else class="text-xs text-gray-400 italic bg-white p-4 rounded-2xl border border-dashed border-gray-100">No items in this category.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { guardar, getData, eliminar, actualizar } from '@/services/gestion'
import { useAccessStore } from '@/stores/accessStore'
import { useToast } from 'vue-toastification'

const toast = useToast()
const accessStore = useAccessStore()

const categories = [
  { id: 'proyectos', label: 'Projects' },
  { id: 'experiencia', label: 'Experience' },
  { id: 'estudios', label: 'Studies' }
]

const form = ref({
  titulo: '',
  descripcion: '',
  fecha_inicial: '',
  categoria: '',
  portada: ''
})

const dataList = ref({
  proyectos: [],
  experiencia: [],
  estudios: []
})

const isEditing = ref(false)
const currentId = ref(null)

const loadAllData = async () => {
  for (const cat of categories) {
    const res = await getData(cat.id)
    if (res.ok) dataList.value[cat.id] = res.datos
  }
}

onMounted(loadAllData)

const handleSubmit = async () => {
  try {
    const category = form.value.categoria
    const data = { ...form.value }
    delete data.categoria

    let res
    if (isEditing.value) {
      res = await actualizar(currentId.value, category, data)
      if (res.ok) toast.success('Item updated successfully')
    } else {
      res = await guardar(data, category)
      if (res.ok) toast.success('Item saved successfully')
    }

    if (res.ok) {
      resetForm()
      await loadAllData()
    } else {
      toast.error('Error saving data')
    }
  } catch (error) {
    console.error(error)
    toast.error('Unexpected error')
  }
}

const editItem = (item, category) => {
  isEditing.value = true
  currentId.value = item.id
  form.value = { ...item, categoria: category }
}

const deleteItem = async (id, category) => {
  if (confirm('Are you sure you want to delete this item?')) {
    const res = await eliminar(id, category)
    if (res.ok) {
      toast.success('Item deleted')
      await loadAllData()
    } else {
      toast.error('Error deleting item')
    }
  }
}

const cancelEdit = () => {
  resetForm()
}

const resetForm = () => {
  isEditing.value = false
  currentId.value = null
  form.value = {
    titulo: '',
    descripcion: '',
    fecha_inicial: '',
    categoria: '',
    portada: ''
  }
}
</script>