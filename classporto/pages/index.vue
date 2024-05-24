<template>
  <div style="overflow-x: hidden">
    <!-- <div :class="[aktif1 ? 'modal-backdrop' : '']"></div> -->
    <div class="home">
      <div class="flex justify-center items-center flex-col h-[100vh]">
        <h5
          class="text-[1.4rem] text-white font-semibold hidden sm:hidden lg:block md:block xl:block"
        >
          Hi, Visitor!
        </h5>
        <h1
          class="text-7xl text-white font-extrabold glow hidden sm:hidden lg:block md:block xl:block"
        >
          WELCOME
        </h1>
        <h6
          class="text-sm hidden text-white sm:hidden lg:block md:block xl:block"
          style="letter-spacing: 5px"
        >
          XII RPL U
        </h6>
        <div
          class="text-5xl text-white font-bold block md:hidden lg:hidden xl:hidden"
        >
          XII RPL U
        </div>
      </div>
    </div>
    <book2 />

    <div class="myblek relative text-white p-6">
      <div class="grid grid-cols-12 gap-2 mb-6">
        <div class="col-span-2">
          <p class="text-4xl bg-white text-black text-center font-medium">
            S<br />
            E<br />
            E<br />
            Y<br />
            O<br />
            U<br />
          </p>
        </div>
        <div class="col-span-10">
          <p class="text-xs">
            Time has flown by so quickly, and now we must say goodbye. Every laugh, joke, and struggle we’ve shared will forever remain in my memory. Thank you for being such an important part of my life. May we always have the chance to meet again in the future
          </p>

          <div class="relative flex mt-12 justify-end items-center">
            <div class="imgcard1">
              <img
                v-for="(img, i) in dataimgcard1"
                :key="i"
                :src="require('~/assets/img/' + img.img)"
                width="500"
                height="500"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="imgcard3">
        <input type="checkbox" v-model="aktif1" />
        <img
          v-for="(img, i) in dataimgcard3"
          :key="i"
          :src="require('~/assets/img/' + img.img)"
          width="300"
          height="300"
          alt=""
          srcset=""
        />
      </div>
      <div class="relative mt-16">
        <div class="">
        <p class="text-4xl text-start font-bold stroketext" data-place="Excelence Class">Excelence Class</p>
        <span class="text-4xl text-start font-bold stroketext" data-place="Excelence Class">Excelence Class</span>
        <span class="text-4xl text-start font-bold stroketext2" data-place="Excelence Class">Excelence Class</span>
        <!-- <span class="text-4xl text-center stroketext" data-place="Excelence Class">Excelence Class</span> -->
      </div>
      </div>
      <div class="flex justify-center items-center">
        <div class="gallery">
          <img
            v-for="(img, i) in dataimggalery"
            :key="i"
            :src="require('~/assets/img/' + img.img)"
            width="400"
            height="300"
            alt=""
            srcset=""
          />
        </div>
      </div>

    </div>
    <sectionBawah />
  </div>
</template>
<script>
import sectionBawah from "~/components/sectionBawah.vue";
import book2 from "~/components/book2.vue";
export default {
  components: {
    sectionBawah,
    book2,
  },
  data() {
    return {
      aktif1: false,
      dataimgcard3: [
        { img: "bgawal.jpg" },
        { img: "bgawal.jpg" },
        { img: "bgawal.jpg" },
        { img: "bgawal.jpg" },
        { img: "bgawal.jpg" },
        { img: "bgawal.jpg" },
        { img: "bgawal.jpg" },
        { img: "bgawal.jpg" },
        { img: "bgawal.jpg" },
      ],
      dataimgcard1: [
        { img: "bgawal.jpg" },
        { img: "bgawal.jpg" },
        { img: "bgawal.jpg" },
        { img: "bgawal.jpg" },
      ],
      dataimggalery: [
        { img: "bgawal.jpg" },
        { img: "bgawal.jpg" },
        { img: "bgawal.jpg" },
        { img: "bgawal.jpg" },
        { img: "bgawal.jpg" },
      ],
    };
  },
  name: "IndexPage",
};
</script>
<style>
.gallery {
  --d: 15s;
  /* duration */
  display: grid;
  overflow: hidden;
  width: 380px;
  -webkit-mask: linear-gradient(90deg, #0000, #000 10% 90%, #0000);
}

.gallery > img {
  grid-area: 1/1;
  width: 100%;
  aspect-ratio: 1.5;
  object-fit: cover;
  animation: r var(--d) linear infinite;
}

.gallery > img:nth-child(2) {
  animation-delay: calc(-0.2 * var(--d));
}

.gallery > img:nth-child(3) {
  animation-delay: calc(-0.4 * var(--d));
}

.gallery > img:nth-child(4) {
  animation-delay: calc(-0.6 * var(--d));
}

.gallery > img:nth-child(5) {
  animation-delay: calc(-0.8 * var(--d));
}

@keyframes r {
  80% {
    transform: translate(-400%);
  }
  80.01% {
    transform: translate(100%);
  }
}
.home {
  position: relative;
  width: 100%;
  height: auto;
  /* background: radial-gradient(circle, rgb(224, 195, 107 / 85%) 0%, rgb(198, 137, 57 / 91%) 100%), url("~/assets/img/bgawal.jpg"); */
  background: linear-gradient(
    to top,
    rgba(30, 30, 30, 1) 10%,
    rgba(30, 30, 30, 0)
  );
  background-image: radial-gradient(
      circle,
      rgba(238, 207, 114, 0.85) 0%,
      rgba(246, 166, 62, 0.91) 100%
    ),
    url("~/assets/img/bgawal.jpg");
  background-position-x: initial, initial;
  background-position-y: initial, initial;
  background-size: cover;
  background-repeat: initial, initial;
  background-attachment: initial, initial;
  background-origin: initial, initial;
  background-clip: initial, initial;
  background-color: initial;
  background-repeat: no-repeat;
  /* background-size: contain; */
  background-position: top;
  z-index: 10;
}
.home::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background: linear-gradient(
    to top,
    rgba(30, 30, 30, 1) 10%,
    rgba(30, 30, 30, 0)
  );
  z-index: -1;
  transform: scaleY(2);
  transform-origin: bottom;
  pointer-events: none;
}
</style>
