<script setup>
import { CheckCircleIcon, ChevronRightIcon, EnvelopeIcon, UserIcon, ClockIcon } from '@heroicons/vue/20/solid'
import { onMounted, ref, computed } from 'vue'
import chapters from '../assets/chapters.json'

onMounted(() => {
    console.log('mounted', chapters)
})



const tabs = [
    {
        name: 'Alle',
        count: chapters.length,
    },
    
  { 
    name: 'Dinsdag',
    count: chapters.filter(chapter => chapter.day === 'Dinsdag').length,
 },
  { 
    name: 'Woensdag',
    count: chapters.filter(chapter => chapter.day === 'Woensdag').length,
 },
  { 
    name: 'Donderdag',
    count: chapters.filter(chapter => chapter.day === 'Donderdag').length,
 },
  { 
    name: 'Vrijdag',
    count: chapters.filter(chapter => chapter.day === 'Vrijdag').length,
 },
]
const selected = ref(tabs[0]);

const filteredChapters = computed(() => {
    if (selected.value.name === 'Alle') {
        return chapters
    }
    return chapters.filter(chapter => chapter.day === selected.value.name)
})

</script>

<template>
    <div class="overflow-hidden bg-white shadow sm:rounded-md">
        <div class="p-6">
            <h2 class="text-base font-medium text-gray-900" id="recent-hires-title">Chapters</h2>
            <div>

    <div>
      <div class="border-b border-gray-200">
        <nav class="-mb-px flex flex-col items-center md:flex-row md:space-x-8 justify-between md:justify-start" aria-label="Tabs">
          <button @click="selected = tab" v-for="tab in tabs" :key="tab.name" href="#" :class="[selected.name == tab.name ? 'border-bni-100 text-bni-100' : 'border-transparent text-gray-500 hover:border-gray-200 hover:text-gray-700', 'flex whitespace-nowrap md:border-b-2 py-4 px-1 text-sm font-medium w-full md:w-auto justify-center md:justify-start']">
            {{ tab.name }}
            <span v-if="tab.count" :class="[selected.name == tab.name ? 'bg-red-100 text-bni-100' : 'bg-gray-100 text-gray-900', 'ml-3 rounded-full py-0.5 px-2.5 text-xs font-medium inline-block']">{{ tab.count }}</span>
          </button>
        </nav>
      </div>
    </div>
  </div>
        </div>
        
      <ul role="list" class="divide-y divide-gray-200">
        
        <li v-for="chapter in filteredChapters" :key="chapter">
            <a :href="chapter.url" target="_blank">
                <div class="flex items-center px-4 py-4 sm:px-6 hover:bg-gray-50">
                <div class="flex min-w-0 flex-1 items-center">
                    <div class="min-w-0 flex-1 px-4 md:grid md:gap-4">
                    <div>
                        <div class="flex gap-2 text-sm truncate">
                            <p class="font-medium text-bni-100">{{ chapter.chapter }}</p>
                            <p class="font-light text-gray-500">({{ chapter.location }})</p>
                        </div>
                        
                        <p class="mt-2 flex items-center text-sm text-gray-500">
                        <ClockIcon class="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-300" aria-hidden="true" />
                        <div class="flex gap-1">
                            <p class="font-light">
                                <span class="font-medium"></span>
                                {{ chapter.day }} {{ chapter.time }} - [{{ chapter.type }}]
                            </p>
                        </div>
                        </p>
                    </div>
        
                    </div>
                </div>
                </div>
            </a>
        </li>
      </ul>
    </div>
  </template>