<template>
    <div class="sm:w-[612px] md:w-[740px] sm:mx-auto md:mx-auto">
        <Header />
        <div class="pb-36 w-[92%] mx-auto font-sarabun">
            <slot />
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue';

export default {
    name: "Layout",
    components: {
        Header,
        Footer
    }
}
</script>