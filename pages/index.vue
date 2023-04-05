<template>
  <section class="home">
    <p class="tag mb-[5px] ml-[-10px]">&lt;html&gt;</p>
    <p class="tag mb-4">&lt;body&gt;</p>
    <p class="tag mb-[-5px]">&lt;h1&gt;</p>
    <h1 class="home--title">Hello</h1>
    <h1 class="home--title">I'm <span class="text-primary">Joseph</span>,</h1>
    <h1 class="home--title relative mb-5">
      Web developer
      <span class="tag tag-absolute">&lt;/h1&gt;</span>
    </h1>
    <p class="tag">&lt;p&gt;</p>
    <p class="sub-title relative">
      Especialized in <span class="text-primary">Frontend</span> development.
      <span class="tag tag-absolute">&lt;/p&gt;</span>
    </p>

    <div class="call-to-action">
      <button class="cta--main">Contact me</button>
      <button class="cta--secondary">My Resume</button>
    </div> 
  </section>

  <section id="about-me">
    <p class="about-me--title">josephpaucar@pc:~$ <span class="text-primary">nano about-me.txt</span></p>
    <p class="about-me--description">Soy un desarrollador de aplicaciones web residiendo en Lima, Perú, trabajo de forma independiente y estoy abierto a ofertas laborales. </p>
    <p class="about-me--description">Me apasiona todo el proceso de creación de productos digitales y con el uso de nuevas tecnologias, mis conocimientos en <strong>desarrollo</strong>, <strong>diseño</strong> y <strong>ux</strong>, ayudo a mis clientes a dar vida a sus ideas o mejorar sus productos digitale.</p>
    <p class="about-me--title mt-7">josephpaucar@pc:~$ <span class="text-primary">nano also-me.txt</span></p>  
    <SkillsAccordion />
  </section>
</template>

<script setup>
</script>

<style scoped lang="scss">
.home{
  @apply py-3;
  .tag {
    @apply font-Limelight text-gray tracking-wider text-xs;
  }
  .home--title {
    @apply font-Limelight text-secondary tracking-wider text-[36px] w-fit;
  }
  .tag-absolute {
    @apply absolute block right-[-33px] bottom-0;
  }
  .sub-title {
    @apply font-Nunito text-lg text-secondary tracking-wider w-fit;
  }

  .call-to-action {
    @apply my-8 flex;

    .cta--main {
      @apply block w-36 py-2 px-7 font-Nunito text-sm tracking-wider border-2 border-secondary text-secondary hover:text-black hover:bg-primary transition duration-300 ease-out;
    }
    .cta--secondary {
      @apply relative hover:before:w-full text-secondary ml-5;

      &:before {
        content: '';
        @apply bg-gray block absolute bottom-[5px] left-0 w-0 h-[2px] transition-all ease-out duration-300;
      }
    }
  }
}


#about-me {
  @apply mt-8;
  .about-me--title{
    @apply font-Ubuntu text-sm text-secondary tracking-wider;
  }
  .about-me--description {
    @apply font-Nunito text-base text-secondary tracking-wider mt-3;
  }
}
</style>
