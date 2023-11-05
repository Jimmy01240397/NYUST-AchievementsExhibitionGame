<template>
  <div class="endbackground-image">
  </div>
</template>

<script>
import readscore from '@/plugins/readscore';
export default {
  name: "EndPage",
  data: () => ({
  }),
  methods: {
  },
  beforeMount: async function() {
    if(readscore.getscore() != -1) this.$router.replace('/');
  }
};
</script>

<style>
.endbackground-image {
  background-image: url('@/assets/end.svg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
}
</style>
