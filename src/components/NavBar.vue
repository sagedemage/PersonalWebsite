<script setup>
import linkedin from "../assets/icons/linkedin.webp";
import github from "../assets/icons/github.webp";
import { ref } from "vue";

const nav_menu_display = ref("none");

const open_and_close_nav_menu = () => {
  if (nav_menu_display.value === "none") {
    nav_menu_display.value = "block";
  } else if (nav_menu_display.value === "block") {
    nav_menu_display.value = "none";
  }
};
</script>

<template>
  <!-- Navbar -->
  <div class="navbar bg-base-100 shadow-sm bg-cornflower-blue fixed">
    <div class="navbar-left">
      <div class="dropdown inline-block">
        <button
          class="dropdown-btn px-[14px] py-[8px] btn rounded-full hover:bg-gray-200 bg-transparent border-transparent shadow-none hover:shadow-sm shadow-white"
          aria-label="Dropdown Button"
          @click="open_and_close_nav_menu"
        >
          <i class="dropdown-btn fa fa-bars" />
        </button>
        <div
          id="dropdown-menu"
          class="dropdown-content bg-cornflower-blue rounded-md shadow-sm"
          :style="{ display: nav_menu_display }"
        >
          <a class="!text-gray-900" href="/PersonalWebsite"> Home </a>
          <a class="!text-gray-900" href="/PersonalWebsite/projects">
            Projects
          </a>
        </div>
      </div>
      <a
        class="!text-black font-bold text-xl btn rounded-md hover:bg-gray-200 bg-transparent border-transparent shadow-none hover:shadow-sm shadow-white p-2"
        href="/PersonalWebsite"
      >
        Salmaan Saeed
      </a>
    </div>
    <div class="navbar-center" />
    <div class="navbar-right">
      <a target="_blank" href="https://github.com/sagedemage">
        <img
          class="ml-0.5 mr-0.5 float-left"
          :src="github.src"
          alt="my github profile"
          width="35"
          height="35"
        >
      </a>

      <a
        target="_blank"
        href="https://www.linkedin.com/in/salmaan-saeed-6a5582197/"
      >
        <img
          class="ml-0.5 mr-0.5 float-left"
          :src="linkedin.src"
          alt="my linkedin profile"
          width="35"
          height="35"
        >
      </a>
    </div>
  </div>
</template>

<style>
.navbar-left {
  float: left;
}

.navbar-right {
  float: right;
}

.navbar {
  width: 100%;
  padding: 10px;
}

.dropdown-btn {
  color: black;
}

.dropdown-content {
  display: none;
  position: absolute;
  min-width: 160px;
  z-index: 1;
  padding: 10px;
}

.dropdown-content > a {
  color: black;
  /* top/bottom and right/left*/
  padding: 3px 8px;
  text-decoration: none;
  display: block;
  font-size: 14px;
  border-radius: 4px;
}

.dropdown-content > a:hover {
  background-color: rgba(22, 22, 22, 0.1);
}
</style>
