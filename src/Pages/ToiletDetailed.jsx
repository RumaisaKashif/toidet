import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../components/firebase/firebaseConfig";
import { doc, getDoc } from "@firebase/firestore";
import mapPin from "../assets/mapPin.png";
import bidetIcon from '../assets/bidet_icon.png';
import genderFemale from '../assets/gender_female.png';
import genderMale from '../assets/gender_male.png';
import disabledIcon from '../assets/disabled_icon.png';
import Footer from "../components/Footer";
import Header from "../components/ToiletDetailedHeader";

function ToiletDetailed(){
    const {id} = useParams();
    const [detail, setDetail] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDetail = async () => {
            try{
                const docRef = doc(db, "toilets", id);
                const docSnapshot = await getDoc(docRef);

                if(docSnapshot.exists){
                    setDetail(docSnapshot.data());
                } else{
                    setError(`No Toilet found with the ID ${id}`);
                }
            } catch (error){
                setError("Error fetching Toilet details: " + error);
            }
        };

        fetchDetail();
    }, [id]); // re-run effect if id changes
    
    useEffect(() => {
        if(detail) {
        const map = L.map('map').setView([detail?.lat, detail?.lng], 18);

        const customIcon = L.icon({
            iconUrl: mapPin,
        
            iconSize:     [28, 38], // size of the icon
            iconAnchor:   [20, 35], // point of the icon which will correspond to marker's location
        });
    
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }).addTo(map);
        
        const marker = L.marker([detail?.lat, detail?.lng], {icon: customIcon}).addTo(map);

      }}, [detail]);
    
      return (
        <div className="min-h-screen w-screen bg-white flex flex-col justify-between">
            <Header />
            <div className="flex-1 flex justify-center items-center">
                <div className="z-0 mx-auto h-fit bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center border-green-500 border-2">
                    <div id="map" />
                    <h1 className="mt-4 text-xl text-gray-600 font-bold">{detail?.location}</h1>
                    <p className="text-gray-600">{detail?.description}</p>
                    <span className="text-yellow-400">
                        {'★'.repeat(detail?.rating)}
                        {'☆'.repeat(5 - detail?.rating)}
                    </span>
                    <div className="flex space-x-4 items-center">
                        {detail?.bidet && <img src={bidetIcon} alt="Bidet" className="w-4.5 h-6" />}
                        {detail?.gender.toLowerCase() === 'unisex' ? (
                            <>
                                <img src={genderMale} alt={detail?.gender} className='w-4.5 h-6' />
                                <img src={genderFemale} alt={detail?.gender} className='w-4.5 h-6' />
                            </>
                        ) : detail?.gender.toLowerCase() === 'male' ? (
                            <img src={genderMale} alt={detail?.gender} className='w-4.5 h-6' />
                        ) : detail?.gender.toLowerCase() === 'female' ? (
                            <img src={genderFemale} alt={detail?.gender} className='w-4.5 h-6' />
                        ) : null}
                        {detail?.disabled && <img src={disabledIcon} alt="Disabled" className="w-4.5 h-6" />}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );    
}

export default ToiletDetailed;