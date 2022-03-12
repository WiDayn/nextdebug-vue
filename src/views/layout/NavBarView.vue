<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="light"
      variant="default"
      class="top-NavBar"
      id="code-font"
    >
      <b-container>
        <b-navbar-brand
          href="javascript:void(0);"
          @click="$router.push({ name: 'home' })"
        >nextDebug</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse
          id="nav-collapse"
          is-nav
        >
          <b-navbar-nav class="mr-auto">
            <b-nav-item
              @click="$router.replace({ name: 'home' })"
              class="nd-nav-item nd-nav-item-selected"
            >problem</b-nav-item>
            <b-nav-item
              @click="$router.replace({ name: 'home' })"
              class="nd-nav-item"
            >develop</b-nav-item>
            <b-nav-item
              @click="$router.replace({ name: 'home' })"
              class="nd-nav-item"
            >debug</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <!-- <b-nav-item-dropdown text="Lang" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
                </b-nav-item-dropdown> -->
            <!-- <b-nav-item
              @click="$router.replace({ name: 'login' })"
              v-if="!userInfo"
            >login</b-nav-item>
            <b-nav-item
              @click="$router.replace({ name: 'register' })"
              v-if="!userInfo"
            >register</b-nav-item> -->
            <!-- <b-nav-item>
              <form class="form-inline">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">@</span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  >
                </div>
              </form>
            </b-nav-item> -->
            <b-nav-item class="nav-username">
              <div class="input-group">
                <span>@</span>
                <div
                  class="nd-input-df-warp"
                  v-if="!userInfo"
                >
                  <input
                    type="text"
                    class="nd-input"
                    aria-label="Username"
                    placeholder="username"
                    style="width: 7em;"
                  >
                </div>
                <div
                  style="width: 7em;"
                  v-if="userInfo"
                >
                  {{
                  userInfo.nick_name
                }}
                </div>
              </div>
            </b-nav-item>
            <!-- <b-avatar
              variant="info"
              v-bind:src="
                baseurl +'avatar?src=' + userInfo.avatar
              "
              v-if="userInfo"
            ></b-avatar> -->
            <!-- <b-nav-item-dropdown
              right
              v-if="userInfo"
            >
              <strong>
                <b-dropdown-text style="font-weight: bolder">{{
                  userInfo.nick_name
                }}</b-dropdown-text>
              </strong>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item @click="$router.push({
                name: 'userDetail',
                params:{ id:userInfo.id }})">
                个人主页</b-dropdown-item>
              <b-dropdown-item @click="$router.push({ name: 'profile' })">设置</b-dropdown-item>
              <b-dropdown-item @click="logout">登出</b-dropdown-item>
            </b-nav-item-dropdown> -->
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <nav
      aria-label="breadcrumb"
      class="nd-breadcrumb-df"
      id="code-font"
    >
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#" class="nd-link-df">home</a></li>
        <li class="breadcrumb-item"><a href="#" class="nd-link-df">problem list</a></li>
        <li class="breadcrumb-item active" aria-current="page">(current)</li>
      </ol>
    </nav>
    <div class="gap">
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      baseurl: process.env.VUE_APP_BASE_API,
    };
  },
  computed: mapState({
    userInfo: (state) => state.userModule.userInfo,
  }),

  methods: mapActions('userModule', ['logout']),
};
</script>
