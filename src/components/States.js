import { FormControl, InputLabel, Select } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import GetStates from '../helpers/getStates';
import Loader from '../screens/loader';

const States = () => {

    const [ states , setSates ] = useState([])

    const [ select, setSelect ] = useState({

        name: "julio",
        id: "1"
    })
    
    useEffect( () => {
        GetStates()
            .then( data => {
                setSates( data )
            })
    }, []);

    const handleSelect = (e) => {
        setSelect({
        ...select,
        id: e.target.value
        });
        // console.log(e.target.value);  
    }


    return(
        <>
            {/* if // (condicion) ? true : false; */}
            {(states.data) ?
                <FormControl variant="filled" >
                    <InputLabel htmlFor="filled-age-native-simple">Provincia</InputLabel>
                    <Select
                        native
                        value={select.id}
                        onChange={handleSelect}
                        inputProps={{
                        name: 'state',
                        id: 'filled-age-native-simple',
                        }}
                    >
                            <>
                                {/* <option aria-label="None" value="" /> */}
                                {states.data.map(state => {
                                return (<option 
                                            value={state.id_provincia} 
                                            key={state.nombre}
                                            name={state.nombre}
                                            >
                                            {state.nombre}</option>)}
                                )}
                            </>
                    </Select>
                </FormControl>
                :
                <Loader active={true} />
            }
        </>
    )
  
}

export default States;