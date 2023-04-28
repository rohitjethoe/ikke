<template>
    <header class="py-4 px-4 flex items-center justify-between">
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
            <div>
                <div class="my-2 w-8 h-px bg-primary"></div>
                <div class="my-2 w-8 h-px bg-primary"></div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
}
</script>