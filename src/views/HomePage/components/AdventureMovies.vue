<template>
    <section class="trending mt-[37px] w-[200px]  lg:w-[907px]">

        <div class="wrapper flex justify-between items-center">

            <h2 class="text-[25px] font-semibold text-white ">Adventure</h2>
            <p class="text-[#666666] text-[15px] font-semibold" @click="showAll = !showAll">See all</p>
        </div>
        <div class="wrapper flex justify-between gap-[20px] flex-wrap mt-[27px]">
            <div v-if="showAll" class="card w-[200px] h-[315px] rounded-[20px] relative" v-for="movie in movieData"
                :key="movie.id">
                <img :src="`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`" @click="goSingle(movie.id)" alt=""
                    class="rounded-[20px] w-full h-full object-cover">
                <div class="play rating  flex justify-between items-center absolute top-0 right-2
                         text-white font-medium rounded-r-[20px] rounded-bl-[20px]">
                    <img src="../../../assets/icons/Star.svg" alt="" class="w-[20px] h-[20px]">
                    {{ movie.vote_average }}
                </div>
            </div>
            <div v-else class="card w-[200px] h-[315px] rounded-[20px] relative" @click="goSingle(movie.id)" v-for="movie in limitedMovieData"
                :key="movie.id">
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


const store = useStore();
const movieData = ref([]);
const limitedMovieData = ref([]);
const showAll = ref(false);

const fetchData = async () => {
    try {
        const response = await axios.get('https://api.themoviedb.org/3/search/movie?api_key=02708c4929ad93aa5e68f8ee7bfa4445&query=adventure');
        movieData.value = response.data.results;
        movieData.value.forEach(movie => {
            movie.vote_average = parseFloat(movie.vote_average).toFixed(1);
        });
        limitedMovieData.value = movieData.value.slice(0, 4);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
function goSingle(movieId) {
    router.push({ name: 'single', params: { id: movieId }});
}

watchEffect(() => {
    fetchData();
});
</script>
<style></style>
