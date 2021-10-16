<template>
    <div>
        <div class="container-fluid">
            <div class="main-content-wrapper">
                <div class="row">
                    <div class="col-lg-3 order-lg-0 order-md-3 order-3">
                        <h3>yes this is working</h3>
                        {{ homepagesettings }}
                    </div>
                    <div class="col-lg-6 order-lg-1 order-md-0 order-0">
                        <top-image-card class="mb-4" :sections="sections"/>
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
    name: "Index",
    data() {
        return {
            sections: [],
            homepagesettings: [],
        }
    },
    created() {
        this.getHomePageSetting();
    },
    methods: {
        getHomePageSetting() {
            axios
                .get(`${process.env.VUE_APP_URL}/api/home-page-setting`)
                .then(res => {
                    this.sections = res.data;
                    this.homepagesettings = res.data.homepagesettings[0];
                })
        }
    }

}
</script>

<style scoped>

</style>
