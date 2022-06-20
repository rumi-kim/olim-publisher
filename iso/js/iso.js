const SpinViewer = eg.view360.SpinViewer;
const ROW_COUNT = 32;
const UNIT = 360 / ROW_COUNT;

Vue.component('iso-component', {
  template: `
  <div class="detail-view" id="iso">
    <div class="detail-view__iso">
      <div style="position: relative">
        <div
          class="detail-view__iso--wrap"
          ref="spinViewerWrap"
          @click="isIsoDescOpen = false"
        >
          <template v-for="(spin, index) in theme">
            <div
              class="iso"
              ref="mySpinViewer"
              :key="index"
              v-show="nowThemeIndex === index"
            ></div>
          </template>

          <transition name="fade">
            <div class="iso__intro" v-if="!isIsoLoaded" style="color: #000">
              <p>이미지를 불러오는 중입니다.</p>
            </div>
          </transition>
          <div class="iso__buttons">
            <button @click="onDisplayChange" class="iso__button icon__dp" v-if="hasDisplay">
              <p class="icon__dp--title">DP</p>
              <span class="icon__dp--desc">
                {{ desc }}
              </span>
            </button>
            <button
              @click="onMapOpen"
              class="iso__button icon__map"
              v-if="isMinimap"
            >
              <img src="iso/img/vil_map_hover.svg" alt="map" />
            </button>
            <button @click="onFullscreen" class="iso__button icon__fullscreen">
              <img src="iso/img/btn_fullscreen.svg" alt="fullscreen" />
            </button>
          </div>
        </div>
        <transition name="fade">
          <template v-if="isIsoLoaded && isIsoDescOpen">
            <div class="iso__desc" @click="isIsoDescOpen = false">
              <img src="iso/img/icon__rotate-screen.svg" alt="" />
              <p>화면위에서 마우스 드래그 혹은 터치로 움직여주세요.</p>
            </div>
          </template>
        </transition>
        <transition name="fade">
          <template v-if="isMinimap">
            <div
              class="iso__map"
              v-bind:style="{ backgroundImage: 'url(' + mapPath + ')' }"
              v-if="isMapOpen"
            >
              <button class="circle__close" @click="isMapOpen = false">
                <img src="iso/img/all_mainmenu_open.svg" alt="close" />
              </button>
              <div class="iso__buttons">
                <button
                  class="iso__button icon__map"
                  @click="isMapOpen = false"
                >
                  <img src="iso/img/vil_map_hover.svg" alt="map" />
                </button>
                <button @click="onPanMap" class="iso__button icon__fullscreen">
                  <img src="iso/img/btn_fullscreen.svg" alt="fullscreen" />
                </button>
              </div>
            </div>
          </template>
        </transition>
      </div>
    </div>
    <transition name="fade">
      <div class="iso--pan__wrap" v-show="fullscreen">
        <div class="iso--pan" ref="isoPanWrap">
          <img
            :src="panImgName"
            alt="iso image"
            ref="isoPan"
            @load="isoPanPathLoad"
          />
          <transition name="fade">
            <div class="iso__intro" v-if="!isIsoPanLoaded">
              <p>이미지를 불러오는 중입니다.</p>
            </div>
          </transition>
          <!-- <div class="iso__buttons"> -->
          <button @click="onCloseFullscreen" class="circle__close">
            <img src="iso/img/all_mainmenu_open.svg" alt="plus" />
          </button>
          <!-- </div> -->
        </div>
      </div>
    </transition>
  </div>
  `,
  data() {
    return {
      isIsoLoaded: false,
      fullscreen: false,
      panzoom: null,
      mySpinViewer: null,
      spinViewer: null,
      isoPanIndex: 0,
      isIsoPanLoaded: false,
      isMapOpen: false,
      isIsoDescOpen: true,
      theme: [],
      isMinimap: false,
      nowThemeIndex: 0,
    };
  },
  computed: {
    nowTheme() {
      return this.theme[this.nowThemeIndex];
    },
    iso() {
      return this.nowTheme && this.nowTheme.prefixUrl;
    },
    imagePath() {
      return `${this.iso}/spin.jpg`;
    },
    isoPanPath() {
      return `${this.iso}/${this.isoPanIndex}.jpg`;
    },
    mapPath() {
      return `${this.iso}/map.jpg`;
    },
    panImgName() {
      if (this.isMapOpen) {
        return this.mapPath;
      } else {
        return this.isoPanPath;
      }
    },
    desc() {
      return this.nowTheme && this.nowTheme.title;
    },
    hasDisplay() {
      return this.theme && this.theme.length > 1;
    }
  },
  methods: {
    exitTour() {
      this.fullscreen && this.spinViewer.setScale(1);
    },
    onFullscreen() {
      this.fullscreen = true;

      this.$nextTick(() => {
        const y = window.innerHeight / 2 - (window.innerWidth * 0.5625) / 2;

        this.panzoom.pan(0, y);
        this.panzoom.zoom(1);
      });
    },
    onCloseFullscreen() {
      this.isIsoPanLoaded = true;
      this.fullscreen = false;
    },
    isoPanPathLoad(image) {
      this.$nextTick(() => {
        this.isIsoPanLoaded = true;
      });
    },
    onPanMap() {
      this.onFullscreen();
    },
    onMapOpen() {
      this.isMapOpen = true;
    },
    mapImageLoad(src) {
      return new Promise((resolve, reject) => {
        let img = new Image();
        img.onload = () => resolve(true);
        img.onerror = reject;
        img.src = src;
      });
    },
    onDisplayChange() {
      this.mySpinViewer[this.nowThemeIndex].spinTo(-this.isoPanIndex * UNIT);
      this.nowThemeIndex = this.nowThemeIndex + 1;

      if (this.nowThemeIndex > this.theme.length - 1) {
        this.nowThemeIndex = 0;
      }

      this.changeTheme(this.nowThemeIndex);
    },
    changeTheme(index) {
      this.mySpinViewer[index].spinTo(-this.isoPanIndex * UNIT);
    },
  },
  async mounted() {
    try {
      const data = (await axios.get(PREFIX_URL)).data;

      this.theme = data.theme;
      this.isMinimap = data.minimap;

      await this.$nextTick(() => {
        this.mySpinViewer = this.theme.map((data, index) => {
          const viewerElement = this.$refs.mySpinViewer[index];

          this.spinViewer = new SpinViewer(viewerElement, {
            imageUrl: `${data.prefixUrl}/spin.jpg` /*required */,
            rowCount: ROW_COUNT,
            scale: 1,
            width: "100%",
          });

          this.spinViewer.on("load", () => {
            this.isIsoLoaded = true;
          });

          this.spinViewer.on("change", (event) => {
            this.isoPanIndex = event.frameIndex;
          });

          return this.spinViewer;
        });

        this.isoPan = this.$refs.isoPan;

        this.panzoom = Panzoom(this.isoPan, {
          canvas: true,
          maxScale: 3,
          minScale: 0.8,
        });

        this.isoPan.parentElement.addEventListener(
          "wheel",
          this.panzoom.zoomWithWheel
        );
      });
    } catch (error) {
      console.error(error);
    }
  },
})



const app = new Vue({
  el: '#app',
});
