'use strict';

const recombee = require('recombee-api-client');
const rqs = recombee.requests;
const client = new recombee.ApiClient('liberty', 'eP9s8QL53JwcUwCQ5Z2Dr4DizleErwVFAVOQQKI5Sgyr2PUCIFd7bJOCGz0ukkGk');

const accounts=[{"name":"Briny Meni","address":"953 Derek Alley","city":"Cleveland","state":"Ohio","zip":"44118"},
{"name":"Egan Onyon","address":"60874 Drewry Street","city":"Brockton","state":"Massachusetts","zip":"02305"},
{"name":"Caleb Milsom","address":"160 Shoshone Parkway","city":"Cincinnati","state":"Ohio","zip":"45249"},
{"name":"Madelaine Sheryne","address":"76 Susan Lane","city":"Cleveland","state":"Ohio","zip":"44177"},
{"name":"Jeanie Bilbrook","address":"2 Oak Junction","city":"Toledo","state":"Ohio","zip":"43610"},
{"name":"Nevsa Maith","address":"646 Harbort Terrace","city":"Boston","state":"Massachusetts","zip":"02208"},
{"name":"Giorgia Stuchbery","address":"734 Summer Ridge Plaza","city":"Springfield","state":"Massachusetts","zip":"01105"},
{"name":"Kelly Bason","address":"19 Porter Plaza","city":"Watertown","state":"Massachusetts","zip":"02472"},
{"name":"Kippar Rotter","address":"3881 Moulton Point","city":"Cleveland","state":"Ohio","zip":"44177"},
{"name":"Robinia Kestian","address":"774 Coolidge Park","city":"Akron","state":"Ohio","zip":"44310"},
{"name":"Daile Peerman","address":"1309 Sundown Plaza","city":"Toledo","state":"Ohio","zip":"43635"},
{"name":"Barret Keford","address":"28 Merchant Crossing","city":"Springfield","state":"Massachusetts","zip":"01152"},
{"name":"Padraig Prettyjohns","address":"912 Green Way","city":"Akron","state":"Ohio","zip":"44329"},
{"name":"Laurens Fall","address":"343 Prentice Avenue","city":"Cleveland","state":"Ohio","zip":"44118"},
{"name":"Temple Sollner","address":"98686 Artisan Avenue","city":"Springfield","state":"Massachusetts","zip":"01152"},
{"name":"Annemarie Unwin","address":"5 Schurz Trail","city":"Akron","state":"Ohio","zip":"44315"},
{"name":"Nikolaos Prozescky","address":"7936 Pine View Court","city":"Cleveland","state":"Ohio","zip":"44130"},
{"name":"Jessamine Mc Corley","address":"25430 Homewood Place","city":"Cincinnati","state":"Ohio","zip":"45243"},
{"name":"Sanson Piggens","address":"191 Westend Lane","city":"Columbus","state":"Ohio","zip":"43231"},
{"name":"Emalia Baggarley","address":"329 Shasta Parkway","city":"Youngstown","state":"Ohio","zip":"44555"},
{"name":"Ericka Debell","address":"67 Lotheville Place","city":"Cleveland","state":"Ohio","zip":"44105"},
{"name":"Loralie Emmanuele","address":"37407 Mariners Cove Hill","city":"Cleveland","state":"Ohio","zip":"44185"},
{"name":"Carmelina Alwin","address":"4 Grayhawk Road","city":"Boston","state":"Massachusetts","zip":"02114"},
{"name":"Leelah Everett","address":"1124 Dexter Plaza","city":"Boston","state":"Massachusetts","zip":"02109"},
{"name":"Gard Gaiford","address":"5 Shopko Circle","city":"Cincinnati","state":"Ohio","zip":"45271"},
{"name":"Emlen Hewkin","address":"2 Killdeer Hill","city":"Cincinnati","state":"Ohio","zip":"45243"},
{"name":"Philip Stienton","address":"91 Mcguire Parkway","city":"Watertown","state":"Massachusetts","zip":"02472"},
{"name":"Haydon Rockwell","address":"68105 Meadow Valley Lane","city":"Crawfordsville","state":"Indiana","zip":"47937"},
{"name":"Amabel Gething","address":"74608 Atwood Place","city":"Akron","state":"Ohio","zip":"44393"},
{"name":"Kathryne Whitley","address":"6146 Texas Avenue","city":"Cleveland","state":"Ohio","zip":"44125"},
{"name":"Cherice Raymen","address":"1 Fulton Lane","city":"Watertown","state":"Massachusetts","zip":"02472"},
{"name":"Germain Signoret","address":"0086 Oneill Place","city":"Indianapolis","state":"Indiana","zip":"46247"},
{"name":"Ernaline Gwatkins","address":"54 Comanche Junction","city":"Canton","state":"Ohio","zip":"44710"},
{"name":"Violante Cotta","address":"7911 High Crossing Place","city":"Canton","state":"Ohio","zip":"44705"},
{"name":"Sammy Croshaw","address":"83 Anderson Court","city":"Worcester","state":"Massachusetts","zip":"01605"},
{"name":"Bevin Belsham","address":"271 Ruskin Road","city":"Cambridge","state":"Massachusetts","zip":"02142"},
{"name":"Valene Roderighi","address":"9865 Esker Drive","city":"Cleveland","state":"Ohio","zip":"44191"},
{"name":"Elka Pike","address":"60 Lunder Drive","city":"Cleveland","state":"Ohio","zip":"44130"},
{"name":"Titos McDermott-Row","address":"21491 Michigan Alley","city":"Toledo","state":"Ohio","zip":"43610"},
{"name":"Jillie Saltsberger","address":"1 Muir Drive","city":"New Bedford","state":"Massachusetts","zip":"02745"},
{"name":"Barb Blasl","address":"84801 Carberry Parkway","city":"Dayton","state":"Ohio","zip":"45470"},
{"name":"Helge Hedman","address":"42731 Pepper Wood Place","city":"Boston","state":"Massachusetts","zip":"02163"},
{"name":"Godfry Tarbath","address":"2160 La Follette Street","city":"Lafayette","state":"Indiana","zip":"47905"},
{"name":"Nappy Mitro","address":"94135 Dwight Junction","city":"Toledo","state":"Ohio","zip":"43610"},
{"name":"Jeremie Berrie","address":"65881 Del Sol Street","city":"Cleveland","state":"Ohio","zip":"44191"},
{"name":"Bail Kienl","address":"64185 Bonner Avenue","city":"Indianapolis","state":"Indiana","zip":"46239"},
{"name":"Sandye Arnout","address":"5 Duke Hill","city":"Terre Haute","state":"Indiana","zip":"47812"},
{"name":"Debby Bastow","address":"02 Lerdahl Plaza","city":"Columbus","state":"Ohio","zip":"43204"},
{"name":"Kassandra Bownd","address":"514 Barnett Parkway","city":"Cincinnati","state":"Ohio","zip":"45238"},
{"name":"Karim Haslin","address":"7237 Nancy Place","city":"Worcester","state":"Massachusetts","zip":"01610"},
{"name":"Shirley Cromett","address":"72 Schlimgen Plaza","city":"Springfield","state":"Massachusetts","zip":"01129"},
{"name":"Sonya Dowdam","address":"6763 David Hill","city":"Dayton","state":"Ohio","zip":"45440"},
{"name":"Conrado Joannidi","address":"1 Steensland Alley","city":"Toledo","state":"Ohio","zip":"43656"},
{"name":"Reggie Papa","address":"1646 Goodland Pass","city":"Columbus","state":"Ohio","zip":"43226"},
{"name":"Mychal Bradlaugh","address":"366 Summerview Circle","city":"Fort Wayne","state":"Indiana","zip":"46896"},
{"name":"Kareem Schreiner","address":"70945 Nova Trail","city":"Cleveland","state":"Ohio","zip":"44105"},
{"name":"Stephani Goodlatt","address":"3 Golf View Lane","city":"Evansville","state":"Indiana","zip":"47725"},
{"name":"Allan Ketteringham","address":"2 Sherman Way","city":"Boston","state":"Massachusetts","zip":"02298"},
{"name":"Stormie Eldridge","address":"73058 Susan Lane","city":"Boston","state":"Massachusetts","zip":"02114"},
{"name":"Marketa Duffie","address":"5975 Marcy Point","city":"Cleveland","state":"Ohio","zip":"44130"},
{"name":"Robena Tweedlie","address":"5952 Stephen Junction","city":"Worcester","state":"Massachusetts","zip":"01605"},
{"name":"Bill Sebborn","address":"74 North Place","city":"Boston","state":"Massachusetts","zip":"02119"},
{"name":"Bartholomeo Readhead","address":"3 Vermont Pass","city":"Toledo","state":"Ohio","zip":"43615"},
{"name":"Carilyn Lammertz","address":"57711 Colorado Plaza","city":"Columbus","state":"Ohio","zip":"43220"},
{"name":"Orlan Davidovici","address":"282 6th Junction","city":"Canton","state":"Ohio","zip":"44760"},
{"name":"Fawne Mercy","address":"0 Summer Ridge Court","city":"Cleveland","state":"Ohio","zip":"44191"},
{"name":"Xylina Caesar","address":"00 Northview Plaza","city":"Fort Wayne","state":"Indiana","zip":"46825"},
{"name":"Gretna Dullingham","address":"33 Sauthoff Trail","city":"Dayton","state":"Ohio","zip":"45432"},
{"name":"Marabel Dicker","address":"7 Karstens Point","city":"Brockton","state":"Massachusetts","zip":"02305"},
{"name":"Barbe Sergant","address":"58631 Stone Corner Lane","city":"Cleveland","state":"Ohio","zip":"44197"},
{"name":"Wang McLice","address":"1 Calypso Pass","city":"Cincinnati","state":"Ohio","zip":"45213"},
{"name":"Rudiger Pedican","address":"44 Miller Plaza","city":"Cincinnati","state":"Ohio","zip":"45254"},
{"name":"Lancelot Macellar","address":"3102 Elmside Avenue","city":"Fort Wayne","state":"Indiana","zip":"46857"},
{"name":"Frasier Boom","address":"695 Crescent Oaks Plaza","city":"Boston","state":"Massachusetts","zip":"02208"},
{"name":"Omar Jacmar","address":"97274 Jenna Road","city":"Woburn","state":"Massachusetts","zip":"01813"},
{"name":"Larisa Slamaker","address":"33358 Charing Cross Avenue","city":"Cleveland","state":"Ohio","zip":"44185"},
{"name":"Clive Pesek","address":"90455 Colorado Pass","city":"Jeffersonville","state":"Indiana","zip":"47134"},
{"name":"Ira Hollingsbee","address":"570 Luster Trail","city":"Lynn","state":"Massachusetts","zip":"01905"},
{"name":"Kev Sholem","address":"05683 Crest Line Court","city":"Cleveland","state":"Ohio","zip":"44197"},
{"name":"Ardene Steet","address":"2371 Pennsylvania Parkway","city":"Cincinnati","state":"Ohio","zip":"45999"},
{"name":"Tomasina Rollings","address":"0 Maywood Court","city":"Evansville","state":"Indiana","zip":"47737"},
{"name":"Aylmer Priver","address":"78 Chive Park","city":"Akron","state":"Ohio","zip":"44329"},
{"name":"Tiphanie Colebourn","address":"9785 Village Green Point","city":"Cambridge","state":"Massachusetts","zip":"02142"},
{"name":"Kirbee Reasce","address":"105 Delladonna Street","city":"Springfield","state":"Massachusetts","zip":"01129"},
{"name":"Jacklin Gretton","address":"1438 Helena Road","city":"Waltham","state":"Massachusetts","zip":"02453"},
{"name":"Amy Stiell","address":"10 Havey Court","city":"Lafayette","state":"Indiana","zip":"47905"},
{"name":"Base Marrion","address":"0 Holy Cross Alley","city":"Gary","state":"Indiana","zip":"46406"},
{"name":"Wainwright Fairpool","address":"6901 Clove Road","city":"Cincinnati","state":"Ohio","zip":"45999"},
{"name":"Boyd Domenichini","address":"08660 Pawling Terrace","city":"Boston","state":"Massachusetts","zip":"02283"},
{"name":"Maryl Benoist","address":"8 Clemons Park","city":"Springfield","state":"Massachusetts","zip":"01129"},
{"name":"Michelle McLaverty","address":"7 Knutson Crossing","city":"Columbus","state":"Ohio","zip":"43231"},
{"name":"Gordon Kuhne","address":"65 Mitchell Pass","city":"Springfield","state":"Massachusetts","zip":"01129"},
{"name":"Othello Lambkin","address":"1961 Victoria Point","city":"Fort Wayne","state":"Indiana","zip":"46857"},
{"name":"Susannah Janecek","address":"630 Chive Road","city":"Cincinnati","state":"Ohio","zip":"45296"},
{"name":"Cam Chad","address":"01 Corben Street","city":"Cincinnati","state":"Ohio","zip":"45228"},
{"name":"Bayard Beneyto","address":"96807 Almo Plaza","city":"South Bend","state":"Indiana","zip":"46634"},
{"name":"Mycah Deverell","address":"121 Alpine Avenue","city":"Cincinnati","state":"Ohio","zip":"45233"},
{"name":"Stefa Delmage","address":"60620 Grover Way","city":"Terre Haute","state":"Indiana","zip":"47805"},
{"name":"Celka McAuslene","address":"6 Blue Bill Park Alley","city":"Evansville","state":"Indiana","zip":"47719"},
{"name":"Berthe Giotto","address":"69999 Maple Wood Crossing","city":"Warren","state":"Ohio","zip":"44485"}]
//a generalized data structure - meta for promise chain, payload what will get sent back to client.
const data = {meta: {id:undefined}, payload:undefined}


