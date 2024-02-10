<template>
    <div class="sidebar bg-[#212121] w-[50px] lg:w-[226px]  rounded-r-[45px] pt-[56px]">
      <div class="img h-[42px] w-[118px] mx-auto">
        <img src="../../../assets/icons/logo-movie.svg" alt="" class="w-[100%] h-[100%]">
      </div>
      <div class="menu-items mt-[80px] text-[#666666]">
        <div tag="button" exact class="side-btn  py-[28px] px-[42px] " :class="{ active: isActive('home') }" @click="goHome('home')">
          <div class="link-container font-semibold text-[20px] flex mx-auto gap-[15px]" >
            <img src="../../../assets/icons/Home.svg" alt="">
            <p>Home</p>  
          </div>
        </div>
        <div tag="button" exact class="side-btn  py-[28px] px-[42px] " :class="{ active: isActive('movie') }" @click="goMovie('movie')">
          <div class="link-container font-semibold text-[20px] flex mx-auto gap-[15px]">
            <img src="../../../assets/icons/Movie Projector.svg" alt="">
            <p>Movies</p> 
          </div>
        </div>
        <div tag="button" exact class="side-btn  py-[28px] px-[42px]" :class="{ active: isActive('tv') }" @click="setActive('tv')">
          <div class="link-container font-semibold text-[20px] flex mx-auto gap-[15px]">
            <img src="../../../assets/icons/TV Show.svg" alt="">
            <p>TV Series</p>  
          </div>
        </div>
        <div tag="button" exact class="side-btn  py-[28px] px-[42px]" :class="{ active: isActive('upcoming') }" @click="setActive('upcoming')">
          <div class="link-container font-semibold text-[20px] flex mx-auto gap-[15px]">
            <img src="../../../assets/icons/Calendar.svg" alt="">
            <p>Upcoming</p> 
          </div>
        </div>
        <div tag="button" exact class="side-btn  py-[28px] px-[42px] mb-[20px]" :class="{ active: isActive('logout') }" @click="setActive('logout')">
          <div class="link-container font-semibold text-[20px] flex mx-auto gap-[15px]">
            <img src="../../../assets/icons/Logout.svg" alt="">
            <p>Log out</p>   
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const activeButton = ref('home');
  
  function isActive(button) {
    return activeButton.value === button;
  }
  
  function setActive(button) {
    activeButton.value = button;
  }
 function goHome(button){
    router.push({ name: 'home' });
    activeButton.value = button;

  }
 function goMovie(button){
    router.push({ name: 'movies' });
    activeButton.value = button;

  }
  </script>
  
  <style scoped>
  .active {
    background: #2c6865;
    color: #37B5B0;
    border-right: #37B5B0 solid 5px;
  }
  </style>