<template>
  <div>
    <b-card>
      <b-form-group
        id="input-group-1"
        label-cols-sm="4"
        label-cols-lg="1"
        content-cols-sm
        content-cols-lg="4"
        description="填写题目的名称，与来源平台一致"
        label="题目名称"
        label-for="input-1l"
      >
        <b-form-input
          v-model="$v.problem.name.$model"
          id="input-1"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-2"
        label-cols-sm="4"
        label-cols-lg="1"
        content-cols-sm
        content-cols-lg="4"
        description="选择来源平台，暂无可选择'其他'"
        label="题目来源"
        label-for="input-2"
      >
        <b-form-select
          v-model="$v.problem.from.$model"
          id="input-2"
        >
          <b-form-select-option
            v-for="oj in oj_options"
            :key="oj.name"
            :value="oj.ID"
          >{{ oj.name }}</b-form-select-option>
        </b-form-select>
      </b-form-group>
      <b-form-group
        id="input-group-3"
        label-cols-sm="4"
        label-cols-lg="1"
        content-cols-sm
        content-cols-lg="4"
        description="题目的备注，可以不填写，不需要复制题目内容"
        label="题目备注"
        label-for="input-3"
      >
        <b-form-input
          v-model="$v.problem.description.$model"
          id="input-3"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-4"
        label-cols-sm="5"
        label-cols-lg="1"
        content-cols-sm
        content-cols-lg="6"
        description="填写题目的来源直达链接"
        label="题目链接"
        label-for="input-4"
      >
        <b-form-input
          v-model="$v.problem.problemLink.$model"
          id="input-4"
        ></b-form-input>
      </b-form-group>
      <b-button
        @click="onsubmit"
        variant="primary"
      >提交</b-button>
    </b-card>
  </div>
</template>

<script>
import { required, maxLength } from 'vuelidate/lib/validators';
import { mapActions } from 'vuex';

export default {
  ...mapActions('onlineJudgeModule', { sortOnlineJudge: 'sort' }),
  data() {
    return {
      problem: {
        name: '',
        from: 0,
        problemLink: '',
        description: '',
      },
      queryconfig: {
        type: 'id',
        form: 1,
        to: 50,
      },
      oj_options: {
      },
      selected: null,
    };
  },
  validations: {
    problem: {
      name: {
        required,
        maxLength: maxLength(50),
      },
      from: {
        required,
      },
      problemLink: {
      },
      description: {
      },
    },
  },
  mounted() {
    this.$store.dispatch('onlineJudgeModule/sort', this.queryconfig).then((res) => {
      this.oj_options = res.data.data.online_judge;
    });
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.problem[name];
      return $dirty ? !$error : null;
    },
    onsubmit() {
      this.$v.problem.$touch();
      if (this.$v.problem.$anyError) {
        return;
      }

      this.$store.dispatch('problemModule/create', this.problem).then(() => {
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

<style>

</style>
