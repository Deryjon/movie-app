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
            <HomeSection class="mt-[40px]"/>
            
        </div>
    </div>
</template>
<script setup>
import SideBar from './components/SideBar.vue'
import Search from '../../components/Search.vue'
import Notification from './components/Notification.vue';
import Avatar from './components/Avatar-Img.vue';
import HomeSection from './sections/HomeSection.vue';
</script>
<style></style>