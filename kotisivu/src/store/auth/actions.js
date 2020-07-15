import {firebaseAuth} from "boot/firebase";

export function loginUser (context, payload) {
  firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
    .then(response => {
      console.log('response: ', response)
    })
    .catch(error => {
      console.log('error.message: ', error.message)
    });
}

export function logoutUser() {
  firebaseAuth.signOut()
}

export function handleAuthStateChange({ commit }) {
  firebaseAuth.onAuthStateChanged(function(user) {
    if (user) {
      // Käyttäjä on kirjautunut sisälle
      commit('setLoggedIn', true)
    } else {
      // Käyttäjä on kirjautunut ulos
      commit('setLoggedIn', false)
    }
  });
}
