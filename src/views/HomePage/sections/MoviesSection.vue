<template>
    <div class="flex gap-[35px]">
        <ActionMovies v-if="isCheckedAction"/>
            <AdventureMovies v-if="isCheckedAdventure"/>
            <AnimatedMovies v-if="isCheckedAnimated"/>
            <ComedyMovies v-if="isCheckedComedy"/>
            <CrimeMovies v-if="isCheckedCrime"/>
            <FantasyMovies v-if="isCheckedFantasy"/>
        <section class="trending mt-[37px] w-[907px]">
            <div class="wrapper flex justify-between gap-[20px] flex-wrap mt-[27px]">
                <div class="card w-[200px] h-[315px] rounded-[20px] relative" v-for="movie in movieData"
                    @click="goSingle(movie.id)" :key="movie.id">
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
</template>

<script setup>
import axios from 'axios';
import { ref, watchEffect } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import AdventureMovies from '../components/AdventureMovies.vue';
import AnimatedMovies from '../components/AnimatedMovies.vue';
import ComedyMovies from '../components/ComedyMovies.vue';
import CrimeMovies from '../components/CrimeMovies.vue';
import FantasyMovies from '../components/FantasyMovies.vue';
import ActionMovies from '../components/ActionMovies.vue';

const router = useRouter();

const movieData = ref([]);
const isCheckedAction = ref(false);
const isCheckedAdventure = ref(false);
const isCheckedAnimated = ref(false);
const isCheckedComedy = ref(false);
const isCheckedCrime = ref(false);
const isCheckedFantasy = ref(false);

const fetchData = async () => {
    const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=02708c4929ad93aa5e68f8ee7bfa4445');
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