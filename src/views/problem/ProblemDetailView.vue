<template>
  <div>
    <h1>{{ problem.name }}</h1>
    <hr />
    <h3>来源: {{ problem.from }} 上传者: {{ problem.uploader }}</h3>
    <p>{{ problem.description }}</p>
    <b-card>
      <div>
        <div>
          <b-form-group
            label-cols-lg="3"
            label="测试集"
            label-size="lg"
            label-class="font-weight-bold pt-0"
            class="mb-0"
          >
          </b-form-group>
        </div>
        <b-card>
          <div class="row">
            <div class="col-5">
              <b-card>
                <b-table
                  :items="testSet"
                  :fields="fields"
                  striped
                  responsive="sm"
                >
                  <template #cell(id)="data">
                    <a
                      href="javascript:void(0);"
                      @click="selectvalue=data.value"
                      @keyup="selectvalue=data.value"
                    >{{ data.value }}</a>
                  </template>
                  <template #cell(uploader)="data">
                    <a
                      href="javascript:void(0);"
                      @click="$router.push({ name: 'userDetail',params:{id:data.item.uploader_id}})"
                      @keyup="$router.push({ name: 'userDetail',params:{id:data.item.uploader_id}})"
                    >{{ data.value }}</a>
                  </template>
                  <template #cell(votes)="data">
                    <a
                      href="javascript:void(0);"
                      @click="$router.push({ name: 'userDetail',params:{id:data.item.id}})"
                      @keyup="$router.push({ name: 'userDetail',params:{id:data.item.id}})"
                    >{{ data.value }}</a>
                  </template>
                  <template #cell(created_at)="data">
                    {{ data.value }}
                  </template>
                </b-table>
              </b-card>
            </div>
            <div class="col-7">
              <b-card>
                <div
                  v-for="item in testSet"
                  v-bind:key="item.ID"
                >
                  <div
                    v-if="item.ID == selectvalue"
                    style="white-space: pre-line;"
                  >
                    <div class="row">
                      <p class="col">INPUT</p>
                      <div style="text-align:right">
                        <a
                          :class="'tag-'+item.ID"
                          data-clipboard-action="copy"
                          :data-clipboard-text="item.input"
                          @click="copy('tag-'+item.ID)"
                          @keyup="copy('tag-'+item.ID)"
                        >COPY</a>
                      </div>
                    </div>
                    <hr>
                    {{ item.input }}
                  </div>
                </div>
              </b-card>
            </div>
          </div>
        </b-card>
      </div>
    </b-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      selectvalue: 0,
      problem: {},
      testSet: {},
      queryConfig: {
        id: 0,
      },
      fields: [
        { key: 'ID', label: 'ID', thStyle: 'width: 10%' },
        { key: 'uploader', label: '贡献者', thStyle: 'width: 25%' },
        { key: 'votes', label: '投票', thStyle: 'width:20%' },
        { key: 'created_at', label: '时间', thStyle: 'width: 35%' },
      ],
    };
  },
  mounted() {
    this.onLoad();
  },
  methods: {
    ...mapActions('problemModule', { getProblem: 'get' }),
    ...mapActions('testSetModule', { sortTestSet: 'sort' }),
    copy(id) {
      const clipboard = new this.Clipboard(`.${id}`);
      clipboard.on('success', () => {
        this.makeToast('提示', '复制成功', 'success', false);
        clipboard.destroy();
      });
      clipboard.on('error', () => {
        this.makeToast('提示', '复制失败，可能是浏览器不支持', 'danger', false);
        clipboard.destroy();
      });
    },
    onLoad() {
      this.queryConfig.id = parseInt(this.$route.params.id, 10);
      this.$store.dispatch('problemModule/get', this.queryConfig).then((res) => {
        this.problem = res.data.data.problem;
      });
      this.$store.dispatch('testSetModule/sort', this.queryConfig).then((resp) => {
        this.testSet = resp.data.data.test_set;
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
