<template>
  <q-page>

    <!-- Putoava welcome teksti alkaa -->
    <transition
      appear
      enter-active-class="animated fadeInDownBig slow"
    >
    <div class="koti-teksti">
      <transition
        appear
        enter-active-class="animated fadeInDownBig slow"
      >
        <div>
          <div class="q-ma-sm koti-teksti-title">
            {{ $t('index.welcome') }}
            <q-img
              src="~assets/helloicon.svg"
              class="koti-teksti-ikoni"
            />
          </div>
        </div>
      </transition>

      <transition
        appear
        enter-active-class="animated fadeInDownBig slow"
      >
        <div>
          <div class="q-ma-sm koti-teksti-body"> {{ $t('index.text')  }}</div>
        </div>
      </transition>
    </div>

    </transition>
    <!-- Teksti päättyy  -->
    <q-parallax
      src="~assets/start-impress.svg"
      class="koti-parallax"
    >
    </q-parallax>

    <TitleSeparator :title="'Lyhyesti minusta'" />
    <Synopsis />
    <TitleSeparator :title="'Profiili'" />
    <Profile />
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue'

import { Component } from "vue-property-decorator"
import Synopsis from "../sections/Synopsis.vue"
import TitleSeparator from "components/TitleSeparator.vue"
import AboutMe from "./AboutMe.vue"
import Profile from "../sections/Profile.vue"

/**
 * Sisältää aloitussivulla olevan datan.
 */
@Component({
  components: {
    Profile,
    TitleSeparator,
    Synopsis
  },
  meta: {
    title: "Spentti.fi - Me",
    meta: {
      description: { name: 'description', content: 'My virtual portfolio. Thing about me in a compact package.' },
      keywords: { name: 'keywords', content: 'Sami Pentti' },
      equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' }
    }
  }
})
export default class StartPage extends Vue {
}
</script>

<style lang="scss">
  .slow {
    -webkit-animation-duration : 2s;
  }
  .koti-parallax {
    filter: invert(37%) sepia(54%) saturate(3571%) hue-rotate(309deg) brightness(91%) contrast(86%);
  }

  // Hae filtteriväri osoitteesta: https://codepen.io/sosuke/pen/Pjoqqp

  .koti-teksti {
    color: white;
    background-color: rgba(0,0,0,0.5);
    position: absolute;
    z-index: 1000;
    // Iso
    @media (min-width: $breakpoint-md) {
      margin-top: 20vh;
      width: 100%;
      max-width: 100%;
      min-width: 100%;
    }
    // Pieni
    @media (max-width: $breakpoint-md) {
      margin-top: 20vh;
      width: 100%;
      max-width: 100%;
      min-width: 100%;
    }
  }

  .koti-teksti-title {
    // Iso
    @media (min-width: $breakpoint-md) {
      font-size: 70px;
      margin-left: 20px
    }
    // Pieni
    @media (max-width: $breakpoint-md) {
      font-size: 20px
    }
  }

  .koti-teksti-body {
    // Iso
    @media (min-width: $breakpoint-md) {
      font-size: 20px;
      margin-left: 40px
    }
    // Pieni
    @media (max-width: $breakpoint-md) {
      font-size: 14px
    }
  }

  .koti-teksti-ikoni {
    // Iso
    @media (min-width: $breakpoint-md) {
      filter: invert(37%) sepia(54%) saturate(3571%) hue-rotate(309deg) brightness(91%) contrast(86%);
      width: 100px;
      height: 100px;
      margin-bottom: 30px;
      margin-left: 20px;
      position: absolute;
    }
    // Pieni
    @media (max-width: $breakpoint-md) {
      filter: invert(37%) sepia(54%) saturate(3571%) hue-rotate(309deg) brightness(91%) contrast(86%);
      width: 32px;
      height: 32px;
      margin-bottom: 30px;
      margin-left: 10px;
      position: absolute;
    }
  }


</style>
