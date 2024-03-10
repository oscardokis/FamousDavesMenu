function Footer() {
  const year = new Date().getFullYear()
  return (
    <div className="flex flex-col items-center text-white p-3 text-xs w-full">
    <p className="text-center mb-3 max-w-5xl">2000 calories a day is used for general nutrition advice, but calorie needs vary. *These items may be served raw or undercooked based on your specification or contain raw or undercooked ingredients. Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness, especially if you have certain medical conditions.</p>
    <h2 className="mb-3">Design by Oscar Gonzalez © {year} </h2>

    </div>
  )
}

export default Footer