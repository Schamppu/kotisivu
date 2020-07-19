import {firebaseDb} from "boot/firebase";

/** Luetaan ajatukset */
export function fbReadData({ commit, dispatch }) {
  let thoughts = firebaseDb.ref('thoughts/')

  // Jokin lapsi on lisätty FireBaseen -> tulostetaan ne
  thoughts.on('child_added', snapshot => {
    let thought = snapshot.val()
    console.log(thought.id)
    commit('addThought', {
      time: thought.time,
      text: thought.text,
      id: thought.id,
      title: thought.title
    })
    // this.thoughtsArray.push(thought)
    // thoughtsArray.push(thought)
  })

  // Kommitoidaan lista stateen
  // commit('setThoughtsData', thoughts)
}

/** Lisätään ajatus */
export function fbAddThought({ }, payload) {
  let tRef = firebaseDb.ref('thoughts/' + payload.id)

  tRef.set({
    time: payload.time.toString(),
    text: payload.text,
    id: payload.id,
    title: payload.title
  })

}

/** Poistetaan ajatus */
export function fbDeleteThought({ }, payload) {
  console.log('deletoidaan: ' + 'thoughts/' + payload.id)
  let tRef = firebaseDb.ref('thoughts/' + payload.id)
  tRef.remove()
    .then(function () {
      console.log('Onnistu')
    })
    .catch(function (error) {
      console.log('ERROR ' +error.message)
    })

  this.$router.go()

}
