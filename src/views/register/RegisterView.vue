<template>
  <div class="register">
    <b-row class="mt-5">
      <b-col md="8" offset-md="2" lg="6" offset-lg="3">
        <b-card title="注册">
          <b-form>
            <b-form-group id="input-group-1">
              <b-form-input
                id="input-1"
                v-model="user.email"
                type="email"
                placeholder="Enter email"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2">
              <b-form-input
                id="input-2"
                v-model="user.name"
                placeholder="Enter name"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3">
              <b-form-input
                id="input-3"
                v-model="user.password"
                type="password"
                placeholder="Enter password"
                required
              ></b-form-input>
              <b-form-text
                id="password-help-block"
                text-variant="danger"
                v-if="showPasswordValidate"
              >
                密码必须为六位及以上
              </b-form-text>
            </b-form-group>
            <b-button @click="onSubmit" variant="outline-primary"
              >Submit</b-button
            >
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: '',
        name: '',
        password: '',
      },
      showPasswordValidate: false,
    };
  },
  methods: {
    onSubmit() {
      if (this.user.password < 6) {
        this.showPasswordValidate = true;
        return;
      }
      console.log(this.user.password);
    },
  },
};
</script>
