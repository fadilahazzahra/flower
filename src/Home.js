 /* This example requires Tailwind CSS v2.0+ */
 import { Fragment } from 'react'
 import { Disclosure, Menu, Transition } from '@headlessui/react'
 import { BellHIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
 import Navbar from './Navbar'
 function classNames(...classes) {
   return classes.filter(Boolean).join(' ')
 }
 
 export default function Example() {
   return (
     <>
     <Navbar/>
       <div className="min-h-full">
       <div id="carouselExampleIndicators" class="carousel slide relative" data-bs-ride="carousel">
   <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
     <button
       type="button"
       data-bs-target="#carouselExampleIndicators"
       data-bs-slide-to="0"
       class="active"
       aria-current="true"
       aria-label="Slide 1"
     ></button>
     <button
       type="button"
       data-bs-target="#carouselExampleIndicators"
       data-bs-slide-to="1"
       aria-label="Slide 2"
     ></button>
     <button
       type="button"
       data-bs-target="#carouselExampleIndicators"
       data-bs-slide-to="2"
       aria-label="Slide 3"
     ></button>
   </div>
   <div class="carousel-inner relative w-full overflow-hidden">
     <div class="carousel-item active float-left w-full">
       <img
         src="https://img.floweradvisor.com/p/b58637eccd22dcc22b9effd4c2f5a594.jpeg?v=20220615144008"
         class="block w-full"
         alt="Wild Landscape"
       />
     </div>
     <div class="carousel-item float-left w-full">
       <img
         src="https://img.floweradvisor.com/p/ebea8635c9a2544de02166cdbe37d6af.jpeg?v=20220613115934"
         class="block w-full"
         alt="Camera"
       />
     </div>
     <div class="carousel-item float-left w-full">
       <img
         src="https://images.floweradvisor.com/banner/Summer%20Euphoria_ID-01.jpg?v=2"
         class="block w-full"
         alt="Exotic Fruits"
       />
     </div>
   </div>
   <p class="text-xl font-light leading-relaxed mt-6 mb-4 text-gray-1000">
   Jual Buket Bunga Mawar Cantik Untuk Acara Dengan Harga Termurah di SummerFlower's !
   
   Miliki rangkaian buket tangan bunga mawar dan bunga lainnya yang dikemas dan di rangkai secara cantik nan indah, terdiri dari gabungan beberapa bunga segar pilihan. SummerFlower's  menghadirkan desain buket tangan yang menarik dan menggunakan Bunga mawar, Tulip, Sunflower, Lili dan jenis bunga lainnya. Buket bunga tangan ini sangat cocok untuk dijadikan sebagai hadiah atau kado di hari Kasih sayang, Pernikahan, Wisuda, Ulang tahun dan hari kebahagiaan lainnya. Selain itu, harga buket bunga di SummerFlower's juga cukup terjangkau sehingga Anda bisa memilih berbagai pilihan bunga buket untuk Anda berikan pada orang yang Anda sayangi.
  
  Belanja produk Bouqet Bunga disini!
 </p>
 
<div class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gray-50 p-8 sm:p-12">
  <div class="w-full max-w-4xl rounded-md border-2 border-gray-100 bg-white p-14">
    <div class="flex flex-col items-center">
      <span class="-rotate-1 rounded-lg bg-yellow-100 py-px px-2 text-sm text-yellow-800">99+ people joined this week</span>
      <h3 class="mt-2 max-w-2xl text-center text-2xl font-bold leading-tight sm:text-3xl md:text-4xl md:leading-tight">Let's Get In Touch !</h3>
      <form action="" class="mx-auto mt-4 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:gap-0">
        <input type="email" name="email" id="email" class="grow rounded border-2 border-gray-300 py-3 px-3 focus:border-emerald-500 focus:outline-none sm:rounded-l-md sm:rounded-r-none sm:border-r-0" placeholder="Email Address" />
        <button type="submit" class="rounded bg-emerald-500 px-5 py-4 font-bold text-white sm:rounded-l-none sm:rounded-r-md">Your Email</button>
      </form>
    </div>
  </div>
</div>

    <div>
  </div>

<footer class="text-gray-900 body-font bg-neutral-100">
  <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span class="ml-3 text-xl">SummerFlower's</span>
      </a>
      <p class="mt-2 text-sm text-gray-500">Website Toko Bouqet Bunga</p>
    </div>
    <div class="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">INFO</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">Blog Kami</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Tentang Kami</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Kebijakan Privasi</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Syarat dan Ketentuan</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">BANTUAN</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">Kontak Kami</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Pembayaran</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Pengiriman</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Cara Pemesanan</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">KATEGORI</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">Hand Bouqet</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">GIFT</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">LAYANAN CUSTOMERS</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">WA: 088802678980</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Telp: 021-56748930</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div class="bg-sky-700">
    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p class="text-gray-50 text-sm text-center sm:text-left">© 2022 SummerFlower's —
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">@MrsRobbot</a>
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a class="text-gray-50">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-50">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-50">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-50">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>

 <div id="carouselExampleCaptions" class="carousel slide relative carousel-dark" data-bs-ride="carousel">
   <div class="carousel-inner relative w-full overflow-hidden">
     <div class="carousel-item active relative float-left w-full text-center">
       <p class="text-xl italic mx-auto text-gray-700 max-w-4xl">
         "Selalu senang belanja disini. karena bunganya fresh dan cara memesannya mudah!"
       </p>
       <div class="mt-12 mb-6 flex justify-center">
         <img
           src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
           class="rounded-full w-24 h-24 shadow-lg"
           alt="smaple image"
         />
       </div>
       <p class="text-gray-500">- Risa</p>
     </div>
     <div class="carousel-item relative float-left w-full text-center">
       <p class="text-xl italic mx-auto text-gray-700 max-w-4xl">
         "Selalu puas belanja disini."
       </p>
       <div class="mt-12 mb-6 flex justify-center">
         <img
           src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp"
           class="rounded-full w-24 h-24 shadow-lg"
           alt="smaple image"
         />
       </div>
       <p class="text-gray-500">- Molly</p>
     </div>
     <div class="carousel-item relative float-left w-full text-center">
       <p class="text-xl italic mx-auto text-gray-700 max-w-4xl">
         "Pengirimannya cepat."
       </p>
       <div class="mt-12 mb-6 flex justify-center">
         <img
           src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
           class="rounded-full w-24 h-24 shadow-lg"
           alt="smaple image"
         />
       </div>
       <p class="text-gray-500">- Gina</p>
     </div>
   </div>
 </div>
 </div>
       </div>
     </>
   )
 
 }
 