<script setup>
import {defineProps} from 'vue'

const props = defineProps({
  columns:{
    type: Array,
    required: true,
    default: []
  },
    loading:{
        type: Boolean,
    },
    data:{
        type: Array,
        default: []
    }
})
</script>

<template>
<div>
    <div v-if="loading">
        Loading...
    </div>
    <table v-else class="border border-1 border-gray-100 text-sm ">
        <tr>
            <th v-for="col of columns" class="p-4 border-r border-gray-100 uppercase">{{ col.replace('_', ' ') }}</th>
        </tr>
        <tr v-for="item of  data" class="border border-b border-gray-100 hover:bg-gray-50">
            <td v-for="col of columns" class="p-4 border-r border-gray-100"> {{ item[col] }}</td>
        </tr>
    </table>
</div>
</template>
