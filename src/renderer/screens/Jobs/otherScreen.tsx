import React from 'react'

type Props = {}

function otherScreen({}: Props) {
    console.log("Mounted")
  return (
    <>
      <div>other Screen</div>
    </>
  )
}

export default otherScreen