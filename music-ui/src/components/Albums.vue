<script setup>
import {getAlbums} from '../services/api.js'

import {ref} from "vue";
import DataTable from "./DataTable.vue";

const loading =ref(false)
const albums = ref([])
const cols = ['id', 'artist_id', 'name', 'year_released']
const params = ref({
    _page:0,
    _limit:10,
    _sort:'id',
    _order: 'asc'
})
const loadArtists = async ()=>{
    try {
        loading.value=true
        const res = await getAlbums({
            params: params.value
        })
        albums.value=res.data
    } finally {
        loading.value=false
    }
}

loadArtists()
</script>

<template>
    <div class="flex justify-center">
        <DataTable :columns="cols" :loading="loading" :data="albums" />
    </div>
</template>
