<template>
  <div class="register">
    <b-row class="mt-5">
      <b-col
        md="8"
        offset-md="2"
        lg="6"
        offset-lg="3"
      >
        <b-card title="注册">
          <b-form>
            <b-form-group id="input-group-1">
              <b-form-input
                id="input-1"
                v-model="$v.user.Email.$model"
                type="email"
                placeholder="Enter email"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2">
              <b-form-input
                id="input-2"
                v-model="$v.user.Name.$model"
                placeholder="Enter name"
                required
              ></b-form-input>
              <b-form-invalid-feedback :state="validateState('Name')">
                ID必须为 6 位及以上
              </b-form-invalid-feedback>
            </b-form-group>

            <b-form-group id="input-group-3">
              <b-form-input
                id="input-3"
                v-model="$v.user.Password.$model"
                type="password"
                placeholder="Enter password"
                required
              ></b-form-input>
              <b-form-invalid-feedback :state="validateState('Password')">
                密码必须为 6 位及以上
              </b-form-invalid-feedback>
            </b-form-group>
            <b-button
              @click="onSubmit"
              variant="outline-primary"
            >Submit</b-button>
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
        Email: '',
        Name: '',
        Password: '',
      },
      showPasswordValidate: false,
    };
  },
  validations: {
    user: {
      Email: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(50),
      },
      Name: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(25),
      },
      Password: {
        required,
        minLength: minLength(6),
      },
    },
  },
  methods: {
    ...mapActions('userModule', { userRegister: 'login' }),
    validateState(Name) {
      const { $dirty, $error } = this.$v.user[Name];
      return $dirty ? !$error : null;
    },
    onSubmit() {
      this.$v.user.$touch();
      if (this.$v.user.$anyError) {
        return;
      }
      // 请求
      this.$store.dispatch('userModule/register', this.user).then(() => {
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
