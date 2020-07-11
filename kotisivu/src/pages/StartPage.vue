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
            {{ $t('index_welcome') }}
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
          <h5 class="q-ma-sm" style="margin-left: 40px"> {{ $t('index_desc')  }}</h5>
        </div>
      </transition>
    </div>

    </transition>
    <!-- Teksti päättyy  -->

    <q-parallax
      src="~assets/start-impress.svg"
      :height="1500"
      class="koti-parallax"
    >
    </q-parallax>

  </q-page>
</template>

<script lang="ts">
import Vue from 'vue'

import { Component } from "vue-property-decorator"

/**
 * Sisältää aloitussivulla olevan datan.
 */
@Component
export default class StartPage extends Vue {
  // Tyhjä toistaiseksi.
}
</script>

<style lang="scss">
  .slow {
    -webkit-animation-duration : 2s;
  }
  .koti-parallax {
    max-height: 100vh;
    min-height: 100vh;
    height: 100vh;
    filter: invert(37%) sepia(54%) saturate(3571%) hue-rotate(309deg) brightness(91%) contrast(86%);
  }

  // Hae filtteriväri osoitteesta: https://codepen.io/sosuke/pen/Pjoqqp
  .koti-teksti {
    color: white;
    background-color: rgba(0,0,0,0.5);
    position: absolute;
    z-index: 1000;
    margin-top: 40vh;
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
