
const jsonFlow = require('../')

const sampleJson = {
  'test-list': [{
    id: 1,
    properties: { name: 'a' }
  }, {
    id: 2,
    properties: { name: 'b' }
  }],
  'empty-list': [],
  'voided-property': null
}

it('matches snapshot for undefined input', () => {
  expect(jsonFlow(undefined)).toMatchSnapshot()
})

it('matches snapshot for null input', () => {
  expect(jsonFlow(null)).toMatchSnapshot()
})

it('matches snapshot for sampleJson using 2 spaces', () => {
  expect(jsonFlow(sampleJson, 2)).toMatchSnapshot()
})

it('matches snapshot for sampleJson using 4 spaces', () => {
  expect(jsonFlow(sampleJson, 4)).toMatchSnapshot()
})

it('matches snapshot for sampleJson using tabs', () => {
  expect(jsonFlow(sampleJson, undefined, true)).toMatchSnapshot()
})


