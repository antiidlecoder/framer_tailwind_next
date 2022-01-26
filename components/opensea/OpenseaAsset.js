import React from "react";
import { useState } from "react"
import { ethers } from "ethers"


function OpenseaAsset({ asset }) {

    const [infoOpen, setInfoOpen] = useState(false);

    if (!asset) {
        return <div>Loading...</div>
    }

    function isPositiveInteger(value) {
        if (Number.isInteger(value) && value > 0) {
            return true;
        }

        return false;
    }


    function toggleInfoHandler() {
        console.log("open")
        setInfoOpen(!infoOpen);
    }


    return (
        <div className="flex bg-white rounded-xl shadow-xl items-center flex-col sm:flex-row group overflow-hidden relative">

            <div className="w-full relative">
                {infoOpen && <div className="bg-black opacity-20 h-full w-full absolute top-0 left-0" onClick={() => console.log("yo")}>

                </div>}
                <div className="h-80 w-full overflow-hidden rounded">
                    <img src={asset.image_url} className="h-full rounded w-full object-cover transition" />

                </div>
                <div className="absolute flex justify-end items-end h-full w-full top-0 left-0">
                    <div className={`cursor-pointer w-8 h-8 flex justify-center items-center bg-white drop-shadow-md m-4 rounded-full transition ${infoOpen && 'opacity-0'}`} onClick={toggleInfoHandler}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none" /><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg>
                    </div>
                </div>



                <div className={`overflow-x-hidden no-scrollbar h-40 w-full px-6 py-4 rounded-xl rounded-b-sm bg-white absolute bottom-0 left-0 right-0 translate-y-full transition ease-in-out duration-300 ${infoOpen && 'translate-y-0'}`}>
                    <div className="fixed w-full h-8 left-0 px-6">
                        <div className="flex justify-between items-center h-8">
                            <h4 className="text-xl text-gray-900">{asset.name}</h4>

                            <div className="w-5 h-5 cursor-pointer" onClick={toggleInfoHandler}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000" className={`w-full h-full object-contain transition opacity-0 rotate-90 delay-100 duration-500 ${infoOpen && 'opacity-100 rotate-180'}`}><path d="M0 0h24v24H0z" fill="none" /><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></svg>
                            </div>

                        </div>
                    </div>

                    <div className="relative top-8">
                        <div className="flex justify-between items-center h-8">
                            <p><a
                                href={"https://opensea.io/collection/" + asset.collection.slug}
                                target="_blank"
                                className="hover:underline hover:text-slate-700 text-xs"
                            >{asset.collection.name}</a></p>
                            <p><a
                                href={"https://opensea.io/collection/" + asset.collection.slug}
                                target="_blank"
                                className="hover:underline hover:text-slate-700 text-xs"
                            >{asset.collection.name}</a></p>
                        </div>

                        <div className="flex justify-between items-center mt-3 text-xs">
                            <div>
                                {
                                    asset.sell_orders ? <p>Ξ{ethers.utils.formatEther(asset.sell_orders[0].base_price)}</p> : <p>Last Ξ{ethers.utils.formatEther(asset.last_sale.total_price)}</p>
                                }
                            </div>
                            <div>
                                {
                                    asset.sell_orders ? <button className="bg-blue-600 text-white py-1 px-5 rounded-full">Buy</button> : <button className="bg-blue-600 text-white py-1 px-5 rounded-full">Make offer</button>
                                }
                            </div>
                        </div>

                        <div className="flex justify-around mt-10 mb-5">
                            <div className="w-10 h-10 bg-blue-600 rounded-full">

                            </div>
                            <div className="w-10 h-10 bg-blue-600">

                            </div>
                            <div className="w-10 h-10 bg-blue-600">

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div >
    )
}


export default OpenseaAsset;
