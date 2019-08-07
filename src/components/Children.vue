<template>
  <div>
    {{ testInfo["info"]["message"] }}
    <button @click="reset">resetq</button>
    <!-- {{ message["testInfo"]["info"]["message"] }} -->
    {{ message["message"] }}
  </div>
</template>
<script>
export default {
  props: ['testInfo'],
  data () {
    return {
      message: this.testInfo.info
    }
  },
  created () {
    console.log('children_this._uid_', this)
  },
  methods: {
    reset () {
      // this.message.message = '777'
      this.testInfo.info.message = '777'
      // this.$emit('showProps', 'showPropsInfo')
    }
  },
}
</script>