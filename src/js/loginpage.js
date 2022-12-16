import axios from "axios"
import { mapGetters } from "vuex";
export default {
    name: "LoginPage",
    data() {
        return {
            userData: {
                email: "",
                password: ""
            },
            tokenStatus: false,
            userStatus: false
        }
    },
    computed: {
        ...mapGetters(["storageToken", "storageUserData"]),
    },
    methods: {
        home() {
            this.$router.push({ name: "home" })
        },
        loginPage() {
            this.$router.push({ name: "login" })
        },
        login() {
            axios.post("http://127.0.0.1:8000/api/user/login", this.userData)
                .then(res => {
                    if (res.data.token == null) {
                        this.userStatus = true;
                    } else {
                        this.userData = {};
                        this.storeUserInfo(res);
                        this.home();
                        this.userStatus = false;
                    }
                })
                .catch(e => console.log(e));
        },
        logout() {
            this.$store.dispatch("setToken", null);
            this.login();
        },
        storeUserInfo(res) {
            this.$store.dispatch("setToken", res.data.token);
            this.$store.dispatch('setUserData', res.data.user);
        },
    }
};