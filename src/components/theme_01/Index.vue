<template>
    <div>
        <div class="container-fluid">
            <div class="main-content-wrapper">
                <div class="row">
                    <div class="col-lg-3 order-lg-0 order-md-3 order-3">

                        <div class="base-box">
                            <header class="nb-header" style="background:var(--theme-color);">
                                <h2 class="nb-title"><span>{{ homepagesettings.category.name }}</span></h2>
                            </header>
                            <!--                            <div class="single_cat_content widget-cont" v-if="books.length">-->
                            <!--                                <ul>-->
                            <!--                                    <li v-for="(book, index) in books" :key="index">-->
                            <!--                                        <i class="fa fa-edit"></i> <a href="" style="font-size:17px;">{{ book.title }}</a>-->
                            <!--                                    </li>-->
                            <!--                                </ul>-->
                            <!--                                <a href="#" class="ex-style text-center read-more">আরও</a>-->
                            <!--                            </div>-->
                        </div>
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
                    console.log('theme select', res.data)
                    this.homepagesettings = res.data.homepagesettings[0];
                })
        }
    }

}
</script>

<style scoped>

</style>
