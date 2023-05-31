<script setup>
import {useRoute} from "vue-router";

const route = useRoute()
</script>
<template>
<div class="flex">
    <div class="bg-gray-100 min-h-screen w-[10%] px-4">
      <div class="mt-10 flex flex-col gap-6">
          <RouterLink to="artists"
                      class="hover:bg-gray-200 py-4 px-2"
                      :class="{'font-medium text-blue-500': route.name==='artists'}">
                      Artists
          </RouterLink>
          <RouterLink to="albums"
                      class="hover:bg-gray-200 py-4 px-2"
                      :class="{'font-medium text-blue-500': route.name==='albums'}">
                      Albums
          </RouterLink>
          <RouterLink to="songs"
                      class="hover:bg-gray-200 py-4 px-2"
                      :class="{'font-medium text-blue-500': route.name==='songs'}">
                      Songs
          </RouterLink>
      </div>
    </div>
    <div class="w-[90%] px-4 mt-12">
        <router-view />
    </div>
</div>
</template>
