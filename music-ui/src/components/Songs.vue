<script setup>
import {getSongs} from '../services/api.js'

import {ref} from "vue";
import DataTable from "./DataTable.vue";

const loading =ref(false)
const songs = ref([])
const cols = ['id', 'track', 'album_id', 'name']
const params = ref({
    _page:0,
    _limit:10,
    _sort:'id',
    _order: 'asc'
})
const loadSongs = async ()=>{
    try {
        loading.value=true
        const res = await getSongs({
            params: params.value
        })
        songs.value=res.data
    } finally {
        loading.value=false
    }
}

const onPageChange = (page)=>{
    params.value={
        ...params.value,
        _page: page
    }
    loadSongs()
}

const onSort = (direction, column)=>{
    params.value={
        ...params.value,
        _sort:column,
        _order: direction
    }
    loadSongs()
}

loadSongs()
</script>

<template>
    <div class="flex justify-center">
        <DataTable
            :total-items="93"
            :columns="cols"
            :loading="loading"
            :data="songs"
            @page-change="onPageChange"
            @sort="onSort"/>
    </div>
</template>
