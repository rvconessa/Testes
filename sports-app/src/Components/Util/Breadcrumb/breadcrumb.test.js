'use strict'

import { expect } from 'chai'
import generateBreadcrumb from './index'

test('generateBreadcrumb should be a function', () => {
  expect(generateBreadcrumb).to.be.a('function')
})

test('generateBreadcrumb([1]) should return [1]', () => {
  const result = [1]
  expect(generateBreadcrumb([1])).to.be.deep.equal(result)
})

test('generateBreadcrumb([1, 2]) should return [1, 2]', () => {
  const result = [1, 2]
  expect(generateBreadcrumb([1, 2])).to.be.deep.equal(result)
})

test('generateBreadcrumb([1, 2, 3]) should return [1, 2, 3]', () => {
  const result = [1, 2, 3]
  expect(generateBreadcrumb([1, 2, 3])).to.be.deep.equal(result)
})

test('generateBreadcrumb([1, 2, 3, 4]) should return [1, 2, ..., 4]', () => {
  const result = [1, 2, '...', 4]
  expect(generateBreadcrumb([1, 2, 3, 4])).to.be.deep.equal(result)
})

test('generateBreadcrumb([1, 2, 3, 4, 5]) should return [1, 2, ..., 5]', () => {
  const result = [1, 2, '...', 5]
  expect(generateBreadcrumb([1, 2, 3, 4, 5])).to.be.deep.equal(result)
})

test('generateBreadcrumb([1, 2, 3, 4, 5, 6]) should return [1, 2, ..., 6]', () => {
  const result = [1, 2, '...', 6]
  expect(generateBreadcrumb([1, 2, 3, 4, 5, 6])).to.be.deep.equal(result)
})

test('generateBreadcrumb([1, 2, 3, 4, 5, 6, 7]) should return [1, 2, ..., 7]', () => {
  const result = [1, 2, '...', 7]
  expect(generateBreadcrumb([1, 2, 3, 4, 5, 6, 7])).to.be.deep.equal(result)
})

test('generateBreadcrumb([1, 2, 3, 4, 5, 6, 7, 8]) should return [1, 2, ..., 8]', () => {
  const result = [1, 2, '...', 8]
  expect(generateBreadcrumb([1, 2, 3, 4, 5, 6, 7, 8])).to.be.deep.equal(result)
})

test('generateBreadcrumb([1, 2, 3, 4, 5, 6, 7, 8, 9]) should return [1, 2, ..., 9]', () => {
  const result = [1, 2, '...', 9]
  expect(generateBreadcrumb([1, 2, 3, 4, 5, 6, 7, 8, 9])).to.be.deep.equal(result)
})

test('generateBreadcrumb([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) should return [1, 2, ..., 10]', () => {
  const result = [1, 2, '...', 10]
  expect(generateBreadcrumb([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).to.be.deep.equal(result)
})



test('generateBreadcrumb() should return [home]', () => {
  const result = ['Home']
  expect(generateBreadcrumb()).to.be.deep.equal(result)
})

test('generateBreadcrumb({teste: teste}) should throw an error', () => {
  const params = {teste: 'teste'}
  const result = 'type array'

  try {
    generateBreadcrumb(params)
  } catch (e) {
    expect(e.message).to.be.equal(result)
  }
})
