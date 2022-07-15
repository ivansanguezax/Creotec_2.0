<template>
  <div></div>
</template>

<script>
export default {
    asyncData({app}) {
        app.$fire.auth.signOut()
    },
}
</script>

<style>

</style>