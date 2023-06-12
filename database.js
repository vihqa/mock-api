module.exports.data = {
    "skus": [
        {
            "id": 2,
            "quantity": 10,
            "prices": [
                {
                    "skuPrice": 345.99,
                    "measurementUnitPrice": 30.00,
                    "unitPrice": 19.00,
                    "skuPriceWithDiscounts": 500.00,
                    "measurementUnitPriceWithDiscounts": 27.00,
                    "unitPriceWithDiscounts": 18.10,
                    "appliedDiscounts": [
                        {
                            "discount": {
                                "discountType": "CEILING",
                                "discountValueType": "PERCENTAGE",
                                "discountValue": 10
                            }
                        }
                    ]
                }
            ]
        },
        {
            "id": 27,
            "quantity": 4,
            "prices": [
                {
                    "skuPrice": 356.79,
                    "measurementUnitPrice": 150.00,
                    "unitPrice": 70.00,
                    "skuPriceWithDiscounts": 200.99,
                    "measurementUnitPriceWithDiscounts": 8.99,
                    "unitPriceWithDiscounts": 17.98,
                    "appliedDiscounts": [
                        {
                            "discount": {
                                "discountType": "VOLUME",
                                "discountValueType": "ABSOLUTE",
                                "discountValue": 10,
                                "items": [
                                    {
                                        "skuId": 279,
                                        "minQuantity": 1,
                                        "maxQuantity": 5
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    ]
};
