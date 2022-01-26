import React from "react";

function OpenseaItem({ collection }) {

    if (!collection) {
        return <div>Loading...</div>
    }

    function isPositiveInteger(value) {
        if (Number.isInteger(value) && value > 0) {
            return true;
        }

        return false;
    }

    let ods = collection.stats.one_day_change * 100
    ods = ods.toFixed(2);
    let sds = collection.stats.seven_day_change * 100;
    sds = sds.toFixed(2);


    return (
        <div className="flex p-6 bg-white rounded-xl shadow-xl items-center flex-col sm:flex-row cursor-pointer group">
            <div className="flex-shrink-0 flex items-center">
                <img src={collection.image_url} className="h-20 w-20 rounded-full object-cover transition group-hover:rotate-45" />
            </div>
            <div className="ml-6 pt-1 w-full">
                <h4 className="text-xl text-gray-900">{collection.name}</h4>
                <div>
                    <div className="mt-3 flex justify-between flex-wrap">
                        <div className="flex-shrink-0">
                            <p className="text-base text-gray-600"><strong>Ξ{collection.stats.floor_price}</strong> ($37.000)</p>
                            <p className="text-base text-gray-600">{collection.dev_seller_fee_basis_points / 100}%</p>
                        </div>
                        <div className="text-right">
                            <p className="text-base text-gray-600">{collection.stats.total_supply}</p>
                            <p className="text-base text-gray-600">{collection.stats.num_owners}</p>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex flex-col justify-between mt-3">
                            <p className="text-base text-gray-600">24h: <span className="text-red-400">{ods}%</span></p>
                            <p className="text-base text-gray-600">7d: <span className={isPositiveInteger(parseInt(sds)) ? 'text-green-400' : 'text-red-400'}>{sds}%</span></p>
                        </div>
                        <div className="flex flex-col justify-between flex-wrap mt-3 text-right">
                            <p className="text-base text-gray-600">24h sales: {collection.stats.one_day_sales}</p>
                            <p className="text-base text-gray-600">7d sales: {collection.stats.seven_day_sales}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default OpenseaItem;
