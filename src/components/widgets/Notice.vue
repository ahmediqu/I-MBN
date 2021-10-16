<template>
    <div class="sidebar-widget">
        <div class="widget-cont">
            <div class="notice-board" v-for="(notice , index) in notices" :key="index">
                <router-link :to="notice.link_address" v-if="notice.position == 0">
                    <img :src="`@/assets/site/notice/${notice.image_url}`" alt="">
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Notice",
    props: {
        notices:{},
    },
    mounted() {

    }
}
</script>

<style scoped>

</style>
