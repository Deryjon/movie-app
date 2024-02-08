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
                <div
                    class="w-[254px] h-[281px] flex flex-col gap-[18px] bg-[#212121] rounded-[30px] mt-[59px] p-[20px] text-white">
                    <div class="action  position flex justify-between border-b-[#666666]">
                        <p>Action</p>
                        <div class="checkbox-custom">
                            <input type="checkbox" v-model="isCheckedAction" />
                        </div>
                    </div>

                    <div class="action flex justify-between border-b-[#666666]">
                        <p>Adventure</p>
                        <div class="checkbox-custom">
                            <input type="checkbox" v-model="isCheckedAdventure" />
                        </div>
                    </div>

                    <div class="action flex justify-between border-b-[#666666]">
                        <p>Animated</p>
                        <div class="checkbox-custom">
                            <input type="checkbox" v-model="isCheckedAnimated" />
                        </div>
                    </div>
                    <div class="action flex justify-between border-b-[#666666]">
                        <p>Comedy</p>
                        <div class="checkbox-custom">
                            <input type="checkbox" v-model="isCheckedComedy" />
                        </div>
                    </div>
                    <div class="action flex justify-between border-b-[#666666]">
                        <p>Crime</p>
                        <div class="checkbox-custom">
                            <input type="checkbox" v-model="isCheckedCrime" />
                        </div>
                    </div>
                    <div class="action flex justify-between border-b-[#666666]">
                        <p>Fantasy</p>
                        <div class="checkbox-custom">
                            <input type="checkbox" v-model="isCheckedFantasy" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="wrapper w-[908px] flex justify-between gap-[20px] flex-wrap">
                <div class="card w-[200px] h-[315px] rounded-[20px] relative" v-for="movie in movieData" :key="movie.id">
                    <img :src="`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`" @click="goSingle(movie.id)" alt=""
                        class="rounded-[20px] w-full h-full object-cover">
                    <div class="play rating  flex justify-between items-center absolute top-0 right-0
                      text-white font-medium rounded-r-[20px] rounded-bl-[20px]">
                        <img src="../../../assets/icons/Star.svg" alt="" class="w-[20px] h-[20px]">
                        {{ movie.vote_average }}
                    </div>

                </div>
            </div>
                <ActionMovies v-if="isCheckedAction"/>
            <AdventureMovies v-if="isCheckedAdventure"/>
            <AnimatedMovies v-if="isCheckedAnimated"/>
            <ComedyMovies v-if="isCheckedComedy"/>
            <CrimeMovies v-if="isCheckedCrime"/>
            <FantasyMovies v-if="isCheckedFantasy"/>
            <TrendingMovies />
            <UpcomingMovies />
            <TopMovies />
        </div>
    </section>
</template>

<script setup>
import http from '@/axios.config';
import { ref, watchEffect } from 'vue';
import { useStore } from 'vuex';
import TrendingMovies from '../components/TrendingMovies.vue';
import AdventureMovies from '../components/AdventureMovies.vue';
import AnimatedMovies from '../components/AnimatedMovies.vue';
import ComedyMovies from '../components/ComedyMovies.vue';
import CrimeMovies from '../components/CrimeMovies.vue';
import FantasyMovies from '../components/FantasyMovies.vue';
import UpcomingMovies from '../components/UpcomingMovies.vue';
import TopMovies from '../components/TopMovies.vue';
import ActionMovies from '../components/ActionMovies.vue';
import { useRouter } from 'vue-router';

const router = useRouter();


const store = useStore();
const movieData = ref([]);
const isCheckedAction = ref(false);
const isCheckedAdventure = ref(false);
const isCheckedAnimated = ref(false);
const isCheckedComedy = ref(false);
const isCheckedCrime = ref(false);
const isCheckedFantasy = ref(false);

const fetchData = async () => {
    const searchQuery = store.state.searchQuery;
    const response = await http.get(searchQuery);
    movieData.value = response.data.results;
    movieData.value.forEach(movie => {
        movie.vote_average = parseFloat(movie.vote_average).toFixed(1);
    });


}
function goSingle(movieId) {
    router.push({ name: 'single', params: { id: movieId } });
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

.action {
    border-bottom: 1px solid #666666;
}

.checkbox-custom {
    --unchecked-color: #ccc;
    /* Цвет флажка в неотмеченном состоянии */
    --checked-color: #3DD2CC;
    /* Цвет флажка в отмеченном состоянии */
    --background-color: #f0f0f0;
    /* Цвет фона */
}

.checkbox-custom input[type="checkbox"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    border: 2px solid var(--unchecked-color);
    border-radius: 4px;
    outline: none;
    transition: 0.3s;
    background-color: var(--background-color);
    /* Цвет фона */
}

.checkbox-custom input[type="checkbox"]:checked {
    border-color: var(--checked-color);
    background-color: var(--checked-color);
}

.checkbox-custom input[type="checkbox"]:checked::before {
    content: '\2713';
    /* Значок ✓ */
    position: absolute;
    width: 16px;
    height: 16px;
    text-align: center;
    line-height: 16px;
    color: white;
}
</style>
