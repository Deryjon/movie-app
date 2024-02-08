<template>
    <section class="trending mt-[37px] w-[907px]">
        <div class="wrapper flex justify-between gap-[20px] flex-wrap mt-[27px]">
            <div class="card w-[200px] h-[315px] rounded-[20px] relative" v-for="movie in movieData" @click="goSingle(movie.id)" :key="movie.id">
                <img :src="`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`" alt=""
                    class="rounded-[20px] w-full h-full object-cover">
                <div class="play rating  flex justify-between items-center absolute top-0 right-2
                 text-white font-medium rounded-r-[20px] rounded-bl-[20px]">
                    <img src="../../../assets/icons/Star.svg" alt="" class="w-[20px] h-[20px]">
                    {{ movie.vote_average }}
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import axios from 'axios';
import { ref, watchEffect } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const router = useRouter();

const movieData = ref([]);
const limitedMovieData = ref([]);

const fetchData = async () => {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=02708c4929ad93aa5e68f8ee7bfa4445');
        movieData.value = response.data.results;
        movieData.value.forEach(movie => {
            movie.vote_average = parseFloat(movie.vote_average).toFixed(1);
        });
    
}
function goSingle(movieId) {
    router.push({ name: 'single', params: { id: movieId }});
}

watchEffect(() => {
    fetchData();
});
</script>                                                                                                                                         