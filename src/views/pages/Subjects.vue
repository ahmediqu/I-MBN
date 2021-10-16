<template>
    <div class="mt-5 container-fluid">
        <div class="row">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-3 mb-3" v-for="(subject, index) in subjects" :key="index">
                                <a href="">
                                    <div class="card">
                                        <div class="card-body">
                                            <h4 class="mb-0">{{ subject.subject_name }}</h4>
                                            <p class="mb-0">{{ subject.subject_description }}</p>
                                        </div>
                                    </div>
                                </a>

                            </div>
                        </div>
                    </div>
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
    name: "Subjects",
    data() {
        return {
            subjects: [],
        }
    },
    mounted() {
        this.getSubjects();
        this.$store.dispatch(SET_BREADCRUMB, [
            {title: "বিষয়সমূহ", route: "/subject"},
        ]);
    },
    methods: {
        getSubjects() {
            axios
                .get(`${process.env.VUE_APP_URL}/api/subjects`)
                .then(res => {
                    this.subjects = res.data;
                })
        }
    }
}
</script>

<style scoped>

</style>