let extractEventParams = event => {
  return new Promise( (resolve, reject)=>{
    console.log('Extract event params ')
    console.log(event)
    if(event.pathParameters === undefined || event.pathParameters === null) {
        console.log('Event path parameters was not provided')
    }else{
      console.log('event.pathParameters were provided '+event.pathParameters)
      if('id' in event.pathParameters) data.meta.id=event.pathParameters.id-1 //to accomodate array semantics
      if('pid' in event.pathParameters) data.meta.pid=event.pathParameters.pid//product
    } 
     if(event.queryStringParameters === null || event.queryStringParameters ===undefined ){
      console.log('query string parameters were not provided')
     }else{
       console.log('query strings')
       if('id' in event.queryStringParameters) data.meta.id=event.queryStringParameters.id
       if('pid' in event/queryStringParameters) data.meta.pid=event.queryStringParameters.pid
      }//handle no params
      console.log(JSON.stringify(data))
    resolve(data)
  })
}

//fetch one or more accounts
let fetchAccounts = data => {
  return new Promise( (resolve, reject)=>{
    console.log('Enter fetchAccounts ')
      if(data.meta.id === undefined){data.payload= accounts}
      else{data.payload=accounts[data.meta.id]}
      
      resolve(data)
  } )
}

//fetch products from reccombee catalog
const fetchProducts = data => {
  return new Promise( (resolve, reject)=>{
    client.send(new rqs.ListItems({'returnProperties':true}),(err,products) =>{
      console.log(products)
      data.payload = products
      resolve(data)
    })
  })
}

