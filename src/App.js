import React, {useState} from 'react';
import { marked } from "marked";
import './App.css';

const defaultText = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

const hello-world = [hello, world]
hello-world.forEach(item => {
  console.log(item)
})
\`\`\`


You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`

function App() {
  const [textInput, setTextInput] = useState(defaultText)

  const formattedTextInput = marked.parse(textInput, {breaks: true})

  const handleChange = e => {
    setTextInput(e.target.value)
  }

  return (
    <div className="container-fluid mt-5">
      <div className='row vh-80'>
        <div className="col-6 d-flex justify-content-center align-items-center flex-column h-100">
          <h1 className='text-light'>Editor</h1>
          <textarea id="editor" onChange={handleChange} value={textInput} className='p-2 w-100 h-50'>

          </textarea>
        </div>
        <div className="col-6 d-flex justify-content-center align-items-center flex-column h-100">
          <h1 className='text-light'>Preview</h1>
          <div id="preview" readOnly dangerouslySetInnerHTML={{__html: formattedTextInput}} className='p-2 w-100 h-50 overflow-auto bg-light'>
            
          </div>
        </div>
      </div>
      <p className='text-light text-center'>By Kyle E. F. O.</p>
    </div>
  );
}

export default App;
