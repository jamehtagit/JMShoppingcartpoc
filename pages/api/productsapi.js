// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//import products from '../../db.json'



const products = {"products":[
  {
 "id": 1,
 "description": "JM Mobile has standard features",
 "title": "Smart Watch",
 "price": "26",
  "image":"/images/smartwatch.png"
  },
  {
  "id": 2,
  "description": "JM Mobile has luxury features",
  "title": "Shower Speaker",
  "price": "48",
  "image":"/images/showerspeaker.png"
  },
  {
    "id": 3,
    "description": "JM smart watch has touch features",
    "title": "Smart Watch ",
    "price": "108",
    "image":"/images/smartwatch.png"
    },
    {
      "id": 4,
      "description": "JM's super Headphones",
      "title": "Wireless Headphones",
      "price": "138",
      "image":"/images/wirelessheadphones.png"
      },
      {
        "id": 5,
        "description": "JM Multitool 77777777",
        "title": "Smart watch",
        "price": "118",
        "image":"/images/Multitool.png"
        }
        ,
      {
        "id": 6,
        "description": "JM portable ring 888888",
        "title": "Temperature ring",
        "price": "90",
        "image":"/images/sensor.png"
        }
  
 ]
}

 
export default function handler(req, res) {
 const { method } = req;
 switch (method) {
    case "GET":
     res.status(200).json(
      products
      );
      break;
case "POST":
    const {description,title,price} = req.body;
     products.push({
       id: products.length + 1,
       title,description,price
 });
      res.status(200).json(products);
      break;
default:
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${method} Not Allowed`);
 break;
 }
}
