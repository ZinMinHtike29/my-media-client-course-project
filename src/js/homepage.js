import axios from "axios";
import { mapGetters } from "vuex";
export default {
    name: "HomePage",
    data() {
        return {
            "postLists": [],
            "categoryLists": [],
            "searchKey": "",
            "homeTab": "",
            "tokenStatus": false,
        }
    },
    computed: {
        ...mapGetters(["storageToken", "storageUserData"]),
    },
    methods: {
        getAllPost() {
            axios.get("http://127.0.0.1:8000/api/allPostList").then(res => {
                for (let i = 0; i < res.data.post.length; i++) {
                    if (res.data.post[i].image == null) {
                        res.data.post[i].image = `http://127.0.0.1:8000/defaultImage/business-3d-businessman-facepalming-over-a-page-not-found-error.png`
                    } else {
                        res.data.post[i].image = `http://127.0.0.1:8000/storage/${res.data.post[i].image}`
                    }
                }
                this.postLists = res.data.post;
            });
        },
        loadCategory() {
            axios.get("http://127.0.0.1:8000/api/allCategory").then(res => {
                this.categoryLists = res.data.category;
            });

        },
        search() {
            let search = {
                key: this.searchKey
            }
            axios.post("http://127.0.0.1:8000/api/post/search", search)
                .then((res) => {
                    for (let i = 0; i < res.data.searchData.length; i++) {
                        if (res.data.searchData[i].image == null) {
                            res.data.searchData[i].image = `http://127.0.0.1:8000/defaultImage/business-3d-businessman-facepalming-over-a-page-not-found-error.png`
                        } else {
                            res.data.searchData[i].image = `http://127.0.0.1:8000/storage/${res.data.searchData[i].image}`
                        }
                    }
                    this.postLists = res.data.searchData;
                })
        },
        categorySearch(searchKey) {
            this.homeTab = searchKey;
            let search = {
                "key": searchKey
            }
            axios.post('http://127.0.0.1:8000/api/category/search', search)
                .then((res) => {
                    for (let i = 0; i < res.data.result.length; i++) {
                        if (res.data.result[i].image == null) {
                            res.data.result[i].image = `http://127.0.0.1:8000/defaultImage/business-3d-businessman-facepalming-over-a-page-not-found-error.png`
                        } else {
                            res.data.result[i].image = `http://127.0.0.1:8000/storage/${res.data.result[i].image}`
                        }
                    }
                    this.postLists = res.data.result;
                })
                .catch((e) => console.log(e));
        },
        newsDetails(postId) {
            this.$router.push({
                name: "newsDetails",
                params: {
                    id: postId
                }
            })
        },
        home() {
            this.$router.push({ name: "home" })
        },
        login() {
            this.$router.push({ name: "login" })

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
        this.getAllPost();
        this.loadCategory();
    }
};