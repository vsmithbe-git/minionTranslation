<script setup>
import { ref } from "vue";
import {useAdvice} from "../composable/useAdvice";

const { advices, search } = useAdvice();

const searchItem = ref("");
</script>

<template>
  <div>
<input 
  v-model = "searchItem"
  @change="search(searchItem)"
  type="text" 
  placeholder="Search an Advise..." 
  class="w-full mt-16 rounded-full text-center py-4 text-xl"/>


<div class="grid grid-cols-2 gap-4 pt-16" >
  <div v-for = "(advice, index) in advices" :key="index">
  <p>
    {{advice.advice}}
  </p>
</div>
    
    </div>
  </div>
</template>