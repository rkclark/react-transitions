import React from 'react';

export default function Board ({children}) {
  return (
    <ul className="board">
      {children}
    </ul>
  )
}