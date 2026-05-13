<template>
  <section class="min-h-screen bg-[#fafafa] py-12 md:py-20 px-6">
    <div class="max-w-4xl mx-auto">
      <header class="mb-16 text-center">
        <h2 class="text-4xl md:text-5xl font-black text-gray-900 mb-4">Get in Touch<span class="text-orange-500">.</span></h2>
        <p class="text-gray-500 max-w-xl mx-auto">Have a project in mind or just want to say hi? Feel free to send a message!</p>
      </header>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <!-- Contact Info -->
        <div class="space-y-8">
          <div>
            <h3 class="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Contact Details</h3>
            <div class="space-y-4">
              <div class="flex items-center gap-4 group">
                <div class="w-10 h-10 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <span class="text-gray-600 font-medium">cdiazcoder@gmail.com</span>
              </div>
              <a href="https://www.linkedin.com/in/carlosdiaz0517" target="_blank" rel="noopener noreferrer" class="flex items-center gap-4 group">
                <div class="w-10 h-10 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </div>
                <span class="text-gray-600 font-medium group-hover:text-blue-600 transition-colors">LinkedIn Profile</span>
              </a>
              <a href="https://github.com/cdiazcod17" target="_blank" rel="noopener noreferrer" class="flex items-center gap-4 group">
                <div class="w-10 h-10 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-gray-900 group-hover:bg-gray-900 group-hover:text-white transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </div>
                <span class="text-gray-600 font-medium group-hover:text-gray-900 transition-colors">GitHub Profile</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="md:col-span-2">
          <form @submit.prevent="handleSubmit" class="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-200/50 space-y-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label class="text-sm font-bold text-gray-700 ml-1">Name</label>
                <input 
                  type="text" 
                  v-model="form.name"
                  required
                  placeholder="John Doe"
                  class="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all outline-none"
                >
              </div>
              <div class="space-y-2">
                <label class="text-sm font-bold text-gray-700 ml-1">Email</label>
                <input 
                  type="email" 
                  v-model="form.email"
                  required
                  placeholder="john@example.com"
                  class="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all outline-none"
                >
              </div>
            </div>
            
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700 ml-1">Subject</label>
              <input 
                type="text" 
                v-model="form.subject"
                required
                placeholder="Project Inquiry"
                class="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all outline-none"
              >
            </div>

            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700 ml-1">Message</label>
              <textarea 
                v-model="form.message"
                required
                rows="5"
                placeholder="Tell me more about your project..."
                class="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all outline-none resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              class="w-full py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition shadow-lg shadow-gray-200 flex items-center justify-center gap-2"
            >
              Send Message
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useToast } from 'vue-toastification'

const toast = useToast()
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  // In a real scenario, you'd send this to a backend or service
  console.log('Form submitted:', form.value)
  toast.success('Message sent successfully!')
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
}
</script>
