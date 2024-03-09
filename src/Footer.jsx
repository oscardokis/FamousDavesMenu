function Footer() {
  const year = new Date().getFullYear()
  return (
    <div className="flex justify-center items-center">
      <h2 className="text-white p-3">Oscar Gonzalez © {year} </h2>
    </div>
  )
}

export default Footer