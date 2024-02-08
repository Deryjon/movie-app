<template>
    <div class="flex gap-[25px] items-center w-[889px] h-[65px] bg-[#212121] rounded-[30px] px-[40px] py-[15px]">
        <div class="w-[35px] h-[35px]">
            <img src="../assets/icons/Search.svg" alt="">
        </div>
        <input type="text" placeholder="Search for movies, TV shows..." v-model="searchQuery" @input="updateSearchQuery"
            class="bg-[#212121] w-[300px] text-[#666666]">
    </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const searchQuery = ref('');
const updateSearchQuery = () => {
    store.commit('updateSearchQuery', searchQuery.value);
};
watchEffect(() => {
    updateSearchQuery();
});
</script>

<style>
input {
    outline: none;
}

input::placeholder {
    color: #666666;
    opacity: 1;
}
</style>
