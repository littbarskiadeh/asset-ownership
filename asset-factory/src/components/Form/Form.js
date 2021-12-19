import React, { useState } from 'react';
import './Form.css'

// import fetch from 'node-fetch';

export default function Form() {
    const [assetName, setAssetName,] = useState("");
    const [description, setDescription] = useState("");
    const [assetPrice, setAssetPrice] = useState(0);

    /* 
    http://localhost:8080/api/Asset/add
    {
        "name": "Asset 1",
        "description": "This is the description of the Asset, could be address :D",
        "price": 400000
    }
     */



    const handleSubmit = async (e) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "name": assetName,
                "description": description,
                "price": assetPrice
            })
        };

        const res = await fetch('http://localhost:9000/api/Asset/add', requestOptions);
        const data = await res.json();

        console.log('Click data', data)
    }

    const handleNameChange = (e) => { setAssetName(e.target.value) }
    const handleDescriptionChange = (e) => { setDescription(e.target.value) }
    const handlePriceChange = (e) => {
        const value = parseInt(e.target.value)
        Number.isInteger(value) ? setAssetPrice(value) : setAssetPrice('');
    }

    return (
        <div className="main-container">
            <div className="form-group">
                <form action="">
                    {/* <p>Contract address: <span id="address"></span></p>
                    <p>Stored Value: <span id="value"></span></p> */}

                    <label htmlFor="asset-name">Asset Name</label>
                    <input type="text" name="asset-name" placeholder="Asset Name" value={assetName}
                        onChange={handleNameChange} /><br />

                    <label htmlFor="price">Price:</label>
                    <input type="text" className="input-item" name="price" placeholder="Price" value={assetPrice}
                        onChange={handlePriceChange} /><br />

                    <label htmlFor="description">Description</label>
                    <textarea className="input-item" name="description" placeholder="Description" value={description}
                        onChange={handleDescriptionChange}></textarea><br />

                    <input type="button" value="Submit Asset" onClick={handleSubmit} />

                </form>

            </div>
        </div >

    );
}