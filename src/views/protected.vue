<template>
  <div>
    <span>Procted route</span>
    <br />
    <button @click="$router.push('/')">Back to home</button>
  </div>
</template>

<script>
export default {
  name: "Protected Route",
};
</script>

<style>
</style>