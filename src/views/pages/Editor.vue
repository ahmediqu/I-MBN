<template>
    <div>
        <div class="container-fluid mt-5">
            <div class="row">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-body">
                            <div v-html="editor.content">

                            </div>
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
    name: "Editor",
    data() {
        return {
            editor: {},
            loading: true,
        }
    },
    mounted() {
        this.$store.dispatch(SET_BREADCRUMB, [
            {title: "সম্পাদনা পরিষদ", route: "/page/editor"},
        ]);
    },
    created() {
        this.getEditorData()
    },
    methods: {
        getEditorData() {
            axios
                .get(`${process.env.VUE_APP_URL}/api/editor`)
                .then(res => {
                    this.editor = res.data;
                    this.loading = false;
                })
        }
    }
}
</script>

<style scoped>

</style>
