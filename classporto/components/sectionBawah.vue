<template>
  <div class="text-white">
    <div class="myblek pt-2"></div>
    <div class="end1bg p-6"></div>
    <div class="myblek px-6">
      <div class="flex justify-between">
        <p >Great Story</p>
        <div>
          <p class="text-xl font-bold text-center">18</p>
          <p class="text-sm font-light text-center">Maret</p>
        </div>
      </div>
    </div>
    <div class="myblek p-6">
      <div class="flex justify-between">
        <p class="text-start text-sm m-0">
          Make with <br />
          nuxt
        </p>
        <p class="text-center m-0">Daily Activity</p>
        <p class="text-end text-sm m-0">
          Make with <br />
          tailwind
        </p>
      </div>
      <p class="text-center text-lg mt-2 font-light">ANGKATAN 18</p>
      <p class="font-bold text-center text-5xl">#THE END</p>
      <p class="text-center text-sm mt-2 font-light">
        GOOD BYE AND SEE YOU LATER XII RPL U
      </p>
      <div class="grid mt-4 grid-cols-2 gap-2">
        <div class="col-span-1">
          <p class="text-xs">
            It’s hard to believe we’ve reached this point, where we have to say goodbye and start a new chapter in our lives. Thanks for all the fun and unforgettable moments. Keep in touch! Wishing you all the best success
          </p>
        </div>
        <div class="col-span-1 flex items-center">
          <div class="bg-white pt-4 px-2 pb-6">
            <img src="~/assets/img/bgawal.jpg" alt="" srcset="" />
          </div>
        </div>
      </div>
      <div class="mt-4 grid grid-cols-12">
        <div class="col-span-10">
          <div class="bg-white pt-5 px-3 pb-7">
            <img src="~/assets/img/bgawal.jpg" alt="" srcset="" />
          </div>
        </div>
        <div class="col-span-2 relative flex items-end w-72">
          <div class="rotatetext -rotate-90" style="margin-bottom: -31px">
            <p class="text-4xl text-center">Memories</p>
            <p class="text-sm text-center">Our Memories</p>
          </div>
          <!-- <p class="text-4xl -rotate-90 w-full absolute top-0 left-0">Lorem, ipsum dolor.</p> -->
        </div>
      </div>
      <div class="grid grid-cols-12 gap-2 mt-4">
        <div class="col-span-7">
          <p class="text-xs">
            Saying goodbye is never easy, but it’s the start of new beginnings. Let’s embrace the future with open hearts and minds. Best of luck to everyone on their new paths. We’ll meet again someday, stronger and wiser.
          </p>
        </div>
        <div class="col-span-5">
          <div class="bg-white pt-3 px-1 pb-5">
            <img src="~/assets/img/bgawal.jpg" alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
    <div class="end2bg p-12"></div>
    <div class="p-6 myblek grid grid-cols-2">
      <div class="col-span-1">
        <h2 class="mb-4 text-sm font-semibold uppercase text-white">
          CREATED BY
        </h2>
        <ul class="text-gray-400 dark:text-gray-400 font-medium">
          <li class="mb-2">
            <a
              href="https://github.com/Izanagi05"
              class="hover:underline"
              >z.frs_slm05</a
            >
          </li>
        </ul>
      </div>
      <div class="col-span-1">
        <h2 class="mb-4 text-sm font-semibold uppercase text-white">
          FOLLOW US
        </h2>
        <ul class="text-gray-400 dark:text-gray-400 font-medium">
          <li class="mb-2">
            <a
              href="https://github.com/Izanagi05"
              class="hover:underline"
              >Github</a
            >
          </li>
          <li class="mb-2">
            <a
              href="https://github.com/Izanagi05"
              class="hover:underline"
              >LinkedIn</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.end1bg {
  background: url("~/assets/img/assetcomp/end3.png");
  background-color: rgba(30, 30, 30, 1);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* background-size: contain; */
  background-position: top;
}
.end2bg {
  background: url("~/assets/img/assetcomp/end2.png");
  background-color: rgba(30, 30, 30, 1);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* background-size: contain; */
  background-position: top;
}
.rotatetext {
  /* transform: rotate(-90deg);
  width:100%; */
  -webkit-transform-origin: 0 0;
  /* position: absolute;
  bottom:0;
  left:0; */
}
</style>
