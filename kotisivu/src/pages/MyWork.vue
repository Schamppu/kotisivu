<template>
  <q-page>

    Työni tulee tänne.

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
    title: "Spentti.fi - Work",
    meta: {
      description: { name: 'description', content: 'My virtual portfolio. My work and my history neatly in a timeline.' },
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
