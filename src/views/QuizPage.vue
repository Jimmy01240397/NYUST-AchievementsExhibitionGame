<template>
  <div class="quizcontainer">
    <div class="quizlist">
      <Quiz 
        v-for="(q, i) in quizzes"
        :key="i"
        :data="q"
        v-model="chooses[i]"
        @choose="onchoose"
      >
      </Quiz>
    </div>
    <v-btn class="summitbutton" v-show="summitshow" rounded flat density=disable @click="summit">
        <v-img width="18.4vw" aspect-ratio="129/50" cover src="@/assets/summit.svg"></v-img>
    </v-btn>
  </div>
</template>

<script>
import readquiz from '@/plugins/readquiz';
import readscore from '@/plugins/readscore';
import Quiz from '@/components/Quiz'
export default {
  name: "QuizPage",
  data: () => ({
    quizzes: null,
    chooses: [],
    summitshow: false,
  }),
  components: {
    Quiz,
  },
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
    onchoose: function() {
      this.summitshow = true;
      for(var i = 0; i < this.chooses.length; i++) {
        if(this.chooses[i] == null) {
          this.summitshow = false;
          break;
        }
      }
    },
    summit: function() {
      var currect = true;
      for(var i = 0; i < this.chooses.length; i++) {
        if(this.chooses[i] != this.quizzes[i].ans.toString()) {
          currect = false;
          break;
        }
      }
      readquiz.addcomplate();
      readquiz.clearquiz();
      if(currect) {
        this.score++;
        alert('答對了');
      }
      else {
        alert('答錯了');
      }
      this.$router.replace('/menu');
    },
  },
  beforeMount: async function() {
    if(this.score == -1) this.$router.replace('/end');
    this.quizzes = await readquiz.getquiz();
    if(this.quizzes == undefined) {
      this.$router.replace('/menu');
      return;
    }
    if(readquiz.checkcomplate()) {
      readquiz.clearquiz();
      alert('這題答過了');
      this.$router.replace('/menu');
      return;
    }
    this.chooses = Array(this.quizzes.length).fill(null);
  }
};
</script>
<style>
.quizcontainer {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
}
.quizlist {
  position: absolute;
  top: 13.6%;
  left: 8%;
  bottom: 6.7%;
  right: 6.5%;
}
.summitbutton {
  position: absolute;
  bottom: 1.88%;
  background-color: transparent;
  padding: 0;
  border: none;
}
</style>
