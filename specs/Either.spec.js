import assert from 'assert'
import Either from '../src/Either'
const { Right, Left, fromNullable } = Either

const Id = x => ({
  fold: f => f(x),
})

Id.of = x => Id(x)

console.log('hello lets test some stuff')

fromNullable(null)
  .map(x => assert(false))
  .map(x => assert(false))
  .map(x => assert(true))

fromNullable('Simon')
  .map(x => x)
  .map(x => x)
  .map(x => x)
  .map(x => assert.equal(x, 'Simon'))

Either
  .fromNullable({ ok: true, code: 200, body: 'yay!' })
  .fold(x => x, x => assert.equal(x.code, 200))

Either
  .fromNullable(null)
  .fold(x => assert.equal(x, null), x => assert(false))

fromNullable('Simon')
  .chain(Id.of)
  .fold(x => assert.equal(x, 'Simon'))

assert.equal(Right('Simon').inspect(), 'Right(Simon)')
assert.equal(Left('Simon').inspect(), 'Left(Simon)')

console.log('whoah! all tests are done.')