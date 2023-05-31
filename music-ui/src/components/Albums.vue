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
const loadAlbums = async ()=>{
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

const onPageChange = (page)=>{
    params.value={
        ...params.value,
        _page: page
    }
    loadAlbums()
}

const onSort = (direction, column)=>{
    params.value={
        ...params.value,
        _sort:column,
        _order: direction
    }
    loadAlbums()
}

loadAlbums()
</script>

<template>
    <div class="flex justify-center">
        <DataTable
            :total-items="10"
            :columns="cols"
            :loading="loading"
            :data="albums"
            @page-change="onPageChange"
            @sort="onSort"/>
    </div>
</template>
