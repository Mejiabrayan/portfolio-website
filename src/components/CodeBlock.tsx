import React from 'react';
import Refractor from 'react-refractor';
import js from 'refractor/lang/javascript';
import ts from 'refractor/lang/typescript';
import 'refractor/lang/jsx'; // Include JSX highlighting
import { PortableTextComponents } from '@portabletext/react';

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
        <p className='bg-mustard-500 text-white px-4 py-2 text-sm'>
          {value.filename}
        </p>
      )}
      <div>
        <Refractor
          language={value.language}
          value={value.code}
          className='p-4 bg-gray-700 border border-white py-5 mb-5 rounded-md text-purple-500 whitespace-pre-wrap break-words max-h-[calc(100vh-8rem)] overflow-hidden'
        />
      </div>
    </div>
  );
};

export default CodeBlock;

export const CustomPortableTextComponent: PortableTextComponents = {
  types: {
    code: CodeBlock,
  },
};
