module.exports.data = {
    "skus": [
        {
            "id": 2,
            "quantity": 10,
            "prices": [
                {
                    "skuPrice": 450.99,
                    "measurementUnitPrice": 30.00,
                    "unitPrice": 19.00,
                    "skuPriceWithDiscounts": 300.99,
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
                    ],
                    "discounts": [
                        {
                          "id": "522a553a-1cd7-4a6b-90ec-cd8a2403554d",
                          "discountType": "VOLUME"
                        },
                        {
                          "id": "16979128-f19d-4da5-b908-79c4bbefb87d",
                          "discountType": "BOGO"
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
                    ],
                    "discounts": [
                    {
                      "id": "508b8288-ce70-47d3-af6b-bf4e43c5ce67",
                      "discountType": "VOLUME",
                      "discountValueType": "PERCENTAGE",
                      "discountValue": null,
                      "volumeRanges": [
                        {
                          "minQuantity": 5,
                          "maxQuantity": 20,
                          "discountValue": 5
                        },
                        {
                          "minQuantity": 21,
                          "maxQuantity": 50,
                          "discountValue": 10
                        }
                      ]
                    }
                  ]
                }
            ]
        }
    ]
};
