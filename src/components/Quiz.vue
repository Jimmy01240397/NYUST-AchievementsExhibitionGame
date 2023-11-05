<template>
  <div>
    <strong class="quiztext">{{ data.quiz }}</strong>
    <v-radio-group v-model="result">
      <v-radio 
        v-for="(choose, i) in data.choose" 
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
    data: Object,
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
</style>
