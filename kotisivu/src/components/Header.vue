<template>
  <div>
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
        <q-toolbar-title class="absolute-center t-contrast2 hide-for-phones">
          <
          <q-img
            src="~assets/headercenter.svg"
            class="koti-header-image"
          />
          />
        </q-toolbar-title>
        <q-space />

        <q-btn icon="fas fa-plus" flat class="koti-login-button q-mr-lg hide-for-phones" label="Kirjoita uusi teksti..." @click="goToWriting()" v-if="getLogin()" />
        <q-btn icon="fas fa-plus" flat class="koti-login-button q-mx-xs show-only-phones" @click="goToWriting()" v-if="getLogin()" />

        <q-btn outline class="koti-login-button q-mr-md hide-for-phones" label="Kirjaudu sisään" @click="goToLogin()" v-if="!getLogin()" />
        <q-btn outline class="koti-login-button q-mr-md hide-for-phones" label="Kirjaudu ulos" @click="logOut()" v-if="getLogin()" />

        <q-btn icon="fas fa-sign-in-alt" flat class="koti-login-button q-mx-xs show-only-phones" @click="goToLogin()" v-if="!getLogin()" />
        <q-btn icon="fas fa-lock" flat class="koti-login-button q-mx-xs show-only-phones" @click="logOut()" v-if="getLogin()" />

        <language-selector />
      </q-toolbar>
    </q-header>

    <!-- Navigoinnin piirto -->
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
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Prop} from "vue-property-decorator";
import {Cookies} from "quasar";
import LanguageSelector from "components/LanguageSelector.vue"
import LeftDrawer from "components/LeftDrawer.vue";

@Component({
  components: {
    LanguageSelector,
    LeftDrawer
  }
})
export default class TitleSeparator extends Vue {
  loggedIn: boolean = this.getLogin()
  leftDrawerOpen = false
  miniState = true

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
    @media (min-width: $breakpoint-md) { // Iso
      width: 8em;
      height: 100%;
    }
    @media (max-width: $breakpoint-md) { // Pieni
      width: 8em;
      height: 100%;
    }
  }

  .koti-login-button {
    color: $c-contrast1;
    @media (min-width: $breakpoint-md) { // Iso
    }
    @media (max-width: $breakpoint-md) { // Pieni
      padding-bottom: 3px;
      font-size: 8px;
    }
  }
</style>
