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
          <v-img width="24vw" aspect-ratio="1/1" cover :src="(k-1)*5+i-1 < score ? passimg : nopassimg"></v-img>
        </v-col>
      </v-row>
    </v-container>
    </div>
  </div>
</template>

<script>
import numberhash from '@/plugins/numberhash';
export default {
  name: "MenuPage",
  data: () => ({
    nopassimg: require("@/assets/score.svg"),
    passimg: require("@/assets/scorecheck.svg"),
  }),
  computed: {
    score: function() {
      let score = this.$cookies.get("score");
      if(this.$cookies.get("score") == null) {
        score = numberhash.numbertohash(0);
        this.$cookies.set("score", score);
      }
      return numberhash.hashtonumber(score);
    },
  },
  methods: {
    scan: () => {
    }
  },
  beforeMount() {
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
  bottom: 6.7%;
  right: 17%;
}
</style>
