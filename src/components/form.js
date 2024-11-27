import { useState } from "react"

export const Form = () => {
  const [Username, setUsername] = useState('')

  const [description, setDescription] = useState('')

  const handlesubmit = (event) => {
    event.preventDefault()
    alert(`Your name is ${Username}`)
  }
  return (
  <form onSubmit={handlesubmit}>
    <div>
      <label>Username</label>
      <input type="text" value={Username} onChange={(event) => setUsername(event.target.value)}  />

      {/* little praactice from here => */}
      <label>Country description</label>
      <input type="text" value={description} onChange={(event) => {event.target.value}} />

      {/* to here */}
    </div>
    <button type="submit">Submit</button>
  </form>
  )
}