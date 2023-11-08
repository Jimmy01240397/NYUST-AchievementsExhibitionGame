<template>
  <v-app>
    <v-main>
      <body>
        <router-view />
      </body>
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
body {
  background-image: url('@/assets/background.svg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}
</style>
