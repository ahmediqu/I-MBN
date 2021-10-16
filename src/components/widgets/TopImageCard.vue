<template>
    <div>
        <div class="row mb-4" v-for="(section, index) in sections.homepagesettings" :key="index">
            <div class="col" v-if="section.section_type=='center'">
                <div>
                    <div class="card">
                        <div class="card-header bg-success text-white d-flex justify-content-between align-items-center">
                            <router-link :to="`/category/${section.category.id}`" class="text-white">{{ section.category.name }}</router-link>
                            <button type="button" class="btn btn-danger position-relative ms-5">
                                মোট নিবন্ধ
                                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {{ section.category.articles.length }}
                                    <span class="visually-hidden">unread messages</span>
                                  </span>
                            </button>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div :class="`col-md-${12/section.section_number_of_posts}`" v-for="(article, index) in section.category.articles"
                                     :key="index">
                                    <div class="card mb-3" v-if="index < section.section_number_of_posts">
                                        <div class="card-body mb-3">
                                            <h5 class="card-title">{{ article.title }}</h5>
                                            <span class="badge bg-primary mb-2">
                                                 <i class="fa fa-eye me-2"></i>
                                                {{ article.view_count }}
                                            </span>
                                            <br>
                                            <a href="#" class="btn btn-success btn-sm text-center">read more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TopImageCard",
    props: {
        sections: [],
    },
    data(){
        return{
            section_number_of_posts: this.sections.section_number_of_posts
        }
    },
    created() {
        this.getSections();
    },
    methods:{
        getSections(){

        },
        truncate(str, n){
            return (str.length > n) ? str.substr(0, n-1) + '&hellip;' : str;
        }

    }



}
</script>

<style scoped>

</style>
