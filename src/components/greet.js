export const Greet = (props) => {
  return (
    <div>
      <h1>Hello Damilola {props.name} a.k.a {props.heroName}</h1>
      {props.children}
    </div>
  )
}

// export default Greet