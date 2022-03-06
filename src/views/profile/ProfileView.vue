<template>
  <div>
    <div style="text-align: center">
      <h3>
        <span v-if="userInfo">{{ userInfo.nick_name }}</span>
      </h3>
    </div>
    <b-card>
      <b-row>
        <div class="col-3">
          <b-list-group>
            <b-list-group-item active>基本设置</b-list-group-item>
            <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
            <b-list-group-item>Morbi leo risus</b-list-group-item>
            <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
            <b-list-group-item>Vestibulum at eros</b-list-group-item>
          </b-list-group>
        </div>
        <div class="col-7">
          <div style="text-align: center">
            <b-col>
              <b-img
                thumbnail
                fluid
                v-bind:src="baseurl +'avatar?src=' + userInfo.avatar"
                width="200"
              ></b-img>
            </b-col>
            <b-button v-b-modal.modal-1>修改头像</b-button>
          </div>
        </div>
      </b-row>
    </b-card>
    <b-modal
      id="modal-1"
      title="修改头像"
    >
      <div style="width: 100%; height: 500px">
        <vue-cropper
          autoCrop
          ref="cropper"
          :img="option.img"
          :outputSize="option.size"
          :outputType="option.outputType"
          :fixedBox="option.fixedBox"
          :canScale="option.canScale"
          :autoCropWidth="option.autoCropWidth"
          :autoCropHeight="option.autoCropHeight"
          centerBox
        />
      </div>
      <div style="margin-top: 4px">
        <b-form-file
          v-model="file"
          ref="file-input"
          class="mb-2"
          offset-md="2"
        ></b-form-file>
        <b-button
          @click="(file = null), (option.img = '')"
          class="m-1"
        >清空上传</b-button>
        <b-button
          v-if="option.img == ''"
          @click="onUpload"
          variant="primary"
          class="m-1"
        >上传图片</b-button>
        <b-button
          v-if="!option.img == ''"
          @click="onCutDone"
          variant="primary"
          class="m-1"
        >完成裁剪</b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { VueCropper } from 'vue-cropper';

export default {
  data() {
    return {
      baseurl: process.env.VUE_APP_BASE_API,
      option: {
        img: '',
        size: 1,
        outputType: 'webp',
        autoCropWidth: 200,
        autoCropHeight: 200,
        canScale: true,
        fixedBox: true,
      },
      file: null,
      avatar: {
        context: '',
      },
    };
  },
  computed: mapState({
    userInfo: (state) => state.userModule.userInfo,
  }),
  components: {
    VueCropper,
  },
  methods: {
    ...mapActions('userModule', { userlogin: 'login' }),
    onUpload() {
      // 图片文件转Base64存到option.img
      const reader = new FileReader();
      reader.readAsDataURL(this.file);
      reader.onload = () => {
        this.option.img = reader.result;
      };
    },
    onCutDone() {
      // 导出裁剪后图片的Base64
      this.$refs.cropper.getCropData((data) => {
        this.avatar.context = data;
        this.$store.dispatch('userModule/uploadavatar', this.avatar).then(() => {
          this.makeToast('提示', '上传成功', 'success', false);
        }).catch((err) => {
          this.makeToast('提示', err.response.data.msg, 'danger', false);
        });
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
