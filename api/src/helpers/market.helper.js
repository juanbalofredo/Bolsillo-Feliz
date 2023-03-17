import { Sequelize } from "sequelize";
import SuperM from "../models/superM.js";
import Users from "../models/users.js";
import { tiendas } from "../prueba(4).js";
import Reviews from '../models/review.js';

export function getMarketById(id) {
    const getId = SuperM.findOne({
        where: { id },
        attributes: [
            'name',
            'image',
            'ubications',
            'id',
            'superM.name',
            [Sequelize.fn('AVG', Sequelize.col('reviews.score')), 'puntaje_promedio']
        ],
        include: [
            {
              model: Reviews,
              attributes: ['message', 'score'],
              include: [
                {
                    model: Users,
                    as: 'user',
                    attributes: ['id','name']
                }
              ]
            }
          ],
          group: ['superM.id', 'superM.name','reviews.id','reviews->user.id']
    });
    return getId;
}

export function deleteMarketById(id) {
    const marketDelete = SuperM.destroy({ where: { id } })
    return marketDelete;
};

export const createSmarket = async (smarketsFromBody) => {
    console.log("entro a createSmarket")
    const marketTable = await SuperM.findAll();
    // console.log(marketTable)
    if (marketTable.length === 0) {
        await SuperM.bulkCreate(tiendas)
    }
    let findUser;
    if (smarketsFromBody) {
        let { name, image, id, ubications } = smarketsFromBody;
        //primero busca si el usuario existe para luego recien poder crear la tienda
        findUser = await Users.findOne({ where: { id } });
        if (findUser && !findUser.superMId) {
            // Crear una nueva tienda
            const createSmarket = await SuperM.create({ name, image, ubications });

            // Asignar el ID de la tienda al usuario
            await findUser.update({ superMId: createSmarket.id });
            return findUser;
        } else if (findUser && findUser.superMId) {
            throw Error("The user already has a market ID")
        } else {
            throw Error("The user does not exist")
        }

    }
}
export const allSmarket = async () => {
    let findAllSmarkets = await SuperM.findAll({
        attributes: {
            include: [
                [Sequelize.fn('AVG', Sequelize.col('reviews.score')), 'average_score']
            ]
        },
        include: [
            {
                model: Reviews,
                as: 'reviews',
                attributes: []
            }
        ],
        group: ['MercadoId']
    });
    return findAllSmarkets;
}