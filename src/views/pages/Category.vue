<template>
    <div class="mt-5 container-fluid">
        <div class="row">
            <div class="col-md-3">
                <h3>Categories</h3>
            </div>
        </div>
    </div>
</template>

<script>
import {SET_BREADCRUMB} from "../../store/breadcrumbs";
import axios from "axios";

export default {
    name: "Category",
    mounted() {
        this.$store.dispatch(SET_BREADCRUMB, [
            {title: "বিভাগসমূহ", route: "/category"},
        ]);
    },
    created() {
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
