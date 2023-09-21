import React from 'react';
import Refractor from 'react-refractor';
import js from 'refractor/lang/javascript';
import ts from 'refractor/lang/typescript';
import 'refractor/lang/jsx'; // Include JSX highlighting
import { PortableTextComponents } from '@portabletext/react';
import '../app/styles/codeblock.css'

Refractor.registerLanguage(js);
Refractor.registerLanguage(ts);

type CodeBlockProps = {
  value: {
    code: string;
    language: string;
    filename?: string;
  };
};

const CodeBlock: React.FC<CodeBlockProps> = ({ value }) => {
  return (
    <div className='rounded-lg bg-gray-900 overflow-hidden mt-4'>
      {value.filename && (
        <p className=' text-white px-4 py-2 text-base'>
          {value.filename}
        </p>
      )}
      <div>
        <Refractor
          language={value.language}
          value={value.code}
          className='py-4 border rounded-md  whitespace-pre-wrap break-words  overflow-hidden'
        />
      </div>
    </div>
  );
};



export default CodeBlock;


export const components: PortableTextComponents
 = {
  block: {
    // Ex. 1: customizing common block types
    h1: ({children}) => <h1 className="text-2xl font-bold">{children}</h1>,
    blockquote: ({children}) => <blockquote className="border-l-purple-500">{children}</blockquote>,

    // Ex. 2: rendering custom styles
    customHeading: ({children}) => (
      <h2 className="text-lg text-primary text-purple-700">{children}</h2>
    ),
  },
}

export const CustomPortableTextComponent: PortableTextComponents = {
  types: {
    code: CodeBlock,
  },
 
};






