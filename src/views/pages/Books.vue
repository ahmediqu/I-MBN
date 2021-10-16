<template>
    <div class="mt-5 container">
        <div class="row">
            <div class="col-md-3" v-for="(book , index) in books" :key="index">
                <div class="card mb-2">
                    <img :src="getImgUrl(book.cover_photo)" :alt="book.title" class="card-img-top">
                    <div class="card-body text-center">
                        <h5 class="card-title">{{ book.title }}</h5>
                        <a href="#" class="btn btn-success btn-sm ">Download</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {SET_BREADCRUMB} from "../../store/breadcrumbs";
import axios from "axios";

export default {
    name: "Books",
    data() {
        return {
            books: [],
            img: '',
        }
    },
    mounted() {
        this.$store.dispatch(SET_BREADCRUMB, [
            {title: "সকল সংখ্যা", route: "/books"},
        ]);
    },
    created() {
        this.getBooks();
    },
    methods: {
        getBooks() {
            axios
                .get(`${process.env.VUE_APP_URL}/api/books/all`)
                .then(res => {
                    this.books = res.data;
                })
        },
        images(img) {
            if (img) {
                return `../../../../assets/site/images${img}`;
            }
        },
        getImgUrl(pic) {
            if (pic) {
                return '../../assets/site/images/'+pic;
            }else{
                return require('../../assets/site/images/cover_photo_1969_12_01.jpg');
            }
        }
    }
}
</script>

<style scoped>

</style>
