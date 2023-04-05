<template>
  <ul>
    <li class="my-4" v-for="(skill, index) in skills" :key="index">
      <div class="accordion--header">
        <p class="accordion--header__title">{{ skill.title }}</p>
        <button @click="closeAllSkills(skill)">
          <svg width="12" height="12" class="fill-dark-gray dark:fill-white transition-all ease-in-out duration-300" :class="skill.open ? 'rotate-180' : ''" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.25 0L6.75 0V6H8.25V7.5H6.75V9H5.25V7.5H3.75V6H5.25V0ZM3.75 6H2.25V4.5H3.75V6ZM8.25 6V4.5H9.75V6H8.25ZM0 10.5H12V12H0L0 10.5Z" />
          </svg>
        </button>
      </div>
      <div class="accordion--body" :class="skill.open ? 'h-auto px-3 py-6 border-2' : 'h-px border'">
        <p :class="skill.open ? 'block' : 'hidden'" >{{ skill.description }}</p>
      </div>
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue';

const skills = ref([
  {
    title: "Good at",
    description: "lorem ipsum dolor sit amet",
    open: true
  },
  {
    title: "Good at",
    description: "lorem ipsum dolor sit amet",
    open: false
  },
  {
    title: "Good at",
    description: "lorem ipsum dolor sit amet",
    open: false
  },
])

const closeAllSkills = (item) => {
  if(!item.open) {
    skills.value.forEach(element => element.open = false)
  }

  item.open = !item.open
}
</script>

<style lang="scss" scoped>
  .accordion--header {
    @apply relative bg-white w-fit font-Ubuntu font-semibold text-secondary text-base flex py-2 px-4 ml-4 z-10;

    button {
      @apply ml-4;
    }
  }

  .accordion--body {
    @apply font-Nunito text-base text-secondary tracking-wider relative rounded border-primary mt-[-15px] z-0 transition-all duration-300 ease-in-out;
  }
</style>