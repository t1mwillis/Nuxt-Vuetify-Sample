<template>
  <div class="wrap">
    <h1 class="d-none d-md-block display-4">
      Testing!
    </h1>
    <v-btn>
      Hi Leif
    </v-btn>
  </div>
</template>

<script>
export default {}
</script>

<style lang="sass">
@media #{map-get($display-breakpoints, 'sm-and-up')}
  .v-btn
    display: none
</style>
