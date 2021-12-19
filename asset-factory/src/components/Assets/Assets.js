import React, { useState,useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './Assets.css';

export default function Assets() {

    const [assets, setAssets,] = useState([]);

    useEffect(() => {
        getAssetList();
    }, []);

    const getAssetList = async (e) => {
        const res = await fetch('http://localhost:9000/api/Asset/list');
        const data = await res.json();
        setAssets(data)
        console.log('Asset list is set!');
    }

    const handleSubmit = async () => {
        console.log('buy!!')
    }


    return (
        <div >
            <h1>Assets</h1>
            <div className="asset-container">
            {assets.map(asset => {
                return (
                    
                    <div className="card" key={uuidv4()}>
                        <p>{asset.name}</p>
                        <p>{asset.description}</p>
                        <p>{asset.price}</p>
                        <button type="submit" className="btn" onClick={handleSubmit}>Buy Now</button>
                    </div>
                    
                )
            })}
            </div>
        </div>
    );
}