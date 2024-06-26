  import { useNavigate } from "react-router-dom";
  import "./ContinentPage.css"
  import { usePreferences } from "../../context/preferences";
  import { useState, useEffect } from "react";
  import { sendContinents } from "../../Services/BackendService";
  import BounceLoader from "react-spinners/BounceLoader";


  export const ContinentPage = () => {
  const { preferences, setPreferences } = usePreferences();
  
    const handleContinentSelect = (continent) => {
    if (!preferences.Continent.includes(continent)) {
        setPreferences({
            ...preferences,
            Continent: [...preferences.Continent, continent]
        })
    } else if (preferences.Continent.includes(continent)){
      setPreferences({
        ...preferences,
      Continent: preferences.Continent.filter(item => item !== continent)
      })
    }
  };
    
    const [EuropeClass, setEuropeClass] = useState("continent-image-item")
    const [AsiaClass, setAsiaClass] = useState("continent-image-item")
    const [OceaniaClass, setOceaniaClass] = useState("continent-image-item")
    const [NorthAmericaClass, setNorthAmericaClass] = useState("continent-image-item")
    const [SouthAmericaClass, setSouthAmericaClass] = useState("continent-image-item")
    const [AfricaClass, setAfricaClass] = useState("continent-image-item")
    function addClassToEurope() {
      setEuropeClass(prevClass => prevClass === "continent-image-item" ? "clicked" : "continent-image-item");
    }
    function addClassToAsia() {
      setAsiaClass(prevClass => prevClass === "continent-image-item" ? "clicked" : "continent-image-item");
    }
    function addClassToOceania() {
      setOceaniaClass(prevClass => prevClass === "continent-image-item" ? "clicked" : "continent-image-item");
    }
    function addClassToNorthAmerica() {
      setNorthAmericaClass(prevClass => prevClass === "continent-image-item" ? "clicked" : "continent-image-item");
    }
    function addClassToSouthAmerica() {
      setSouthAmericaClass(prevClass => prevClass === "continent-image-item" ? "clicked" : "continent-image-item");
    }
    function addClassToAfrica() {
      setAfricaClass(prevClass => prevClass === "continent-image-item" ? "clicked" : "continent-image-item");
    }

    const [loading, setLoading] = useState(false);
    const [abortController, setAbortController] = useState(null)
    const navigate = useNavigate();

    useEffect(() => {
      const cleanup = () => {
        // Cancel ongoing request if component unmounts or user navigates away
        if (abortController) {
          abortController.abort();
        }
      };
      window.addEventListener('beforeunload', cleanup);

      return () => {
        window.removeEventListener('beforeunload', cleanup);
        cleanup();
      };
    }, [abortController]);

    const handleNextpage = async () => {
      setLoading(true);
      const continents = preferences.Continent;
      const controller = new AbortController()
      setAbortController(controller)
      
      try {
          const data = await sendContinents(continents, { signal: controller.signal });
    
          if (!preferences.citiesData.includes(data)) {
            setPreferences((prevPreferences) => ({
              ...prevPreferences,
              citiesData: [...prevPreferences.citiesData, data],
            }));
          }
          navigate('/Date');
        } catch (error) {
          // Handle error and redirect to ApiRedirectModel
          console.log(error)
          navigate('/ApiRedirect');
        } finally {
          setLoading(false)
          setAbortController(null)
        }
      };

  return (
  <div>
    {
      loading ? ( 
      <div className="continent-container"> 
        <div className="loader continent-body">
          <BounceLoader
                color= {"#5bcfc2"}
                loading={loading}
                size={100}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
          <div><p className="wait">Good things come to those who wait...</p></div>
        </div>  
      </div>
      
      ) : (
    <div className="continent-container">
    <div className="continent-body">
        <h4>Which continent would you like to visit?</h4>
        <p>If you don't have a specific preference click next without selecting a continent.</p>
        <div className="continent-images">
            <div className="continent-items">
              <img className={EuropeClass} onClick={() => {handleContinentSelect('Europe'); addClassToEurope()}} src="/assets/europe.png" alt="" />
              <p>Europe</p>
            </div>
            <div className="continent-items">
              <img className={AsiaClass} onClick={() => {handleContinentSelect('Asia'); addClassToAsia()}} src="/assets/asia.png" alt="" />
              <p>Asia</p>
            </div>
            <div className="continent-items">
              <img className={OceaniaClass} onClick={() => {handleContinentSelect('Oceania'); addClassToOceania()}} src="/assets/oceania.png" alt="" />
              <p>Oceania</p>
            </div>
            <div className="continent-items">
              <img className={NorthAmericaClass} onClick={() => {handleContinentSelect('North America'); addClassToNorthAmerica()}} src="/assets/north-america.png" alt="" />
              <p>North America</p>
            </div>
            <div className="continent-items">
              <img className={SouthAmericaClass} onClick={() => {handleContinentSelect('South America'); addClassToSouthAmerica()}} src="/assets/south-america.png" alt="" />
              <p>South America</p>
            </div>
            <div className="continent-items">
              <img className={AfricaClass} onClick={() => {handleContinentSelect('Africa'); addClassToAfrica()}} src="/assets/africa.png" alt="" />
              <p>Africa</p>
            </div>
        </div>
        <button className="continent-button" onClick={handleNextpage}>Next step</button>
    </div>
    </div>
  )
  }
  </div>
  );
  }