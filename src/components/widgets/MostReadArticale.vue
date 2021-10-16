<template>
    <div>
        <div class="base-box">
            <header class="nb-header" style="background:var(--theme-color);">
                <h2 class="nb-title"><span>সর্বাধিক পঠিত প্রবন্ধ</span></h2>
            </header>
            <div class="widget-cont" v-if="articles.length">
                <ul>
                    <li v-for="(article, index) in articles" :key="index">
                        <router-link :to="`/article/details/${article.id}`">
                            <i class="fa fa-long-arrow-right"></i>
                            {{ article.title }}
                        </router-link>


                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "MostReadArticale",
    data() {
        return {
            articles: [],
        }
    },
    mounted() {
        this.getArticle();
    },
    methods: {
        getArticle() {
            axios
                .get(`${process.env.VUE_APP_URL}/api/most-reading-article`)
                .then(res => {
                    this.articles = res.data.data;
                })
        }
    }
}
</script>

<style scoped>

</style>
