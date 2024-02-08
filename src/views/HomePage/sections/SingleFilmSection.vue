<template>
    <section class="single w-[1100px] text-white">
        <div v-if="movie">
            <div class="rating flex gap-[5px] items-center mt-[75px]">
<img src="../../../assets/icons/Star.svg" class="w-[30px] h-[30px]" alt="">
<div class=" flex items-center gap-[5px]">

    <p class="text-[25px]">{{ parseFloat(movie.vote_average).toFixed(1) }}</p> 
    |
    <p class="text-[#666666] text-[20px]">{{ movie.vote_count }}</p>
</div>
            </div>
            <div class="wrapper flex gap-[15px] items-center">

                <div class="name-title flex gap-[10px] ">
                    <p>{{ movie.title }}</p>
                    •
                    <p>{{ movie.release_date }}</p>
                    •
                    <p>Budget: {{ movie.budget }}</p>
                    
                </div>
                 
                <div class="bor rounded-[15px] px-[10px] py-[3px]" v-for="genre in movie.genres">
                    <p>{{ genre.name }}</p>
                </div>
            </div>

            <p class="mt-[25px] text-[20px]">{{ movie.overview }}</p>
            <!-- Другие детали о фильме -->
        </div>
        <div v-else>
            <p>Loading...</p>
        </div>
    </section>
</template>
  
<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const movie = ref(null);

const fetchMovieData = async () => {
    try {
        const movieId = router.currentRoute.value.params.id;
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=02708c4929ad93aa5e68f8ee7bfa4445`);        movie.value = response.data;
    } catch (error) {
        console.error('Error fetching movie data:', error);
    }
}

onMounted(() => {
    fetchMovieData();
});
</script>
  
<style scoped>
.bor{
    border: 1px solid #E8E8E8;
}
</style>
  