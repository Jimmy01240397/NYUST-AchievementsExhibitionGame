<template>
  <div class="menucontainer">
    <v-btn class="scanbutton" rounded flat density=null @click="scan">
        <v-img width="25vw" aspect-ratio="1/1" cover src="@/assets/scannericon.svg">
          <v-img width="100%" aspect-ratio="1/1" cover src="@/assets/logo.svg"></v-img>
        </v-img>
    </v-btn>
    <div class="checkcontainer">
      <v-container class="pa-0 fill-height">
        <v-row 
          no-gutters
          v-for="i in 5"
          :key="i"
          class="grow"
        >
          <v-col
            v-for="k in 2"
            :key="k"
            :align="k == 1 ? 'left' : 'right'"
          >
            <v-img width="9vh" aspect-ratio="1/1" cover :src="(k-1)*5+i-1 < score ? passimg : nopassimg"></v-img>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-btn class="summitbutton" v-show="summitshow" rounded flat density=disable @click="summit">
        <v-img width="18.4vw" aspect-ratio="129/50" cover src="@/assets/summit.svg"></v-img>
    </v-btn>
  </div>
</template>

<script>
import readscore from '@/plugins/readscore';
import readquiz from '@/plugins/readquiz';
export default {
  name: "MenuPage",
  data: () => ({
    nopassimg: require("@/assets/score.svg"),
    passimg: require("@/assets/scorecheck.svg"),
    summitshow: false,
  }),
  computed: {
    score: {
      get: function() {
        return readscore.getscore();
      },
      set: function(value) {
        readscore.setscore(value);
      },
    },
  },
  methods: {
    scan: function() {
      if(this.score < 10) this.$router.push('/scan');
    },
    summit: function() {
      this.score = -1;
      this.$router.replace('/end');
    }
  },
  beforeMount: async function() {
    if(await readquiz.contain()) this.$router.replace('/quiz');
    if(this.score == -1) this.$router.replace('/end');
    if(this.score >= 10) this.summitshow = true;
  }
};
</script>
<style>
.menucontainer {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
}
.scanbutton {
  position: absolute;
  top: 12%;
  background-color: transparent;
  padding: 0;
  border: none;
}
.checkcontainer {
  position: absolute;
  top: 27.7%;
  left: 17%;
  bottom: 19.8%;
  right: 17%;
}
.summitbutton {
  position: absolute;
  bottom: 15%;
  background-color: transparent;
  padding: 0;
  border: none;
}
</style>