//AI
const recommendProductsForAccountId  = data => {
  return new Promise( (resolve, reject)=>{
    let accountId="account-"+data.meta.id
    client.send(new rqs.RecommendItemsToUser(accountId, 5), (err, recommendations) => {
      console.log(recommendations);
      data.payload = recommendations
      resolve(data)
    });
  } )
}

//
const recommendProductsForProductId  = data => {
  return new Promise( (resolve, reject)=>{
    let accountId="account-"+data.meta.id //account
    let productId="product-"+data.meta.pid //product
    client.send(new rqs.RecommendItemsToItem(productId, accountId, 5),
    (err, recommendations) => {
      console.log(recommendations);
      data.payload = recommendations
          resolve(data)
    });

    } )
}
// - when viewing a product, what user's might be prospects for cross selling 
// for a product-id which useds should be targetted
const recommendAccountsForProductId  = data => {
  return new Promise( (resolve, reject)=>{
    let productId="product-"+data.meta.pid //product

    client.send(new rqs.RecommendUsersToItem(productId, 5),
    (err, recommendations) => {
      console.log(recommendations);
      data.payload = recommendations
          resolve(data)
    });

    } )
}


const respond = callback => (data) => {
  console.log('Enter respond ')
  let response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials":"*"
    },
    body: JSON.stringify(data.payload)
  }
  console.log("Exit respond")
  return callback(null, response)
}

