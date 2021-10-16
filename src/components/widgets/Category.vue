<template>
<div>
    <div class="base-box">
        <header class="nb-header" style="background:var(--theme-color);">
            <h2 class="nb-title"><span>বিভাগসমূহ</span></h2>
        </header>

        <div class="widget-cont" v-if="categories.length">
            <ul>
                <li v-for="(category, index) in categories" :key="index">
                    <router-link  :to="`/category/${category.id}`">
                        <i class="fa fa-long-arrow-right"></i>
                        {{ category.name }}
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
    name: "Category",
    data() {
        return {
            categories: [],
        }
    },

    mounted() {
        this.getCategory();
    },
    methods: {
        getCategory() {
            axios
                .get(`${process.env.VUE_APP_URL}/api/categories`)
                .then(res => {
                    this.categories = res.data;

                })
        }
    }
}
</script>

<style scoped>

</style>
