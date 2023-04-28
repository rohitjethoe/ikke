<template>
    <header class="relative py-4 px-4 flex items-center justify-between font-sarabun">
        <div>
            <h1 class="font-cormorant text-2xl">
                <a href="/">
                    Rohit Jethoe
                </a>
            </h1>
        </div>
        <div class="flex items-center gap-6">
            <div>
                <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="7.5" cy="7.5" r="7" stroke="black"/>
                    <path d="M13 15L18 21" stroke="#282828"/>
                </svg>
            </div>
            <div class="h-8 w-8 hover:cursor-pointer" @click="navOpened = !navOpened">
                <div :class="navOpened ? 'translate-y-1' : ''" class="my-2 transition-all w-8 h-px bg-primary"></div>
                <div :class="navOpened ? '-translate-y-1' : ''" class="my-2 transition-all w-8 h-px bg-primary"></div>
            </div>
        </div>
        <div :class="navOpened ? 'block' : 'hidden'" class="absolute top-16 left-0 px-4 bg-white w-full">
            <ul class="nav">
                <li class="text-primary my-3">
                    <router-link to="/">
                        Home
                    </router-link>
                </li>
                <li class="text-gassyGray my-4">
                    <router-link to="/archief">
                        Archief
                    </router-link>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            navOpened: false
        }
    }
}
</script>

<style scoped>
.nav a:link, .nav a:visited {
    color: #8a8a8a;
}

.nav .router-link-active, .nav .router-link-active:visited {
    color: #282828;
}
</style>