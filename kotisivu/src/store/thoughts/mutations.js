/** Lisää uuden ajatuksen */
export function addThought (state, payload) {
  state.thoughtsList.push(payload)
}

/** Tyhjentää kaikki ajatukset */
export function clearAll (state, payload) {
  state.thoughtsList = []
}
