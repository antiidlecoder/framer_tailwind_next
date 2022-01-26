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
                <div className={`bg-black h-full w-full absolute top-0 left-0 transition ${infoOpen ? 'opacity-20' : 'opacity-0'}`} onClick={() => console.log("yo")}></div>
                <div className="h-80 w-full overflow-hidden rounded">
                    <img src={asset.image_url} className="h-full rounded w-full object-cover transition" />

                </div>
                {
                    /*

<div className="absolute flex justify-end items-end h-full w-full top-0 left-0">
                    <div className={`cursor-pointer w-8 h-8 flex justify-center items-center bg-blue-600 drop-shadow-md m-4 rounded-full transition ${infoOpen && 'opacity-0'}`} onClick={toggleInfoHandler}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff"><path d="M0 0h24v24H0z" fill="none" /><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg>
                    </div>
                </div>

                    */
                }


                <div className={`overflow-x-hidden no-scrollbar h-40 w-full px-6 py-4 rounded-xl rounded-b-sm bg-white absolute bottom-0 left-0 right-0 transition ease-in-out duration-300 ${infoOpen ? 'translate-y-0' : 'translate-y-28'}`}>

                    <div className="flex justify-between items-center text-xs absolute w-full h-12 top-0 left-0 px-6 font-bold cursor-pointer" onClick={toggleInfoHandler}>
                        <div>
                            {
                                asset.sell_orders ? <p>Ξ{ethers.utils.formatEther(asset.sell_orders[0].base_price)}</p> : <p>Last Ξ{ethers.utils.formatEther(asset.last_sale.total_price)}</p>
                            }
                        </div>
                        <div className={`cursor-pointer flex justify-center items-center drop-shadow-md transition ${infoOpen && 'rotate-45'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000" className="w-4 h-4"><path d="M0 0h24v24H0z" fill="none" /><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg>
                        </div>

                    </div>
                    <div className="relative top-4">
                        <div className="fixed w-full h-8 left-0 px-6">
                            <div className="flex justify-between items-center h-8">
                                <h4 className="text-xl text-gray-900">{asset.name}</h4>

                                {
                                    /*
<div className="w-5 h-5 cursor-pointer" onClick={toggleInfoHandler}>
                                   <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000" className={`w-full h-full object-contain transition opacity-0 rotate-90 delay-100 duration-500 ${infoOpen && 'opacity-100 rotate-180'}`}><path d="M0 0h24v24H0z" fill="none" /><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></svg>
                               </div>
                                    */
                                }

                            </div>
                        </div>

                        <div className="relative top-10 divide-y">


                            <div className="flex justify-between items-center my-3 text-lg">
                                <div>
                                    {
                                        asset.sell_orders ? <p>Ξ{ethers.utils.formatEther(asset.sell_orders[0].base_price)}</p> : <p>Last Ξ{ethers.utils.formatEther(asset.last_sale.total_price)}</p>
                                    }
                                </div>
                                <div className="text-xs">
                                    {
                                        asset.sell_orders ? <button className="bg-blue-600 text-white py-1 px-5 rounded-full">Buy</button> : <button className="bg-blue-600 text-white py-1 px-5 rounded-full">Make offer</button>
                                    }
                                </div>
                            </div>

                            <div className="divide-y">
                                <div className="flex justify-between items-center h-8">
                                    <p><a
                                        href={"https://opensea.io/collection/" + asset.collection.slug}
                                        target="_blank"
                                        className="hover:underline hover:text-slate-700 text-xs flex items-center"
                                    ><img src={asset.collection.featured_image_url} alt="User Profile" className="w-4 h-4 rounded-full mr-1" /> {asset.collection.name}</a></p>
                                    <p><a
                                        href={"https://opensea.io/" + asset.owner.address}
                                        target="_blank"
                                        className="hover:underline hover:text-slate-700 text-xs flex items-center"
                                    >
                                        <img src={asset.owner.profile_img_url} alt="User Profile" className="w-4 h-4 rounded-full mr-1" /> {asset.owner.user.username ? asset.owner.user.username : asset.owner.address.substr(0, 4) + "..." + asset.owner.address.substr(39, 42)}
                                    </a></p>
                                </div>

                                <div className="flex h-8 items-center">
                                    <div className="mr-2">
                                        <a>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 90 90" fill="none">
                                                <path d="M90 45C90 69.8514 69.8514 90 45 90C20.1486 90 0 69.8514 0 45C0 20.1486 20.1486 0 45 0C69.8566 0 90 20.1486 90 45Z" fill="#2081E2" />
                                                <path d="M22.2011 46.512L22.3953 46.2069L34.1016 27.8939C34.2726 27.6257 34.6749 27.6535 34.8043 27.9447C36.76 32.3277 38.4475 37.7786 37.6569 41.1721C37.3194 42.5683 36.3948 44.4593 35.3545 46.2069C35.2204 46.4612 35.0725 46.7109 34.9153 46.9513C34.8413 47.0622 34.7165 47.127 34.5824 47.127H22.5432C22.2196 47.127 22.0301 46.7756 22.2011 46.512Z" fill="white" />
                                                <path d="M74.38 49.9149V52.8137C74.38 52.9801 74.2783 53.1281 74.1304 53.1928C73.2242 53.5812 70.1219 55.0052 68.832 56.799C65.5402 61.3807 63.0251 67.932 57.4031 67.932H33.949C25.6362 67.932 18.9 61.1727 18.9 52.8322V52.564C18.9 52.3421 19.0803 52.1618 19.3023 52.1618H32.377C32.6359 52.1618 32.8255 52.4022 32.8024 52.6565C32.7099 53.5072 32.8671 54.3764 33.2693 55.167C34.0461 56.7435 35.655 57.7283 37.3934 57.7283H43.866V52.675H37.4673C37.1391 52.675 36.9449 52.2959 37.1345 52.0277C37.2038 51.9214 37.2824 51.8104 37.3656 51.6856C37.9713 50.8257 38.8358 49.4895 39.6958 47.9684C40.2829 46.9421 40.8516 45.8463 41.3093 44.746C41.4018 44.5472 41.4758 44.3438 41.5497 44.1449C41.6746 43.7936 41.804 43.4653 41.8965 43.1371C41.9889 42.8597 42.0629 42.5684 42.1369 42.2956C42.3542 41.3617 42.4467 40.3723 42.4467 39.3459C42.4467 38.9437 42.4282 38.523 42.3912 38.1207C42.3727 37.6815 42.3172 37.2423 42.2617 36.8031C42.2247 36.4147 42.1554 36.031 42.0814 35.6288C41.9889 35.0416 41.8595 34.4591 41.7115 33.8719L41.6607 33.65C41.5497 33.2478 41.4573 32.864 41.3278 32.4618C40.9626 31.1996 40.5418 29.9698 40.098 28.8186C39.9362 28.3609 39.7512 27.9217 39.5663 27.4825C39.2935 26.8213 39.0161 26.2203 38.7619 25.6516C38.6324 25.3927 38.5214 25.1569 38.4105 24.9165C38.2857 24.6437 38.1562 24.371 38.0268 24.112C37.9343 23.9132 37.8279 23.7283 37.754 23.5434L36.9634 22.0824C36.8524 21.8836 37.0374 21.6478 37.2546 21.7079L42.2016 23.0487H42.2155C42.2247 23.0487 42.2294 23.0533 42.234 23.0533L42.8859 23.2336L43.6025 23.437L43.866 23.511V20.5706C43.866 19.1512 45.0034 18 46.4089 18C47.1116 18 47.7496 18.2866 48.2073 18.7536C48.665 19.2206 48.9517 19.8586 48.9517 20.5706V24.935L49.4787 25.0829C49.5204 25.0968 49.562 25.1153 49.599 25.143C49.7284 25.2401 49.9133 25.3835 50.1491 25.5591C50.3341 25.7071 50.5329 25.8874 50.7733 26.0723C51.2495 26.4561 51.8181 26.9508 52.4423 27.5194C52.6087 27.6628 52.7706 27.8107 52.9185 27.9587C53.723 28.7076 54.6245 29.5861 55.4845 30.557C55.7249 30.8297 55.9607 31.1071 56.2011 31.3984C56.4415 31.6943 56.6958 31.9856 56.9177 32.2769C57.209 32.6652 57.5233 33.0674 57.7961 33.4882C57.9256 33.687 58.0735 33.8904 58.1984 34.0892C58.5497 34.6209 58.8595 35.1711 59.1554 35.7212C59.2802 35.9755 59.4097 36.2529 59.5206 36.5257C59.8489 37.2608 60.1078 38.0098 60.2742 38.7588C60.3251 38.9206 60.3621 39.0963 60.3806 39.2535V39.2904C60.436 39.5124 60.4545 39.7482 60.473 39.9886C60.547 40.756 60.51 41.5235 60.3436 42.2956C60.2742 42.6239 60.1818 42.9336 60.0708 43.2619C59.9598 43.5763 59.8489 43.9045 59.7056 44.2143C59.4282 44.8569 59.0999 45.4996 58.7115 46.1006C58.5867 46.3225 58.4388 46.5583 58.2908 46.7802C58.129 47.016 57.9626 47.238 57.8146 47.4553C57.6112 47.7327 57.3939 48.0239 57.172 48.2828C56.9732 48.5556 56.7697 48.8284 56.5478 49.0688C56.2381 49.434 55.9422 49.7808 55.6324 50.1137C55.4475 50.331 55.2487 50.5529 55.0452 50.7517C54.8464 50.9736 54.643 51.1724 54.4581 51.3573C54.1483 51.6671 53.8894 51.9075 53.6721 52.1063L53.1635 52.5733C53.0896 52.638 52.9925 52.675 52.8908 52.675H48.9517V57.7283H53.9079C55.0175 57.7283 56.0716 57.3353 56.9223 56.6141C57.2136 56.3598 58.485 55.2594 59.9876 53.5997C60.0384 53.5442 60.1032 53.5026 60.1771 53.4841L73.8668 49.5265C74.1211 49.4525 74.38 49.6467 74.38 49.9149Z" fill="white" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="mr-2">
                                        <a>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" viewBox="0 0 512 512"><path fill="rgb(29, 155, 240)" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>
                                        </a>
                                    </div>
                                    <div className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 293.775 293.671">
                                            <g id="etherscan-logo-circle" transform="translate(-219.378 -213.33)">
                                                <path id="Path_1" data-name="Path 1" d="M280.433,353.152A12.45,12.45,0,0,1,292.941,340.7l20.737.068a12.467,12.467,0,0,1,12.467,12.467v78.414c2.336-.692,5.332-1.43,8.614-2.2a10.389,10.389,0,0,0,8.009-10.11V322.073a12.469,12.469,0,0,1,12.468-12.47h20.778a12.469,12.469,0,0,1,12.467,12.467v90.279s5.2-2.106,10.269-4.245a10.408,10.408,0,0,0,6.353-9.577V290.9a12.466,12.466,0,0,1,12.466-12.467h20.778A12.468,12.468,0,0,1,450.815,290.9v88.625c18.014-13.055,36.271-28.758,50.759-47.639a20.926,20.926,0,0,0,3.185-19.537,146.6,146.6,0,0,0-136.644-99.006c-81.439-1.094-148.744,65.385-148.736,146.834a146.371,146.371,0,0,0,19.5,73.45,18.56,18.56,0,0,0,17.707,9.173c3.931-.346,8.825-.835,14.643-1.518a10.383,10.383,0,0,0,9.209-10.306V353.152" fill="#21325b" />
                                                <path id="Path_2" data-name="Path 2" d="M244.417,398.641A146.808,146.808,0,0,0,477.589,279.9c0-3.381-.157-6.724-.383-10.049-53.642,80-152.686,117.4-232.79,128.793" transform="translate(35.564 80.269)" fill="#979695" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                                <div className="text-xs flex flex-wrap">
                                    {asset.traits.map(trait => {
                                        return <div className="flex items-center my-1 mr-1">
                                            <p className="bg-gray-200 rounded-lg px-2 py-1">{trait.value} ({trait.trait_count})</p>
                                        </div>
                                    })}
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}


export default OpenseaAsset;
