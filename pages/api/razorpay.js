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
    let amount,isadvance;
    if(req.body.advance){
    amount = Math.round(req.body.advance) || 0;
    isadvance = "yes";
    }else{
    amount = Math.round(req.body.total[0].grand) || 0;
     isadvance = "no";
    }

    //const amount = Math.round(req.body.total[0].grand) || 0;
    const currency = "INR";
    const options = {
      amount: (amount * 100).toString(),
      currency,
      receipt: shortid.generate(),
      payment_capture,
    };

    try {
      const response = await razorpay.orders.create(options);
      let responsedata ={
        id: response.id,
        currency: response.currency,
        amount: response.amount,
        name:req.body.name,
        email:req.body.email,
        phone:req.body.mobile,
        prductdetails:req.body.packagedetail,
        ordertotal:req.body.total,
        status:"pending",
        checkindate:req.body.checkindate,
        isadvance:isadvance

      }
//saving the order in our database
let paymentobj = [{ 
                   order_id:response.id,
                   payment_id:"",
                   payment_link_id:"",
                   payment_url:"",
                   status:'pending',
                   t_date:"",
                   amount:Math.ceil(amount) 
                }];
let ordertotal = req.body.total[0];
ordertotal.paymentobj = paymentobj;

 
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
        ordertotal:[ordertotal],
        status:"pending",
        checkindate:req.body.checkindate,
        isadvance:isadvance
      };
const localresponse = await adminapi.post("/addpayment",JSON.stringify(datatosave));
       if(localresponse.data._id !== ""){
        res.status(200).json(responsedata);
      }else{
        res.status(400).json("data not save");
      }
       
        } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  } 
}