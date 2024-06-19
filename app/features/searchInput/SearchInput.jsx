'use client';
import { useDispatch, useSelector } from "react-redux";
import { printText, reset } from "./searchInputSlice";
import { fetchFiveDayForecast, fetchSingleDayForcast } from "../forecastsList/forecastsListSlice";


function SearchInput() {
  const string = useSelector((state) => state.searchInput.string)
  const forecasts = useSelector((state) => state.forecastsList.forecasts)
  const dispatch = useDispatch()

  const handleEnterKey = (e) => {
    let key = e.key

    if (key === 'Enter') {
      dispatch(fetchFiveDayForecast(string))
      dispatch(reset())
    }
  }

  return (
    <div className="row justify-content-md-center top-buffer">
      <div className="col col-12">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Get a five-day forecast in your different cities"
            value={string}
            onChange={(e) =>
              dispatch(printText(e.target.value))
            }
            onKeyDown={(e) => handleEnterKey(e)}
          >
          </input>
          <div className="input-group-append">
            <button type="button" className="btn btn-primary"
              onClick={() => {
                dispatch(fetchSingleDayForcast(string));
                dispatch(reset())
              }}>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchInput;