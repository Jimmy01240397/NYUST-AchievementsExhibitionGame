<template>
  <v-app>
    <v-main>
      <div class="background-image">
            <router-view />
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
  beforeMount: async function() {
    document.title = '2023 研發成果展'
  }
};
</script>

<style>
.background-image {
  background-image: url('@/assets/background.svg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  height: 100vh;
}
</style>
