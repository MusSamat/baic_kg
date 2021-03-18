import React, { Component } from 'react';
import { YMaps, Map, Placemark } from "react-yandex-maps";

const Locations = () =>  {
    const mapData = {
        center: [42.870981, 74.569466],
        zoom: 12,
    };

    const coordinates = [
        [42.870981, 74.569466],
    ];

    return (
        <div  className="container" style={{ height: '100vh', width: '95%' }}>
            <div>
                <hr  style={{border:"1px solid black"}}/>
            </div>
            <div style={{width:'100%', height:'70%', position:'relative'}} >
                <YMaps >
                    <Map  width='100%' height='100%'  defaultState={mapData} >
                        {coordinates.map((coordinate,i) => <Placemark geometry={coordinate}  key={i}/>)}
                    </Map>
                </YMaps>
            </div>
            <div className="horizontal">
                <hr style={{border:"1px solid black"}}/>
            </div>
        </div>
    );
}

export default Locations;






