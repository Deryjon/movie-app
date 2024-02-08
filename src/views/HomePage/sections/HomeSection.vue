<template>
    <section class="home">
        <div class="container">
            <div class="home-basic w-[909px] h-[300px] flex justify-end items-end   gap-[25px] text-[#E8E8E8] text-[20px] font-semibold bg-green-500 rounded-[23px] py-[20px] px-[15px]">
                
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
            <div class="wrapper flex gap-[20px] flex-wrap">

                <div class="card w-[200px] h-[315px] rounded-[20px] bg-red-500 relative" v-for="movie in movieData" :key="movie.id">
                    <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="">
<div class="rating">

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
const store = useStore();
const movieData = ref([])


const fetchData = async () => {

    const searchQuery = store.state.searchQuery;
    const response = await http.get(`${searchQuery}`);
    movieData.value = response.data;
    

};

watchEffect(() => {
    fetchData();
});
</script>
<style scoped>
.play {
   backdrop-filter: blur(20px);
}
.home-basic{
    background-image: url(../../../assets/img/moonfall.jpg);

}
</style>
