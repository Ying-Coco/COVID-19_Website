import React from "react";
import { Cards, Chart, CountryPicker } from "./component/export";
import { fetchData } from "./api.js";
import styles from "./Tracker.module.css";

class Tracker extends React.Component {
   state = {
    data: {},
     country: "",  
  }; 
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({data:fetchedData})
/*     const fetchedData = await fetchData();

    this.setState({ data: fetchedData }); */
  }
  
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });

    //set the this.state
  };  

  render() {
    //const { data, country } = this.state;
    const {data, country} = this.state;
    return (
      <div className={styles.container} style={{overflow: 'auto'}}>
        <Cards data={data} />
         <CountryPicker handleCountryChange={this.handleCountryChange  } />
        <Chart data={data} country={country}   /> 
 
        <br></br>
      </div>
    );
  }
}

export default Tracker;
