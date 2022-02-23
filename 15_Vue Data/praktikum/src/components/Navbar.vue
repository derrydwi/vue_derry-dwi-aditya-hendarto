<template>
  <nav class="bg-white shadow dark:bg-gray-800 sticky top-0 z-50">
    <div class="container px-6 py-4 mx-auto">
      <div class="md:flex md:items-center md:justify-between">
        <div class="flex items-center justify-between">
          <div class="text-xl font-semibold text-gray-700">
            <router-link
              class="
                text-2xl
                font-bold
                text-gray-800
                transition-colors
                duration-200
                transform
                dark:text-white
                lg:text-3xl
                hover:text-gray-700
                dark:hover:text-gray-300
              "
              :to="{ name: 'home' }"
              >News App</router-link
            >
          </div>

          <!-- Mobile menu button -->
          <div class="flex md:hidden">
            <button
              type="button"
              class="
                text-gray-500
                dark:text-gray-200
                hover:text-gray-600
                dark:hover:text-gray-400
                focus:outline-none focus:text-gray-600
                dark:focus:text-gray-400
              "
              aria-label="toggle menu"
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <div class="flex-1 md:flex md:items-center md:justify-between">
          <div
            class="flex flex-col -mx-4 md:flex-row md:items-center md:mx-8"
          ></div>

          <div class="flex items-center mt-4 md:mt-0">
            <button
              type="button"
              class="flex items-center focus:outline-none"
              aria-label="toggle profile dropdown"
            >
              <div
                class="
                  w-8
                  h-8
                  overflow-hidden
                  border-2 border-gray-400
                  rounded-full
                "
              >
                <img
                  src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80"
                  class="object-cover w-full h-full"
                  alt="avatar"
                />
              </div>

              <h3
                class="
                  mx-2
                  text-sm
                  font-medium
                  text-gray-700
                  dark:text-gray-200
                  md:hidden
                "
              >
                Derry Dwi Aditya
              </h3>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>