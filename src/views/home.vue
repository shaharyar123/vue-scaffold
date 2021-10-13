<template>
  <div>
    <span>Home page component </span>
    <span>
      SideNavbar value comes from vuex store :
      {{ $store.getters.isSideNavbar ? "ON" : "OFF" }}
    </span>
    <br />
    <button @click="toggleSideNav">Toggle value in store</button>
  </div>
</template>

<script>
export default {
  name: "home",
  methods: {
    // calling action toggleNavbar to update value in store which automatically updated in store and all app
    async toggleSideNav() {
      await this.$store.dispatch("toggleNavbar");
    },
  },
};
</script>

<style>
</style>