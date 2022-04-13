<script setup>
import {useTranslation} from "../composable/useTranslation";

const {animes, getAnmie, anmieBleachs, getBleach, anmieBlackclovers, getBlackClover, anmieDragonballs, getDragonBall, anmiefmaBrotherhoods, getFMABrotherhood, anmieJujutsukaisens, getJujutsukaisen,  anmieGintamas, getGintama, Itachiuchihas,  getItachiuchiha, anmieOnepieces, getOnepiece, anmieDemonslayers,  getDemonslayer, anmieAttackonTitans, getAttackonTitan, anmieHunterXhunters, getHunterXhunter, anmieBokunoheroAcademias, getBokunoheroAcademia, } = useTranslation();


</script>

<template>

<div class="mx-auto justify-items-center">


         <div class=" bg-blue-800 rounded-lg mt-8 p-4">
        <button @click="getBlackClover" 
        class="px-4 bg-blue-800 rounded-sm  text-white cursor-pointer  hover:scale-125 hover:bg-purple-900 font-semibold tracking-tight">Black Clover Anime Facts</button>
        <p class="p-4 bg-white rounded-md mt-5 "
            v-for="(anmieBlackclover,index) in anmieBlackclovers" :key="index">
                {{anmieBlackclover.fact_id}}.  {{anmieBlackclover.fact}}
        </p>
       </div>

         <div class=" bg-blue-800 rounded-lg mt-8 p-4">
        <button @click="getBleach"
       class="px-4 bg-blue-800 rounded-sm  text-white cursor-pointer  hover:scale-125 hover:bg-purple-900 font-semibold tracking-tight">Bleach Anime Facts</button>
       <p class="p-4 bg-white rounded-md mt-5 "
        v-for="(anmieBleach,index) in anmieBleachs" :key="index">
            {{anmieBleach.fact_id}}. {{anmieBleach.fact}}</p>
        </div>

         <div class=" bg-blue-800 rounded-lg mt-8 p-4">
        <button @click="getDragonBall"
        class="px-4 bg-blue-800 rounded-sm  text-white cursor-pointer  hover:scale-125 hover:bg-purple-900 font-semibold tracking-tight">Dragronball Anime Facts</button>
        <p class="p-4 bg-white rounded-md mt-5 "
        v-for="(anmieDragonball,index) in anmieDragonballs" :key="index"
        >
        {{anmieDragonball.fact_id}}. {{anmieDragonball.fact}}</p>
        </div>

         <div class=" bg-blue-800 rounded-lg mt-8 p-4">
        <button @click="getFMABrotherhood"
        class="px-4 bg-blue-800 rounded-sm  text-white cursor-pointer  hover:scale-125 hover:bg-purple-900 font-semibold tracking-tight">FMA Brotherhood Anime Facts</button>
        <p class="p-4 bg-white rounded-md mt-5 "  
        v-for="(anmiefmaBrotherhood,index) in anmiefmaBrotherhoods" :key="index">
        {{anmiefmaBrotherhood.fact_id}}. {{anmiefmaBrotherhood.fact}}</p>
        </div>

         <div class=" bg-blue-800 rounded-lg mt-8 p-4">
        <button @click="getJujutsukaisen"
        class="px-4 bg-blue-800 rounded-sm  text-white cursor-pointer  hover:scale-125 hover:bg-purple-900 font-semibold tracking-tight">Jujustsu Kaisen Anime Facts</button>
        <p class="p-4 bg-white rounded-md mt-5 "  
        v-for="(anmieJujutsukaisen,index) in anmieJujutsukaisens" :key="index"
        >
        {{anmieJujutsukaisen.fact_id}}. {{anmieJujutsukaisen.fact}}
        </p>
        </div>

         <div class=" bg-blue-800 rounded-lg mt-8 p-4">
        <button @click="getGintama"
        class="px-4 bg-blue-800 rounded-sm  text-white cursor-pointer  hover:scale-125 hover:bg-purple-900 font-semibold tracking-tight">Get Gintama</button>
        <p class="p-4 bg-white rounded-md mt-5 "  
        v-for="(anmieGintama,index) in anmieGintamas" :key="index">
            {{anmieGintama.fact_id}}. {{anmieGintama.fact}}
            </p>
        </div>

         <div class=" bg-blue-800 rounded-lg mt-8 p-4">
        <button @click="getItachiuchiha"
        class="px-4 bg-blue-800 rounded-sm  text-white cursor-pointer  hover:scale-125 hover:bg-purple-900 font-semibold tracking-tight">Get Itachiuchiha</button>
        <p class="p-4 bg-white rounded-md mt-5 "  
        v-for="(Itachiuchiha,index) in Itachiuchihas" :key="index">
        {{Itachiuchiha.fact_id}}.  {{Itachiuchiha.fact}}
        </p>
        </div>

          <div class=" bg-blue-800 rounded-lg mt-8 p-4">
        <button @click="getOnepiece"
        class="px-4 bg-blue-800 rounded-sm  text-white cursor-pointer  hover:scale-125 hover:bg-purple-900 font-semibold tracking-tight">Get One Piece</button>
        <p class="p-4 bg-white rounded-md mt-5 "  
        v-for="(anmieOnepiece,index) in anmieOnepieces" :key="index">
        {{anmieOnepiece.fact_id}}. {{anmieOnepiece.fact}}
        </p>
        </div>

         <div class=" bg-blue-800 rounded-lg mt-8 p-4">
        <button @click="getDemonslayer"
       class="px-4 bg-blue-800 rounded-sm  text-white cursor-pointer  hover:scale-125 hover:bg-purple-900 font-semibold tracking-tight">Get Demon Slayer</button>
        <p class="p-4 bg-white rounded-md mt-5 "  
        v-for="(anmieDemonslayer,index) in anmieDemonslayers" :key="index">
        {{anmieDemonslayer.fact_id}}. {{anmieDemonslayer.fact}}
        </p>
        </div>

         <div class=" bg-blue-800 rounded-lg mt-8 p-4">
        <button @click="getAttackonTitan"
        class="px-4 bg-blue-800 rounded-sm  text-white cursor-pointer  hover:scale-125 hover:bg-purple-900 font-semibold tracking-tight">Get Attack on Titan</button>
        <p class="p-4 bg-white rounded-md mt-5 " 
        v-for="(anmieAttackonTitan,index) in anmieAttackonTitans" :key="index">
        {{anmieAttackonTitan.fact_id}}. {{anmieAttackonTitan.fact}}
        </p>
        </div>

        <div class=" bg-blue-800 rounded-lg mt-8 p-4">
        <button @click="getHunterXhunter"
        class="px-4 bg-blue-800 rounded-sm  text-white cursor-pointer  hover:scale-125 hover:bg-purple-900 font-semibold tracking-tight">Get Hunter x Hunter</button>
        <p class="p-4 bg-white rounded-md mt-5 "  
        v-for="(anmieHunterXhunter,index) in anmieHunterXhunters" :key="index">
        {{anmieHunterXhunter.fact_id}}. {{anmieHunterXhunter.fact}}
        </p>
        </div>

        
        <div class=" bg-blue-800 rounded-lg mt-8 p-4">
        <button @click="getBokunoheroAcademia"
       class="px-4 bg-blue-800 rounded-sm  text-white cursor-pointer  hover:scale-125 hover:bg-purple-900 font-semibold tracking-tight">Get Bokunohero Academia</button>
        <p class="p-4 bg-white rounded-md mt-5 "  
        v-for="(anmieBokunoheroAcademia,index) in anmieBokunoheroAcademias" :key="index">
        {{anmieBokunoheroAcademia.fact_id}}. {{anmieBokunoheroAcademia.fact}} 
        </p>
       </div>
       
</div>

</template>
