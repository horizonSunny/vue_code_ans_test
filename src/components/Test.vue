<template>
  <div>
    <button @click="clickTest">test</button>
    <button @click="resetClick">reset</button>
    <div>{{ testInfo["info"]["message"] }}</div>
    <!-- <children :test-info="testInfo" @showProps="show"></children> -->
    <children :test-info="testInfo"></children>
  </div>
</template>
<script>
// import { routes } from '../router/router'
import Children from './Children.vue'
export default {
  name: 'Test',
  components: { children: Children },
  data () {
    return {
      testInfo: {
        info: {
          message: "555"
        }
      }
    }
  },
  methods: {
    clickTest () {
      this.testInfo.info.message = '555'
      console.log('this._watcher_.vm_', this._watcher.vm);
      console.log('this._watcher_', this._watcher);
    },
    resetClick () {
      this.testInfo.info.message = '666'
    },
    show (data) {
      console.log('data_______', data);
      console.log('this.testInfo_data_', this.testInfo);
    }
  }
}
</script>