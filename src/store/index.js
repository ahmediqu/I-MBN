import Vue from "vue";
import Vuex from "vuex";
import breadcrumbs from "./breadcrumbs";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        breadcrumbs,
    }
});
