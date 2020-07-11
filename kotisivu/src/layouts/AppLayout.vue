<template>
  <q-layout
    view="lHh Lpr lFf"
    class="koti-app"
  >
    <!-- Headerin luonti -->
    <q-header>
      <!-- Toolbarin lisääminen headerin sisälle -->
      <q-toolbar
        class="koti-header"
      >
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
          style="margin-right: 20px"
        />
        <q-img
          src="~assets/logo.svg"
          class="koti-logo"
        />
        <q-toolbar-title class="absolute-center t-contrast2">
          <
            <q-img
              src="~assets/headercenter.svg"
              class="koti-header-image"
            />
          />
        </q-toolbar-title>
        <q-space />
        <language-selector />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"

      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      mini-to-overlay

      :width="200"
      :breakpoint="500"s
      content-class="koti-drawer"
    >
      <q-scroll-area class="fit">
        <LeftDrawer />
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import LanguageSelector from "components/LanguageSelector.vue"
import LeftDrawer from "components/LeftDrawer.vue";

@Component({
  components: {
    LanguageSelector,
    LeftDrawer
  }
})
/**
 * AppLayout luo verkkosivun perusrakenteen (header, navigation, yms.)
 */
export default class AppLayout extends Vue {
  // Palvellaan datasta drawerin asiat
  leftDrawerOpen = false
  miniState = true
}
</script>

<style lang="scss">
  // Hae filtteriväri osoitteesta: https://codepen.io/sosuke/pen/Pjoqqp
  .koti-logo {
    filter: invert(37%) sepia(54%) saturate(3571%) hue-rotate(309deg) brightness(91%) contrast(86%);
    width: 12%;
    height: 12%;
  }

  .koti-header-image {
    filter: invert(68%) sepia(96%) saturate(1664%) hue-rotate(324deg) brightness(87%) contrast(94%);
    width: 25px;
    height: 25px;
  }

  .koti-drawer {
    background-color: $c-main;
    color: $c-contrast1;
  }

</style>
