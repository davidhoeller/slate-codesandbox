import ReactDOM from "react-dom";
import React from "react";

import { Value } from "slate";
import { Editor } from "slate-react";

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: "block",
        type: "paragraph",
        nodes: [
          {
            object: "text",
            text: "A line of text in a paragraph."
          }
        ]
      }
    ]
  }
});

class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: initialValue
    };
  }

  onChange({ value }) {
    this.setState({ value });
  }

  render() {
    return (
      <Editor
        placeholder="Enter some text..."
        onChange={change => this.onChange(change)}
        value={this.state.value}
      />
    );
  }
}

ReactDOM.render(<MyEditor />, document.getElementById("root"));
