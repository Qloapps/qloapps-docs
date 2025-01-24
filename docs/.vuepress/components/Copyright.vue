<template>
  <div>
    Copyright © {{ date }} QloApps
  </div>
</template>

<script>
  export default {
    data() {
      return {
        date: new Date().getFullYear()
      }
    }
  }
</script>
