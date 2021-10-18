<template>
  <div>
    <span>Home page component </span>
    <span>
      Authenticated value comes from vuex store :
      {{ $store.getters.isSideNavbar ? "TRUE" : "FALSE" }}

      <br />
      <button @click="toggleSideNav">Toggle value in store</button>
    </span>
    <p>
      Click Here to redirect to protected page, redirect only works if
      Authenticated is true from above button.
      <br />
      Otherwise it will redirect to this same homepage.
      <br />
      <button @click="$router.push('/protected-route')">
        To Protected Page
      </button>
    </p>
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