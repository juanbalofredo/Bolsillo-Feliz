// import axios from "axios";

// class PaymentService {
 
//   async createSubscription() {
//     const url = "https://api.mercadopago.com/preapproval";

//     const body = {
//       reason: "Suscripción de ejemplo",
//       auto_recurring: {
//         frequency: 1,
//         frequency_type: "months",
//         transaction_amount: 100,
//         currency_id: "ARS"
//       },
//       back_url: "https://google.com.ar",
//       payer_email: "test_user_46945293@testuser.com"
//     };

//     const subscription = await axios.post(url, body, {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${process.env.MP_TOKEN}`
//       }
//     });

//     return subscription.data;
//   }
// }

// export default PaymentService;
