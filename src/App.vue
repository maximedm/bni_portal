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
import Dashboard from './pages/Dashboard.vue';
import { ref, reactive } from 'vue';

//const props = defineProps(['search']);

const user = {


  name: 'Chelsea Hagon',
  email: 'chelsea.hagon@example.com',
  role: 'Human Resources Manager',
  imageUrl:
    'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [


  { name: 'Home', href: '#', current: true },
  /*{ name: 'Leden', href: '#', current: false },
  { name: 'Nieuws', href: '#', current: false },*/
  /*{ name: 'Resources', href: '#', current: false },
  { name: 'Company Directory', href: '#', current: false },
  { name: 'Openings', href: '#', current: false },*/
]
const userNavigation = [


  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]
const stats = [


  { label: 'Vacation days left', value: 12 },
  { label: 'Sick days left', value: 4 },
  { label: 'Personal days left', value: 2 },
]

const tools = [
    {
        image: 'https://play-lh.googleusercontent.com/ijFZqfIrFuEn1i1ZSSa7gBlr5pTZgxDnaFxIzLjkw3Scm686q6Ffcbn1YUW7fORh_8o',
        name: 'BNI Connect',
        description: 'BNI Connect is the official BNI app for members and visitors. It is a powerful tool that allows you to connect with other BNI members and visitors, and to share your business with them.',
        href: '#',

    },
    {
        image: 'https://play-lh.googleusercontent.com/xHpp6bjfK3EnUUvyRZLao2zTJZ7YfOpB8pzZalf66bLrabsYnClfBFCLYiTTcZPlbY4',
        name: 'BNI Business Builder',
        description: 'BNI Business Builder is the official BNI app for members and visitors. It is a powerful tool that allows you to connect with other BNI members and visitors, and to share your business with them.',
        href: '#',
    }
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
const announcements = [


  {
    id: 1,
    title: 'Office closed on July 2nd',
    href: '#',
    preview:
      'Cum qui rem deleniti. Suscipit in dolor veritatis sequi aut. Vero ut earum quis deleniti. Ut a sunt eum cum ut repudiandae possimus. Nihil ex tempora neque cum consectetur dolores.',
  },
  {
    id: 2,
    title: 'New password policy',
    href: '#',
    preview:
      'Alias inventore ut autem optio voluptas et repellendus. Facere totam quaerat quam quo laudantium cumque eaque excepturi vel. Accusamus maxime ipsam reprehenderit rerum id repellendus rerum. Culpa cum vel natus. Est sit autem mollitia.',
  },
  {
    id: 3,
    title: 'Office closed on July 2nd',
    href: '#',
    preview:
      'Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae. Alias consectetur voluptatibus. Accusamus a ab dicta et. Consequatur quis dignissimos voluptatem nisi.',
  },
]

const search = ref();
</script>

<template>
<div class="min-h-full">
    <Popover as="header" class="bg-bni-100 pb-24" v-slot="{ open }">
      <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="relative flex flex-wrap items-center justify-center lg:justify-between">
          <!-- Logo -->
          <div class="absolute left-0 flex-shrink-0 py-5 lg:static">
            <a href="#">
              <span class="sr-only">BNI</span>
              <svg class="h-16 hidden md:block" viewBox="0 0 218 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M47.2157 32.4297C55.2007 34.3031 61.6067 40.2171 61.6067 49.6801C61.6067 61.8038 51.4541 69 35.6824 69H0V0.000652414H34.9933C47.2157 0.000652414 57.7626 4.534 57.7626 18.1374C57.7626 25.4315 52.3416 30.2614 47.2157 32.2333V32.4297ZM29.0787 26.9095C33.9086 26.9095 36.57 24.9385 36.57 21.4887C36.57 17.7431 34.5002 15.8698 29.5715 15.8698H21.1932V26.9095H29.0787ZM32.6277 53.1297C37.6547 53.1297 40.4143 51.4545 40.4143 47.6104C40.4143 44.1597 37.8516 42.2868 32.1347 42.2868H21.1932V53.1297H32.6277Z" fill="white"/>
                <path d="M117.029 34.0072V-7.73616e-07H137.729V69H119.001L90.2179 32.5292H90.0213V69H69.1239V-7.73616e-07H90.0213L116.734 34.0072H117.029Z" fill="white"/>
                <path d="M146.654 1.16173e-05H167.848L146.654 21.1058V1.16173e-05Z" fill="white"/>
                <path d="M146.654 29.1832L167.848 8.0774V69H146.654V29.1832Z" fill="white"/>
                <path d="M173.22 66.3478C173.38 66.7462 173.602 67.0932 173.885 67.3863C174.169 67.6797 174.502 67.9106 174.888 68.0768C175.274 68.2445 175.692 68.3276 176.141 68.3276C176.585 68.3276 176.997 68.2445 177.38 68.0768C177.763 67.9106 178.095 67.6797 178.378 67.3863C178.661 67.0932 178.884 66.7462 179.043 66.3478C179.204 65.9482 179.284 65.5138 179.284 65.0419C179.284 64.5853 179.204 64.1588 179.043 63.7626C178.884 63.3675 178.661 63.0243 178.378 62.734C178.095 62.4444 177.763 62.216 177.38 62.0485C176.997 61.881 176.585 61.7979 176.141 61.7979C175.692 61.7979 175.274 61.881 174.888 62.0485C174.502 62.216 174.169 62.4444 173.885 62.734C173.602 63.0243 173.38 63.3675 173.22 63.7626C173.06 64.1588 172.979 64.5853 172.979 65.0419C172.979 65.5138 173.06 65.9482 173.22 66.3478ZM172.591 63.538C172.795 63.0739 173.073 62.671 173.425 62.3305C173.776 61.9893 174.185 61.7211 174.653 61.5265C175.12 61.3321 175.616 61.2351 176.141 61.2351C176.667 61.2351 177.162 61.3321 177.626 61.5265C178.09 61.7211 178.496 61.9893 178.844 62.3305C179.192 62.671 179.468 63.0739 179.673 63.538C179.878 64.0019 179.98 64.5027 179.98 65.0419C179.98 65.5949 179.878 66.1056 179.673 66.5722C179.468 67.0403 179.192 67.4463 178.844 67.7905C178.496 68.1347 178.09 68.4029 177.626 68.5938C177.162 68.7854 176.667 68.8801 176.141 68.8801C175.616 68.8801 175.12 68.7854 174.653 68.5938C174.185 68.4029 173.776 68.1347 173.425 67.7905C173.073 67.4463 172.795 67.0403 172.591 66.5722C172.385 66.1056 172.284 65.5949 172.284 65.0419C172.284 64.5027 172.385 64.0019 172.591 63.538Z" fill="white"/>
                <path d="M176.055 64.8769H175.328V63.4544H176.249C176.365 63.4544 176.483 63.4632 176.603 63.4803C176.722 63.4972 176.828 63.5299 176.92 63.5778C177.011 63.6256 177.086 63.6936 177.145 63.7817C177.203 63.8706 177.232 63.9903 177.232 64.1401C177.232 64.3181 177.199 64.4561 177.134 64.5546C177.07 64.6545 176.982 64.7273 176.874 64.7752C176.764 64.8228 176.64 64.8517 176.5 64.8621C176.36 64.8724 176.212 64.8769 176.055 64.8769ZM176.684 65.3108C177.007 65.2781 177.279 65.171 177.497 64.9885C177.715 64.8066 177.824 64.5211 177.824 64.1305C177.824 63.7145 177.7 63.404 177.453 63.1988C177.205 62.9943 176.823 62.8916 176.307 62.8916H174.632V67.2241H175.306V65.3604H176.02L177.199 67.2241H177.923L176.684 65.3108Z" fill="white"/>
                <path d="M1.656 80.864V98H5.184V85.976H5.232L9.432 98H12.336L16.536 85.856H16.584V98H20.112V80.864H14.808L11.016 92.648H10.968L6.96 80.864H1.656ZM27.7494 91.376L29.9814 85.088H30.0294L32.1894 91.376H27.7494ZM28.1094 80.864L21.6294 98H25.4214L26.7654 94.184H33.1734L34.4694 98H38.3814L31.9734 80.864H28.1094ZM39.8591 80.864V98H43.3871V86.528H43.4351L50.5631 98H54.3311V80.864H50.8031V92.36H50.7551L43.6031 80.864H39.8591ZM57.6482 80.864V98H70.6562V94.832H61.4162V90.632H69.7202V87.704H61.4162V84.032H70.4642V80.864H57.6482ZM73.2107 80.864V98H76.7387V86.528H76.7867L83.9147 98H87.6827V80.864H84.1547V92.36H84.1067L76.9547 80.864H73.2107ZM94.7678 87.8V83.792H98.2958C98.6318 83.792 98.9518 83.824 99.2558 83.888C99.5758 83.936 99.8558 84.032 100.096 84.176C100.336 84.32 100.528 84.52 100.672 84.776C100.816 85.032 100.888 85.36 100.888 85.76C100.888 86.48 100.672 87 100.24 87.32C99.8078 87.64 99.2558 87.8 98.5838 87.8H94.7678ZM90.9998 80.864V98H99.3038C100.072 98 100.816 97.904 101.536 97.712C102.272 97.52 102.92 97.224 103.48 96.824C104.056 96.424 104.512 95.912 104.848 95.288C105.184 94.648 105.352 93.896 105.352 93.032C105.352 91.96 105.088 91.048 104.56 90.296C104.048 89.528 103.264 88.992 102.208 88.688C102.976 88.32 103.552 87.848 103.936 87.272C104.336 86.696 104.536 85.976 104.536 85.112C104.536 84.312 104.4 83.64 104.128 83.096C103.872 82.552 103.504 82.12 103.024 81.8C102.544 81.464 101.968 81.224 101.296 81.08C100.624 80.936 99.8798 80.864 99.0638 80.864H90.9998ZM94.7678 95.072V90.368H98.8718C99.6878 90.368 100.344 90.56 100.84 90.944C101.336 91.312 101.584 91.936 101.584 92.816C101.584 93.264 101.504 93.632 101.344 93.92C101.2 94.208 101 94.44 100.744 94.616C100.488 94.776 100.192 94.896 99.8558 94.976C99.5198 95.04 99.1678 95.072 98.7998 95.072H94.7678ZM107.898 80.864V98H120.018V94.832H111.666V80.864H107.898ZM136.669 91.52V80.864H132.901V91.52C132.901 92.8 132.645 93.744 132.133 94.352C131.621 94.944 130.693 95.24 129.349 95.24C128.581 95.24 127.965 95.136 127.501 94.928C127.053 94.704 126.701 94.424 126.445 94.088C126.189 93.736 126.021 93.336 125.941 92.888C125.861 92.44 125.821 91.984 125.821 91.52V80.864H122.053V91.52C122.053 93.856 122.685 95.584 123.949 96.704C125.229 97.824 127.029 98.384 129.349 98.384C131.637 98.384 133.429 97.824 134.725 96.704C136.021 95.568 136.669 93.84 136.669 91.52ZM142.482 92.312H138.834C138.818 93.368 139.01 94.28 139.41 95.048C139.81 95.816 140.346 96.448 141.018 96.944C141.706 97.44 142.49 97.8 143.37 98.024C144.266 98.264 145.186 98.384 146.13 98.384C147.298 98.384 148.322 98.248 149.202 97.976C150.098 97.704 150.842 97.328 151.434 96.848C152.042 96.352 152.498 95.768 152.802 95.096C153.106 94.424 153.258 93.696 153.258 92.912C153.258 91.952 153.05 91.168 152.634 90.56C152.234 89.936 151.754 89.44 151.194 89.072C150.634 88.704 150.066 88.44 149.49 88.28C148.93 88.104 148.49 87.984 148.17 87.92C147.098 87.648 146.226 87.424 145.554 87.248C144.898 87.072 144.378 86.896 143.994 86.72C143.626 86.544 143.378 86.352 143.25 86.144C143.122 85.936 143.058 85.664 143.058 85.328C143.058 84.96 143.138 84.656 143.298 84.416C143.458 84.176 143.658 83.976 143.898 83.816C144.154 83.656 144.434 83.544 144.738 83.48C145.042 83.416 145.346 83.384 145.65 83.384C146.114 83.384 146.538 83.424 146.922 83.504C147.322 83.584 147.674 83.72 147.978 83.912C148.282 84.104 148.522 84.368 148.698 84.704C148.89 85.04 149.002 85.464 149.034 85.976H152.682C152.682 84.984 152.49 84.144 152.106 83.456C151.738 82.752 151.234 82.176 150.594 81.728C149.954 81.28 149.218 80.96 148.386 80.768C147.57 80.56 146.714 80.456 145.818 80.456C145.05 80.456 144.282 80.56 143.514 80.768C142.746 80.976 142.058 81.296 141.45 81.728C140.842 82.16 140.346 82.704 139.962 83.36C139.594 84 139.41 84.76 139.41 85.64C139.41 86.424 139.554 87.096 139.842 87.656C140.146 88.2 140.538 88.656 141.018 89.024C141.498 89.392 142.042 89.696 142.65 89.936C143.258 90.16 143.882 90.352 144.522 90.512C145.146 90.688 145.762 90.848 146.37 90.992C146.978 91.136 147.522 91.304 148.002 91.496C148.482 91.688 148.866 91.928 149.154 92.216C149.458 92.504 149.61 92.88 149.61 93.344C149.61 93.776 149.498 94.136 149.274 94.424C149.05 94.696 148.77 94.912 148.434 95.072C148.098 95.232 147.738 95.344 147.354 95.408C146.97 95.456 146.61 95.48 146.274 95.48C145.778 95.48 145.298 95.424 144.834 95.312C144.37 95.184 143.962 95 143.61 94.76C143.274 94.504 143.002 94.176 142.794 93.776C142.586 93.376 142.482 92.888 142.482 92.312ZM158.068 92.312H154.42C154.404 93.368 154.596 94.28 154.996 95.048C155.396 95.816 155.932 96.448 156.604 96.944C157.292 97.44 158.076 97.8 158.956 98.024C159.852 98.264 160.772 98.384 161.716 98.384C162.884 98.384 163.908 98.248 164.788 97.976C165.684 97.704 166.428 97.328 167.02 96.848C167.628 96.352 168.084 95.768 168.388 95.096C168.692 94.424 168.844 93.696 168.844 92.912C168.844 91.952 168.636 91.168 168.22 90.56C167.82 89.936 167.34 89.44 166.78 89.072C166.22 88.704 165.652 88.44 165.076 88.28C164.516 88.104 164.076 87.984 163.756 87.92C162.684 87.648 161.812 87.424 161.14 87.248C160.484 87.072 159.964 86.896 159.58 86.72C159.212 86.544 158.964 86.352 158.836 86.144C158.708 85.936 158.644 85.664 158.644 85.328C158.644 84.96 158.724 84.656 158.884 84.416C159.044 84.176 159.244 83.976 159.484 83.816C159.74 83.656 160.02 83.544 160.324 83.48C160.628 83.416 160.932 83.384 161.236 83.384C161.7 83.384 162.124 83.424 162.508 83.504C162.908 83.584 163.26 83.72 163.564 83.912C163.868 84.104 164.108 84.368 164.284 84.704C164.476 85.04 164.588 85.464 164.62 85.976H168.268C168.268 84.984 168.076 84.144 167.692 83.456C167.324 82.752 166.82 82.176 166.18 81.728C165.54 81.28 164.804 80.96 163.972 80.768C163.156 80.56 162.3 80.456 161.404 80.456C160.636 80.456 159.868 80.56 159.1 80.768C158.332 80.976 157.644 81.296 157.036 81.728C156.428 82.16 155.932 82.704 155.548 83.36C155.18 84 154.996 84.76 154.996 85.64C154.996 86.424 155.14 87.096 155.428 87.656C155.732 88.2 156.124 88.656 156.604 89.024C157.084 89.392 157.628 89.696 158.236 89.936C158.844 90.16 159.468 90.352 160.108 90.512C160.732 90.688 161.348 90.848 161.956 90.992C162.564 91.136 163.108 91.304 163.588 91.496C164.068 91.688 164.452 91.928 164.74 92.216C165.044 92.504 165.196 92.88 165.196 93.344C165.196 93.776 165.084 94.136 164.86 94.424C164.636 94.696 164.356 94.912 164.02 95.072C163.684 95.232 163.324 95.344 162.94 95.408C162.556 95.456 162.196 95.48 161.86 95.48C161.364 95.48 160.884 95.424 160.42 95.312C159.956 95.184 159.548 95 159.196 94.76C158.86 94.504 158.588 94.176 158.38 93.776C158.172 93.376 158.068 92.888 158.068 92.312ZM171.086 80.864V98H184.094V94.832H174.854V90.632H183.158V87.704H174.854V84.032H183.902V80.864H171.086ZM190.416 88.616V83.792H194.544C195.408 83.792 196.056 83.984 196.488 84.368C196.92 84.736 197.136 85.336 197.136 86.168C197.136 87.032 196.92 87.656 196.488 88.04C196.056 88.424 195.408 88.616 194.544 88.616H190.416ZM186.648 80.864V98H190.416V91.304H194.184C195.128 91.304 195.808 91.512 196.224 91.928C196.64 92.344 196.912 93 197.04 93.896C197.136 94.584 197.208 95.304 197.256 96.056C197.304 96.808 197.432 97.456 197.64 98H201.408C201.232 97.76 201.096 97.472 201 97.136C200.92 96.784 200.856 96.416 200.808 96.032C200.776 95.648 200.752 95.272 200.736 94.904C200.72 94.536 200.704 94.216 200.688 93.944C200.656 93.512 200.592 93.08 200.496 92.648C200.416 92.216 200.28 91.824 200.088 91.472C199.896 91.104 199.648 90.792 199.344 90.536C199.04 90.264 198.656 90.064 198.192 89.936V89.888C199.152 89.504 199.84 88.944 200.256 88.208C200.688 87.472 200.904 86.6 200.904 85.592C200.904 84.936 200.784 84.328 200.544 83.768C200.32 83.192 199.984 82.688 199.536 82.256C199.104 81.824 198.576 81.488 197.952 81.248C197.344 80.992 196.656 80.864 195.888 80.864H186.648ZM206.537 92.312H202.889C202.873 93.368 203.065 94.28 203.465 95.048C203.865 95.816 204.401 96.448 205.073 96.944C205.761 97.44 206.545 97.8 207.425 98.024C208.321 98.264 209.241 98.384 210.185 98.384C211.353 98.384 212.377 98.248 213.257 97.976C214.153 97.704 214.897 97.328 215.489 96.848C216.097 96.352 216.553 95.768 216.857 95.096C217.161 94.424 217.312 93.696 217.312 92.912C217.312 91.952 217.105 91.168 216.689 90.56C216.289 89.936 215.809 89.44 215.249 89.072C214.689 88.704 214.121 88.44 213.545 88.28C212.985 88.104 212.545 87.984 212.225 87.92C211.153 87.648 210.281 87.424 209.609 87.248C208.953 87.072 208.433 86.896 208.049 86.72C207.681 86.544 207.433 86.352 207.305 86.144C207.177 85.936 207.113 85.664 207.113 85.328C207.113 84.96 207.193 84.656 207.353 84.416C207.513 84.176 207.713 83.976 207.953 83.816C208.209 83.656 208.489 83.544 208.793 83.48C209.097 83.416 209.401 83.384 209.705 83.384C210.169 83.384 210.593 83.424 210.977 83.504C211.377 83.584 211.729 83.72 212.033 83.912C212.337 84.104 212.577 84.368 212.753 84.704C212.945 85.04 213.057 85.464 213.089 85.976H216.737C216.737 84.984 216.545 84.144 216.161 83.456C215.793 82.752 215.289 82.176 214.648 81.728C214.009 81.28 213.273 80.96 212.441 80.768C211.625 80.56 210.769 80.456 209.873 80.456C209.105 80.456 208.337 80.56 207.569 80.768C206.801 80.976 206.113 81.296 205.505 81.728C204.897 82.16 204.401 82.704 204.017 83.36C203.649 84 203.465 84.76 203.465 85.64C203.465 86.424 203.609 87.096 203.896 87.656C204.201 88.2 204.593 88.656 205.073 89.024C205.553 89.392 206.097 89.696 206.705 89.936C207.313 90.16 207.937 90.352 208.577 90.512C209.201 90.688 209.817 90.848 210.425 90.992C211.033 91.136 211.577 91.304 212.057 91.496C212.537 91.688 212.921 91.928 213.209 92.216C213.513 92.504 213.665 92.88 213.665 93.344C213.665 93.776 213.553 94.136 213.329 94.424C213.105 94.696 212.825 94.912 212.489 95.072C212.153 95.232 211.793 95.344 211.409 95.408C211.025 95.456 210.665 95.48 210.329 95.48C209.833 95.48 209.353 95.424 208.889 95.312C208.425 95.184 208.017 95 207.665 94.76C207.329 94.504 207.057 94.176 206.849 93.776C206.641 93.376 206.537 92.888 206.537 92.312Z" fill="white"/>
            </svg>

            </a>
          </div>

          <!-- Right section on desktop -->
          <div class="hidden lg:ml-4 lg:flex lg:items-center lg:py-5 lg:pr-0.5" v-if="false">
            <button type="button" class="flex-shrink-0 rounded-full p-1 text-cyan-200 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>

            <!-- Profile dropdown -->
            <Menu as="div" class="relative ml-4 flex-shrink-0">
              <div>
                <MenuButton class="flex rounded-full bg-white text-sm ring-2 ring-white ring-opacity-20 focus:outline-none focus:ring-opacity-100">
                  <span class="sr-only">Open user menu</span>
                  <img class="h-8 w-8 rounded-full" :src="user.imageUrl" alt="" />
                </MenuButton>
              </div>
              <transition leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                <MenuItems class="absolute -right-2 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                    <a :href="item.href" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">{{ item.name }}</a>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>

          <div class="w-full py-5 lg:border-t lg:border-white lg:border-opacity-20">
            <div class="lg:grid lg:grid-cols-3 lg:items-center lg:gap-8">
              <!-- Left nav -->
              <div class="hidden lg:col-span-2 lg:block">
                <nav class="flex space-x-4">
                  <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'text-white' : 'text-cyan-100', 'rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
                </nav>
              </div>
              <div class="px-12 lg:px-0">
                <!-- Search -->
                <div class="mx-auto w-full max-w-xs lg:max-w-md hidden md:block">
                  <label for="search" class="sr-only">Search</label>
                  <div class="relative text-white focus-within:text-gray-600">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <MagnifyingGlassIcon class="h-5 w-5" aria-hidden="true" />
                    </div>
                    <input v-model="search" class="block w-full rounded-md border-0 bg-white/20 py-1.5 pl-10 pr-3 text-white placeholder:text-white focus:bg-white focus:text-gray-900 focus:ring-0 focus:placeholder:text-gray-500 sm:text-sm sm:leading-6" placeholder="Search" type="search" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Menu button -->
          <div class="absolute right-0 flex-shrink-0 lg:hidden" v-if="false">
            <!-- Mobile menu button -->
            <PopoverButton class="inline-flex items-center justify-center rounded-md bg-transparent p-2 text-cyan-200 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </PopoverButton>
          </div>
        </div>
      </div>

      <TransitionRoot as="template" :show="open">
        <div class="lg:hidden">
          <TransitionChild as="template" enter="duration-150 ease-out" enter-from="opacity-0" enter-to="opacity-100" leave="duration-150 ease-in" leave-from="opacity-100" leave-to="opacity-0">
            <PopoverOverlay class="fixed inset-0 z-20 bg-black bg-opacity-25" />
          </TransitionChild>

          <TransitionChild as="template" enter="duration-150 ease-out" enter-from="opacity-0 scale-95" enter-to="opacity-100 scale-100" leave="duration-150 ease-in" leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">
            <PopoverPanel focus class="absolute inset-x-0 top-0 z-30 mx-auto w-full max-w-3xl origin-top transform p-2 transition">
              <div class="divide-y divide-gray-200 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div class="pt-3 pb-2">
                  <div class="flex items-center justify-between px-4">
                    <div>
                      <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=cyan&shade=600" alt="Your Company" />
                    </div>
                    <div class="-mr-2">
                      <PopoverButton class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
                        <span class="sr-only">Close menu</span>
                        <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                      </PopoverButton>
                    </div>
                  </div>
                  <div class="mt-3 space-y-1 px-2">
                    <a v-for="item in navigation" :key="item.name" :href="item.href" class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800">{{ item.name }}</a>
                  </div>
                </div>
                <div class="pt-4 pb-2">
                  <div class="flex items-center px-5">
                    <div class="flex-shrink-0">
                      <img class="h-10 w-10 rounded-full" :src="user.imageUrl" alt="" />
                    </div>
                    <div class="ml-3 min-w-0 flex-1">
                      <div class="truncate text-base font-medium text-gray-800">{{ user.name }}</div>
                      <div class="truncate text-sm font-medium text-gray-500">{{ user.email }}</div>
                    </div>
                    <button type="button" class="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2">
                      <span class="sr-only">View notifications</span>
                      <BellIcon class="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div class="mt-3 space-y-1 px-2">
                    <a v-for="item in userNavigation" :key="item.name" :href="item.href" class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800">{{ item.name }}</a>
                  </div>
                </div>
              </div>
            </PopoverPanel>
          </TransitionChild>
        </div>
      </TransitionRoot>
    </Popover>
    <Dashboard :search="search"/>
    <footer>
      <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="border-t border-gray-200 py-8 text-center text-sm text-gray-500 sm:text-left"><span class="block sm:inline">&copy; {{ new Date().getFullYear() }} BNI Maneblussers.</span></div>
      </div>
    </footer>
  </div>
</template>

<style scoped>

</style>
