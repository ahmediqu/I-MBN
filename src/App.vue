<template>
    <div>
        <loader-component v-if="loading"/>
        <div v-else>
            <theme-one v-if="theme_path == 'theme_01'"/>
            <theme-two v-else-if="theme_path == 'theme_02'"/>
            <theme-default v-else/>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import DefaultTheme from './components/Home';
export default {
    name: 'App',
    data() {
        return {
            theme_path: '',
            loading: true,
        }
    },
    components: [DefaultTheme],
    mounted() {
        this.getTheme();
    },
    methods: {
        getTheme() {
            axios
                .get(`${process.env.VUE_APP_URL}/api/theme`)
                .then(res => {
                    this.theme_path = res.data.design_path;
                    this.loading = false;
                })
        }
    }

}
</script>
