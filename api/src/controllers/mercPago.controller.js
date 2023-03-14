import mercadopago from "mercadopago";

mercadopago.configure({ access_token: process.env.MP_TOKEN });

const payment = async (req, res) => {
  const preference = {
	items: [
	  {
		title: "Membresía anual",
		unit_price: 100,
		quantity: 1,
	  },
	],
    back_urls: {
      success: "http://localhost:3000/home",
      failure: "http://localhost:3000/home",
      pending: "http://localhost:3000/home",
    },
    auto_return: "approved",
    binary_mode: true,
  };
  
  
  mercadopago.preferences
    .create(preference)
    .then((response) => res.status(200).send({ response }))
    .catch((error) => res.status(400).send({ error: error.message }));
};

export default payment;