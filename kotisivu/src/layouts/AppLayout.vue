<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Headerin luonti -->
    <q-header elevated>
      <!-- Toolbarin lisääminen headerin sisälle -->
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title class="absolute-center">
          Sami Pentin Online CV
        </q-toolbar-title>

        <q-space />
        <language-selector />

      </q-toolbar>

    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import LanguageSelector from "components/LanguageSelector.vue"

@Component({
  components: {
    LanguageSelector
  }
})
/**
 * AppLayout luo verkkosivun perusrakenteen (header, navigation, yms.)
 */
export default class AppLayout extends Vue {
  // Tyhjä toistaiseksi. Lisätään myöhemmin lisää.
}
</script>
