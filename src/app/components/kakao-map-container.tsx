/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect } from "react";

declare global {
    interface Window {
        kakao: any;
    }
}

export default function KakaoMapContainer(){
    const apiKey:string|undefined = process.env.NEXT_PUBLIC_KAKAO_KEY;

    useEffect(() => {
        const script:HTMLScriptElement = document.createElement("script");
        script.async = true;
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false`;
        document.head.appendChild(script);

        script.addEventListener("load", () => {window.kakao.maps.load(() => {
                const coords = new window.kakao.maps.LatLng(33.5563, 126.79581);

                const container = document.getElementById('map');
                
                const options = { 
                    center: coords,
                    level: 3 
                };
                const map = new window.kakao.maps.Map(container, options);

                map.setCenter(coords);
            })
        })
    }, [])
    return (
        <div id="map" style={{height: "500px", width: "100%"}} />
    )
}