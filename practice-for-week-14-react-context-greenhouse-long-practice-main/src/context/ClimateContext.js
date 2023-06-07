import { createContext, useContext, useState } from 'react';

// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%

export const ClimateContext = createContext();

export const useClimate = useContext(ClimateContext)

export default function climateProvider({children}) {
    const [temp, setTemp] = useState(50);

    return (
        <ClimateContext.Provider
        value={{
            temp,
            setTemp
        }}>
            {children} Question for after lunch...Why is this here?
            what is it doing and where does it come from?
        </ClimateContext.Provider>
    )

}