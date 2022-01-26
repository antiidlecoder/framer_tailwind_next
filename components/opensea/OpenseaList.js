import React from 'react';
import { useState, useEffect } from "react";
import OpenseaAsset from './OpenseaAsset';
import OpenseaItem from './OpenseaItem';

function OpenseaList(props) {

    const [collections, setCollections] = useState([]);
    const [assets, setAssets] = useState([]);

    async function loadCollections() {
        const addresses = ["0x4Db1f25D3d98600140dfc18dEb7515Be5Bd293Af", "0x8a90cab2b38dba80c64b7734e58ee1db38b8992e", "0xed5af388653567af2f388e6224dc7c4b3241c544"];

        const slugs = await Promise.all(addresses.map(async (address) => {
            const response = await fetch("https://api.opensea.io/api/v1/asset_contract/" + address);
            const item = await response.json();
            return item.collection.slug;
        }))

        const items = await Promise.all(slugs.map(async (slug) => {
            const response = await fetch("https://api.opensea.io/api/v1/collection/" + slug);
            const item = await response.json();
            return item;
        }));

        setCollections(items);
    }

    async function loadAssets() {
        const response = await fetch("https://api.opensea.io/api/v1/assets?token_ids=295&token_ids=102&token_ids=413&asset_contract_address=0x8a90cab2b38dba80c64b7734e58ee1db38b8992e&order_direction=desc&offset=0&limit=20")
        const assets = await response.json();
        setAssets(assets);
        console.log(assets);
    }

    useEffect(() => {
        loadCollections();
        loadAssets();
    }, []);


    if (props.assetView) {
        return (
            <div className="container grid gap-4 md:grid-cols-3">
                {assets.assets && assets.assets.map(asset => <OpenseaAsset key={asset.id} asset={asset} />)}
            </div>
        );
    }


    return (
        <div className="container grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {collections && collections.map(collection => <OpenseaItem key={collection.collection.payout_address} collection={collection.collection} />)}
        </div>
    );
}

export default OpenseaList;
