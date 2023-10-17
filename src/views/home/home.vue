<!--  -->
<template>
  <div class="button-console-wrap">
    <div class="button-console-tab">
      <div class="button-console-title">按钮控制操作</div>
    </div>
    <div class="buttonpage" ref="buttonpage">
      <el-tabs v-model="state" :scrollable="true" @tab-click="handleClick">
        <el-tab-pane v-for="(value, key) in buttonList" :label="key" :name="key" :key="key"
          style="color:#fff;font-size:30px">
          <div class="button-console-content" v-loading="loading" element-loading-text="状态切换中..."
            element-loading-background="rgba(100, 100, 100, 0.3)">
            <div class="button-console-content-button">
              <button v-for="(items, index) in value" :key="'_' + index" class="button"
                :class="{ 'can-active': items.enable == 'true' }" @click="changeButtonStatus(items)">
                <span class="button-text">{{ items.sceneName }}</span>
                <span class="button-box"></span>
                <img src="@/assets/buttonconsoleimage/line.png" alt="" srcset="">
              </button>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="button-console-footer">
      {{ title }}
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import { emitter } from '@/utils/index.js'
import { getHdmiScene, changeState, getHdmiSceneByGroup } from '@/api/otherSetting.js'
import { cloneDeep } from 'loadsh'
export default defineComponent({
  data() {
    return {
      buttonList: [],
      gridAreaGap: "79px 125px",
      state: null,
      startX: 0,
      startY: 0,
      loading: false,
      title: this.$route.query.title,//页码
    };
  },
  inject: ['reload'],
  components: {},
  computed: {
    gridAreaTemp() {
      if (this.state && this.buttonList[this.state]) {
        if (this.buttonList[this.state].length <= 4) {
          return "'a b' 'c d'"
        } else if (this.buttonList[this.state].length <= 9) {
          this.gridAreaGap = "65px 100px"
          return "'a b c'"
        } else {
          this.gridAreaGap = "60px 50px"
          return "'a b c d'"
        }
      } else {
        return "'a b' 'c d'"
      }
    }
  },
  mounted() {
    let _this = this
    _this.getHdmiSceneAll()
    emitter.on('1001', (data) => {
      let newData = JSON.parse(data.msgBody)
      if (data.msgTag == '1') {
        if (_this.buttonList.hasOwnProperty(newData.sceneIpGroup)) {
          _this.buttonList[newData.sceneIpGroup].push(newData)
        } else {
          _this.buttonList[newData.sceneIpGroup] = [newData]
        }
        console.log('新增')
      }
      else if (data.msgTag == '2') {
        _this.buttonList[newData.sceneIpGroup].forEach((val, key) => {
          if (val.distributionSceneId === newData.distributionSceneId) {
            Object.assign(val, newData);
          }
        })
        console.log('修改', newData)
      }
      else if (data.msgTag == '3') {
        if (_this.buttonList.hasOwnProperty(newData.sceneIpGroup)) {
          if (_this.buttonList[newData.sceneIpGroup].length > 1) {
            _this.buttonList[newData.sceneIpGroup] = _this.buttonList[newData.sceneIpGroup].filter(item => item.distributionSceneId !== newData.distributionSceneId);
          } else {
            delete _this.buttonList[newData.sceneIpGroup]
          }
        } else {
          delete _this.buttonList[newData.sceneIpGroup]
        }
        console.log('删除')
      }
      else if (data.msgTag == '4') {
        _this.buttonList[newData.sceneIpGroup].forEach((val, key) => {
          if (val.enable !== newData.enable || val.distributionSceneId !== newData.distributionSceneId) {
            val.enable = 'false'
          }
        })
        _this.buttonList[newData.sceneIpGroup].forEach((val, key) => {
          if (val.distributionSceneId === newData.distributionSceneId) {
            val.enable = newData.enable
          }
        })
      }
      else if (data.msgTag == '5') {
        this.reload()
        console.log('刷新', newData)
      }
    })
  },
  beforeDestroy() {
    sessionStorage.removeItem("activeName");
  },
  methods: {
    /**
     * 获取按钮列表 
     */
    getHdmiSceneAll() {
      getHdmiScene().then(response => {
        if (response) {
          this.buttonList = response
          console.log('response', response)
          let activeName = sessionStorage.getItem("activeName");
          if (activeName !== null) {
            this.state = activeName;
          }
          else {
            const keys = Object.keys(response);
            this.state = keys[0]
          }
          console.log("Active name", this.state)
        }
      }).catch(error => {

      })
    },
    handleClick(val) {
      sessionStorage.setItem("activeName", val.props.name);
      this.state = val.props.name
      let data = {
        sceneIpGroup: this.state
      }
      getHdmiSceneByGroup(data).then(response => {
        Object.assign(this.buttonList[response[0].sceneIpGroup], response);
      })

    },
    /**
     * 操作 
     * @param {} data 
     */
    changeButtonStatus(data) {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 2000);
      let newData = cloneDeep(data)
      delete newData.createTime
      delete newData.updateTime
      changeState(newData).then(response => {
        if (response) {
          this.$message.success('状态改变成功')
        }
      }).catch(error => {

      })
    }
  }
})

