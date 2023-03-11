<script setup>
import { defineProps, computed } from 'vue';
const props = defineProps(['search']);

const responsibles = [


{
  title: 'Sarah Vandewoude',
  subjects:
    'BNI Business Builder, evenementen, kalender, online registratie',
},
{
  title: 'Ivan Huybrechts',
  subjects:
    'Verwachting aanwezigheid, vervangers',
},
{
  title: 'Steve Parys',
  subjects:
    'Biografieblad, WINST-profiel, VCP proces',
},
{
  title: 'Dietrich Bonte',
  subjects:
    'Biografieblad, kosten chapterbijeenkomst, sprekersschema, verlenging van het lidmaatschap',
},
{
  title: 'Anke Vandenhouwe',
  subjects:
    'Aanbevelingen vs. Leads, BNI Business Builder',
},
{
  title: 'Mats Fosté',
  subjects:
    'Beleidsregels, "The Power of One"',
},
{
  title: 'Julien Fontaine',
  subjects:
    'BNI Connect Mobile App, Activiteiten of traingen registreren, BNI Connect profiel, Zoom',
},
{
  title: 'Tim Van Der Stock',
  subjects:
    'Rollen, agenda, verwachtingen, wekelijkse verplichtingen',
},
{
  title: 'Andy Nollekens',
  subjects:
    'Bezoekers voegen waarde toe, bekijk hoe je bezoekers mee kan brengen, Gold Club erkenning',
},
{
  title: 'Jan Van den Broeck',
  subjects:
    'Plan een 1-op-1 met een bezoekershost, kies een datum om een ochtend met een bezoekershost mee te lopen om deze ervaring te delen.',
},
]

const filteredResponsibles = computed(() => {
  if (!props.search) {
    return responsibles;
  }

  return responsibles.filter((responsible) => {
    return responsible.title.toLowerCase().includes(props.search.toLowerCase());
  });
});

</script>

<template>
    <!-- Mentoren -->
    <section>
              <div class="overflow-hidden rounded-lg bg-white shadow">
                <div class="p-6">
                  <h2 class="text-base font-medium text-gray-900">Mentoren</h2>
                  <div class="mt-6 flow-root">
                    <ul role="list" class="-my-5 divide-y divide-gray-200">
                      <li v-for="responsible in filteredResponsibles" :key="responsible" class="py-5">
                        <div class="relative focus-within:ring-2 focus-within:ring-cyan-500">
                          <h3 class="text-sm font-semibold text-gray-800">
                              <!-- Extend touch target to entire panel -->
                              <span class="absolute inset-0" aria-hidden="true" />
                              {{ responsible.title }}
                          </h3>
                          <p class="mt-1 text-sm text-gray-600 line-clamp-2">{{ responsible.subjects }}</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="mt-6" v-if="false">
                    <a href="#" class="flex w-full items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">View all</a>
                  </div>
                </div>
              </div>
            </section>
</template>