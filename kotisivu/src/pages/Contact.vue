<template>
  <q-page>

    Yhteystiedot laitetaan tänne.

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
    title: "Spentti.fi - Contact",
    meta: {
      description: { name: 'description', content: 'My virtual portfolio. All my necessary contact information.' },
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
