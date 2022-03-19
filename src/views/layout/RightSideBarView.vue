<template>
  <div
    @click="$router.push({ name: 'profile' })"
    @keypress="$router.push({ name: 'profile' })"
  >
    <b-avatar
      variant="info"
      v-bind:src="
                baseurl +'avatar?src=' + userInfo.avatar
              "
      v-if="userInfo"
    ></b-avatar>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      baseurl: process.env.VUE_APP_BASE_API,
    };
  },
  computed: mapState({
    userInfo: (state) => state.userModule.userInfo,
  }),
};

</script>

<style>

</style>
