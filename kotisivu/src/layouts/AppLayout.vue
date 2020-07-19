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

        <q-btn icon="fas fa-plus" flat class="koti-login-button q-mr-lg" label="Kirjoita uusi teksti..." @click="goToWriting()" v-if="getLogin()" />

        <q-btn outline class="koti-login-button q-mr-md" label="Kirjaudu sisään" @click="goToLogin()" v-if="!getLogin()" />
        <q-btn outline class="koti-login-button q-mr-md" label="Kirjaudu ulos" @click="logOut()" v-if="getLogin()" />
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
    loggedIn: boolean = this.getLogin()

    goToLogin() {
      this.$router.push('/login')
    }

    goToWriting() {
      this.$router.push('/thoughts')
    }

    mounted() {
      this.$store.dispatch('auth/handleAuthStateChange')
    }

    getLogin() {
      if (Cookies.has('SpenttiLogin')) {
        return true
      } else {
        // Ei login keksiä...
      }
      return this.$store.state.auth.loggedIn
    }

    logOut() {
      if (Cookies.has('SpenttiLogin')) {
        Cookies.remove('SpenttiLogin')
      }
      this.$store.dispatch('auth/logoutUser')
    }

  }
</script>

<style lang="scss">
  // Hae filtteriväri osoitteesta: https://codepen.io/sosuke/pen/Pjoqqp
  .koti-logo {
    filter: invert(37%) sepia(54%) saturate(3571%) hue-rotate(309deg) brightness(91%) contrast(86%);
    width: 8em;
    height: 100%;
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
  .koti-login-button {
    color: $c-contrast1
  }

</style>
