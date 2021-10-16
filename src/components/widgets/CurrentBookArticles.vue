<template>
    <div>
        <div class="base-box">
            <header class="nb-header" style="background:var(--theme-color);">
                <h2 class="nb-title"><a
                    href=""
                    style="background:var(--theme-color);color:#fff">
                    {{ current_month_articles[0] ? current_month_articles[0].name : '' }}</a></h2>
            </header>

            <div class="widget-cont">
                <div class="sidebar-post-list">

                    <ul v-if="current_month_articles.length">
                        <li v-for="(article, index) in current_month_articles" :key="index">
                            <a href=""
                               style="font-size:17px;"
                               v-if="index < articleShow"><i class="fa fa-edit"></i>
                                {{ article.title }}
                            </a>
                        </li>
                    </ul>
                    <div class="text-center my-3"
                        v-if="articleShow < current_month_articles.length || current_month_articles.length > articleShow">
                        <button @click="articleShow += 5" class="btn btn-outline-success">Browse more</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CurrentBookArticles",
    props: {
        current_month_articles: [],
    },
    data() {
        return {
            articleShow: 20,
            totalArticle: 0,
        }
    },
    mounted() {
        this.totalArticle = this.current_month_articles.length;
    }
}
</script>

<style scoped>

</style>
