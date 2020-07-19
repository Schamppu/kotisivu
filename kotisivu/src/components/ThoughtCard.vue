<template>
  <div class="q-pa-md row items-start q-gutter-md row justify-center">
    <q-card flat bordered class="koti-thought-card">

      <q-card-section>
        <div class="row">
        <span class="koti-thought-body-title">{{ obj.title }}</span>
          <span class="text-overline q-pl-sm q-pt-xs text-white">#{{ obj.number }}</span>
        <q-space />
        <span class="text-overline text-grey-6"> {{ printTime(obj.time) }} </span>
        </div>
        <div class="koti-thought-body-text text-white"><div class="" v-html="obj.text" /></div>
      </q-card-section>

      <q-card-actions v-if="getLogin()">
        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        />

        <q-space />

        <q-btn flat color="red" label="Poista" @click="deleteThought()" />

      </q-card-actions>

      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subitle2">
            <q-editor
              v-model="editor"
              min-height="5rem"
              toolbar-text-color="accent"
              toolbar-toggle-color="white"
              toolbar-bg="black"
              toolbar-color="black"
              content-class="koti-editor"
              flat
              square
            />

            <q-card flat bordered square class="q-mt-md koti-editor">
              <q-card-section>
                <pre style="white-space: pre-line">{{ editor }}</pre>
              </q-card-section>
            </q-card>
          </q-card-section>

          <q-btn flat class="q-ma-sm" color="accent" label="Päivitä" @click="updateThought(editor)" />

        </div>
      </q-slide-transition>
    </q-card>
  </div>
</template>

<script lang="ts">
import { Prop, Vue } from "vue-property-decorator";
import Component from "vue-class-component";
import {ListObject} from "pages/Thoughts.vue";
import {Cookies} from "quasar";
import {uuid} from "uuidv4";


@Component({
  components: {
  }
})
export default class ThoughtCard extends Vue {
  @Prop({ type: ListObject, required: true }) obj!: ListObject;

  data () {
    return {
      expanded: false,
      editor: this.obj.text
    }
  }

  updateThought(text: string) {
    this.$store.dispatch('thoughts/fbAddThought', {text: text, time: this.obj.time, id: this.obj.uuid, title: 'Muokattu title.'})
  }

  deleteThought(text: string) {
    this.$store.dispatch('thoughts/fbDeleteThought', {id: this.obj.uuid})
  }

  /** Tulostaa ajan halutussa formaatissa stringiin */
  printTime(time: Date): string {
    let text = time.getDate() + '.' + (time.getMonth() + 1) + '.' + time.getFullYear()

    return text
  }

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
  .koti-thought-card {
    width: 60%;
    background-color: rgba(0,0,0,0.3);
    border-color: $c-contrast1;
    border-width: 3px;
  }
  .koti-thought-body-text {
    font-size: 16px;
  }
  .koti-thought-body-title {
    font-size: 32px;
    color: $c-contrast2-light;
  }
</style>
