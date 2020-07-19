<template>
  <div class="text-white row justify-center q-ma-lg koti-synopsis-height">

    <div v-for="box in getSynopsis()" class="koti-synopsis-kortti q-mx-lg">
      <q-card :class="box.style" bordered>
        <div class="row justify-center koti-tausta-black-opacity">
          <q-img
            :src="box.svgUrl"
            :class="box.svgStyle"
          />
        </div>
        <q-card-section class="row justify-center">
          <div class="koti-synopsis-kortti-title">{{ box.title }}</div>
          <div class="text-subtitle2"></div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <span style="white-space: pre-wrap;" class="koti-synopsis-kortti-body" v-html="box.text" />
        </q-card-section>
      </q-card>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Prop} from "vue-property-decorator";

@Component
export default class Synopsis extends Vue {

  getSynopsis(): SynopsisBox[] {
    const list: SynopsisBox[] = []

    list.push(new SynopsisBox(this.$t('synopsis.boxtitle.1').toString(), this.$t('synopsis.boxtext.1').toString(),'koti-box-color1', '/personality.svg', 'koti-svg-personality'))
    list.push(new SynopsisBox(this.$t('synopsis.boxtitle.2').toString(), this.$t('synopsis.boxtext.2').toString(),'koti-box-color2', '/skills.svg', 'koti-svg-skills'))
    list.push(new SynopsisBox(this.$t('synopsis.boxtitle.3').toString(), this.$t('synopsis.boxtext.3').toString(),'koti-box-color3', '/past.svg', 'koti-svg-past'))

    return list
  }


}

class SynopsisBox {
  title: string
  text: string
  style: string
  svgUrl: string
  svgStyle: string
  constructor(title: string, text: string, style: string, svgUrl: string, svgStyle: string) {
    this.title = title
    this.text = text
    this.style = "koti-synopsis-kortti "+style
    this.svgUrl = svgUrl
    this.svgStyle = svgStyle
  }
}

</script>

<style lang="scss">
  .koti-synopsis {
    //
  }
  .koti-synopsis-kortti {
    width: 100%;
    height: 100%;
    @media (min-width: $breakpoint-md) { // Iso
      max-width: 25vw;
      min-width: 25vw;
    }
    @media (max-width: $breakpoint-md) { // Pieni
      max-width: 90vw;
      min-width: 90vw;
      margin-bottom: 1rem;
    }
  }
  // Hae filtteriväri osoitteesta: https://codepen.io/sosuke/pen/Pjoqqp
  .koti-svg-personality {
    filter: invert(45%) sepia(11%) saturate(1777%) hue-rotate(224deg) brightness(93%) contrast(86%);
    @media (min-width: $breakpoint-md) { // Iso
      height: 13rem;
      width: 13rem;
      margin-top: 2rem;
    }
    @media (max-width: $breakpoint-md) { // Pieni
      height: 5rem;
      width: 5rem;
      margin-top: 1rem;
    }
  }
  .koti-svg-skills {
    filter: invert(37%) sepia(54%) saturate(3571%) hue-rotate(309deg) brightness(91%) contrast(86%);
    @media (min-width: $breakpoint-md) { // Iso
      height: 13rem;
      width: 13rem;
      margin-top: 2rem;
    }
    @media (max-width: $breakpoint-md) { // Pieni
      height: 5rem;
      width: 5rem;
      margin-top: 1rem;
    }
  }
  .koti-svg-past {
    filter: invert(73%) sepia(61%) saturate(3301%) hue-rotate(328deg) brightness(91%) contrast(86%);
    @media (min-width: $breakpoint-md) { // Iso
      height: 13rem;
      width: 13rem;
      margin-top: 2rem;
    }
    @media (max-width: $breakpoint-md) { // Pieni
      height: 5rem;
      width: 5rem;
      margin-top: 1rem;
    }
  }

  .koti-synopsis-kortti-title {
    @media (min-width: $breakpoint-md) { // Iso
      font-size: 40px;
    }
    @media (max-width: $breakpoint-md) { // Pieni
      font-size: 20px;
    }
  }

  .koti-synopsis-kortti-body {
    @media (min-width: $breakpoint-md) { // Iso
      font-size: 20px;
    }
    @media (max-width: $breakpoint-md) { // Pieni
      font-size: 14px;
    }
  }

  .koti-synopsis-height {
    @media (min-width: $breakpoint-md) { // Iso
      height: 51rem;
    }
    @media (max-width: $breakpoint-md) { // Pieni
    }
  }

</style>
