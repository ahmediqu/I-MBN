<template>
    <section id="contact" class="container-fluid mt-5">
        <loader-component v-if="loading"/>
        <div class="row justify-content-center" v-else>
            <div class="col-md-8 col-lg-8">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="single-box">
                                    <h2> {{ contact.web_title }}</h2>
                                    <h5 class="text-muted"> {{ contact.sub_title }}</h5>
                                    <p> {{ contact.web_description }} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br>
                <div class="card">
                    <div class="card-body">
                        <div class="contact-wrapper">
                            <h2 class="text-center mb-5">সার্বিক যোগাযোগ </h2>
                            <!-- Left contact page -->
                            <div class="row">
                                <div class="col-md-6">
                                    <form id="contact-form" class="form-horizontal" role="form">

                                        <div class="form-group">
                                            <div class="col-sm-12">
                                                <input type="text" class="form-control" id="name" placeholder="NAME"
                                                       name="name" value=""
                                                       required>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <div class="col-sm-12">
                                                <input type="email" class="form-control" id="email" placeholder="EMAIL"
                                                       name="email" value=""
                                                       required>
                                            </div>
                                        </div>

                                        <textarea class="form-control" rows="10" placeholder="MESSAGE" name="message"
                                                  required></textarea>

                                        <button class="btn btn-success send-button" id="submit" type="submit"
                                                value="SEND">
                                            <div class="alt-send-button">
                                                <i class="fa fa-paper-plane"></i><span class="send-text">SEND</span>
                                            </div>

                                        </button>

                                    </form>
                                </div>
                                <div class="col-md-6">
                                    <div class="direct-contact-container">

                                        <ul class="contact-list">
                                            <li class="list-item">
                                                <i class="fa fa-map-marker fa-2x">
                                                    <span class="contact-text place">{{ contact.address }}</span>
                                                </i>
                                            </li>

                                            <li class="list-item"><i class="fa fa-phone fa-2x"><span
                                                class="contact-text phone"><a
                                                href="tel:1-212-555-5555"
                                                title="Give me a call">
                                                {{ contact.phone_number }}
                                            </a></span></i></li>

                                            <li class="list-item"><i class="fa fa-envelope fa-2x"><span
                                                class="contact-text gmail"><a
                                                href="mailto:#" title="Send me an email">{{ contact.email }}</a></span></i>
                                            </li>

                                        </ul>

                                        <hr>
                                        <ul class="social-media-list">
                                            <li><router-link :to="contact.fb_link" target="_blank" class="contact-icon">
                                                <i class="fa fa-facebook" aria-hidden="true"></i></router-link>
                                            </li>
                                            <li><a href="#" target="_blank" class="contact-icon">
                                                <i class="fa fa-youtube" aria-hidden="true"></i></a>
                                            </li>
                                            <li><a href="#" target="_blank" class="contact-icon">
                                                <i class="fa fa-twitter" aria-hidden="true"></i></a>
                                            </li>
                                            <li><a href="#" target="_blank" class="contact-icon">
                                                <i class="fa fa-instagram" aria-hidden="true"></i></a>
                                            </li>
                                        </ul>
                                        <hr>


                                    </div>
                                </div>
                            </div>


                            <!-- Left contact page -->


                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
            <right-sidebar />
            </div>
        </div>
    </section>


</template>

<script>
import {SET_BREADCRUMB} from "../../store/breadcrumbs";
import axios from "axios";

export default {
    name: "Contact",
    data() {
        return {
            contact: {},
            loading: true,
        }
    },
    mounted() {
        this.$store.dispatch(SET_BREADCRUMB, [
            {title: "যোগাযোগ    ", route: "/page/contact"},
        ]);
    },
    created() {
        this.getContactData();
    },
    methods: {
        getContactData() {
            axios
                .get(`${process.env.VUE_APP_URL}/api/contact`)
                .then(res => {
                    this.contact = res.data;
                    this.loading = false;
                })
        }
    }

}
</script>

<style scoped>

.contact-wrapper {
    margin: 0 auto;
    padding: 20px;
}

