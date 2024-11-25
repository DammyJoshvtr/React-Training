export const UserGreeting = () => {
  const isLoggedIn = false
  return (
    <div>
      {/* Welcome {isLoggedIn ? 'Damilola' : 'Guest'} */}
      welcome {isLoggedIn && 'Damilola'}
    </div>
  )
}
