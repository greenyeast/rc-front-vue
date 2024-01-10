<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<script>
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
export default {
  name: 'App',
  components: {
    Footer,
    Header

  }
}
</script>

<style>
</style>
