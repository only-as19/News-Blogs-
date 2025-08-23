import { faSearch,faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const Weather:React.FC = () => {
  return (
    <div className='w-full min-w-112 bg-bg-black-2 rounded-2xl h-[45%]'>
      <div>
        <div>
          <FontAwesomeIcon icon={faSearch}/>
          <div>Sialkot</div>
        </div>
        <div>
          <input type="text" placeholder="Enter Location"/>
          <FontAwesomeIcon icon={faMagnifyingGlass}/>
        </div>
      </div>
      <div>
        <i class='bxr  bx-sun'  ></i>
        <div>Clear</div>
        <div>29</div>
      </div>
    </div>
  )
}

export default Weather
