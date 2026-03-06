import Editor from '@monaco-editor/react';
import { useEffect } from 'react';


export default function App() {
  useEffect(() => {
    async function test() {
      const output = await fetch('/run').then(res => res.json());
      console.log(output);
    }

    test();
  }, [])

  return (
    <Editor
      height="100vh"
      defaultLanguage='typescript'
      defaultValue="// some comment"
      theme='vs-dark'
    />
  )
}
