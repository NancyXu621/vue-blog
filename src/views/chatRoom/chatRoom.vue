<template>
  <div class="game-container">
    <div ref="map" style="width: 100%; height: 500px"></div>
  </div>
</template>

<script>
import L from "leafer";

export default {
  data() {
    return {
      map: null,
      pacMan: { lat: 5, lng: 5, size: 15, direction: "right", speed: 0.05 }, // 初始位置
      walls: [
        {
          latlngs: [
            [1, 1],
            [1, 8],
            [3, 8],
            [3, 1],
          ],
          color: "#000",
        },
        {
          latlngs: [
            [5, 1],
            [5, 8],
            [7, 8],
            [7, 1],
          ],
          color: "#000",
        },
        {
          latlngs: [
            [1, 5],
            [3, 5],
            [3, 7],
            [1, 7],
          ],
          color: "#000",
        },
      ],
      dots: [
        { lat: 2, lng: 2, size: 0.02 },
        { lat: 2, lng: 6, size: 0.02 },
        { lat: 6, lng: 2, size: 0.02 },
        { lat: 6, lng: 6, size: 0.02 },
      ],
    };
  },
  mounted() {
    this.initMap();
    this.listenToKeyboard();
  },
  methods: {
    initMap() {
      // 创建 Leaflet 地图，设置初始视图
      this.map = L.map(this.$refs.map).setView([5, 5], 15);

      // 添加 OpenStreetMap 图层
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(this.map);

      // 添加墙壁
      this.walls.forEach((wall) => {
        L.polygon(wall.latlngs, {
          color: wall.color,
          fillOpacity: 1,
        }).addTo(this.map);
      });

      // 添加吃豆人标记
      this.pacMan.marker = L.circleMarker([this.pacMan.lat, this.pacMan.lng], {
        radius: this.pacMan.size,
        color: "yellow",
      }).addTo(this.map);

      // 添加豆子标记
      this.dots.forEach((dot) => {
        dot.marker = L.circleMarker([dot.lat, dot.lng], {
          radius: dot.size * 1000,
          color: "white",
        }).addTo(this.map);
      });

      // 启动游戏循环
      this.startGame();
    },

    listenToKeyboard() {
      // 监听键盘事件，控制吃豆人的方向
      window.addEventListener("keydown", (event) => {
        if (event.key === "ArrowUp") {
          this.pacMan.direction = "up";
        } else if (event.key === "ArrowDown") {
          this.pacMan.direction = "down";
        } else if (event.key === "ArrowLeft") {
          this.pacMan.direction = "left";
        } else if (event.key === "ArrowRight") {
          this.pacMan.direction = "right";
        }
      });
    },

    startGame() {
      this.updateGame();
    },

    updateGame() {
      this.movePacMan();
      this.checkCollisions();
      setTimeout(this.updateGame, 100); // 每 100ms 更新一次
    },

    movePacMan() {
      // 移动吃豆人
      if (this.pacMan.direction === "up") {
        this.pacMan.lat -= this.pacMan.speed;
      } else if (this.pacMan.direction === "down") {
        this.pacMan.lat += this.pacMan.speed;
      } else if (this.pacMan.direction === "left") {
        this.pacMan.lng -= this.pacMan.speed;
      } else if (this.pacMan.direction === "right") {
        this.pacMan.lng += this.pacMan.speed;
      }

      // 更新吃豆人位置
      this.pacMan.marker.setLatLng([this.pacMan.lat, this.pacMan.lng]);
    },

    checkCollisions() {
      // 检查吃豆人是否吃到豆子
      this.dots.forEach((dot, index) => {
        const dist = this.calculateDistance(
          this.pacMan.lat,
          this.pacMan.lng,
          dot.lat,
          dot.lng
        );
        if (dist < this.pacMan.size / 100) {
          // 如果碰到豆子，移除豆子
          this.dots.splice(index, 1);
          this.map.removeLayer(dot.marker);
        }
      });

      // 检查吃豆人是否撞到墙壁
      this.walls.forEach((wall) => {
        wall.latlngs.forEach((latlng) => {
          const dist = this.calculateDistance(
            this.pacMan.lat,
            this.pacMan.lng,
            latlng[0],
            latlng[1]
          );
          if (dist < this.pacMan.size / 100) {
            this.pacMan.lat = this.pacMan.prevLat; // 回退位置
            this.pacMan.lng = this.pacMan.prevLng;
          }
        });
      });
    },

    calculateDistance(lat1, lng1, lat2, lng2) {
      // 计算两点之间的距离
      const R = 6371; // 地球半径，单位为公里
      const dLat = ((lat2 - lat1) * Math.PI) / 180;
      const dLng = ((lng2 - lng1) * Math.PI) / 180;
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const d = R * c; // 计算两点之间的距离
      return d;
    },
  },
};
</script>

<style scoped>
.game-container {
  text-align: center;
  margin-top: 20px;
}
</style>
