<template>
    <div>
        <div class="base-box">
            <header class="nb-header" style="background:var(--theme-color);">
                <h2 class="nb-title"><span>সর্বশেষ প্রবন্ধ</span></h2>
            </header>
            <div class="widget-cont" v-if="articles.length">

                <ul>
                    <li v-for="(article, index) in articles" :key="index">
                        <router-link :to="`/article/details/${article.id}`">
                            <i class="fa fa-long-arrow-right"></i>
                            {{ article.title }}
                        </router-link>
                        <span class="badge rounded-pill bg-info text-dark">{{  article.name }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "LatestArticle",
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
                .get(`${process.env.VUE_APP_URL}/api/latest-article`)
                .then(res => {
                    this.articles = res.data.data;
                })
        }
    }
}
</script>

<style scoped>

</style>
