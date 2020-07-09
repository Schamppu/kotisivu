<template>
  <q-page>
    <q-parallax
      src="https://cdn.quasar.dev/img/parallax2.jpg"
      height="1000"
    >
      <transition
        appear
        enter-active-class="animated fadeInDownBig slow"
      >
        <div>
          <h1 class="text-white q-ma-sm">{{ $t('index_welcome') }}</h1>
        </div>
      </transition>

      <transition
        appear
        enter-active-class="animated fadeInDownBig slow"
      >
      <div>
      <h5 class="text-white q-ma-sm"> {{ $t('index_desc')  }}</h5>
      </div>
      </transition>
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

<style>
  .slow {
    -webkit-animation-duration : 2s;
  }
</style>
