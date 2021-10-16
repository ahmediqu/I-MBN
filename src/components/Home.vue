<template>
    <div>
        <div class="container-fluid">
            <div class="main-content-wrapper">
                <div class="row">
                    <div class="col-lg-3 order-lg-0 order-md-3 order-3">
                        <div class="left-sidebar-wrapper">
                            <current-book/>
                            <notice :notices="notice"/>
                            <category/>
                        </div>
                    </div>
                    <div class="col-lg-6 order-lg-1 order-md-0 order-0">
                        <current-book-articles :current_month_articles="current_month_articles"/>
                    </div>
                    <div class="col-lg-3 order-lg-2 order-md-2 order-2 wow fadeInRight">
                        <book-info/>
                        <most-read-article/>
                        <latest-article/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Home",
    data() {
        return {
            categories: [],
            notice: [],
            current_month_articles: [],
        }
    },
    mounted() {
        this.getCategory();
        this.getNotice();
        this.getCurrentMonthBook();
    },
    methods: {
        getCategory() {
            axios
                .get(`${process.env.VUE_APP_URL}/api/categories`)
                .then(res => {
                    this.categories = res.data;
                })
        },

        getNotice() {
            axios
                .get(`${process.env.VUE_APP_URL}/api/notice`)
                .then(res => {
                    this.notice = res.data;
                })
        },

        getCurrentMonthBook() {
            axios
                .get(`${process.env.VUE_APP_URL}/api/current-month-magazine`)
                .then(res => {
                    this.current_month_articles = res.data;
                })
        }
    }
}
</script>

<style scoped>

</style>
