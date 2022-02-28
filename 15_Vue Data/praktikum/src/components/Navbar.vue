<template>
  <nav
    class="
      bg-white
      border-gray-200
      px-2
      sm:px-4
      py-2.5
      rounded
      dark:bg-gray-800
      shadow
      sticky
      top-0
      z-50
    "
  >
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <router-link
        :to="{ name: 'home' }"
        class="flex"
        @click="$emit('changeCategory', categories[0])"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="50"
          height="50"
          viewBox="0 0 64 64"
          style="fill: #000000"
        >
          <radialGradient
            id="3KxWflJe_c9h2mTSoYSAaa"
            cx="29.979"
            cy="36.5"
            r="32.704"
            gradientUnits="userSpaceOnUse"
            spreadMethod="reflect"
          >
            <stop offset="0" stop-color="#efdcb1"></stop>
            <stop offset="0" stop-color="#f2e0bb"></stop>
            <stop offset=".011" stop-color="#f2e0bc"></stop>
            <stop offset=".362" stop-color="#f9edd2"></stop>
            <stop offset=".699" stop-color="#fef4df"></stop>
            <stop offset="1" stop-color="#fff7e4"></stop>
          </radialGradient>
          <path
            fill="url(#undefined)"
            d="M58,20h-4.893c-0.996,0-1.92-0.681-2.08-1.664C50.824,17.083,51.785,16,53,16h0.83 c1.624,0,3.081-1.216,3.166-2.839C57.086,11.431,55.71,10,54,10H43h-8h-7v1h-9.852c-1.582,0-3.003,1.162-3.137,2.738 c-0.151,1.779,1.252,3.27,3.002,3.262c0.736-0.003,1.452,0.23,1.987,0.687V21h-7.302c-1.895,0-3.594,1.419-3.693,3.312 c-0.103,1.966,1.42,3.588,3.343,3.672C12.908,29.171,14.101,30,15.5,30h4.411c0.03,0,0.059,0.006,0.089,0.007v4.002 c-0.84,0.057-1.62,0.42-2.176,0.991H11c-1.381,0-2.5,1.119-2.5,2.5c0,1.381,1.119,2.5,2.5,2.5h0.5c1.381,0,2.5,1.119,2.5,2.5 c0,1.381-1.119,2.5-2.5,2.5H5.17c-1.625,0-3.081,1.216-3.166,2.839C1.914,49.569,3.29,51,5,51h4.893c0.996,0,1.92,0.681,2.08,1.664 C12.176,53.917,11.215,55,10,55H9.17c-1.625,0-3.081,1.216-3.166,2.839C5.914,59.569,7.29,61,9,61h35.852 c1.582,0,3.003-1.162,3.137-2.738c0.151-1.779-1.252-3.27-3.002-3.262c-0.883,0.004-1.728-0.34-2.271-1H43v-4h7.302 c1.895,0,3.594-1.419,3.693-3.312C54.101,44.67,52.495,43,50.5,43h-0.208c-0.639-1.125-1.651-2-2.792-2h-4.411 c-0.03,0-0.059-0.006-0.089-0.007v-4.001c0.84-0.057,1.62-0.42,2.176-0.991H52c1.381,0,2.5-1.119,2.5-2.5c0-1.381-1.119-2.5-2.5-2.5 h-0.5c-1.381,0-2.5-1.119-2.5-2.5c0-1.381,1.119-2.5,2.5-2.5h6.33c1.624,0,3.081-1.216,3.166-2.839C61.086,21.431,59.71,20,58,20z"
          ></path>
          <linearGradient
            id="3KxWflJe_c9h2mTSoYSAab_118992_gr1"
            x1="29.5"
            x2="29.5"
            y1="57"
            y2="9.812"
            gradientUnits="userSpaceOnUse"
            spreadMethod="reflect"
          >
            <stop offset="0" stop-color="#4bcaee"></stop>
            <stop offset=".539" stop-color="#56cdf0"></stop>
            <stop offset="1" stop-color="#64d0f3"></stop>
          </linearGradient>
          <path
            fill="url(#3KxWflJe_c9h2mTSoYSAab_118992_gr1)"
            d="M53,57H16c-5.523,0-10-4.477-10-10V11c0-1.657,1.343-3,3-3h32c1.657,0,3,1.343,3,3v37 C44,52.971,48.029,57,53,57L53,57z"
          ></path>
          <linearGradient
            id="3KxWflJe_c9h2mTSoYSAac_118992_gr2"
            x1="52.5"
            x2="52.5"
            y1="28.38"
            y2="57.38"
            gradientUnits="userSpaceOnUse"
            spreadMethod="reflect"
          >
            <stop offset="0" stop-color="#30c3ea"></stop>
            <stop offset=".169" stop-color="#2bbce7"></stop>
            <stop offset=".406" stop-color="#1eaadf"></stop>
            <stop offset=".479" stop-color="#19a3dc"></stop>
            <stop offset="1" stop-color="#18a1db"></stop>
          </linearGradient>
          <path
            fill="url(#3KxWflJe_c9h2mTSoYSAac_118992_gr2)"
            d="M52.5,57L52.5,57c-4.694,0-8.5-3.805-8.5-8.5V28h14c1.657,0,3,1.343,3,3v17.5 C61,53.195,57.194,57,52.5,57z"
          ></path>
          <linearGradient
            id="3KxWflJe_c9h2mTSoYSAad_118992_gr3"
            x1="53.99"
            x2="53.99"
            y1="29.189"
            y2="50.816"
            gradientUnits="userSpaceOnUse"
            spreadMethod="reflect"
          >
            <stop offset="0" stop-color="#38caed"></stop>
            <stop offset=".627" stop-color="#26b3e3"></stop>
            <stop offset=".996" stop-color="#1aa3dc"></stop>
          </linearGradient>
          <path
            fill="url(#3KxWflJe_c9h2mTSoYSAad_118992_gr3)"
            d="M54.973,30.336C54.813,31.319,53.889,32,52.893,32h-1.786c-0.996,0-1.92,0.681-2.08,1.664 C48.824,34.917,49.785,36,51,36h1.5c0.828,0,1.5,0.672,1.5,1.5S53.328,39,52.5,39l-2.877,0c-1.308,0-2.499,0.941-2.63,2.242 C46.844,42.739,48.015,44,49.48,44h6.02c0.828,0,1.5,0.672,1.5,1.5S56.328,47,55.5,47h-1.393c-0.996,0-1.92,0.681-2.08,1.664 C51.824,49.917,52.785,51,54,51h6.625C60.868,50.209,61,49.37,61,48.5V31c0-1.657-1.343-3-3-3h-5 C54.215,28,55.176,29.083,54.973,30.336z"
          ></path>
          <linearGradient
            id="3KxWflJe_c9h2mTSoYSAae_118992_gr4"
            x1="32.25"
            x2="32.25"
            y1="36.984"
            y2="57.984"
            gradientUnits="userSpaceOnUse"
            spreadMethod="reflect"
          >
            <stop offset="0" stop-color="#40c8ee"></stop>
            <stop offset="1" stop-color="#2dbae8"></stop>
          </linearGradient>
          <path
            fill="url(#3KxWflJe_c9h2mTSoYSAae_118992_gr4)"
            d="M12,38.5L12,38.5c0,1.381,1.119,2.5,2.5,2.5H18c1.105,0,2,0.895,2,2v0c0,1.105-0.895,2-2,2h-2 c-1.105,0-2,0.895-2,2v0c0,1.105,0.895,2,2,2h7c1.105,0,2,0.895,2,2v0c0,1.105-0.895,2-2,2h-2c-1.105,0-2,0.895-2,2v0 c0,1.105,0.895,2,2,2h31.5h0c-4.694,0-8.5-3.805-8.5-8.5V36H14.5C13.119,36,12,37.119,12,38.5z"
          ></path>
          <linearGradient
            id="3KxWflJe_c9h2mTSoYSAaf_118992_gr5"
            x1="15"
            x2="15"
            y1="23"
            y2="8"
            gradientUnits="userSpaceOnUse"
            spreadMethod="reflect"
          >
            <stop offset="0" stop-color="#7ad9f6"></stop>
            <stop offset="1" stop-color="#85dbf8"></stop>
          </linearGradient>
          <path
            fill="url(#3KxWflJe_c9h2mTSoYSAaf_118992_gr5)"
            d="M14,19l1.893,0c0.996,0,1.92-0.681,2.08-1.664C18.176,16.083,17.215,15,16,15h-1.5 c-0.828,0-1.5-0.672-1.5-1.5v0c0-0.828,0.672-1.5,1.5-1.5H22c1.215,0,2.176-1.083,1.973-2.336C23.813,8.681,22.889,8,21.893,8L9,8 c-1.657,0-3,1.343-3,3v12l9.893,0c0.996,0,1.92-0.681,2.08-1.664C18.176,20.083,17.215,19,16,19H14L14,19z"
          ></path>
          <linearGradient
            id="3KxWflJe_c9h2mTSoYSAag_118992_gr6"
            x1="25"
            x2="25"
            y1="33.542"
            y2="11.977"
            gradientUnits="userSpaceOnUse"
            spreadMethod="reflect"
          >
            <stop offset=".018" stop-color="#fff8e5"></stop>
            <stop offset="1" stop-color="#fffef8"></stop>
          </linearGradient>
          <path
            fill="url(#3KxWflJe_c9h2mTSoYSAag_118992_gr6)"
            d="M36,27H14c-1.105,0-2-0.895-2-2v-7c0-1.105,0.895-2,2-2h22c1.105,0,2,0.895,2,2v7 C38,26.105,37.105,27,36,27z"
          ></path>
          <g>
            <path
              fill="#fff"
              d="M27 36H14c-1.105 0-2-.895-2-2v0c0-1.105.895-2 2-2h13c1.105 0 2 .895 2 2v0C29 35.105 28.105 36 27 36zM36 36h-2c-1.105 0-2-.895-2-2v0c0-1.105.895-2 2-2h2c1.105 0 2 .895 2 2v0C38 35.105 37.105 36 36 36zM16 50h-2c-1.105 0-2-.895-2-2v0c0-1.105.895-2 2-2h2c1.105 0 2 .895 2 2v0C18 49.105 17.105 50 16 50zM36 50H23c-1.105 0-2-.895-2-2v0c0-1.105.895-2 2-2h13c1.105 0 2 .895 2 2v0C38 49.105 37.105 50 36 50zM20 43h-6c-1.105 0-2-.895-2-2v0c0-1.105.895-2 2-2h6c1.105 0 2 .895 2 2v0C22 42.105 21.105 43 20 43zM36 43h-9c-1.105 0-2-.895-2-2v0c0-1.105.895-2 2-2h9c1.105 0 2 .895 2 2v0C38 42.105 37.105 43 36 43z"
            ></path>
          </g>
        </svg>
        <span
          class="
            ml-2
            self-center
            text-lg
            font-semibold
            whitespace-nowrap
            dark:text-white
          "
          >News App</span
        >
      </router-link>
      <div class="flex md:order-2">
        <div class="hidden relative mr-3 md:mr-0 md:block">
          <div
            class="
              flex
              absolute
              inset-y-0
              left-0
              items-center
              pl-3
              pointer-events-none
            "
          >
            <svg
              class="w-5 h-5 text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            v-model="query"
            @keyup.enter="
              $emit('search', query);
              $router.push('/');
            "
            type="text"
            class="
              block
              p-2
              pl-10
              w-full
              text-gray-900
              bg-gray-50
              rounded-lg
              border border-gray-300
              sm:text-sm
              focus:ring-blue-500 focus:border-blue-500
              dark:bg-gray-700
              dark:border-gray-600
              dark:placeholder-gray-400
              dark:text-white
              dark:focus:ring-blue-500
              dark:focus:border-blue-500
            "
            placeholder="Search..."
          />
        </div>
        <div class="my-auto ml-3">
          <label
            for="toggle-example"
            class="flex relative items-center cursor-pointer"
          >
            <input
              type="checkbox"
              id="toggle-example"
              class="sr-only"
              :checked="$store.state.isDark"
              @click="$emit('darkModeToggle')"
            />
            <div
              class="
                w-11
                h-6
                bg-gray-200
                rounded-full
                border border-gray-200
                toggle-bg
                dark:bg-gray-700 dark:border-gray-600
              "
            ></div>
          </label>
        </div>
        <button
          data-collapse-toggle="mobile-menu-3"
          type="button"
          class="
            inline-flex
            items-center
            p-2
            ml-3
            text-sm text-gray-500
            rounded-lg
            md:hidden
            hover:bg-gray-100
            focus:outline-none focus:ring-2 focus:ring-gray-200
            dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600
          "
          aria-controls="mobile-menu-3"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg
            class="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div
        class="
          hidden
          justify-between
          items-center
          w-full
          md:flex md:w-auto md:order-1
        "
        id="mobile-menu-3"
      >
        <ul
          class="
            flex flex-col
            mt-4
            md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium
          "
        >
          <li v-for="category in categories" :key="category">
            <router-link
              :to="{ name: 'home' }"
              @click="$emit('changeCategory', category)"
              class="
                block
                capitalize
                py-2
                pr-4
                pl-3
                text-gray-700
                border-b border-gray-100
                hover:bg-gray-50
                md:hover:bg-transparent
                md:border-0
                md:hover:text-blue-700
                md:p-0
                md:dark:hover:text-white
                dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white
                md:dark:hover:bg-transparent
                dark:border-gray-700
              "
              >{{ category }}</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
defineEmits(["changeCategory", "search", "darkModeToggle"]);

const query = ref("");
const categories = [
  "general",
  "business",
  "entertainment",
  "science",
  "sports",
  "technology",
];
</script>