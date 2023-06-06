import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Pharmacy = () => {
    const pharmacyName=useParams()
    const [pharmacyDetails,setPharmacyDetails]=useState({"pharmacyName":"","pharmacyAddress":"","backgroundColor":"grey"})
    useEffect(()=>{
        //call the api with pharmacyName
        //it will return json data with address and numbers 
        // setPharmacyDetails(data)
    },[])
  return (
    <div style={{backgroundColor:pharmacyDetails.backgroundColor}}>
        Pharmacy name: {pharmacyDetails.pharmacyName}
        Pharmacy Adderess: {pharmacyDetails.pharmacyAddress}
    </div>
  )
}

export default Pharmacy
