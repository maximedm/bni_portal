<script setup>
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverOverlay,
  PopoverPanel,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import {
  AcademicCapIcon,
  BanknotesIcon,
  Bars3Icon,
  BellIcon,
  CheckBadgeIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
import Responsibles from '../components/Responsibles.vue';
import WhatsappGroups from '../components/WhatsappGroups.vue';

defineProps(['search']);

const user = {


name: 'Chelsea Hagon',
email: 'chelsea.hagon@example.com',
role: 'Human Resources Manager',
imageUrl:
  'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [


{ name: 'Home', href: '#', current: true },
{ name: 'Profile', href: '#', current: false },
{ name: 'Resources', href: '#', current: false },
{ name: 'Company Directory', href: '#', current: false },
{ name: 'Openings', href: '#', current: false },
]
const userNavigation = [


{ name: 'Your Profile', href: '#' },
{ name: 'Settings', href: '#' },
{ name: 'Sign out', href: '#' },
]
const stats = [


{ label: 'Elke Vrijdag 6:30'},
/*{ label: 'Sick days left'},
{ label: 'Personal days left'},*/
]


const tools = [
    {
        image: 'https://play-lh.googleusercontent.com/ijFZqfIrFuEn1i1ZSSa7gBlr5pTZgxDnaFxIzLjkw3Scm686q6Ffcbn1YUW7fORh_8o',
        name: 'BNI Connect',
        description: 'BNI Connect is the official BNI app for members and visitors. It is a powerful tool that allows you to connect with other BNI members and visitors, and to share your business with them.',
        href: 'https://www.bniconnectglobal.com',

    },
    {
        image: 'https://play-lh.googleusercontent.com/xHpp6bjfK3EnUUvyRZLao2zTJZ7YfOpB8pzZalf66bLrabsYnClfBFCLYiTTcZPlbY4',
        name: 'BNI Business Builder',
        description: 'BNI Business Builder is the official BNI app for members and visitors. It is a powerful tool that allows you to connect with other BNI members and visitors, and to share your business with them.',
        href: 'http://bnibusinessbuilder.com/',
    },
    {
        image: '/bni_sharepoint.jpg',
        name: 'Sharepoint',
        description: 'Sharepoint where all the documents are stored',
        href: 'https://bnikempenmechelen.sharepoint.com/:f:/r/Gedeelde%20%20documenten/04%20-%20Chapters/BNI%20Maneblussers/BNI%20Maneblussers%20Chapter%20Folder?csf=1&web=1&e=keGJfN',
    },
    {
        image: '/bni_convert.jpg',
        name: 'BNI Convert',
        description: 'To be announced? 😂',
        href: '#',
    },
    {
        image: '/bni_engage.jpg',
        name: 'BNI Engage',
        description: 'To be announced? 😂',
        href: '#',
    },

]



const actions = [


{
  icon: ClockIcon,
  name: 'Request time off',
  href: '#',
  iconForeground: 'text-teal-700',
  iconBackground: 'bg-teal-50',
},
{
  icon: CheckBadgeIcon,
  name: 'Benefits',
  href: '#',
  iconForeground: 'text-purple-700',
  iconBackground: 'bg-purple-50',
},
{
  icon: UsersIcon,
  name: 'Schedule a one-on-one',
  href: '#',
  iconForeground: 'text-sky-700',
  iconBackground: 'bg-sky-50',
},
{
  icon: BanknotesIcon,
  name: 'Payroll',
  href: '#',
  iconForeground: 'text-yellow-700',
  iconBackground: 'bg-yellow-50',
},
{
  icon: ReceiptRefundIcon,
  name: 'Submit an expense',
  href: '#',
  iconForeground: 'text-rose-700',
  iconBackground: 'bg-rose-50',
},
{
  icon: AcademicCapIcon,
  name: 'Training',
  href: '#',
  iconForeground: 'text-indigo-700',
  iconBackground: 'bg-indigo-50',
},
]
const recentHires = [


{
  name: 'Leonard Krasner',
  handle: 'leonardkrasner',
  imageUrl:
    'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  href: '#',
},
{
  name: 'Floyd Miles',
  handle: 'floydmiles',
  imageUrl:
    'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  href: '#',
},
{
  name: 'Emily Selman',
  handle: 'emilyselman',
  imageUrl:
    'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  href: '#',
},
{
  name: 'Kristin Watson',
  handle: 'kristinwatson',
  imageUrl:
    'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  href: '#',
},
]

</script>

<template>
    <main class="-mt-24 pb-8">
      <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 class="sr-only">Profile</h1>
        <!-- Main 3 column grid -->
        <div class="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
          <!-- Left column -->
          <div class="grid grid-cols-1 gap-4 lg:col-span-2">
            <!-- Welcome panel -->
            <section v-if="true" aria-labelledby="profile-overview-title">
              <div class="overflow-hidden rounded-lg bg-white shadow">
                <h2 class="sr-only" id="profile-overview-title">Profile Overview</h2>
                <div class="bg-white p-6">
                  <div class="sm:flex sm:items-center sm:justify-between">
                    <div class="sm:flex sm:space-x-5">
                      <div class="flex-shrink-0">

<svg class="mx-auto h-20 w-20 rounded-full" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M40.7451 0.309937C26.746 2.36823 16 14.4292 16 29C16 45.0163 28.9837 58 45 58C57.0454 58 67.3756 50.6562 71.7574 40.2017C69.6764 58.1043 54.4609 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C37.6085 0 39.1924 0.105493 40.7451 0.309937Z" fill="#2A2C29"/>
<path d="M37.4442 28.4867C39.0414 28.8614 40.3228 30.0443 40.3228 31.9372C40.3228 34.3622 38.292 35.8016 35.1373 35.8016H28V22.0001H34.9995C37.4442 22.0001 39.5538 22.9069 39.5538 25.6279C39.5538 27.0869 38.4695 28.053 37.4442 28.4474V28.4867ZM33.8164 27.3825C34.7825 27.3825 35.3148 26.9883 35.3148 26.2982C35.3148 25.549 34.9008 25.1743 33.915 25.1743H32.2391V27.3825H33.8164ZM34.5263 32.6271C35.5318 32.6271 36.0838 32.2921 36.0838 31.5232C36.0838 30.8329 35.5712 30.4583 34.4277 30.4583H32.2391V32.6271H34.5263Z" fill="#C91C2E"/>
<path d="M51.4085 28.8022V22H55.549V35.8016H51.8029L46.0456 28.5066H46.0063V35.8016H41.8264V22H46.0063L51.3495 28.8022H51.4085Z" fill="#C91C2E"/>
<path d="M57.3341 22H61.5733L57.3341 26.2216V22Z" fill="#C91C2E"/>
<path d="M57.3341 27.8373L61.5733 23.6157V35.8016H57.3341V27.8373Z" fill="#C91C2E"/>
<path d="M62.6479 35.2711C62.68 35.3508 62.7243 35.4202 62.7809 35.4788C62.8377 35.5375 62.9043 35.5837 62.9816 35.6169C63.0587 35.6505 63.1424 35.6671 63.2322 35.6671C63.3211 35.6671 63.4035 35.6505 63.48 35.6169C63.5565 35.5837 63.6231 35.5375 63.6796 35.4788C63.7363 35.4202 63.7808 35.3508 63.8128 35.2711C63.8449 35.1911 63.8609 35.1042 63.8609 35.0099C63.8609 34.9185 63.8449 34.8332 63.8128 34.754C63.7808 34.6749 63.7363 34.6063 63.6796 34.5482C63.6231 34.4903 63.5565 34.4446 63.48 34.4111C63.4035 34.3776 63.3211 34.361 63.2322 34.361C63.1424 34.361 63.0587 34.3776 62.9816 34.4111C62.9043 34.4446 62.8377 34.4903 62.7809 34.5482C62.7243 34.6063 62.68 34.6749 62.6479 34.754C62.6159 34.8332 62.5996 34.9185 62.5996 35.0099C62.5996 35.1042 62.6159 35.1911 62.6479 35.2711ZM62.5221 34.709C62.5629 34.6162 62.6186 34.5356 62.6889 34.4675C62.7591 34.3993 62.8409 34.3456 62.9346 34.3067C63.028 34.2678 63.1273 34.2484 63.2322 34.2484C63.3375 34.2484 63.4364 34.2678 63.5292 34.3067C63.6221 34.3456 63.7033 34.3993 63.7729 34.4675C63.8424 34.5356 63.8977 34.6162 63.9387 34.709C63.9796 34.8018 64 34.902 64 35.0099C64 35.1205 63.9796 35.2226 63.9387 35.3159C63.8977 35.4096 63.8424 35.4908 63.7729 35.5596C63.7033 35.6285 63.6221 35.6821 63.5292 35.7203C63.4364 35.7586 63.3375 35.7776 63.2322 35.7776C63.1273 35.7776 63.028 35.7586 62.9346 35.7203C62.8409 35.6821 62.7591 35.6285 62.6889 35.5596C62.6186 35.4908 62.5629 35.4096 62.5221 35.3159C62.481 35.2226 62.4606 35.1205 62.4606 35.0099C62.4606 34.902 62.481 34.8018 62.5221 34.709Z" fill="#C91C2E"/>
<path d="M63.2149 34.9769H63.0696V34.6923H63.2539C63.2771 34.6923 63.3006 34.6941 63.3245 34.6975C63.3484 34.7009 63.3696 34.7074 63.388 34.717C63.4063 34.7266 63.4213 34.7402 63.433 34.7578C63.4447 34.7756 63.4505 34.7995 63.4505 34.8295C63.4505 34.8651 63.444 34.8927 63.4309 34.9124C63.418 34.9324 63.4005 34.9469 63.3788 34.9565C63.3568 34.966 63.332 34.9718 63.304 34.9739C63.2761 34.9759 63.2464 34.9769 63.2149 34.9769ZM63.3409 35.0636C63.4055 35.0571 63.4598 35.0357 63.5035 34.9992C63.5471 34.9628 63.5689 34.9057 63.5689 34.8276C63.5689 34.7443 63.5441 34.6822 63.4946 34.6412C63.445 34.6003 63.3686 34.5797 63.2655 34.5797H62.9304V35.4464H63.0652V35.0736H63.2081L63.444 35.4464H63.5888L63.3409 35.0636Z" fill="#C91C2E"/>
</svg>


                      </div>
                      <div class="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left flex flex-col justify-center">
                        <p class="text-xl font-bold text-gray-900 sm:text-2xl">BNI Maneblussers</p>
                        <p class="text-sm font-medium text-gray-600">Generaal Dewittelaan 9, gebouw 3, 2800 Mechelen</p>
                      </div>
                    </div>
                    <div class="mt-5 flex justify-center sm:mt-0" v-if="false">
                      <a href="#" class="flex items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">View profile</a>
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-1 divide-y divide-gray-200 border-t border-gray-200 bg-gray-50 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
                  <div v-for="stat in stats" :key="stat.label" class="px-6 py-5 text-center text-sm font-medium">
                    <span class="text-gray-600">{{ stat.label }}</span>
                  </div>
                </div>
              </div>
            </section>

            <!-- Actions panel -->
            <section aria-labelledby="quick-links-title">
              <div class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
                <h2 class="sr-only" id="quick-links-title">Quick links</h2>
                <div v-for="(tool, toolIdx) in tools" :key="tools" :class="[toolIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '', toolIdx === 1 ? 'sm:rounded-tr-lg' : '', toolIdx === tools.length - 2 ? 'sm:rounded-bl-lg' : '', toolIdx === tools.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '', 'group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500']">
                  <div>
                      <img class="w-16 rounded-md shadow-2xl" :src="tool.image" alt="">
                  </div>
                  <div class="mt-4">
                    <h3 class="text-lg font-medium">
                      <a :href="tool.href" class="focus:outline-none">
                        <!-- Extend touch target to entire panel -->
                        <span class="absolute inset-0" aria-hidden="true" />
                        {{ tool.name }}
                      </a>
                    </h3>
                    <p class="mt-2 text-sm text-gray-500">{{ tool.description }}</p>
                  </div>
                  <span class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                    </svg>
                  </span>
                </div>
              </div>
            </section>
            <WhatsappGroups />
          </div>
        
          
          <!-- Right column -->
          <div class="grid grid-cols-1 gap-4">
            <Responsibles :search="search" />

            <!-- Recent Hires -->
            <section v-if="false" aria-labelledby="recent-hires-title">
              <div class="overflow-hidden rounded-lg bg-white shadow">
                <div class="p-6">
                  <h2 class="text-base font-medium text-gray-900" id="recent-hires-title">Recent Hires</h2>
                  <div class="mt-6 flow-root">
                    <ul role="list" class="-my-5 divide-y divide-gray-200">
                      <li v-for="person in recentHires" :key="person.handle" class="py-4">
                        <div class="flex items-center space-x-4">
                          <div class="flex-shrink-0">
                            <img class="h-8 w-8 rounded-full" :src="person.imageUrl" alt="" />
                          </div>
                          <div class="min-w-0 flex-1">
                            <p class="truncate text-sm font-medium text-gray-900">{{ person.name }}</p>
                            <p class="truncate text-sm text-gray-500">{{ '@' + person.handle }}</p>
                          </div>
                          <div>
                            <a :href="person.href" class="inline-flex items-center rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">View</a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="mt-6">
                    <a href="#" class="flex w-full items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">View all</a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
</template>

