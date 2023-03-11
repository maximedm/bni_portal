<script setup>
import { CheckCircleIcon, ChevronRightIcon, EnvelopeIcon, UserIcon } from '@heroicons/vue/20/solid'

const groups = [
    {
        name: 'BNI maneblussers - PRO',
        description: 'Voor de serieuze zaken!',
        image: '/groups/pro.png',
        responsibles: 'Dietrich Bonte, Arjan Tili, Yara Milis'
    },
    {
        name: 'BNI maneblussers - NO PRO',
        description: 'Voor al de rest!',
        image: '/groups/nopro.png',
        responsibles: 'Dietrich Bonte, Arjan Tili, Yara Milis'
    },
    {
        name: 'Netwerk Vervangers',
        description: 'Voor vervangers',
        image: '/groups/vervangers.png',
        responsibles: 'Arjan Tili, Ivan Huybrechts'
    }
]
</script>

<template>
    <div class="overflow-hidden bg-white shadow sm:rounded-md">
        <div class="p-6">
            <h2 class="text-base font-medium text-gray-900" id="recent-hires-title">Whatsapp Groepen</h2>
        </div>
      <ul role="list" class="divide-y divide-gray-200">
        
        <li v-for="group in groups" :key="group">

            <div class="flex items-center px-4 py-4 sm:px-6 hover:bg-gray-50">
              <div class="flex min-w-0 flex-1 items-center">
                <div class="flex-shrink-0">
                  <img class="h-12 w-12 rounded-full" :src="group.image" alt="" />
                </div>
                <div class="min-w-0 flex-1 px-4 md:grid md:gap-4">
                  <div>
                    <div class="flex gap-1 text-sm truncate">
                        <p class="font-medium text-bni-100">{{ group.name }}</p>
                        <p class="font-light text-gray-500">({{ group.description }})</p>
                    </div>
                    
                    <p class="mt-2 flex items-center text-sm text-gray-500">
                      <UserIcon class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                      <div class="flex gap-1">
                        <p class="font-light">
                            <span class="font-medium">Verantwoordelijken:</span>
                            {{ group.responsibles }}
                        </p>
                      </div>
                    </p>
                  </div>
    
                </div>
              </div>
            </div>
        </li>
      </ul>
    </div>
  </template>