/* Left contact page */
.form-horizontal {
    font-family: 'Lato';
    font-weight: 400;
}

.form-control,
textarea {
    max-width: 400px;
    background-color: #000;
    color: #fff;
    letter-spacing: 1px;
}

.send-button {
    margin-top: 15px;
    height: 34px;
    width: 400px;
    overflow: hidden;
    transition: all .2s ease-in-out;
}

.alt-send-button {
    width: 400px;
    height: 34px;
    transition: all .2s ease-in-out;
}

.send-text {
    display: block;
    margin-top: 10px;
    font: 700 12px 'Lato', sans-serif;
    letter-spacing: 2px;
}

.alt-send-button:hover {
    transform: translate3d(0px, -29px, 0px);
}

/* Begin Right Contact Page */
.direct-contact-container {
    /*max-width: 400px;*/
}

/* Location, Phone, Email Section */
.contact-list {
    list-style-type: none;
    margin-left: -30px;
    padding-right: 20px;
}

.list-item {
    line-height: 4;
    color: #aaa;
}

.contact-text {
    font: 300 18px 'Lato', sans-serif;
    letter-spacing: 1.9px;
    color: #000;
}

.place {
    margin-left: 62px;
}

.phone {
    margin-left: 56px;
}

.gmail {
    margin-left: 53px;
}

.contact-text a {
    color: #000;
    text-decoration: none;
    transition-duration: 0.2s;
}

.contact-text a:hover {
    color: #000;
    text-decoration: none;
}


/* Social Media Icons */
.social-media-list {
    position: relative;
    font-size: 22px;
    text-align: center;
    width: 100%;
    margin: 0 auto;
    padding: 0;
}

.social-media-list li a {
    color: #fff;
}

.social-media-list li {
    position: relative;
    display: inline-block;
    height: 60px;
    width: 60px;
    margin: 10px 3px;
    line-height: 60px;
    border-radius: 50%;
    color: #fff;
    background-color: rgb(27, 27, 27);
    cursor: pointer;
    transition: all .2s ease-in-out;
}

.social-media-list li:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 60px;
    height: 60px;
    line-height: 60px;
    border-radius: 50%;
    opacity: 0;
    box-shadow: 0 0 0 1px #fff;
    transition: all .2s ease-in-out;
}

.social-media-list li:hover {
    background-color: #fff;
}

.social-media-list li:hover:after {
    opacity: 1;
    transform: scale(1.12);
    transition-timing-function: cubic-bezier(0.37, 0.74, 0.15, 1.65);
}

.social-media-list li:hover a {
    color: #000;
}

.copyright {
    font: 200 14px 'Oswald', sans-serif;
    color: #555;
    letter-spacing: 1px;
    text-align: center;
}

hr {
    border-color: rgba(255, 255, 255, .6);
}

/* Begin Media Queries*/
@media screen and (max-width: 850px) {
    .contact-wrapper {
        display: flex;
        flex-direction: column;
    }

    .direct-contact-container, .form-horizontal {
        margin: 0 auto;
    }

    .direct-contact-container {
        margin-top: 60px;
        max-width: 300px;
    }

    .social-media-list li {
        height: 60px;
        width: 60px;
        line-height: 60px;
    }

    .social-media-list li:after {
        width: 60px;
        height: 60px;
        line-height: 60px;
    }
}

@media screen and (max-width: 569px) {

    .direct-contact-container, .form-wrapper {
        float: none;
        margin: 0 auto;
    }

    .form-control, textarea {

        margin: 0 auto;
    }


    .name, .email, textarea {
        width: 280px;
    }

    .direct-contact-container {
        margin-top: 60px;
        max-width: 280px;
    }

    .social-media-list {
        left: 0;
    }

    .social-media-list li {
        height: 55px;
        width: 55px;
        line-height: 55px;
        font-size: 2rem;
    }

    .social-media-list li:after {
        width: 55px;
        height: 55px;
        line-height: 55px;
    }

}

@media screen and (max-width: 410px) {
    .send-button {
        width: 99%;
    }
}
</style>
