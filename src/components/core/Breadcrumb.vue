<template>
    <div class="card">
        <div class="card-body">
            <div class="d-flex justify-content-between">
                <h2 class="mb-0">
                    {{ title }}
                </h2>
                <ul>
                    <template v-for="(breadcrumb, i) in breadcrumbs">
                        <li :key="`${i}-${breadcrumb.id}`" class="breadcrumb-item">
                            <router-link
                                :key="`${i}-${breadcrumb.id}`"
                                v-if="breadcrumb.route"
                                :to="breadcrumb.route"
                                class="text-muted">
                                {{ breadcrumb.title }}
                            </router-link>
                            <span
                                class="text-muted"
                                :key="`${i}-${breadcrumb.id}`"
                                v-if="!breadcrumb.route">
                                {{ breadcrumb.title }}
                          </span>
                        </li>
                    </template>
                </ul>
                <!--end::Breadcrumb-->
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "Breadcrumb",
    props: {
        breadcrumbs: Array,
        title: String
    },

}
</script>

<style scoped>

</style>
