<template>
    <div class="mt-5 container-fluid">
        <div class="row">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-body">
                        <form ref="form">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="নাম" required>
                                <label for="floatingInput">নাম</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="email" placeholder="ই-মেইল" required>
                                <label for="email">ই-মেইল</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="address" placeholder="ঠিকানা" required>
                                <label for="address">ঠিকানা</label>
                            </div>
                            <div class="form-floating mb-3">
                                <textarea class="form-control" placeholder="প্রশ্ন" id="floatingTextarea2" style="height: 100px"></textarea>
                                <label for="floatingTextarea2">প্রশ্ন</label>
                            </div>
                            <button type="submit" class="btn btn-success btn-lg">Submit</button>

                        </form>
                    </div>
                </div>

            </div>
            <div class="col-md-4">
                <right-sidebar/>
            </div>
        </div>
    </div>
</template>

<script>
import {SET_BREADCRUMB} from "../../store/breadcrumbs";

export default {
    name: "Question",
    mounted() {
        this.$store.dispatch(SET_BREADCRUMB, [
            {title: "প্রশ্ন করুন", route: "/qa"},
        ]);
    },
}
</script>

<style scoped>

</style>
