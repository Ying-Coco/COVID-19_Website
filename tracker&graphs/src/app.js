import React from 'react';

import {Cards, Chart, CountryPicker, Map} from './component';
import styles from './app.module.css';
import {fetchData} from './api';


class App extends React.Component{
    state = {
        data : {},
        country: '',

    }
    async componentDidMount() {
        const fetchedData = await fetchData();
    
        this.setState({ data: fetchedData });
      }
    
    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);

        this.setState({data: fetchedData, country: country});
        
        //set the this.state
    }


    render(){
        const {data, country} = this.state;

        return (
            <div className={styles.container}>

                <h1> COVID 19 Tracker</h1>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        )
    }

}

export default App;