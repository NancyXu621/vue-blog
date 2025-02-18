<template>
  <div class="yun_blog_header">
    <div class="animateds-banner" @mousemove="onMouseMove">
      <div class="layer">
        <img src="../../assets/bilibili/spring-1/14.png" class="spring-1" />
      </div>
      <div class="layer">
        <img src="../../assets/bilibili/spring-1/1.png" class="spring-2" />
      </div>
      <div class="layer">
        <img src="../../assets/bilibili/spring-1/13.png" class="spring-3" />
      </div>
      <div class="layer">
        <img src="../../assets/bilibili/spring-1/15.png" class="spring-4" />
      </div>
      <div class="layer">
        <img src="../../assets/bilibili/spring-1/4.png" class="spring-5" />
      </div>
      <div class="layer">
        <img src="../../assets/bilibili/spring-1/8.png" class="spring-6" />
      </div>
      <div class="layer">
        <img src="../../assets/bilibili/spring-1/10.png" class="spring-7" />
      </div>
      <div class="layer">
        <img src="../../assets/bilibili/spring-1/3.png" class="spring-8" />
      </div>
      <div class="layer">
        <img src="../../assets/bilibili/spring-1/11.png" class="spring-9" />
      </div>
      <div class="layer">
        <img src="../../assets/bilibili/spring-1/5.png" class="spring-10" />
      </div>
      <div class="layer">
        <img src="../../assets/bilibili/spring-1/2.png" class="spring-11" />
      </div>
      <div class="layer">
        <img src="../../assets/bilibili/spring-1/6.png" class="spring-12" />
      </div>
      <div class="layer">
        <img src="../../assets/bilibili/spring-1/12.png" class="spring-13" />
      </div>
      <div class="layer">
        <img src="../../assets/bilibili/spring-1/9.png" class="spring-14" />
      </div>
      <div class="layer">
        <img src="../../assets/bilibili/spring-1/7.png" class="spring-15" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mouseX: 0,
      mouseY: 0,
      width: window.innerWidth,
      height: window.innerHeight,
      layers: [],
    };
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  methods: {
    onMouseMove(event) {
      const bannerRect = this.$el
        .querySelector(".animateds-banner")
        .getBoundingClientRect();
      const isMouseOverBanner =
        event.clientX >= bannerRect.left &&
        event.clientX <= bannerRect.right &&
        event.clientY >= bannerRect.top &&
        event.clientY <= bannerRect.bottom;
      if (isMouseOverBanner) {
        // 更新鼠标位置
        this.mouseX = event.clientX;
        this.mouseY = event.clientY;
        const relativeX = (this.mouseX - this.width / 2) / 20;
        const relativeY = (this.mouseY - this.height / 2) / 20;
        this.layers.forEach((layer, index) => {
          const depth = index * 2 + 2; // 深度越大，移动越少
          layer.style.transition = "none"; // 禁用过渡效果
          layer.style.transform = `translate(${relativeX * depth}px, ${relativeY}px)`;
          setTimeout(() => {
            // 使用setTimeout确保下一次渲染前应用了新的transform值
            layer.style.transition = ""; // 重新启用过渡效果
          }, 0);
        });
      } else {
        this.layers.forEach((layer) => {
          layer.style.transition = "none"; // 禁用过渡效果
          layer.style.transform = "none"; // 或者设置为其他默认值
          setTimeout(() => {
            // 使用setTimeout确保下一次渲染前应用了新的transform值
            layer.style.transition = ""; // 重新启用过渡效果
          }, 0);
        });
      }
    },
    handleResize() {
      // 更新窗口尺寸
      this.width = window.innerWidth;
      this.height = window.innerHeight;
    },
  },
};
</script>

