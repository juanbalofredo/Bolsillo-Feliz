import mercadopago from "mercadopago";
import Membership from "../models/membership.js";
import price from "../routes/price.router.js";
import Users from "../models/users.js";

mercadopago.configure({ access_token: process.env.MP_TOKEN });

export const payment = async (req, res) => {
  let actualPrice = await Membership.findOne({ where: { id: 1 } });
  let id = req.body.id;

  const preference = {
    items: [
      {
        title: "Membresía anual",
        unit_price: 2345,
        quantity: 1,
      },
    ],
    back_urls: {
      success: "https://bolsillo-feliz.vercel.app/seguraseguirisima",
      failure: "https://bolsillo-feliz.vercel.app/home",
      pending: "https://bolsillo-feliz.vercel.app/home",
    },
    auto_return: "approved",
    binary_mode: true,
  };
  mercadopago.preferences
    .create(preference)
    .then((response) => res.status(200).send({ response }))
    .catch((error) => res.status(400).send({ error: error.message }));
};

export const updatePaymentPrice = async (req, res) => {
  let { newPrice } = req.body;
  try {
    let updatePrice = await Membership.update(
      { price: newPrice },
      { where: { id: 1 } }
    );
    if (updatePrice.length === 0) {
      res.status(400).send({ err: "Price couldn`t been updated" });
    }
    if (Number(newPrice)) {
      res.status(200).json({ price: newPrice });
    } else {
      throw Error("Value should be a number");
    }
  } catch (error) {
    res.status(400).send({ err: error.message });
  }
};

export const getPaymentPrice = async (req, res) => {
  try {
    let memberPrice = await Membership.findAll();
    res.status(200).json(memberPrice);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
