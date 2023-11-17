<template>
  <div class="quizcontainer">
    <div style="width: 100vw;">
      <v-img class="showid" width="12.5vw" aspect-ratio="1/1" cover src="@/assets/showid.svg">
          <strong>{{ quizzes != null && quizzes.length > 0 ? quizzes[0].id : '' }}</strong>
      </v-img>
    </div>
    <div class="quizlist">
      <Quiz 
        v-for="(q, i) in (quizzes != null ? quizzes : [])"
        :key="i"
        :quizdata="q"
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
      if(currect) {
        this.score++;
        readquiz.addcomplate();
        alert('答對了');
      }
      else {
        alert('答錯了');
      }
      readquiz.clearquiz();
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
.showid {
  top: 1.76vh;
  left: 3.8vw;
  text-align: center;
  line-height: 11vw;
  font-size: 3vw;
}
.quizlist {
  position: absolute;
  overflow-y: scroll;
  top: 13.6%;
  left: 8%;
  bottom: 19.8%;
  right: 6.5%;
}
.summitbutton {
  position: absolute;
  bottom: 15%;
  background-color: transparent;
  padding: 0;
  border: none;
}
</style>
