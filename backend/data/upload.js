'use strict'

let recombee = require('recombee-api-client');
let rqs = recombee.requests;

let client = new recombee.ApiClient('liberty', 'eP9s8QL53JwcUwCQ5Z2Dr4DizleErwVFAVOQQKI5Sgyr2PUCIFd7bJOCGz0ukkGk');
const NUM = 100;
const products=[
    {"Name":"Auto & Vehicle",
    "Market":"GRM"
    },
    {"Name":"Car",
    "Market":"GRM"
    },
    {"Name":"Motorcycle",
    "Market":"GRM"
    },
    {"Name":"Boat & Watercraft",
    "Market":"GRM"
    },
    {"Name":"Antique & Classic Car",
    "Market":"GRM"
    },
    {"Name":"ATV & Off-Road Vehicle",
    "Market":"GRM"
    },
    {"Name":"Recreational Vehicle (RV)",
    "Market":"GRM"
    },
    {"Name":"Umbrella",
    "Market":"GRM"
    },
    {"Name":"Vehicle Service Plan",
    "Market":"GRM"
    },
    {"Name":"Property",
    "Market":"GRM"
    },
    {"Name":"Homeowners",
    "Market":"GRM"
    },
    {"Name":"Renters",
    "Market":"GRM"
    },
    {"Name":"Condo",
    "Market":"GRM"
    },
    {"Name":"Landlord",
    "Market":"GRM"
    },
    {"Name":"Mobile Home Insurance",
    "Market":"GRM"
    },
    {"Name":"Flood",
    "Market":"GRM"
    },
    {"Name":"Umbrella",
    "Market":"GRM"
    },
    {"Name":"Other Insurance",
    "Market":"GRM"
    },
    {"Name":"Life",
    "Market":"GRM"
    },
    {"Name":"Accident Insurance",
    "Market":"GRM"
    },
    {"Name":"Critical Illness",
    "Market":"GRM"
    },
    {"Name":"Identity Theft",
    "Market":"GRM"
    },
    {"Name":"Pet Insurance",
    "Market":"GRM"
    },
    {"Name":"Tuition Insurance",
    "Market":"GRM"
    },
    {"Name":"Small Business",
    "Market":"GRM"
    },
    {"Name":"Business Owner's Policy & Packages",
    "Market":"GRS"
    },
    {"Name":"Captives",
    "Market":"GRS"
    },
    {"Name":"Commercial Auto",
    "Market":"GRS"
    },
    {"Name":"Equipment Breakdown",
    "Market":"GRS"
    },
    {"Name":"Excess Liability",
    "Market":"GRS"
    },
    {"Name":"General Liability",
    "Market":"GRS"
    },
    {"Name":"Group Programs",
    "Market":"GRS"
    },
    {"Name":"Inland Marine",
    "Market":"GRS"
    },
    {"Name":"Property",
    "Market":"GRS"
    },
    {"Name":"Reinsurance",
    "Market":"GRS"
    },
    {"Name":"Specialty Programs",
    "Market":"GRS"
    },
    {"Name":"Surety Bonds",
    "Market":"GRS"
    },
    {"Name":"Third Party Administration",
    "Market":"GRS"
    },
    {"Name":"Umbrella",
    "Market":"GRS"
    },
    {"Name":"Workers Compensation",
    "Market":"GRS"
    },
    {"Name":"Absence Management",
    "Market":"GRS"
    },
    {"Name":"Group Disability",
    "Market":"GRS"
    },
    {"Name":"Group Life",
    "Market":"GRS"
    },
    {"Name":"Online Solutions",
    "Market":"GRS"
    },
    {"Name":"Volundary Benefits",
    "Market":"GRS"
    }
  ];
// Add properties for product
client.send(new rqs.Batch([
    new rqs.AddItemProperty('premium', 'double'),
    new rqs.AddItemProperty('classcode', 'int'),
    new rqs.AddItemProperty('status', 'string'),
    new rqs.AddItemProperty('name','string'),
    new rqs.AddItemProperty('market','string')
  ]))
  .then((responses) => {
    //Prepare requests for setting a catalog of insurance products

    let requests = Array.apply(0, Array(NUM)).map((_, i) => {
        let productKey=Math.floor(Math.random()*products.length);
        //console.log(productKey)
        let basePrem = products[productKey].Market==='GRM'? 200:3000
        return new rqs.SetItemValues(
        `product-${i}`, //itemId
        //values:
        {
          'premium': basePrem + 3000 * Math.random(),
          'classcode': Math.floor(Math.random() * 80) + 100,
          'status': Math.random() > 0.5 ? 'Rated':'Issued',
          'name' : products[productKey].Name,
          'market':  products[productKey].Market
        },
        //optional parameters:
        {
          'cascadeCreate': true // Use cascadeCreate for creating item
          // with given itemId, if it doesn't exist
        }
      );
    });
    //Send catalog to the recommender system
    return client.send(new rqs.Batch(requests));
  })
  .then((responses) => {
    // Generate some random purchases of items by customers
    let accountIds = Array.apply(0, Array(NUM)).map((_, i) => {
      return `account-${i}`;
    });
    let productIds = Array.apply(0, Array(NUM)).map((_, i) => {
      return `product-${i}`;
    });

    const PROBABILITY_PURCHASED = 0.1;
    let purchases = [];
    accountIds.forEach((accountId) => {
      let purchased = productIds.filter(() => Math.random() < PROBABILITY_PURCHASED);
      purchased.forEach((productId) => {
        purchases.push(new rqs.AddPurchase(accountId, productId, {'cascadeCreate': true}))
      });
    });
    // Send purchases to the recommender system
    return client.send(new rqs.Batch(purchases));
  })
  .then((responses) => {
    // Get 5 recommendations for user-42, who is currently viewing computer-6
    return client.send(new rqs.RecommendItemsToItem('product-6', 'account-42', 5));
  }) 
  .then((recommended) => {
    console.log("Recommended products with premium>=500: %j", recommended);

    // Recommend only items that are more expensive then currently viewed item (up-sell)
    return client.send(new rqs.RecommendItemsToItem('product-6', 'account-42', 5, 
                                                      {'filter': "'premium'>=500"}
                                                    ));
  })
  .then((recommended) => {
    console.log("Recommended up-sell items: %j", recommended)
  })
  .catch((error) => {
    console.error(error);
    // Use fallback
  });