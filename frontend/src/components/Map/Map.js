import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps";

function MapSetting(){
    return(
        <GoogleMap 
            defaultZoom={15}
            center={{lat:40.694354, lng: -73.98545}}        //use this to change the center.
        >
        <Marker position={{lat:40.694354773743235, lng: -73.98545374180934}}/>
        </GoogleMap>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(MapSetting));

export default function Map(){
    return(
        <div style={{width: '30vw', height: '80vh'}}>
            <WrappedMap 
                googleMapURL={"https://maps.googleapis.com/maps/api/js?key=AIzaSyCApFEzda-S2qIx1k-e5TyGZk2UpnTqmUM&v=3.exp&libraries=geometry,drawing,places"} 
                loadingElement={<div style={{height: "100%"}}/>}
                containerElement={<div style={{height: "100%"}}/>}
                mapElement={<div style={{height: "100%"}}/>}
                
            />
        </div>
    )
}
