import { useState } from "react"

export const Message = (props) => {
  const [Message, setMessage] = useState('Welcome Visitor');
  return (
    <div>
    <h1>{Message}</h1>
    <button onClick={() => setMessage('Thank You for Subscribing!')}>Subcribe</button>
    </div>
  )
}

// export default Greet