const respondWithError = (error, callback) => { 
  console.log('Enter respondWithError')
  return callback(null, {
  statusCode: 400, 
  headers: {
    "Access-Control-Allow-Origin" : "*",
    "Access-Control-Allow-Credentials":"*"
  },
  body: JSON.stringify(error)
})}

module.exports.getAccountById=(event,context,callback)=>
Promise.resolve(event)
.then(extractEventParams)
.then(fetchAccounts)
.then(respond(callback))
.catch(error=>respondWithError(error, callback))

module.exports.getAccounts=(event,context,callback)=>
Promise.resolve(event)
.then(extractEventParams)
.then(fetchAccounts)
.then(respond(callback))
.catch(error=>respondWithError(error, callback))

module.exports.getProducts=(event,context,callback)=>
Promise.resolve(event)
.then(extractEventParams)
.then(fetchProducts)
.then(respond(callback))
.catch(error=>respondWithError(error, callback))

//for a given account - show the top 5 AI recommended products
module.exports.rProductsForAccountId=(event,context,callback) =>
Promise.resolve(event)
.then(extractEventParams)
.then(recommendProductsForAccountId)
.then(respond(callback))
.catch(error=>respondWithError(error, callback))

//products for product -- for a given product and account recommend other products 
module.exports.rProductsByProductId=(event,context,callback) =>
Promise.resolve(event)
.then(extractEventParams)
.then(recommendProductsForProductId)
.then(respond(callback))
.catch(error=>respondWithError(error, callback))

//for a given account what products might they be likely 
module.exports.rAccountsForProduct=(event,context,callback) => 
Promise.resolve(event)
.then(extractEventParams)
.then(recommendAccountsForProductId)
.then(respond(callback))
.catch(error=>respondWithError(error, callback))
