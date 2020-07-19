<template>
  <q-page>

    <!-- Editori jos on kirjautunut sisään -->
    <template>
      <div class="q-pa-md q-gutter-sm" v-if="getLogin()">

        <q-input v-model="titleText" label="Otsikko" dark style="width: 20rem" />

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

        <q-card flat bordered square class="koti-editor">
          <q-card-section>
            <pre style="white-space: pre-line">{{ editor }}</pre>
          </q-card-section>
        </q-card>

        <q-card flat bordered square class="koti-editor">
          <q-card-section v-html="editor" />
        </q-card>

        <q-btn class="t-contrast1" outline label="Lähetä" @click="newThought(editor, titleText)" />

      </div>
    </template>

    <!-- Itse blogi -->
    <div v-for="obj in getThoughts()">

      <ThoughtCard :obj="obj" />

    </div>

  </q-page>
</template>

<script lang="ts">
import Vue from 'vue'
import { uuid } from 'uuidv4'

import { Component } from "vue-property-decorator"
import {Cookies, date} from "quasar";
import ThoughtCard from "components/ThoughtCard.vue";

/**
 * Sisältää aloitussivulla olevan datan.
 */
@Component({
  components: {
    ThoughtCard
  },
  meta: {
    title: "Spentti.fi - Thoughts",
    meta: {
      description: { name: 'description', content: 'My virtual portfolio. My thoughts in a weird blog format.' },
      keywords: { name: 'keywords', content: 'Sami Pentti' },
      equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' }
    }
  }
})
export default class Thoughts extends Vue {
  data () {
    return {
      editor: '',
      titleText: ''
    }
  }

  getLogin() {
    if (Cookies.has('SpenttiLogin')) {
      return true
    } else {
      // Ei login keksiä...
    }
    return this.$store.state.auth.loggedIn
  }

  beforeCreate() {
    this.$store.commit('thoughts/clearAll')
    this.$store.dispatch('thoughts/fbReadData')
  }

  newThought(text: string, titleText: string) {
    console.log('TITLE: ' + titleText)
    this.$store.dispatch('thoughts/fbAddThought', {text: text, time: new Date(), id: uuid(), title: titleText})
  }

  getThoughts(): ListObject[] {
    const objList = []
    // console.log(this.$store.state.thoughts.thoughtsList[0])
    for (let i = 0; i < this.$store.state.thoughts.thoughtsList.length; i++) {
      console.log(this.$store.state.thoughts.thoughtsList[i])
      objList.push(new ListObject(this.$store.state.thoughts.thoughtsList[i].time, this.$store.state.thoughts.thoughtsList[i].text, this.$store.state.thoughts.thoughtsList[i].id, this.$store.state.thoughts.thoughtsList[i].title, i+1))
      // console.log(this.$store.state.thoughts.thoughtsList[i].time)
      // objList.push(new ListObject(item.date, item.text))
    }

    objList.sort(function(a: ListObject,b: ListObject){
      var dateA = new Date(a.time).getTime();
      var dateB = new Date(b.time).getTime();
      return dateA > dateB ? 1 : -1;
    });

    return objList
  }
}

export class ListObject {
  time: Date
  text: string
  uuid: string
  title: string
  number: Number
  constructor(time: string, text: string, uuid: string, title: string, number: Number) {
    this.time = new Date(time)
    this.text = text
    this.uuid = uuid
    this.title = title
    this.number = number
  }
}


</script>

<style lang="scss">
  .koti-editor {
    background-color: rgb(15, 15, 15);
    color: white;
    outline-color: $c-contrast1;
  }
</style>
