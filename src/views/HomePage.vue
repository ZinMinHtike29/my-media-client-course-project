<template>
  <div>
    <div class="container d-flex justify-content-center py-3">
      <p class="btn btn-outine-danger btn-sm ml-3" @click="home">Home</p>
      <p
        class="btn bg-dark text-white btn-sm ml-3"
        @click="login"
        v-if="!tokenStatus"
      >
        Login
      </p>
      <p
        class="btn bg-dark text-white btn-sm ml-3"
        @click="logout"
        v-if="tokenStatus"
      >
        Logout
      </p>
    </div>
    <!-- Whats New Start -->
    <section class="whats-news-area pt-50 pb-20">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="row d-flex justify-content-between">
              <div class="col-lg-3 col-md-3">
                <div class="section-tittle mb-30">
                  <h3>Whats New</h3>
                </div>
              </div>
              <div class="col-lg-9 col-md-9">
                <div class="properties__button">
                  <!--Nav Button  -->
                  <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                      <a
                        class="nav-item nav-link"
                        :class="homeTab == '' ? 'active' : ''"
                        id="nav-home-tab"
                        data-toggle="tab"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected="true"
                        @click="categorySearch('')"
                        >All</a
                      >
                      <a
                        class="nav-item nav-link"
                        :class="homeTab == category.title ? 'active' : ''"
                        id="nav-home-tab"
                        data-toggle="tab"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected="false"
                        v-for="(category, index) in categoryLists"
                        :key="index"
                        @click="categorySearch(category.title)"
                        >{{ category.title }}</a
                      >
                    </div>
                  </nav>
                  <!--End Nav Button  -->
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="my-3 d-flex justify-content-end">
                  <input
                    type="text"
                    name=""
                    id=""
                    class="form-control col-3"
                    placeholder="Search News ..."
                    v-model="searchKey"
                    v-on:keyup.enter="search"
                  />
                  <button class="bg-dark text-white ml-3" @click="search">
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </button>
                </div>
                <!-- Nav Card -->
                <div class="tab-content" id="nav-tabContent">
                  <!-- card one -->
                  <div
                    class="tab-pane fade show active"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    <div class="whats-news-caption">
                      <div class="row">
                        <div
                          class="d-flex align-items-center mx-auto mt-5"
                          style="height: 53vh"
                          v-if="!tokenStatus"
                        >
                          <h1 class="text-danger alert alert-danger shadow-sm">
                            You Don't Have Permission For That Data!
                          </h1>
                        </div>
                        <div v-if="tokenStatus" class="col">
                          <div class="row">
                            <div
                              v-if="postLists.length == 0"
                              class="d-flex align-items-center mx-auto mt-5"
                              style="height: 53vh"
                            >
                              <h1 class="text-danger alert alert-danger">
                                There Is No Data !
                              </h1>
                            </div>
                            <div
                              class="col-lg-6 col-md-6"
                              v-for="(post, index) in postLists"
                              :key="index"
                              v-else-if="postLists.length != 0"
                            >
                              <div
                                class="single-what-news mb-100"
                                @click="newsDetails(post.post_id)"
                              >
                                <div class="what-img">
                                  <img
                                    :src="post.image"
                                    style="
                                      height: 400px;
                                      object-fit: cover;
                                      object-position: center;
                                    "
                                    alt=""
                                  />
                                </div>
                                <div class="what-cap">
                                  <span class="color1">My News</span>
                                  <h4>
                                    <a href="details.html">{{ post.title }}</a>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- End Nav Card -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Whats New End -->

    <!--Start pagination -->
    <div class="pagination-area pb-45 text-center">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="single-wrap d-flex justify-content-center">
              <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-start">
                  <li class="page-item">
                    <a class="page-link" href="details.html"
                      ><span class="flaticon-arrow roted"></span
                    ></a>
                  </li>
                  <li class="page-item active">
                    <a class="page-link" href="details.html">01</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="details.html">02</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="details.html">03</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="details.html"
                      ><span class="flaticon-arrow right-arrow"></span
                    ></a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End pagination  -->
  </div>
</template>

<script src="../js/homepage.js"></script>

<style lang="scss" scoped></style>
