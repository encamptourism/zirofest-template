import adminapi from "../../api/adminapi";
const Razorpay = require("razorpay");
const shortid = require("shortid");

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Initialize razorpay object
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    const payment_capture = 1;
    const amount = Math.round(req.body.total[0].grand) || 0;
    const currency = "INR";
    const options = {
      amount: (amount * 100).toString(),
      currency,
      receipt: shortid.generate(),
      payment_capture,
    };

    try {
      const response = await razorpay.orders.create(options);
      res.status(200).json({
        id: response.id,
        currency: response.currency,
        amount: response.amount,
        name:req.body.name,
        email:req.body.email,
        phone:req.body.mobile,
        prductdetails:req.body.packagedetail,
        ordertotal:req.body.total,
        status:"pending",

      });
//saving the order in our database
let datatosave = {
        payment_id:"",
        order_id: response.id,
        signature:"",
        name:req.body.name,
        contact:req.body.mobile,
        email:req.body.email,
        currency: response.currency,
        amount:req.body.total[0].grand,
        prductdetails:req.body.packagedetail,
        ordertotal:req.body.total,
        status:"pending",
      };
const localresponse = await adminapi.post("/addpayment",JSON.stringify(datatosave));


        } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  } 
}