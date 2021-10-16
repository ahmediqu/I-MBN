<template>
    <div class="mt-5 container-fluid">
        <loader-component v-if="loading"/>
        <div class="row" v-else>
            <div class="col-md-8">
                <div v-if="articles.length">
                    <div class="card mb-3" v-for="(article, index) in articles" :key="index">
                        <div class="card-body">
                            <h3> {{ article.title }}</h3>
                            <!--                        <p v-html="article.description"></p>-->
                        </div>
                    </div>
                </div>
                <div v-else>
                    <h4 class="text-center">Data not found</h4>
                </div>
            </div>
            <div class="col-md-4">
                <right-sidebar/>
            </div>
        </div>
    </div>
</template>

<script>
import {SET_BREADCRUMB} from "../../store/breadcrumbs";
import axios from "axios";

export default {
    name: "CategoryWiseArticle",
    data() {
        return {
            articles: [],
            loading: true,
        }
    },
    mounted() {
        this.$store.dispatch(SET_BREADCRUMB, [
            {title: "Articles", route: "/page/editor"},
        ]);
        this.getCategoryWiseArtigle()
    },
    created() {

    },
    methods: {
        getCategoryWiseArtigle() {
            this.loading = true;
            axios
                .get(`${process.env.VUE_APP_URL}/api/category/${this.$route.params.id}`)
                .then(res => {
                    this.articles = res.data;
                    this.loading = false;
                })
        }
    }
}
</script>

<style scoped>

</style>
