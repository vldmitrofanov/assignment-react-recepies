import Autosuggest from 'react-autosuggest'
import { useState } from 'react'
import debounce from 'lodash.debounce'
import agent from '../api/agent'
import { history } from '../..'

export default function RecipeSearchForm() {
  const [searchValue, setSearchValue] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [loading, setLoading] = useState(false)

  const inputProps = {
    placeholder: 'Search recipe',
    value: searchValue,
    onChange: onChange,
  }

  function getSuggestionValue(suggestion) {
    return suggestion.post_title
  }

  function renderSuggestion(suggestion, { query }) {
    const regexp = new RegExp(`^(.*?)(${query})(.*)$`, 'i')
    let matches = getSuggestionValue(suggestion).match(regexp)
    if (!matches || matches.length < 3) return null
    if (matches) {
      matches.shift()
      matches[0] = <b>{matches[0]}</b>
      matches[2] = <b>{matches[2]}</b>
    } else {
      matches = suggestion.post_title
    }
    return (
      <span className="suggestion" key={suggestion.id}>
        <em className="tagname">{suggestion.tag}</em>
        <span className="name">{matches}</span>
      </span>
    )
  }

  async function loadSuggestions(val) {
    console.log(val)
    if (!val || val.length < 2) return null
    setLoading(true)
    try {
      const data = await agent.TestRecipies.search(val)
      setSuggestions(data)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  function onChange(event, { newValue, method }) {
    setSearchValue(newValue)
  }

  function onSuggestionsFetchRequested({ value }) {
    const search = debounce(loadSuggestions, 300)
    search(value)
  }

  function onSuggestionsClearRequested() {
    setSuggestions([])
  }

  function onSuggestionSelected(evt, { suggestion }) {
    console.log(suggestion)
    setSearchValue('')
    history.push(`/recipe/${suggestion.id}`)
  }

  return (
    <div className="wrapper-autosuggest">
      <section className="wrapper-input">
        {loading ? <span className="loading-spinner"></span> : null}
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          onSuggestionSelected={onSuggestionSelected}
          inputProps={inputProps}
        />
      </section>
    </div>
  )
}
