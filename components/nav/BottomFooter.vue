<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-lg-6">
                    <ul class="nav-container">
                        <li>
                            <nuxt-link to="/" class="nav-link">Home</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/about" class="nav-link">About Us</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/contact" class="nav-link">Contact Us</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/request" class="nav-link">Get a Quote</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/admin" class="nav-link">Admin</nuxt-link>
                        </li>
                    </ul>
                </div>
                <div class="col-sm-12 col-lg-6">
                    <ul id="social-icon-container">
                        <li>
                            <a href="#" class="social-icon">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png" />
                            </a>
                        </li>
                        <li>
                            <a href="#" class="social-icon">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" />
                            </a>
                        </li>
                        <li>
                            <a href="#" class="social-icon">
                                <img src="https://cdn0.iconfinder.com/data/icons/web-social-and-folder-icons/512/YouTube.png" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col">
                    <p style="text-align:center">Copyright Jose Cisneros 2022</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            // any data to keep track of
        }
    }
}
</script>

<style scoped>
section {
    background-color:#f8f9fa;
    color:black;
}

li {
    list-style-type: none;
}

a {
    text-decoration: none;
}

.social-icon img {
    width: 50px;
    height:50px;
    float: left;
    margin:10px;
}
#social-icon-container {
    display: flex;
    justify-content: flex-end;
}
.nav-container, .nav-container li {
    padding-left: 0px;
}
</style>