// console.log('Hello')

// const min = require('lodash/min')
// console.log(min([34,352,52,34,2,4,123131,231,321,24,3,4,235,34,5,345,345]))
import.meta.webpack
import _ from 'lodash';

// const _= require ('lodash')
// const { min } = require('lodash')
// const prova =[34,352,52,34,2,4,123131,231,321,24,3,4,235,34,5,345,345]

// const test1 = min(prova)
// console.log(test1)
function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
  }

  document.body.appendChild(component());
