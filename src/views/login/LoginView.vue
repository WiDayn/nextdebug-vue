<template>
  <div class="login">
    <b-row class="mt-5">
      <b-col md="8" offset-md="2" lg="6" offset-lg="3">
        <b-card title="登录">
          <b-form>
            <b-form-group id="input-group-1">
              <b-form-input
                id="input-1"
                v-model="$v.user.name.$model"
                placeholder="Enter name"
                required
              ></b-form-input>
              <b-form-invalid-feedback :state="validateState('name')">
                ID必须为 3 位及以上
              </b-form-invalid-feedback>
            </b-form-group>

            <b-form-group id="input-group-2">
              <b-form-input
                id="input-2"
                v-model="$v.user.password.$model"
                type="password"
                placeholder="Enter password"
                required
              ></b-form-input>
              <b-form-invalid-feedback :state="validateState('password')">
                密码必须为 6 位及以上
              </b-form-invalid-feedback>
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
import { required, minLength, maxLength } from 'vuelidate/lib/validators';
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      user: {
        name: '',
        password: '',
      },
      showPasswordValidate: false,
    };
  },
  validations: {
    user: {
      name: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(25),
      },
      password: {
        required,
        minLength: minLength(6),
      },
    },
  },
  methods: {
    ...mapActions('userModule', { userlogin: 'login' }),
    validateState(name) {
      const { $dirty, $error } = this.$v.user[name];
      return $dirty ? !$error : null;
    },
    onSubmit() {
      this.$v.user.$touch();
      if (this.$v.user.$anyError) {
        return;
      }
      // 请求
      this.$store.dispatch('userModule/login', this.user).then(() => {
        this.$router.replace({ name: 'home' });
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
