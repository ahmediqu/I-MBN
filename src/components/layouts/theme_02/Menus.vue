<template>
    <div>
        <section class="main-menu-section">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="main-menu-wrapper">
                            <ul>
                                <li v-for="(menu, index) in menus" :key="index">
                                    <router-link :to="`/${menu.menu_url}`">{{ menu.name }}</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="breadcrumbs" v-if="this.$route.path != '/' ">
            <breadcrumb
                :breadcrumbs="breadcrumbs"
                :title="pageTitle"
            />
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import {mapGetters} from "vuex";

export default {
    name: "Menus",
    data() {
        return {
            menus: [],
        }
    },
    created() {
        this.getMenus();
    },
    computed: {
        ...mapGetters([
            "breadcrumbs",
            "pageTitle",
        ]),
    },
    methods: {
        getMenus() {
            axios
                .get(`${process.env.VUE_APP_URL}t/api/menus`)
                .then(res => {
                    this.menus = res.data;
                })
        }
    }
}
</script>

<style scoped>

</style>
