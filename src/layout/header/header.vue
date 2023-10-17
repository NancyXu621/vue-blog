<template>
  <!-- <div ref="editor"  contenteditable="true" @input="inputText" @blur="inputBlur" @focus="inputFocus">
  </div> -->
  <div ref="editor"  contenteditable="true" @input="inputText">
  </div>
</template>
<script>
export default {
  name: 'inputBox',
  // props: ['value'], // 父组件v-model绑定的prop
  data() {
      return {
          // isBlur: true, // 解决赋值时光标自动定位到起始位置
      }
  },
  watch: {
      // value(val) {
      //     if (this.isBlur) {
      //         this.$refs.editor.innerHTML = val;
      //     }
      // }
  },
  methods: {
      // 监听输入框内容
      inputText() {
          console.log('子组件输入框的输入内容', this.$refs.editor.innerHTML);
          this.$emit('input', this.$refs.editor.innerHTML);
      },
      // inputFocus() {
      //     this.isBlur = false;
      // },
      // inputBlur() {
      //     this.isBlur = true;
      // }
  }
}
</script>
<style scoped>
.input-box {
  width: 400px;
  height: 250px;
  border: 1px solid #6e6e6e;
  outline: none;
  /* 隐藏聚焦时外边框 */
  padding: 10px;
}
</style>
