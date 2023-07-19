import React, { useState } from 'react'

/**
 * `MyCounter` is a React component that renders a counter.
 *
 * @component
 * @param {{value: number}} props The props.
 * @param {number} props.value The value of the counter.
 * @returns {React.ReactElement} A React element.
 */
const MyCounter = ({ value }) => {
  const [counter, setCounter] = useState(value)

  const onMinus = () => {
    setCounter((prev) => prev - 1)
  }

  const onPlus = () => {
    setCounter((prev) => prev + 1)
  }

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={onMinus}>-</button>
      <button onClick={onPlus}>+</button>
    </div>
  )
}

export default MyCounter
