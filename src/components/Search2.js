import React from 'react'
import { useState } from 'react';
import data from './data2.json';
import './Newstyles.css'
export default function Search2() {
    const [searchTerm, setSearchTerm] = useState("");

    
    return (
        <>
            <div className="templateContainer">
                <div className="searchInput_Container">
                    
                    {/* <div className="searchcon">
                        <label htmlFor="BO">
                    <FaSearch className='magnifying'/>
                    <input  id="searchInput" type="text" className='BOX'  placeholder='Search here..' onChange={(event) => {
                        setSearchTerm(event.target.value);
                        
                    }} />
                    </label>
                    </div> */}

                    <div class="d-flex search-input">
                        <span class="material-symbols-outlined">search</span>
                        <input className='BOX' type="search" placeholder="Search" aria-label="Search" onChange={(event) => {
                        setSearchTerm(event.target.value);
                        
                    }} />
                    </div>
                    
                    
                </div>
                <div className="template_Container">
                    {

                        data.filter((val) => {
                                if (searchTerm === "") {
                                    return val;
                                }

                                else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return val;
                                }

                            return -1
                                
                            })
                            .map((val) => {
                                return (
                                    <>
                                    <div className="template" key={val.id}>
                                        <img src={val.image} alt="" />
                                        <h3>{val.title}</h3>
                                        <p className="price">₹{val.price}</p>
                                        <button className="change"></button>
                                    </div>
                                    
                                    </>
                                    
                                )
                            })
                    }
                </div>
            </div>
        </>
    )
}
