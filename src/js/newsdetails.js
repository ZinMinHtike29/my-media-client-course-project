import axios from "axios"
import { mapGetters } from "vuex";
export default {
    name: "PostDetails",
    data() {
        return {
            postId: '',
            post: {},
            "tokenStatus": false,
            viewCount: 0
        }
    },
    computed: {
        ...mapGetters(["storageToken", "storageUserData"]),
    },
    methods: {
        loadPost() {
            let data = {
                postId: this.postId
            }
            axios.post("http://127.0.0.1:8000/api/post/details", data).then(res => {

                if (res.data.post.image == null) {
                    res.data.post.image = `http://127.0.0.1:8000/defaultImage/business-3d-businessman-facepalming-over-a-page-not-found-error.png`
                } else {
                    res.data.post.image = `http://127.0.0.1:8000/storage/${res.data.post.image}`
                }
                this.post = res.data.post;
            });
        },
        back() {
            history.back();
        },
        home() {
            this.$router.push({ name: "home" })
        },
        checkToken() {
            if (this.storageToken != null && this.storageToken != undefined && this.storageToken != "") {
                this.tokenStatus = true;
            } else {
                this.tokenStatus = false;
            }
        },
        logout() {
            this.$store.dispatch("setToken", null);
            this.login();
        },

    },
    mounted() {
        this.checkToken();
        this.postId = this.$route.params.id;
        this.loadPost();
        let data = {
            "user_id": this.storageUserData.id,
            "post_id": this.postId
        }
        axios.post("http://127.0.0.1:8000/api/post/actionLog", data)
            .then(res => this.viewCount = res.data.data.length);
    },
};