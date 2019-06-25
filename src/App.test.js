import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import 'jest-dom/extend-expect';
import '@testing-library/react/cleanup-after-each';

import App from './App';

describe('<App/>', () => {
  it('renders without crashing with ReactDOM', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders without crashing', () => {
    render(<App />);
  });

  it('renders "Hello World"', () => {
    //const { getByText } = render(<App />)
    //const text = getByText(/Hello World!/i)
    //expect(text).toBeInTheDocument()
  });
});


// CJ Snippits for VS Users
// it('', () => {
//
// });
//
// server.get
//
// {
//   // Place your snippets for javascript here. Each snippet is defined under a snippet name and has a prefix, body and
//   // description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
//   // $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the
//   // same ids are connected.
//   // Example:
//   // "Print to console": {
//   //    "prefix": "log",
//   //    "body": [
//   //        "console.log('$1');",
//   //        "$2"
//   //    ],
//   //    "description": "Log output to console"
//   // }
//   "Import React": {
//     "prefix": "ire",
//     "body": "import React from 'react';$0"
//   },
//   "Named Import": {
//     "prefix": "nim",
//     "body": "import { $1 } from '$2';$0"
//   },
//   "Default Import": {
//     "prefix": "dim",
//     "body": "import $1 from '$2';$0"
//   },
//   "CommonJS Require": {
//     "prefix": "rem",
//     "body": "const $1 = require('$1$2');$0"
//   },
//   "routeHandler": {
//     "prefix": "rhl",
//     "body": "'/$1', (req, res) => {\n\t$0\n}",
//     "description": "node.js route handler"
//   },
//   "Node post route": {
//     "prefix": "postroute",
//     "body": "server.post('/$1', (req, res) => {\n\t$0\n});",
//     "description": "node.js post route handler"
//   },
//   "Node get route": {
//     "prefix": "getroute",
//     "body": "server.get('/$1', (req, res) => {\n\t$0\n});",
//     "description": "node.js get route handler"
//   },
//   "Node put route": {
//     "prefix": "putroute",
//     "body": "server.put('/$1', (req, res) => {\n\t$0\n});",
//     "description": "node.js put route handler"
//   },
//   "Node delete route": {
//     "prefix": "delroute",
//     "body": "server.delete('/$1', (req, res) => {\n\t$0\n});",
//     "description": "node.js delete route handler"
//   },
//   "Jest test case": {
//     "prefix": "jestit",
//     "body": "it('$1', () => {\n\t$0\n});",
//     "description": "jest test case"
//   },
//   "Jest test suite": {
//     "prefix": "jestst",
//     "body": "describe('$1', () => {\n\t$0\n});",
//     "description": "jest test suite"
//   }
// }
