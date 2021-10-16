<template>
    <div>
        <header class="header-section">
            <div class="header-top">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <div class="header-top-content-wrapper">
                                <div class="left">
                                    <p>জানুয়ারি ০২, ২০২১</p>
                                </div>
                                <div class="right">
                                    <div class="top-social-links">
                                        <ul>
                                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                            <li><a href="#"><i class="fa fa-youtube"></i></a></li>
                                            <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                                            <li><a href="#"><i class="fa fa-feed"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header-bottom py-5 bg-white">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <nav class="navbar navbar-expand-lg navbar-light">
                                <div class="container-fluid">
                                    <a class="navbar-brand" href="#">
                                        Logo Here
                                    </a>
                                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#navbarSupportedContent"
                                            aria-controls="navbarSupportedContent" aria-expanded="false"
                                            aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>
                                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                            <form class="w-100">
                                                <div>
                                                    <b-input-group>
                                                        <template #prepend>
                                                            <b-dropdown text="Category" variant="outline-secondary">
                                                                <b-dropdown-item>Action C</b-dropdown-item>
                                                                <b-dropdown-item>Action D</b-dropdown-item>
                                                            </b-dropdown>
                                                            <b-dropdown text="Subject" variant="outline-secondary">
                                                                <b-dropdown-item>Action C</b-dropdown-item>
                                                                <b-dropdown-item>Action D</b-dropdown-item>
                                                            </b-dropdown>
                                                        </template>

                                                        <b-form-input></b-form-input>

                                                        <template #append>
                                                            <b-button size="md" text="Button" variant="success">Search
                                                            </b-button>
                                                        </template>
                                                    </b-input-group>
                                                </div>
                                            </form>
                                        </ul>

                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <menus/>
    </div>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>

</style>
