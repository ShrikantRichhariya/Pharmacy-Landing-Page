import React from 'react'
import { useState } from "react";
import { FaHospitalUser, FaPhoneAlt,FaFileAlt,FaMotorcycle,FaWheelchair,FaChartLine,FaBus,FaTaxi,FaMapMarkerAlt} from "react-icons/fa";
import { AiOutlineTranslation } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import Header from './Header';
import Table from './Table'
import Text from './Text'
import Dropdown from './Dropdown';
import data from "./Data.json"
import { useNavigate } from 'react-router-dom';

export default function Card() {

    const navigate = useNavigate();
    function handleClick(event) {
        console.log("inner button")
      navigate('/dummy');
    }

    const [items , setItems] = useState(data);
    const filterItem=(catItem)=>{
        const updatedItems = data.filter((curElem)=>{
            return curElem.Pharmacy === catItem;
            

        });
        console.log(updatedItems);
        setItems([...updatedItems]);

    }

    // const [cards] = useState([
    //     {

    //         text: 'Tele-Health Services',
    //     },
    //     {

    //         text: 'Deliver Services',
    //     },
    //     {

    //         text: 'Scheme to serve Poverty People',
    //     },
    //     {

    //         text: 'Accessibility for Disabled',
    //     },
    //     {

    //         text: 'Marketing Strategies',
    //     },
    //     {

    //         text: 'Transport facility',
    //     },
    //     {

    //         text: 'Translation services',
    //     },
    //     {

    //         text: 'Curbside Pickup',
    //     },
    // ]);
    return (
        <div className='cardPage'>
            <Header />
            <Text />
            <Dropdown />
            <div>
                <>
                    <div>
                        <div className="card1" >
                        <div class="row3">
                                <div class="column3">
                                    <div class="card3" >
                                        <div className='icon1' onClick={()=> filterItem("Neighborhood Pharmacy")}><FaPhoneAlt/></div>
                                        <div  className="Cardtext3" onClick={()=> filterItem("Neighborhood Pharmacy")}>Tele-Health Services</div>
                                        <div className='icon2' onClick={handleClick}><FiMapPin/></div>

                                    </div>
                                </div>

                                <div class="column3">
                                    <div class="card3" >
                                        <div className='icon1'onClick={()=> filterItem("WALGREENS")}><FaMotorcycle/></div>
                                        <div  className="Cardtext3" onClick={()=> filterItem("WALGREENS")}>Deliver Services</div>
                                        <div className='icon2' onClick={handleClick}><FiMapPin/></div>

                                    </div>
                                </div>
                            </div>

                            <div class="row3">
                                <div class="column3">
                                    <div class="card3" >
                                        <div className='icon1' onClick={()=> filterItem("FALCON WELLNESS PHARMACY")}><FaFileAlt/></div>
                                        <div className="Cardtext3" onClick={()=> filterItem("FALCON WELLNESS PHARMACY")}>Scheme to serve Poverty People</div>
                                            <div className='icon2' onClick={handleClick}><FiMapPin/></div>
                                    </div>
                                </div>

                                <div class="column3">
                                    <div class="card3" >
                                        <div className='icon1'onClick={()=> filterItem("CVS PHARMACY")}><FaWheelchair/></div>
                                        <div  className="Cardtext3" onClick={()=> filterItem("CVS PHARMACY")}>Accessibility for Disabled</div>
                                        <div className='icon2' onClick={handleClick}><FiMapPin/></div>
                                    </div>
                                </div>
                            </div>

                            <div class="row3">
                                <div class="column3">
                                    <div class="card3" >
                                        <div className='icon1' onClick={()=> filterItem("PUBLIX PHARMACY")}><FaChartLine/></div>
                                       <div  className="Cardtext3" onClick={()=> filterItem("PUBLIX PHARMACY")}> Marketing Strategies</div>
                                       <div className='icon2' onClick={handleClick}><FiMapPin/></div>
                                    </div>
                                </div>

                                <div class="column3">
                                    <div class="card3" >
                                        <div className='icon1' onClick={()=> filterItem("PUBLIX PHARMACY")}><FaBus/></div>
                                        <div  className="Cardtext3" onClick={()=> filterItem("PUBLIX PHARMACY")}>Transport facility </div>
                                        <div className='icon2' onClick={handleClick}><FiMapPin/></div>
                                    </div>
                                </div>
                            </div>

                            <div class="row3">
                                <div class="column3">
                                    <div class="card3" >
                                        <div className='icon1' onClick={()=> filterItem("DUMMY PHARMACY")}><AiOutlineTranslation/></div>
                                        <div  className="Cardtext3" onClick={()=> filterItem("DUMMY PHARMACY")}>Translation services</div>
                                        <div className='icon2' onClick={handleClick}><FiMapPin/></div>
                                    </div>
                                </div>

                                <div class="column3">
                                    <div class="card3" >
                                        <div className='icon1' onClick={()=> filterItem("MY OWN PHARMACY")}><FaTaxi/></div>
                                        <div  className="Cardtext3" onClick={()=> filterItem("MY OWN PHARMACY")}>Curbside Pickup </div>
                                        <div className='icon2' onClick={handleClick}><FiMapPin/></div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="card-body">
                            <section>
                                <div className="container">
                                    <div className="cards">
                                        {cards.map((card, i) => (
                                            <div key={i} className='card'>
                                                <div className='text'><div className='hos'><FaHospitalUser /></div>{card.text}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section >
                        </div> */}
                        </div>
                    </div >
                </>
            </div>
            <Table items={items} />
        </div>
    )
}
