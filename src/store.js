import Vue from "vue";
import Vuex from "vuex";

Vue.use( Vuex );

export default new Vuex.Store({
    state: {
        data_container:[]
    },
    mutations: {},
    actions: {
        // http://datacenter.taichung.gov.tw/Swagger/OpenData/4014ff0f-0451-484a-97b5-43319c108474?limit=100
        //
        // http://datacenter.taichung.gov.tw/Swagger/OpenData/d4df29c5-385f-4bd4-9540-20aabeacba59?limit=100
        // https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97
        // 網址： http://datacenter.taichung.gov.tw/swagger/OpenData/59e738d4-2acd-48ab-869f-c94edac731ab
    }
});
