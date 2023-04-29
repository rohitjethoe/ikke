<template>
    <Layout>
        <main class="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:px-8">
            <div class="max-w-lg">
                <p class="text-base font-semibold leading-8 text-sexyGreen">404</p>
                <h1 class="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-5xl">Pagina niet gevonden</h1>
                <p class="mt-6 text-base leading-7 text-gassyGray">Sorry, we couldn’t find the page you’re looking for.</p>
                <div class="mt-10">
                <a href="/" class="text-sm font-semibold leading-7 text-sexyGreen"><span aria-hidden="true">&larr;</span> Back to home</a>
                </div>
            </div>
        </main>
    </Layout>
</template>

<script>
import Layout from '@/layouts/Layout.vue'

export default {
    name: 'Archief',
    components: {
        Layout, 
    }
}
</script>