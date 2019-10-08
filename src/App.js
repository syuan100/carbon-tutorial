import './app.scss';
import React, { Component } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import theme from 'prism-react-renderer/themes/oceanicNext';

Object.entries(require('carbon-components-react')).forEach(
  ([name, exported]) => (global[name] = exported)
);

const code = `<Button>Button</Button>`;

function addContainingDiv(code) {
  return '<div>' + code + '</div>';
}

class App extends Component {
  render() {
    return (
      <LiveProvider code={code} transformCode={addContainingDiv}>
        <LiveEditor theme={theme} />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    );
  }
}

export default App;
