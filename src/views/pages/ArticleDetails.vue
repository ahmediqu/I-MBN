<template>
    <div>
        <div class="container-fluid mt-5">
            <div class="row">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <h3>{{ article.title }}</h3>
                                        <p class="mb-0">বিভাগ: <a href="#">{{ article.name }}</a></p>
                                        <p class="mb-0">লেখক: <a href="#">{{ article.writer_name }}</a></p>
                                        <p class="mb-0">বই: <a href="#">{{ article.bookTitle }}</a></p>
                                </div>
                                <div>
                                    <p class="mb-0"><span class="text-success"><i class="fa fa-eye"></i></span>
                                        {{ test(article.view_count) }} বার পঠিত</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br>
                    <div class="card">
                        <div class="card-body">
                            <div v-html="article.description"></div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <right-sidebar />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {SET_BREADCRUMB} from "../../store/breadcrumbs";
import axios from "axios";

export default {
    name: "ArticleDetails",
    data() {
        return {
            article: '',
            view_count: '',

        }
    },
    mounted() {
        this.getContactData();
        this.$store.dispatch(SET_BREADCRUMB, [
            {title: "অনুচ্ছেদ  বিস্তারিত", route: `/article/details/${this.$route.params.id}`},
        ]);
    },
    created() {

        this.test();
    },
    methods: {
        getContactData() {
            axios
                .get(`${process.env.VUE_APP_URL}/api/article/${this.$route.params.id}`)
                .then(res => {
                    this.article = res.data;
                    this.loading = false;
                    this.view_count = res.data.view_count;
                })
        },
        test() {
            var finalEnlishToBanglaNumber = {
                '0': '০',
                '1': '১',
                '2': '২',
                '3': '৩',
                '4': '৪',
                '5': '৫',
                '6': '৬',
                '7': '৭',
                '8': '৮',
                '9': '৯'
            };

            String.prototype.getDigitBanglaFromEnglish = function () {
                var retStr = this;
                for (var x in finalEnlishToBanglaNumber) {
                    retStr = retStr.replace(new RegExp(x, 'g'), finalEnlishToBanglaNumber[x]);
                }
                return retStr;
            };
            var english_number = `${this.view_count}`;
            var bangla_converted_number = english_number.getDigitBanglaFromEnglish();
            return bangla_converted_number
        }

    }
}
</script>

<style scoped>

</style>
