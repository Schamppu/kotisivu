<template>
  <div class="q-px-xl">
    <div class="t-contrast1 row q-mb-xs" style="font-style: italic; font-size: 16px">
      <q-space />
      Pssst... laita kursori alla olevan laatikon päälle pysäyttääksesi sen<q-icon name="fas fa-smile-wink" class="q-pl-md " size="22px" />
    </div>
    <q-card class="koti-box-color2" bordered style="border-width: 2px;">
      <q-card-section horizontal>
        <q-carousel
          animated
          v-model="slide"
          navigation
          infinite
          :autoplay="autoplay"
          arrows
          swipeable
          transition-prev="slide-right"
          transition-next="slide-left"
          @mouseenter="autoplay = false"
          @mouseleave="autoplay = true"
          style="width: 50%"
        >
          <q-carousel-slide :name="1" img-src="/profile1.png" />
          <q-carousel-slide :name="2" img-src="/profile2.png" />
          <q-carousel-slide :name="3" img-src="/profile3.png" />
          <q-carousel-slide :name="4" img-src="/profile4.png" />
        </q-carousel>

          <q-carousel
            animated
            v-model="slide"
            infinite
            :autoplay="autoplay"
            @mouseenter="autoplay = false"
            @mouseleave="autoplay = true"
            transition-prev="slide-right"
            transition-next="slide-left"
            style="width: 100%; color: white; background-color: rgba(0,0,0,0.1)"
            class="q-ma-none q-pa-none"
          >
              <q-carousel-slide :name="1" class="fit">
                <h4 class="q-pl-lg" v-html="fixTitle($t('profile.title.1'))"></h4>
                <span style="white-space: pre-wrap;" class="text-body1 q-pl-lg"><div class="q-pl-lg" v-html="fixText($t('profile.text.1'))" /></span>
              </q-carousel-slide>
              <q-carousel-slide :name="2" class="fit">
                <h4 class="q-pl-lg" v-html="fixTitle($t('profile.title.2'))"></h4>
                <span style="white-space: pre-wrap;" class="text-body1 q-pl-lg"><div class="q-pl-lg" v-html="fixText($t('profile.text.2'))" /></span>
              </q-carousel-slide>
              <q-carousel-slide :name="3" class="fit">
                <h4 class="q-pl-lg" v-html="fixTitle($t('profile.title.3'))"></h4>
                <span style="white-space: pre-wrap;" class="text-body1 q-pl-lg"><div class="q-pl-lg" v-html="fixText($t('profile.text.3'))" /></span>
              </q-carousel-slide>
              <q-carousel-slide :name="4" class="fit">
                <h4 class="q-pl-lg" v-html="fixTitle($t('profile.title.4'))"></h4>
                <span style="white-space: pre-wrap;" class="text-body1 q-pl-lg"><div class="q-pl-lg" v-html="fixText($t('profile.text.4'))" /></span>
              </q-carousel-slide>
          </q-carousel>

      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">
    import {Vue} from "vue-property-decorator";
    import Component from "vue-class-component";

    @Component
    export default class Profile extends Vue {
      data () {
        return {
          slide: 1,
          autoplay: true
        }
      }

      fixText(teksti: string): string {
        return teksti.split("<<").join('<span class=\'e1\'>').split(">>").join('</span>')
      }

      fixTitle(teksti: string): string {
        return teksti.split("<<").join('<span class=\'et1\'>').split(">>").join('</span>')
      }

    }

    class TextObject {
      id: string
      title: string
      text: string
      constructor(id: string, title: string, text: string) {
        this.id = id
        this.title = title
        this.text = text
      }
    }



</script>

<style lang="scss">

</style>
