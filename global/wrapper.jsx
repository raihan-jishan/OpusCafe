
const Wrapper = ({children, className, id}) => {
  return (
    <main className={`bg-gray-100 p-2 ${className}`} id={id}>
        {children}
    </main>
  )
}

export default Wrapper;