<style lang="scss" scoped>
.yun_blog_header {
  height: 160px;
  transform: scale(1);
  opacity: 1;
  position: relative;

  .animateds-banner {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;

    .layer {
      position: absolute;
      height: 100%;
      width: 100%;
      left: 0;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.75s cubic-bezier(0.645, 0.045, 0.355, 1);

      img {
        transition: transform 0.75s cubic-bezier(0.645, 0.045, 0.355, 1); // 确保图片也应用过渡效果
      }

      &:hover img {
        // 定义鼠标悬停时的变换效果
        transform: translateX(20px); // 向右移动20px，可以根据需要调整这个值
      }

      .spring-1 {
        width: 4833px;
        height: 180px;
        transform: translate(-220px, -15px) rotate(0deg) scale(1);
        opacity: 1;
        filter: none;
        transition: 0.75scubic-bezier(0.645, 0.045, 0.355, 1);
      }

      .spring-2 {
        width: 4833px;
        height: 180px;
        transform: translate(880px, 0px) rotate(0deg) scale(1);
        opacity: 1;
        filter: none;
        transition: 0.75scubic-bezier(0.645, 0.045, 0.355, 1);
      }

      .spring-3 {
        width: 1585px;
        height: 162px;
        transform: translate(455px, 0px) rotate(0deg) scale(1);
        opacity: 1;
        filter: none;
        transition: 0.75scubic-bezier(0.645, 0.045, 0.355, 1);
      }

      .spring-4 {
        width: 1439px;
        height: 176px;
        transform: translate(-857px, 0px) rotate(0deg) scale(1);
        opacity: 1;
        filter: none;
        transition: 0.75scubic-bezier(0.645, 0.045, 0.355, 1);
      }

      .spring-5 {
        width: 250px;
        height: 62px;
        transform: translate(387.5px, 45px) rotate(0deg) scale(1);
        opacity: 1;
        filter: none;
        transition: 0.75scubic-bezier(0.645, 0.045, 0.355, 1);
      }

      .spring-6 {
        width: 205px;
        height: 84px;
        transform: translate(38px, 36.4px) rotate(0deg) scale(1);
        opacity: 0;
        filter: none;
        transition: 0.75scubic-bezier(0.645, 0.045, 0.355, 1);
      }

      .spring-7 {
        width: 1229px;
        height: 125px;
        transform: translate(-108px, 14px) rotate(0deg) scale(1);
        opacity: 1;
        filter: none;
        transition: 0.75scubic-bezier(0.645, 0.045, 0.355, 1);
      }

      .spring-8 {
        width: 1229px;
        height: 81px;
        transform: translate(-570px, 49px) rotate(0deg) scale(1);
        opacity: 1;
        filter: none;
        transition: 0.75scubic-bezier(0.645, 0.045, 0.355, 1);
      }

      .spring-9 {
        width: 198px;
        height: 138px;
        transform: translate(-460px, 16px) rotate(0deg) scale(1);
        opacity: 1;
        filter: none;
        transition: 0.75scubic-bezier(0.645, 0.045, 0.355, 1);
      }

      .spring-10 {
        width: 58px;
        height: 102px;
        transform: translate(-560px, 32px) rotate(0deg) scale(1);
        opacity: 1;
        filter: none;
        transition: 0.75scubic-bezier(0.645, 0.045, 0.355, 1);
      }

      .spring-11 {
        width: 270px;
        height: 114px;
        transform: translate(-310px, 13.5px) rotate(0deg) scale(1);
        opacity: 1;
        filter: none;
        transition: 0.75scubic-bezier(0.645, 0.045, 0.355, 1);
      }

      .spring-12 {
        width: 2138px;
        height: 180px;
        transform: translate(-120px, 0px) rotate(0deg) scale(1);
        opacity: 1;
        filter: none;
        transition: 0.75scubic-bezier(0.645, 0.045, 0.355, 1);
      }

      .spring-13 {
        width: 419px;
        height: 147px;
        transform: translate(-4px, 13.5px) rotate(0deg) scale(1);
        opacity: 1;
        filter: none;
        transition: 0.75scubic-bezier(0.645, 0.045, 0.355, 1);
      }

      .spring-14 {
        width: 444px;
        height: 211px;
        transform: translate(1880px, 0px) rotate(0deg) scale(1);
        opacity: 1;
        filter: blur(2px);
        transition: 0.75scubic-bezier(0.645, 0.045, 0.355, 1);
      }

      .spring-15 {
        width: 958px;
        height: 180px;
        transform: translate(-1220px, 0px) rotate(0deg) scale(1);
        opacity: 1;
        filter: blur(1px);
        transition: 0.75scubic-bezier(0.645, 0.045, 0.355, 1);
      }
    }
  }
}
</style>
