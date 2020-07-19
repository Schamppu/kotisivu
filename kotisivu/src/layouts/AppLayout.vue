<template>
  <q-layout
    view="lHh Lpr lFf"
    class="koti-app"
  >
    <!-- Headerin luonti -->
    <Header />

    <q-page-container>
      <router-view />
    </q-page-container>

    <div class="q-pa-lg">
      <!-- Bottom margin ettei jää valkoista -->
    </div>

  </q-layout>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator"
  import LanguageSelector from "components/LanguageSelector.vue"
  import LeftDrawer from "components/LeftDrawer.vue";
  import {Cookies} from "quasar";
  import Header from "components/Header.vue";
  @Component({
    components: {
      Header,
      LanguageSelector,
      LeftDrawer
    }
  })
  /**
   * AppLayout luo verkkosivun perusrakenteen (header, navigation, yms.)
   */
  export default class AppLayout extends Vue {
    loggedIn: boolean = this.getLogin()

    getLogin() {
      if (Cookies.has('SpenttiLogin')) {
        return true
      } else {
        // Ei login keksiä...
      }
      return this.$store.state.auth.loggedIn
    }
  }
</script>

<style lang="scss">
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
