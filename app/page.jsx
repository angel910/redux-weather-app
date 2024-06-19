import Header from "./components/Header"
import SearchInput from "./features/searchInput/SearchInput"
import { ForecastList } from "./features/forecastsList/ForecastsList"


export default function Home() {




  return (
    <main>
      <div className="container">
        <Header></Header>
        <SearchInput></SearchInput>
        <ForecastList></ForecastList>
      </div>
    </main>
  )
}