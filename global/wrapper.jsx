
const Wrapper = ({children, className}) => {
  return (
    <main className={`bg-gray-100 p-2 ${className}`}>
        {children}
    </main>
  )
}

export default Wrapper;