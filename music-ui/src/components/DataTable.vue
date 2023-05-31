<script setup>
import {computed, defineProps, defineEmits, ref, watch} from 'vue'

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
    },

    totalItems: {
        type: Number
    }
})

const emit=defineEmits(['page-change', 'sort'])

const perPage=10
const pages = computed(()=> Math.ceil(props.totalItems/perPage))
const currentPage = ref( 1)
const sortDir = ref('asc')
const onPageClick= (pageNum)=>{
    if (pageNum===currentPage.value){
        return
    }
    currentPage.value=pageNum
    emit('page-change', pageNum)
}

const sort = (column)=>{
    // Basic sorting that doesn't consider column-level sort and just toggles between asc and desc.
    if (sortDir.value==='asc'){
        sortDir.value='desc'
    } else {
        sortDir.value='asc'
    }
    emit('sort', sortDir.value, column)
}

</script>

<template>
<div>
    <div v-if="loading">
        Loading...
    </div>
    <table v-else class="border border-1 border-gray-100 text-sm ">
        <tr>
            <th v-for="col of columns" class="p-4 border-r border-gray-100">
                <button @click="sort(col)" class="uppercase underline">
                    {{ col.replace('_', ' ') }}
                </button>
            </th>
        </tr>
        <tr v-for="item of  data" class="border border-b border-gray-100 hover:bg-gray-50">
            <td v-for="col of columns" class="p-4 border-r border-gray-100"> {{ item[col] }}</td>
        </tr>
    </table>
    <!--  Simple  Pagination -->
    <div class="flex gap-2 justify-center mt-10">
        <button
         v-for="page of pages"
         @click="onPageClick(page)"
         :class="{'underline': page!==currentPage, 'font-medium text-blue-500': page===currentPage}">
            {{ page }}
        </button>
    </div>
</div>
</template>
