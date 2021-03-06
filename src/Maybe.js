import Id from './Id'
import isNull from './is-null'

// Nothing :: _ -> Nothing
const Nothing = () => ({
  // chain :: ƒ -> Nothing
  chain: f => Nothing(),
  // map :: ƒ -> Nothing
  map: f => Nothing(),
  // else :: ƒ -> Maybe
  else: f => Maybe(f()),
  // fold :: ƒ -> Any
  fold: f => f(),
  // inspect :: ƒ -> String
  inspect: () => `Nothing()`
})

// Maybe :: Any -> Maybe
const Maybe = x =>
  Id(x)
    .map(isNull)
    .fold(nulled => nulled
      ? Nothing()
      : ({
        // chain :: ƒ -> Any
        chain: f => f(x),
        // map :: ƒ -> Maybe
        map: f => Maybe(f(x)),
        // fold :: ƒ -> Any
        fold: f => f(x),
        // else :: ƒ -> Maybe
        else: f => Maybe(x),
        // inspect :: Nothing -> String
        inspect: () => `Maybe(${x})`
      }))

// Any -> Maybe
Maybe.of = x => Maybe(x)

export default Maybe