<script setup>
import SideBar from './views/HomePage/components/SideBar.vue';
import Search from './components/Search.vue';
import Notification from './views/HomePage/components/Notification.vue';
import Avatar from './views/HomePage/components/Avatar-Img.vue';
</script>

<template>
   <div class="dashboard items-start flex gap-[35px]">

<SideBar />
<div class="">

    <div class="flex gap-x-[145px] items-center mt-[45px]">

        <Search />
        <div class=" flex gap-[25px]">

            <Notification />
            <Avatar />
        </div>
        
    </div>
    
    <RouterView />
</div>
</div>
</template>

<style scoped></style>
