const imgUtils = {
  ToBase64(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      // console.log(`file 转 base64结果：${reader.result}`);
      this.iconBase64 = reader.result;
    };
    return this.iconBase64;
  },
};
export default {
  imgUtils,
};
