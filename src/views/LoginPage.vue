<template>
  <div class="container d-flex justify-content-center py-3">
    <p class="btn btn-outine-danger btn-sm ml-3" @click="home">Home</p>
    <p
      class="btn bg-dark text-white btn-sm ml-3"
      @click="loginPage"
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
  <div class="container d-flex justify-content-center">
    <div class="col-6 shadow-sm my-5 p-5">
      <span class="alert alert-danger row text-center" v-if="userStatus"
        >The Credential Do Not Match !</span
      >
      <div class="my-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter Email"
          v-model="userData.email"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Enter Password"
          v-model="userData.password"
        />
      </div>
      <button @click="login()" class="btn btn-primary">Login</button>
    </div>
  </div>
</template>

<script src="../js/loginpage.js"></script>
