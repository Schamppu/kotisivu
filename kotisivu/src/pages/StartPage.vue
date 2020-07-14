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
          <h1 class="q-ma-sm" style="margin-left: 20px">
            {{ $t('index.welcome') }}
            <q-img
              src="~assets/helloicon.svg"
              class="koti-teksti-ikoni"
            />
          </h1>
        </div>
      </transition>

      <transition
        appear
        enter-active-class="animated fadeInDownBig slow"
      >
        <div>
          <h5 class="q-ma-sm" style="margin-left: 40px"> {{ $t('index.text')  }}</h5>
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
import Synopsis from "./Synopsis.vue"
import TitleSeparator from "./TitleSeparator.vue"
import AboutMe from "./AboutMe.vue"
import Profile from "./Profile.vue"

/**
 * Sisältää aloitussivulla olevan datan.
 */
@Component({
  components: {
    Profile,
    TitleSeparator,
    Synopsis
  }
})
export default class StartPage extends Vue {
  // Tyhjä toistaiseksi.
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
    margin-top: 20vh;
    width: 100%;
    max-width: 100%;
    min-width: 100%;
  }

  .koti-teksti-ikoni {
    filter: invert(37%) sepia(54%) saturate(3571%) hue-rotate(309deg) brightness(91%) contrast(86%);
    width: 100px;
    height: 100px;
    margin-bottom: 30px;
    margin-left: 20px;
    position: absolute;
  }


</style>