</script>
<style lang='scss' scoped>
.button-console-wrap {
  width: 100%;
  height: 100%;
  // background: url('@/assets/buttonconsoleimage/bg.png') no-repeat;
  background: #063573;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  font-family: serif;
  font-weight: 600;

  .button-console-tab {
    // background: url('@/assets/buttonconsoleimage/tabs.png') no-repeat;
    width: 100%;
    background-size: 100% 100%;
  }

  .button-console-title {
    text-align: center;
    font-size: 25px;
    color: #fff;
    padding: 24px 0;
  }

  .buttonpage {
    width: 100%;
    height: 100%;

    .el-tabs {
      height: 100%;

      :deep().el-tabs__header {
        margin: 0 24px;
      }

      :deep().el-tabs__item:not(.is-active) {
        color: #fff;
        font-size: 24px !important;
      }

      :deep().el-tabs__item.is-active {
        font-size: 24px !important;
      }

      :deep().el-tabs__content {
        display: flex;
        flex-direction: column;
        height: 100%;
      }

      :deep().el-tab-pane {
        display: flex;
        flex-direction: column;
        height: 100%;
        // padding: 12px;

        .button-console-content {
          flex: 1;
          padding: 0 100px;
          box-sizing: border-box;
          background: url("@/assets/buttonconsoleimage/content.png") no-repeat;
          background-size: 100% 100%;
          margin: 48px 48px 88px 48px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;

          .button-console-content-button {
            --area-template: "a b c";
            display: grid;
            grid-template-areas: v-bind(gridAreaTemp);
            grid-gap: v-bind(gridAreaGap);

            .button {
              width: 100%;
              color: #f0eeee;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              font-size: 18px;
              outline: none;
              background-color: transparent;
              border: 5px solid;
              border-image: url("@/assets/buttonconsoleimage/border.png");
              border-image-slice: 1%;
              border-image-width: 2.5px;
              border-image-repeat: round repeat;
              padding: 10px 10px;
              box-sizing: border-box;
              clip-path: inset(0 round 10px);
              position: relative;

              &:active {
                opacity: .8;
                transition: all .3s;
              }

              .button-text {
                position: absolute;
                z-index: 2;
              }

              .button-box {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 32px 20px;
                position: relative;
                color: #ffffff;
                cursor: pointer;

                &::after {
                  content: "";
                  width: 100%;
                  height: 100%;
                  border-radius: 10px;
                  background: linear-gradient(180deg, rgba(30, 128, 255, 0.3), rgba(71, 125, 194, 0.3));
                  border: 1px solid rgba(71, 142, 248, 1);
                  filter: drop-shadow(1px 1px 2px rgba(153, 184, 230, .1)) blur(1px);
                  position: absolute;
                }
              }

              img {
                width: 20px;
                position: absolute;
                right: 0;
                bottom: 0;
              }
            }


            .can-active {
              .button-box {
                &::after {
                  filter: drop-shadow(1px 1px 2px rgba(9, 200, 250, 1));
                }
              }

            }
          }
        }
      }
    }
  }

  .button-console-footer {
    position: fixed;
    bottom: 14px;
    width: 100%;
    text-align: center;
    font-size: 21px;
    font-weight: bold;
    color: #BCE8FE;
  }
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
