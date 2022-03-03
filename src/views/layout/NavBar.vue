<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="info"
    >
      <b-container>
        <b-navbar-brand
          href="javascript:void(0);"
          @click="$router.push({ name: 'home' })"
        >DEBUG.PINK</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse
          id="nav-collapse"
          is-nav
        >
          <b-navbar-nav class="ml-auto">
            <!-- <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                </b-nav-form> -->

            <!-- <b-nav-item-dropdown text="Lang" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
                </b-nav-item-dropdown> -->
            <b-nav-item
              @click="$router.replace({ name: 'login' })"
              v-if="!userInfo"
            >登录</b-nav-item>
            <b-nav-item
              @click="$router.replace({ name: 'register' })"
              v-if="!userInfo"
            >注册</b-nav-item>
            <b-avatar
              variant="info"
              v-bind:src="
                baseurl +'avatar?src=' + userInfo.avatar
              "
              v-if="userInfo"
            ></b-avatar>
            <b-nav-item-dropdown
              right
              v-if="userInfo"
            >
              <strong>
                <b-dropdown-text style="font-weight: bolder">{{
                  userInfo.nick_name
                }}</b-dropdown-text>
              </strong>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item @click="$router.push({ name: 'profile' })">个人主页</b-dropdown-item>
              <b-dropdown-item @click="logout">登出</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
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
