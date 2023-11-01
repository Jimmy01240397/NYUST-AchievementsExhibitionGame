<template>
  <div class="scancontainer">
    <div class="center stream">
      <qr-stream class="scanner" @decode="scan">
        <v-img width="100%" aspect-ratio="185/181" cover src="@/assets/scanner.svg"></v-img>
      </qr-stream>
    </div>
  </div>
</template>

<script>
import { QrStream } from 'vue3-qr-reader';
export default {
  name: "ScanPage",
  components: { QrStream },
  data: () => ({
  }),
  computed: {
  },
  methods: {
    scan: function() {
    }
  },
  beforeMount() {
  }
};
</script>
<style>
.scancontainer {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items:center;
}
.stream {
  position: absolute;
  width: 47vw;
  aspect-ratio: 185/181;
  padding: 0;
  border: none;
}
.scanner {
  -webkit-mask: url('@/assets/mask.png') no-repeat center center;;
  mask: url('@/assets/mask.png') no-repeat center center;;
  -webkit-mask-size: contain;
  mask-size: contain;
  padding: 0;
  border: none;
}
</style>
