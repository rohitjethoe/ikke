<template>
    <Layout>
        <div class="pt-[24vh]">
          <h1 class="mx-3 text-xl min-[440px]:text-2xl sm:text-3xl">
            <span class="bg-sexyGreen px-1">{{ title }}</span> in Amsterdam. <br>
            Technologie gepolijst met precisie.
          </h1>
          <p class="mx-3 mt-1 text-xs">Laten we praten <a class="font-semibold text-sexyGreen underline" href="mailto:rohitjethoe@proton.me">rohitjethoe@proton.me</a></p>
        </div>
  
        <div class="pt-[24vh]">
          <img class="w-3 min-[500px]:w-4" src="@/assets/arrow-down.svg" alt="">
        </div>
  
        <div>
          <div class="pt-36">
            <h2 class="uppercase font-bold text-gassyGray text-xs">
              Uitgelichte projecten
            </h2>
  
            <div class="pt-12 pb-24">
              <p class="font-cormorant w-5/6 mx-auto text-base sm:text-lg">Reddit Karma Farm is een desktop applicatie die geautomatiseerd karmapunten op Reddit verzamelt. De punten worden verzamelt door comments te plaatsen. Volledig gebouwt op JavaScript met de welbekende libraries Puppeteer en Electron met Vue.js.</p>
              <div class="flex mt-8 w-[200vw] md:translate-x-10">
                <div class="w-[350px]">
                  <img src="@/assets/reddit-karma-farm.webp" alt="">
                  <p class="mt-4 text-sm"><span class="text-gassyGray text-xs">de</span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; reddit karma farm</p>
                </div>
                <div class="w-[366px]">
                  <img class="transform -translate-x-36 translate-y-20 aspect-video object-contain" src="@/assets/rkf-code.webp" alt="">
                </div>
                <div class="w-[100px] -translate-x-[380px] translate-y-4">
                  <img src="@/assets/reddit.webp" alt="">
                </div>
              </div>
              <div class="text-center text-sm sm:text-base mt-12">
                <a href="https://github.com/rohitjethoe/reddit-karma-farm" target="_blank">
                  <i class="fa-brands fa-github"></i> Bekijk op Github
                </a>
              </div>
            </div>
  
            <div class="pt-12 pb-24">
              <p class="font-cormorant w-5/6 mx-auto text-right text-base sm:text-lg">Bol.com Affiliate Web API is een backendsysteem gebouwd in Node.js die gebruikt maakt caching om de JWT tokens op te slaan. Zo worden er aan de regels voldaan van Bol.com om zo min mogelijk API calls te maken.</p>
              <div class="flex mt-8 w-[200vw]">
                <div class="w-[350px]">
                  <p class="my-4 text-sm"><span class="text-gassyGray text-xs">een</span>&nbsp; <span class="hidden min-[400px]:inline-block">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>nodejs bol api</p>
                  <img src="@/assets/bwa-code.webp" alt="">
                </div>
                <div class="w-[366px]">
                  <img class="-translate-x-36 -translate-y-2 aspect-video object-contain" src="@/assets/bol-web-api.webp" alt="">
                </div>
                <div class="w-[100px] -translate-x-[520px] -translate-y-4">
                  <img class="rounded" src="@/assets/bol.webp" alt="">
                </div>
              </div>
              <div class="text-center text-sm sm:text-base mt-12">
                <a href="https://github.com/rohitjethoe/nodejs-bol-webapi" target="_blank">
                  <i class="fa-brands fa-github"></i> Bekijk op Github
                </a>
              </div>
            </div>
          </div>
        </div>
  
        <div>
          <div class="pt-36">
            <h2 class="uppercase font-bold text-gassyGray text-xs">
              Werkervaringen
            </h2>
            <div class="pt-12">
              <div class="inline-block w-48 h-3 pb-10">
                <h1 class="font-cormorant text-xl text-center">'april 2023 - heden</h1> 
              </div>
              <div class="flex items-center gap-6">
                <img class="w-36" src="@/assets/monostatic.webp" alt="">
                <div class="text-sm">
                  <h2 class="font-semibold">Fullstack Developer</h2>
                  <h2 class="text-gassyGray font-semibold">Monostatic</h2>
                  <br>
                  <p class="text-gassyGray w-48">
                    Bij Monostatic werk ik in JavaScript en PHP met libraries zoals Vue.js en CraftCMS.  
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
	</Layout>
</template>
  
<script>
import Layout from '@/layouts/Layout.vue';
  
export default {
    name: 'App',
    mounted() {
        const titles = ['JavaScript Developer', 'Backend Developer', 'Frontend Developer', 'Fullstack Developer'];
		let i = 0;
        setInterval(() => {
			i++;
			if (i < titles.length) {
				this.title = titles[i]
			} else {
				clearInterval();
			}
        }, 300)
    },
	data() {
		return {
			title: 'JavaScript Developer'
		}
	},
    components: {
      Layout
    }
}
</script>
  
<style>
html, body {
    background-color: #F9FAFB;
    overflow-x: hidden;
}
</style>