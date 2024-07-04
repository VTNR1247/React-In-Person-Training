import React from 'react'

export default function Events() {
    const handleClick = () => {
        return console.log("Button clicked");
    }
  return (
      <div>
          <button onClick={handleClick}>Click me</button>
    </div>
  )
}
