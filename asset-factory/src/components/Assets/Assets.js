import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Assets.css';

export default function Assets() {

    const [assets, setAssets,] = useState([]);

    useEffect(() => {
        getAssetList();
    }, []);

    const getAssetList = async (e) => {
        const res = await fetch(`http://localhost:9000/api/Asset/list`);
        const data = await res.json();
        setAssets(data)
        console.log('Asset list is set!');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('buy!!')
    }


    return (
        <div >
            <h1>Assets</h1>
       
            <div className="asset-container">
                {assets.map(asset => {
                    return (
                        <div className="card" key={uuidv4()}>
                            <form>
                                <p>{asset.name}</p>
                                <p>{asset.description}</p>
                                <p><strong>{asset.price}</strong></p>
                                
                                <label htmlFor="purchase-price">Enter purchase price</label>
                                <input type="text" name="purchase-price" id="purchase-price"/>
                                <button type="submit" className="btn" onClick={handleSubmit}>Buy Now</button>
                            </form>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}