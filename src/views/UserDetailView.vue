<template>
  <div>
    <div style="text-align: center">
      <b-col>
        <b-img
          thumbnail
          fluid
          v-bind:src="baseurl +'avatar?src=' + user.avatar"
          width="200"
        ></b-img>
      </b-col>
    </div>
    <div style="text-align: center">
      <h3>
        <span v-if="user">{{ user.nick_name }}</span>
      </h3>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      baseurl: process.env.VUE_APP_BASE_API,
      user: {
        Name: '',
      },
    };
  },
  mounted() {
    this.onLoad();
  },
  methods: {
    ...mapActions('userModule', { getUserDetail: 'userDetail' }),
    onLoad() {
      this.user.Name = this.$route.params.Name;
      this.$store.dispatch('userModule/userDetail', this.user).then((res) => {
        this.user = res.data.data.user;
      }).catch((err) => {
        this.makeToast('提示', err.response.data.msg, 'danger', false);
      });
    },
    makeToast(title, err, variant = null, append = false) {
      this.$bvToast.toast(err, {
        title,
        variant,
        autoHideDelay: 5000,
        appendToast: append,
      });
    },
  },
};
</script>

<style>

</style>
