<template>
  <div>
    <div class="myblek relative text-white" style="height: 100vh">
      <img
        class="pjg1 absolute top-0"
        src="~/assets/img/ybk/pjg2.png"
        width="250px"
        alt=""
        srcset=""
      />
      <div class="cardgalery relative p1 rotate-3">
        <div class="wrappergalery absolute">
          <img class="object-cover" width="250px" src="~/assets/img/ybk/p1.png" srcset="" />
        </div>
        <img
          class="absolute character p1char rotate-3 object-cover"
          src="~/assets/img/ybk/p1nobg.png"
          srcset=""
        />
      </div>
      <div class="cardgalery relative p2 rotate-3">
        <div class="wrappergalery absolute">
          <img class="object-cover" width="250px" src="~/assets/img/ybk/p2.png" srcset="" />
        </div>
        <img
          class="absolute character p2char rotate-3 object-cover"
          src="~/assets/img/ybk/p2nobg.png"
          srcset=""
        />
      </div>
      <div class="cardgalery relative p3 rotate-3">
        <div class="wrappergalery absolute">
          <img class="object-cover" width="250px" src="~/assets/img/ybk/p3.png" srcset="" />
        </div>
        <img
          class="absolute character p3char rotate-3 object-cover"
          src="~/assets/img/ybk/p3nobg.png"
          srcset=""
        />
      </div>

      <img
        class="absolute icn1"
        src="~/assets/img/ybk/iconybk/1.png"
        width="80px"
      />
      <img
        class="absolute icn2"
        src="~/assets/img/ybk/iconybk/2.png"
        width="80px"
      />
      <img
        class="absolute icn3"
        src="~/assets/img/ybk/iconybk/3.png"
        width="80px"
      />
      <img
        class="absolute icn4"
        src="~/assets/img/ybk/iconybk/4.png"
        width="50px"
      />
      <img
        class="absolute icn5"
        src="~/assets/img/ybk/iconybk/5.png"
        width="80px"
      />
      <img
        class="absolute icn6"
        src="~/assets/img/ybk/iconybk/6.png"
        width="50px"
      />
      <img
        class="absolute icn7"
        src="~/assets/img/ybk/iconybk/7.png"
        width="100px"
      />
      <img
        class="absolute icn8"
        src="~/assets/img/ybk/iconybk/8.png"
        width="100px"
      />
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.cardgalery {
  /* width:100%;
  height: 100%; */
  /* position: relative; */
  /* display: flex;
  justify-content: center;
  align-items: flex-end; */
  padding: 0 36px;
  perspective: 2500px;
  margin: 0 50px;
}

.cover-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.wrappergalery {
  transition: all 0.5s;
  /* position: absolute; */
  /* width: 100%; */
  z-index: 33;
}

.cardgalery:hover .wrappergalery {
  transform: perspective(900px) translateY(0%) rotateX(25deg) translateZ(0);
  box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
}

.wrappergalery::before,
.wrappergalery::after {
  content: "";
  opacity: 0;
  /* width: 100%; */
  /* height: 100px; */
  transition: all 0.5s;
  position: absolute;
  left: 0;
}
.wrappergalery::before {
  top: 0;
  height: 100%;
  background-image: linear-gradient(
    to top,
    transparent 46%,
    rgba(12, 13, 19, 0.5) 68%,
    rgba(12, 13, 19) 97%
  );
}
.wrappergalery::after {
  bottom: 0;
  opacity: 1;
  background-image: linear-gradient(
    to bottom,
    transparent 46%,
    rgba(12, 13, 19, 0.5) 68%,
    rgba(12, 13, 19) 97%
  );
}

.cardgalery:hover .wrappergalery::before,
.wrappergalery::after {
  opacity: 1;
}

.cardgalery:hover .wrappergalery::after {
  height: auto;
}
.title {
  width: 100%;
  transition: transform 0.5s;
}
.cardgalery:hover .title {
  transform: translate3d(0%, -50px, 100px);
}

.character {
  width: 100%;
  opacity: 0;
  transition: all 0.5s;
  position: absolute;
  z-index: 100;
}

.cardgalery:hover .character {
  opacity: 1;
  transform: translate3d(0%, -30%, 100px);
}

.icn1 {
  top: 10%;
  right: 80%;
  transform: rotate(-15deg);
}
.icn2 {
  top: 54%;
    right: 80%;
    transform: rotate(80deg);
}
.icn3 {
  transform: scaleX(-1);
  right: -8%;
  top: -3%;
  z-index: 20;
}
.icn4 {
  left: 5%;
  top: 80%;
}
.icn5 {
  top: 88%;
  left: 50%;
  transform: rotate(169deg);
}
.icn6 {
  top: 60%;
  transform: rotate(20deg);
}
.icn7 {
  top: 75%;
  right: 35%;
}
.icn8 {
  transform: rotate(20deg);
  top: 31%;
  right: 18%;
}

.p1 {
  top: 16%;
  left: -7%;
}
.p2 {
  top: 38%;
  left: -19%;
  transform: rotate(-5deg);
}
.p3 {
  top: 58%;
  transform: rotate(4deg);
  left: 0%;
}

.p1char {
  top: 16%;
  left: 0%;
}
.p2char {
  top: 38%;
  left: -3%;
  transform: rotate(-5deg);
}
.p3char {
  top: 58%;
  transform: rotate(4deg);
  left: 6%;
}
.pjg1 {
  right: -24%;
  transform: rotate(-4deg);
  position: absolute;
}
</style>
