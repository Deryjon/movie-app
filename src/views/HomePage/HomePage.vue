<template>
    <div class="dashboard items-start flex gap-[35px]">

       
    </div>
</template>
<script setup>
import { computed, watch } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import SideBar from './components/SideBar.vue'
import Search from '../../components/Search.vue'
import Notification from './components/Notification.vue';
import Avatar from './components/Avatar-Img.vue';

const store = useStore();
const router = useRouter();

const activeButton = computed(() => store.getters.activeButton);

watch(activeButton, (newValue, oldValue) => {
  if (newValue === 'home') {
    router.push({ name: 'home' });
  } else if (newValue === 'movie') {
    router.push({ name: 'movies' });
  } 
});
</script>
<style></style>
