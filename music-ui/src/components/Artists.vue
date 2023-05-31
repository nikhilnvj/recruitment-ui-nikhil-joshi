<script setup>
import {getArtists} from '../services/api.js'

import {ref} from "vue";
import DataTable from "./DataTable.vue";

const loading =ref(false)
const artists = ref([])
const cols = ['id', 'name']
const params = ref({
  _page:0,
  _limit:10,
  _sort:'id',
  _order: 'asc'
})
const loadArtists = async ()=>{
  try {
     loading.value=true
      const res = await getArtists({
          params: params.value
      })
      artists.value=res.data
  } finally {
      loading.value=false
  }
}

loadArtists()
</script>

<template>
<div class="flex justify-center">
<DataTable :columns="cols" :loading="loading" :data="artists" />
</div>
</template>
