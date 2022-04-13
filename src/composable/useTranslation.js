import { ref } from "vue";
import axios from "axios";

const animes = ref("");
const anmieBlackclovers = ref([]);
const anmieBleachs = ref([]);
const anmiefmaBrotherhoods = ref([]);
const anmieDragonballs = ref([]);
const anmieJujutsukaisens = ref([]);
const anmieGintamas = ref([]);
const Itachiuchihas = ref([]);
const anmieOnepieces = ref([]);
const anmieDemonslayers = ref([]);
const anmieAttackonTitans = ref([]);
const anmieHunterXhunters = ref([]);
const anmieBokunoheroAcademias = ref([]);


const api = axios.create({
    baseURL: `https://anime-facts-rest-api.herokuapp.com/api/v1`,
});

    export const useTranslation =  () =>   {

        const getAnmie =  async () => {
            const response = await api.get();
            animes.value = response.data.data;
        };

        const getBlackClover =  async () => {
            const response = await api.get("black_clover");
            anmieBlackclovers.value = response.data.data;
            
        };

        const getBleach =  async () => {
            const response = await api.get("bleach");
            anmieBleachs.value = response.data.data;
        };


        const getDragonBall =  async () => {
            const response = await api.get("dragon_ball");
            anmieDragonballs.value = response.data.data;
        };


        const getFMABrotherhood =  async () => {
            const response = await api.get("fma_brotherhood");
            anmiefmaBrotherhoods.value = response.data.data;
        };

        const getJujutsukaisen =  async () => {
            const response = await api.get("jujutsu_kaisen");
            anmieJujutsukaisens.value = response.data.data;
        };


          
        const getGintama =  async () => {
            const response = await api.get("gintama");
            anmieGintamas.value = response.data.data;
        };

        const getItachiuchiha =  async () => {
            const response = await api.get("itachi_uchiha");
            Itachiuchihas.value = response.data.data;
        };

        const getOnepiece =  async () => {
            const response = await api.get("one_piece");
            anmieOnepieces.value = response.data.data;
        };

        const getDemonslayer =  async () => {
            const response = await api.get("demon_slayer");
            anmieDemonslayers.value = response.data.data;
        };

        const getAttackonTitan =  async () => {
            const response = await api.get("attack_on_titan");
            anmieAttackonTitans.value = response.data.data;
        };

        const getHunterXhunter =  async () => {
            const response = await api.get("hunter_x_hunter");
            anmieHunterXhunters.value = response.data.data;
        };

        const getBokunoheroAcademia =  async () => {
            const response = await api.get("boku_no_hero_academia");
            anmieBokunoheroAcademias.value = response.data.data;
        };

    return {animes, getAnmie, anmieBleachs, getBleach, anmieBlackclovers, getBlackClover, anmieDragonballs, getDragonBall, anmiefmaBrotherhoods, getFMABrotherhood, anmieJujutsukaisens, getJujutsukaisen,  anmieGintamas, getGintama, Itachiuchihas,  getItachiuchiha, anmieOnepieces, getOnepiece, anmieDemonslayers,  getDemonslayer, anmieAttackonTitans, getAttackonTitan, anmieHunterXhunters, getHunterXhunter, anmieBokunoheroAcademias, getBokunoheroAcademia};

 };