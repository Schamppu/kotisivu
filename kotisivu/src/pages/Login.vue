<template>
  <q-page>

    Sisäänkirjautuminen.

  </q-page>
</template>

<script lang="ts">
import Vue from 'vue'

import { Component } from "vue-property-decorator"

/**
 * Sisältää aloitussivulla olevan datan.
 */
@Component({
  components: {
  },
  meta: {
    title: "Spentti.fi - Login",
    meta: {
      description: { name: 'description', content: 'My virtual portfolio. Login page.' },
      keywords: { name: 'keywords', content: 'Sami Pentti' },
      equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' }
    }
  }
})
export default class StartPage extends Vue {
  // Tyhjä toistaiseksi.
}
</script>

<style lang="scss">

</style>
