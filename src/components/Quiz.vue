<template>
  <div>
    <strong class="quiztext">{{ quizdata.quiz }}</strong>
    <v-radio-group v-model="result">
      <v-radio 
        v-for="(choose, i) in quizdata.choose" 
        :key="i"
        :value="i.toString()">
        <template v-slot:label>
          <div><strong class="quiztext">{{ choose }}</strong></div>
        </template>
      </v-radio>
    </v-radio-group>
  </div>
</template>

<script>
export default {
  name: "QuizOps",
  props: {
    quizdata: Object,
  },
  data: () => ({
    modelValue: null
  }),
  computed: {
    result: {
      get: function() {
        return this.modelValue;
      },
      set: function(value) {
        this.$emit('update:modelValue', value);
        this.modelValue = value;
        this.$emit('choose');
      },
    },
  },
  methods: {
  },
  beforeMount: async function() {
  }
};
</script>
<style>
.quiztext {
  font-size: 6.1vw;
  color: #ffffff;
}
.v-selection-control .v-label {
  opacity: 100;
}
.v-radio {
  font-size: 3vw;
}
.v-selection-control__wrapper{
  width: 10vw;
  aspect-ratio: 1/1;
}
</style>
