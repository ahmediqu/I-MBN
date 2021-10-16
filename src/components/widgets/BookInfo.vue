<template>
    <div>
        <div class="base-box">
            <header class="nb-header" style="background:var(--theme-color);">
                <h2 class="nb-title"><span>সকল সংখ্যা</span></h2>
            </header>
            <div class="single_cat_content widget-cont" v-if="books.length">
                <ul>
                    <li v-for="(book, index) in books" :key="index">
                        <i class="fa fa-edit"></i> <a href="" style="font-size:17px;">{{ book.title }}</a>
                    </li>
                </ul>
                <a href="#" class="ex-style text-center read-more">আরও</a>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "BookInfo",
    data() {
        return {
            books: [],
        }
    },
    mounted() {
        this.getBooks();
    },
    methods: {
        getBooks() {
            axios
                .get(`${process.env.VUE_APP_URL}/api/books`)
                .then(res => {
                    this.books = res.data.data;
                })
        }
    }
}
</script>

<style scoped>

</style>
