<template>
    <footer class="w-[92%] border-t-[1px] border-[#e7e7e7] text-sm font-sarabun mx-auto">
        <div class="mt-8">
            <div v-if="playing">
                <a target="_blank" :href="playing.item.external_urls.spotify">
                    <i class="fa-brands fa-spotify text-[#1db954]"></i> <span class="font-semibold">{{ playing.item.name }}</span> - {{  playing.item.artists[0].name }}
                </a>
            </div>
            <div v-else>
                <i class="fa-brands fa-spotify text-[#1db954]"></i> <span class="font-semibold">Not Playing</span> - Spotify
            </div>
        </div>
        <div class="mt-8">
            <ul class="text-[#4f4f4f]">
                <li class="my-px">
                    <a href="https://github.com/rohitjethoe">
                        GitHub
                    </a>
                </li>
                <li class="my-px">
                    <a href="https://nl.linkedin.com/in/rohitjethoe">
                        LinkedIn
                    </a>
                </li>
                <li class="my-px">
                    <a href="mailto:rohitjethoe@proton.me">
                        Email
                    </a>
                </li>
            </ul>
        </div>
        <div class="text-center mt-8 mb-2">
            Made with <span class="text-[#db0000]">❤</span> by Rohit
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            bearer: null,
            playing: null
        }
    },
    methods: {
        getSpotifyPlaying: function (bearer) {
            return fetch(`${import.meta.env.VITE_API_ENDPOINT}/me/player/currently-playing`, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${bearer.access_token}`
                }
            })        
        }
    },
    mounted() {
        fetch(`${import.meta.env.VITE_TOKEN_ENDPOINT}/api/token`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: "Basic " + btoa(`${import.meta.env.VITE_CLIENT_ID}:${import.meta.env.VITE_CLIENT_SECRET}`)
            },
            body: new URLSearchParams({
                grant_type: 'refresh_token',
                refresh_token: import.meta.env.VITE_REFRESH_TOKEN
            }).toString()
        })
        .then(async (res) => {
            const bearer = await res.json();
            
            this.getSpotifyPlaying(bearer)
            .then(async (res) => {
                this.playing = await res.json();
            })
            .catch((err) => {
                this.playing = null;
            })
        })
        .catch((err) => {
            this.playing = null;
        })

        console.log(this.bearer)
    }
}
</script>