<template>
  <div class="homebackground-image">
    <v-img style="position: absolute; top: 25.2%;" width="61vw" aspect-ratio="1/1" cover src="@/assets/logo.svg"></v-img>
    <v-btn class="startbutton" rounded flat density=disable @click="start">
        <v-img width="50vw" aspect-ratio="34/7" cover src="@/assets/start.svg"></v-img>
    </v-btn>
  </div>
</template>

<script>
import readquiz from '@/plugins/readquiz';
import readscore from '@/plugins/readscore';
export default {
  name: "HomeView",
  data: () => ({
  }),
  methods: {
    start: function() {
      this.$router.replace('/menu');
    }
  },
  beforeMount: async function() {
    if(await readquiz.contain()) this.$router.replace('/quiz');
    if(readscore.getscore() == -1) this.$router.replace('/end');
  }
};
</script>

<style>
.homebackground-image {
  background-image: url('@/assets/homebackground.svg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
}
.startbutton {
  position: absolute;
  bottom: 16%;
  background-color: transparent;
  padding: 0;
  border: none;
}
</style>
