import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

export default function NFTScreen() {
    const [floorPrice, setFloorPrice] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFloorPrice = async () => {
            try {
                const response = await fetch(
                    'https://deep-index.moralis.io/api/v2.2/nft/0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjIwOWQyNTYxLTMyN2QtNGU3Zi05NmRkLTZjZDMwMjg2OTYzYiIsIm9yZ0lkIjoiNDExMzg4IiwidXNlcklkIjoiNDIyNzY2IiwidHlwZUlkIjoiZWMxYjliMzYtNWU1NS00MjE3LTk1NmEtNGUxMjE1ZGVkZmZhIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3Mjg2NzQyNzIsImV4cCI6NDg4NDQzNDI3Mn0.n8FIJ5_Dr3Xs8oq0oxd9f1RWkVyxbyuXIm1X_sGd_k8/floor-price',
                    {
                        headers: {
                            'X-API-Key': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjIwOWQyNTYxLTMyN2QtNGU3Zi05NmRkLTZjZDMwMjg2OTYzYiIsIm9yZ0lkIjoiNDExMzg4IiwidXNlcklkIjoiNDIyNzY2IiwidHlwZUlkIjoiZWMxYjliMzYtNWU1NS00MjE3LTk1NmEtNGUxMjE1ZGVkZmZhIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3Mjg2NzQyNzIsImV4cCI6NDg4NDQzNDI3Mn0.n8FIJ5_Dr3Xs8oq0oxd9f1RWkVyxbyuXIm1X_sGd_k8',
                        },
                    }
                );
                const data = await response.json();
                setFloorPrice(data.floorPrice);
            } catch (error) {
                console.error('Error fetching floor price:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchFloorPrice();
    }, []);

    if (loading) {
        return <Text>Loading...</Text>;
    }

    return (
        <View>
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
                marginVertical: 20,
            }}>Floor Price: {floorPrice ? `${floorPrice} ETH` : 'Not Available'}</Text>
        </View>
    );
}
