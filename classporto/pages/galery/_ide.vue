<template>
  <div class="myblek text-white">
    <div class="p-6">
      <div class="flex justify-between">
<!-- panah bawah -->
<svg @click="$router.push('/')" data-encore-id="icon" role="img" aria-hidden="true" class="Svg-sc-ytk21e-0 cAMMLk IYDlXmBmmUKHveMzIPCF  fill-white w-6 hover:fill-[#928f88] " style="transform: rotate(270deg)" viewBox="0 0 16 16"><path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z"></path></svg>
<p class="text-md font-regular">{{getGaleryData?.subjudul}}</p>
        <!-- titik 3 -->
        <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24" class="Svg-sc-ytk21e-0 bneLcE  fill-white w-6 hover:fill-[#928f88]"><path d="M4.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm15 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-7.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path></svg>
      </div>
        <div class="avatar block mt-10">
          <div class="max-w-full rounded-xl">
          <img
            :src="getGaleryData?.foto"
            class="rounded-xl max-w-full object-cover mytransition1"
            alt=""
            srcset=""
          />
        </div>
      </div>
      <div class="flex items-center mt-10 mb-6 justify-between">
        <div class="">
          <p class="text-xl font-bold">{{ getGaleryData?.judul }}</p>
          <p class="text-md font-regular">{{getGaleryData?.subjudul}}</p>
        </div>
        <!-- <img :src="require('~/assets/galery/svg/plus.svg')"   alt="" srcset="" /> -->
        <svg
          data-encore-id="icon"
          cl
          role="img"
          aria-hidden="true"
          viewBox="0 0 24 24"
          class="Svg-sc-ytk21e-0 iYxpxA fill-white w-8 hover:fill-[#928f88]"
        >
          <path
            d="M11.999 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm-11 9c0-6.075 4.925-11 11-11s11 4.925 11 11-4.925 11-11 11-11-4.925-11-11z"
          ></path>
          <path
            d="M17.999 12a1 1 0 0 1-1 1h-4v4a1 1 0 1 1-2 0v-4h-4a1 1 0 1 1 0-2h4V7a1 1 0 1 1 2 0v4h4a1 1 0 0 1 1 1z"
          ></path>
        </svg>
      </div>
      <div class="h-1 rounded w-full bg-[#FFFFFF4D] mb-1"></div>
      <div class="flex justify-between items-center">
        <p class="text-xs">20.21</p>
        <p class="text-xs">20.24</p>
      </div>
      <div class="mt-4 flex justify-between items-center">
        <!-- logosupel -->
        <svg
          data-encore-id="icon"
          role="img"
          aria-hidden="true"
          viewBox="0 0 16 16"
          class="Svg-sc-ytk21e-0 dYnaPI fill-[#1ed760] w-6 hover:fill-[#1ca04a]"
        >
          <path
            d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z"
          ></path>
          <path
            d="m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z"
          ></path>
        </svg>

        <div class="flex justify-between items-center" >
          <!-- logokiri -->
          <svg @click="pushkiri"
            data-encore-id="icon"
            role="img"
            aria-hidden="true"
            viewBox="0 0 16 16"
            class="Svg-sc-ytk21e-0 dYnaPI fill-white w-6 hover:fill-[#928f88]"
          >
            <path
              d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"
            ></path>
          </svg>
          <!-- logo tengah -->
          <div v-if="playswitch" @click="myswitch()">
            <svg
              data-encore-id="icon"
              role="img"
              aria-hidden="true"
              viewBox="0 0 16 16"
              class="Svg-sc-ytk21e-0 dYnaPI bg-white p-5 rounded-full fill-[#1E1E1E] w-16 hover:fill-[#67645f] hover:bg-[#928f88] mx-10"
            >
              <path
                d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"
              ></path>
            </svg>
          </div>
          <div v-else @click="myswitch()">
            <svg
              data-encore-id="icon"
              role="img"
              aria-hidden="true"
              viewBox="0 0 16 16"
              class="Svg-sc-ytk21e-0 dYnaPI bg-white p-5 rounded-full fill-[#1E1E1E] w-16 hover:fill-[#67645f] hover:bg-[#928f88] mx-10"
            >
              <path
                d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"
              ></path>
            </svg>
          </div>
          <!-- logokanan -->
          <svg @click="pushkanan"
            data-encore-id="icon"
            role="img"
            aria-hidden="true"
            viewBox="0 0 16 16"
            class="Svg-sc-ytk21e-0 dYnaPI fill-white w-6 hover:fill-[#928f88]"
          >
            <path
              d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"
            ></path>
          </svg>
        </div>
        <!-- logoser -->
        <svg
          data-encore-id="icon"
          role="img"
          aria-hidden="true"
          viewBox="0 0 16 16"
          class="Svg-sc-ytk21e-0 ewCuAY fill-white w-6 hover:fill-[#928f88]"
        >
          <path
            d="M1 5.75A.75.75 0 0 1 1.75 5H4v1.5H2.5v8h11v-8H12V5h2.25a.75.75 0 0 1 .75.75v9.5a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75v-9.5z"
          ></path>
          <path
            d="M8 9.576a.75.75 0 0 0 .75-.75V2.903l1.454 1.454a.75.75 0 0 0 1.06-1.06L8 .03 4.735 3.296a.75.75 0 0 0 1.06 1.061L7.25 2.903v5.923c0 .414.336.75.75.75z"
          ></path>
        </svg>
      </div>
      <div class="mt-6 flex justify-between">
        <svg
          data-encore-id="icon"
          role="presentation"
          aria-hidden="true"
          class="Svg-sc-ytk21e-0 dYnaPI fill-white w-5 hover:fill-[#928f88]"
          viewBox="0 0 16 16"
        >
          <path
            d="M6 2.75C6 1.784 6.784 1 7.75 1h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15h-6.5A1.75 1.75 0 0 1 6 13.25V2.75zm1.75-.25a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h6.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25h-6.5zm-6 0a.25.25 0 0 0-.25.25v6.5c0 .138.112.25.25.25H4V11H1.75A1.75 1.75 0 0 1 0 9.25v-6.5C0 1.784.784 1 1.75 1H4v1.5H1.75zM4 15H2v-1.5h2V15z"
          ></path>
          <path
            d="M13 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-1-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
          ></path>
        </svg>

        <svg
          data-encore-id="icon"
          role="img"
          aria-hidden="true"
          viewBox="0 0 16 16"
          class="Svg-sc-ytk21e-0 ewCuAY fill-white w-5 hover:fill-[#928f88]"
        >
          <path
            d="M1 5.75A.75.75 0 0 1 1.75 5H4v1.5H2.5v8h11v-8H12V5h2.25a.75.75 0 0 1 .75.75v9.5a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75v-9.5z"
          ></path>
          <path
            d="M8 9.576a.75.75 0 0 0 .75-.75V2.903l1.454 1.454a.75.75 0 0 0 1.06-1.06L8 .03 4.735 3.296a.75.75 0 0 0 1.06 1.061L7.25 2.903v5.923c0 .414.336.75.75.75z"
          ></path>
        </svg>
      </div>
      <div class="mt-5">
        <div class="p-5 rounded-xl bg-[#757575] h-80 overflow-y-scroll ">
          <div class="flex items-center justify-between">
            <p class="text-lg font-medium">Lirik</p>
            <div class="flex items-center">
              <svg
                id="Flat"
                xmlns="http://www.w3.org/2000/svg"
                class="fill-white w-8 hover:fill-[#928f88] bg-[#0000008A] hover:bg-[#0000005f] p-1.5 rounded-full"
                viewBox="0 0 256 256"
              >
                <path
                  d="M239.15527,212.42188l-56-112a8.00009,8.00009,0,0,0-14.31054,0L147.14722,143.817a88.01187,88.01187,0,0,1-47.15235-16.89991A103.63859,103.63859,0,0,0,127.69531,64H152a8,8,0,0,0,0-16H96V32a8,8,0,0,0-16,0V48H24a8,8,0,0,0,0,16h87.63257a87.71326,87.71326,0,0,1-23.64038,52.34106A87.62852,87.62852,0,0,1,69.01025,85.332a7.99984,7.99984,0,1,0-15.083,5.33789A103.56313,103.56313,0,0,0,76.009,126.93945,87.52771,87.52771,0,0,1,24,144a8,8,0,0,0,0,16,103.48414,103.48414,0,0,0,64.01318-22.09045A104.14255,104.14255,0,0,0,139.45459,159.202l-26.60986,53.21985a8.00005,8.00005,0,0,0,14.31054,7.15625L140.94434,192h70.11132l13.78907,27.57813a8.00005,8.00005,0,0,0,14.31054-7.15625ZM148.94434,176,176,121.88867,203.05566,176Z"
                />
              </svg>
              <svg
                data-encore-id="icon"
                role="img"
                aria-hidden="true"
                viewBox="0 0 16 16"
                class="Svg-sc-ytk21e-0 ewCuAY mx-4 fill-white w-8 hover:fill-[#928f88] bg-[#0000008A] hover:bg-[#0000005f] p-1.5 rounded-full"
              >
                <path
                  d="M1 5.75A.75.75 0 0 1 1.75 5H4v1.5H2.5v8h11v-8H12V5h2.25a.75.75 0 0 1 .75.75v9.5a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75v-9.5z"
                ></path>
                <path
                  d="M8 9.576a.75.75 0 0 0 .75-.75V2.903l1.454 1.454a.75.75 0 0 0 1.06-1.06L8 .03 4.735 3.296a.75.75 0 0 0 1.06 1.061L7.25 2.903v5.923c0 .414.336.75.75.75z"
                ></path>
              </svg>
              <svg
                data-encore-id="icon"
                role="img"
                aria-hidden="true"
                viewBox="0 0 16 16"
                class="Svg-sc-ytk21e-0 dYnaPI fill-white w-8 p-2 hover:fill-[#928f88] bg-[#0000008A] hover:bg-[#0000005f] rounded-full"
              >
                <path
                  d="M6.53 9.47a.75.75 0 0 1 0 1.06l-2.72 2.72h1.018a.75.75 0 0 1 0 1.5H1.25v-3.579a.75.75 0 0 1 1.5 0v1.018l2.72-2.72a.75.75 0 0 1 1.06 0zm2.94-2.94a.75.75 0 0 1 0-1.06l2.72-2.72h-1.018a.75.75 0 1 1 0-1.5h3.578v3.579a.75.75 0 0 1-1.5 0V3.81l-2.72 2.72a.75.75 0 0 1-1.06 0z"
                ></path>
              </svg>
            </div>
          </div>
          <p class="text-lg font-bold text-white">Putih abu kala itu</p>
          <div   class="mt-2 max-w-4xl columns-3 gap-3">
              <img v-for="(subgaleryparent, i) in getGaleryData?.subgalery?.sub1 " :key="i"
                :src="subgaleryparent?.foto"
                class="rounded-xl object-cover mb-2"
                alt=""
                srcset=""
              />
              <!-- <div class="mt-1">
                <p class="text-sm">ahahay</p>
                <p class="text-xs font-thin text-gray">23 PENGIKUT</p>
              </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  data() {
    return {
      playswitch: false,
      pathmaks: 1,
    };
  },
  computed: {
    ...mapGetters({
      getPathmaks:'mystore/getPathmaks',
      getGaleryData:'mystore/getGaleryData'
    ,}),
  },
  methods: {
    ...mapActions({incrementPathmaks:'mystore/incrementPathmaks',

    fetchData:'mystore/fetchData',
    incrementPathmaksMin:'mystore/incrementPathmaksMin'

    }),
    myswitch() {
      this.playswitch = !this.playswitch;
      console.log("ss");
    },
    pushkanan(){
      this.incrementPathmaks();
      this.$router.push('/galery/' + this.getPathmaks);
      console.log('nigga', this.getPathmaks);
      this.$store.dispatch('mystore/fetchData',this.$route.params.ide??1)
    },
    pushkiri(){
      this.incrementPathmaksMin();
      this.$router.push('/galery/' + this.getPathmaks);
      console.log('nigga', this.getPathmaks);
      this.$store.dispatch('mystore/fetchData',this.$route.params.ide??1)
    }
  },
  async created(){
    console.log(this.$route.params.ide);
    this.$store.dispatch('mystore/fetchData',this.$route.params.ide??1)
  }
};
</script>
<style scoped>
.barprogres {
  width: 100%;
  --bg-color: hsla(0, 0%, 100%, 0.3);
  --fg-color: #fff;
  --is-active-fg-color: #1db954;
  --progress-bar-transform: 0%;
  --progress-bar-height: 4px;
  --progress-bar-radius: calc(var(--progress-bar-height) / 2);
  height: 4px;
}
</style>
