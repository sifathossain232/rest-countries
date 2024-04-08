
import './Country.css'
const Country = ({country}) => {
    const {area,name,population,region,flags} = country;
    // console.log(country);
    return (
        <div className='country'>
            {/* <h2>Country Name:{country.name.common}</h2> */}
            <h2>Country Name: {name.common}</h2>
            <img className='flagsimg' src={flags.png} alt="" />
            {/* <p><small>Population: {population}</small></p> */}
            <p><small>Region: {region}</small></p>
            <p>Area: {area}</p>
        </div>
    );
};

export default Country;