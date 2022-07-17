let invoices = [
    {
      name: "Santa Monica",
      number: 1995,
      amount: "$10,800",
      due: "12/05/1995",
    },
    {
      name: "Stankonia",
      number: 2000,
      amount: "$8,000",
      due: "10/31/2000",
    },
    {
      name: "Ocean Avenue",
      number: 2003,
      amount: "$9,500",
      due: "07/22/2003",
    },
    {
      name: "Tubthumper",
      number: 1997,
      amount: "$14,000",
      due: "09/01/1997",
    },
    {
      name: "Wide Open Spaces",
      number: 1998,
      amount: "$4,600",
      due: "01/27/1998",
    },
  ];
  
  export function getInvoices() {
    return invoices;
  }

  export function getInvoice(number) {
    console.log('number: ', number);
    return invoices.find(
      (invoice) => invoice.number === number
    );
  }

  export function deleteInvoice(number) {
    invoices = invoices.filter(
      (invoice) => invoice.number !== number
    );
  }

  export function getInfluencers() {
    return influencers;
  }

  export function getInfluencer(wallet_address) {
    console.log('wallet_address: ', wallet_address);
    return influencers.find(
      (influencer) => influencer.wallet_address === wallet_address
    );
  }

  const influencers = [{
    "id": 1,
    "first_name": "Sharity",
    "last_name": "Kender",
    "email": "skender0@jugem.jp",
    "instagram_followers": 69158,
    "profile_picture": "http://dummyimage.com/250x250.png/cc0000/ffffff",
    "wallet_address": "0x598E530581F9AE85b0f3c98e08F6aAd4D44e4494"
  }, {
    "id": 2,
    "first_name": "Dorothee",
    "last_name": "Charity",
    "email": "dcharity1@barnesandnoble.com",
    "instagram_followers": 41943,
    "profile_picture": "http://dummyimage.com/250x250.png/dddddd/000000",
    "wallet_address": "0x674D6Cb4D17aa9a873078D5C69d2f357d4AbD4F9"
  }, {
    "id": 3,
    "first_name": "Ambrose",
    "last_name": "Renish",
    "email": "arenish2@ftc.gov",
    "instagram_followers": 70468,
    "profile_picture": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
    "wallet_address": "0xa9E089729855A414ce371b91Bd499C203A387296"
  }, {
    "id": 4,
    "first_name": "Dianna",
    "last_name": "Chantillon",
    "email": "dchantillon3@umich.edu",
    "instagram_followers": 10054,
    "profile_picture": "http://dummyimage.com/250x250.png/cc0000/ffffff",
    "wallet_address": "0xd4f8c0d7ab80217bbe8d961d18267f35ae752fb9"
  }, {
    "id": 5,
    "first_name": "Stephine",
    "last_name": "Cleghorn",
    "email": "scleghorn4@unicef.org",
    "instagram_followers": 21640,
    "profile_picture": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
    "wallet_address": "0x63419560335049edbcb39898f4a4ebca57c2d4db"
  }, {
    "id": 6,
    "first_name": "Rowland",
    "last_name": "Rasell",
    "email": "rrasell5@storify.com",
    "instagram_followers": 93452,
    "profile_picture": "http://dummyimage.com/250x250.png/cc0000/ffffff",
    "wallet_address": "0xc5390a4a94b6fd385d3581983c3432ed8b670c1e"
  }, {
    "id": 7,
    "first_name": "Cynthia",
    "last_name": "Parkman",
    "email": "cparkman6@vistaprint.com",
    "instagram_followers": 62039,
    "profile_picture": "http://dummyimage.com/250x250.png/dddddd/000000",
    "wallet_address": "0x956c42be3d49788cf74d051e3dea63f5d08bbf2f"
  }, {
    "id": 8,
    "first_name": "Nataniel",
    "last_name": "Lander",
    "email": "nlander7@issuu.com",
    "instagram_followers": 80556,
    "profile_picture": "http://dummyimage.com/250x250.png/dddddd/000000",
    "wallet_address": "0x32d615fdeb5999f8123f42d0502bd9a7ed8c2042"
  }, {
    "id": 9,
    "first_name": "Goober",
    "last_name": "Skevington",
    "email": "gskevington8@auda.org.au",
    "instagram_followers": 65569,
    "profile_picture": "http://dummyimage.com/250x250.png/ff4444/ffffff",
    "wallet_address": "0x156d16c916b9dbbce9b961107799935283846829"
  }, {
    "id": 10,
    "first_name": "Joellen",
    "last_name": "Moller",
    "email": "jmoller9@nasa.gov",
    "instagram_followers": 810,
    "profile_picture": "http://dummyimage.com/250x250.png/cc0000/ffffff",
    "wallet_address": "0xd41002deea5c8c1d59dd5b0b6177a02df140fda8"
  }, {
    "id": 11,
    "first_name": "Jeniece",
    "last_name": "Enochsson",
    "email": "jenochssona@rambler.ru",
    "instagram_followers": 7292,
    "profile_picture": "http://dummyimage.com/250x250.png/cc0000/ffffff",
    "wallet_address": "0x8b2b0a32df25425801357c150b5c5fd041936d49"
  }, {
    "id": 12,
    "first_name": "Dare",
    "last_name": "Heibel",
    "email": "dheibelb@noaa.gov",
    "instagram_followers": 88937,
    "profile_picture": "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
    "wallet_address": "0xe709651851482724785695af4bbb5f3d56ee3fdc"
  }, {
    "id": 13,
    "first_name": "Jorrie",
    "last_name": "Emblem",
    "email": "jemblemc@bloomberg.com",
    "instagram_followers": 58358,
    "profile_picture": "http://dummyimage.com/250x250.png/dddddd/000000",
    "wallet_address": "0xceec27d6abbd4e9b37cb13c44f7941779daea864"
  }, {
    "id": 14,
    "first_name": "Parrnell",
    "last_name": "Arghent",
    "email": "parghentd@flickr.com",
    "instagram_followers": 29430,
    "profile_picture": "http://dummyimage.com/250x250.png/cc0000/ffffff",
    "wallet_address": "0x84e27feea47cd82aeb4ea4662d9a542f29e4cada"
  }, {
    "id": 15,
    "first_name": "Kacie",
    "last_name": "Jimmes",
    "email": "kjimmese@bbc.co.uk",
    "instagram_followers": 97542,
    "profile_picture": "http://dummyimage.com/250x250.png/cc0000/ffffff",
    "wallet_address": "0xbd42b9022d94d89398a482edf8ff07d8784cb526"
  }, {
    "id": 16,
    "first_name": "Adelind",
    "last_name": "Cossentine",
    "email": "acossentinef@reference.com",
    "instagram_followers": 82117,
    "profile_picture": "http://dummyimage.com/250x250.png/dddddd/000000",
    "wallet_address": "0x44678da3e6175b904e7d451bfa1c25746a2ba0c8"
  }, {
    "id": 17,
    "first_name": "Urbano",
    "last_name": "Furzey",
    "email": "ufurzeyg@bloglines.com",
    "instagram_followers": 57924,
    "profile_picture": "http://dummyimage.com/250x250.png/dddddd/000000",
    "wallet_address": "0x97b82fae9effad2c27257af5764769d88f22aa5a"
  }, {
    "id": 18,
    "first_name": "Larisa",
    "last_name": "Leggs",
    "email": "lleggsh@blogtalkradio.com",
    "instagram_followers": 35948,
    "profile_picture": "http://dummyimage.com/250x250.png/dddddd/000000",
    "wallet_address": "0xc5e37442c3a987b468ee91070247266c99c645f4"
  }, {
    "id": 19,
    "first_name": "Corabella",
    "last_name": "Ammer",
    "email": "cammeri@usa.gov",
    "instagram_followers": 62131,
    "profile_picture": "http://dummyimage.com/250x250.png/dddddd/000000",
    "wallet_address": "0x6eca7cf3dd4fe1bba77501409c77bc5e40ebc148"
  }, {
    "id": 20,
    "first_name": "Gaspard",
    "last_name": "Hardey",
    "email": "ghardeyj@walmart.com",
    "instagram_followers": 86619,
    "profile_picture": "http://dummyimage.com/250x250.png/ff4444/ffffff",
    "wallet_address": "0x6836ab6929fec9689380cb6ba31915df6b0c062f"
  }]