import {firebaseAuth} from "boot/firebase";
import {Cookies} from "quasar";

export function loginUser (context, payload) {
  firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
    .then(response => {
      console.log('response: ', response)
      this.$router.push("/")
      Cookies.set('SpenttiLogin', true, { expires: 1, sameSite: 'strict' })
    })
    .catch(error => {
      console.log('error.message: ', error.message)
    });
}

export function logoutUser() {
  if (Cookies.has('SpenttiLogin')) {
    Cookies.remove('SpenttiLogin')
  }
  firebaseAuth.signOut()
}

export function handleAuthStateChange({ commit, dispatch }) {
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
