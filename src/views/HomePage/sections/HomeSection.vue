<template>
    <section class="home">
        <div class="container">
            <div class="wrapper flex gap-[38px]">

                <div
                    class="home-basic w-[909px] h-[300px] flex justify-end items-end   gap-[25px] text-[#E8E8E8] text-[20px] font-semibold bg-green-500 rounded-[23px] py-[20px] px-[15px]">

                    <button class="play h-[55px] px-[25px] rounded-[15px] flex items-center gap-[2px]">
                        <img src="../../../assets/icons/Play.svg" alt="">
                        Play
                    </button>
                    <button class="play h-[55px] px-[20px] rounded-[15px] flex items-center gap-[2px]">
                        <img src="../../../assets/icons/Info.svg" alt="">
                        More info
                    </button>
                    <div>
                    </div>
                </div>
                <div class="w-[254px] h-[281px] bg-[#212121] rounded-[30px] mt-[59px] p-[20px] text-white">
                    <div class="action flex justify-between border-b-[#666666]">
                        <p>Action</p>
                        <input type="checkbox" v-model="isChecked" />

                    </div>
                </div>
            </div>
            <TrendingMovies />
            <UpcomingMovies/>
            <TopMovies/>
            <div class="wrapper flex gap-[20px] flex-wrap">
                <div class="card w-[200px] h-[315px] rounded-[20px] relative" v-for="movie in movieData" :key="movie.id">
                    <img :src="`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`" alt=""
                        class="rounded-[20px] w-full h-full object-cover">
                    <div class="play rating  flex justify-between items-center absolute top-0 right-0
                      text-white font-medium rounded-r-[20px] rounded-bl-[20px]">
                        <img src="../../../assets/icons/Star.svg" alt="" class="w-[20px] h-[20px]">
                        {{ movie.vote_average }}
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import http from '@/axios.config';
import { ref, watchEffect } from 'vue';
import { useStore } from 'vuex';
import TrendingMovies from '../components/TrendingMovies.vue';
import UpcomingMovies from '../components/UpcomingMovies.vue';
import TopMovies from '../components/TopMovies.vue';

const store = useStore();
const movieData = ref([]);
const isCheckedAction = ref(false);

const fetchData = async () => {
    const searchQuery = store.state.searchQuery;
    const response = await http.get(searchQuery);
    movieData.value = response.data.results;
    movieData.value.forEach(movie => {
        movie.vote_average = parseFloat(movie.vote_average).toFixed(1);
    });

}

watchEffect(() => {
    fetchData();
});
</script>
<style scoped>
.play {
    backdrop-filter: blur(20px);
}

.home-basic {
    background-image: url(../../../assets/img/moonfall.jpg);

}

.custom-checkbox input[type="checkbox"] {
  display: none;
}

.action{
    border-bottom: 1px solid #666666;
}

.custom-checkbox {
  position: relative;
  padding-left: 30px;
  cursor: pointer;
}

.custom-checkbox .icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  fill: #fff;
  border: 1px solid #000;
  border-radius: 4px;
}

.custom-checkbox input[type="checkbox"]:checked + .icon {
  fill: #fff;
  background: #37B5B0;
}
</style>
