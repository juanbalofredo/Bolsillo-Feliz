import Reviews from "../models/review.js";
import Users from "../models/users.js";
import SuperM from "../models/superM.js";
import { Op } from "sequelize";

export function getReviewsById(id) {
  const reviewById = Reviews.findOne({
    where: { id },
    attributes: ["id", "message", "score", "userId", "activity"],
    include: { model: SuperM, attributes: ["name", "id"] },
  });
  return reviewById;
}

export function getReviewsByUserId(id) {
  const reviewsById = Reviews.findAll({
    where: {userId: id},
    attributes: ["id", "message", "score", "userId", "activity"],
    include: [{ model: SuperM, attributes: ["name", "id"] }, {model: Users, as: "user", attributes: ["name", "avatar"]}]
    
  })
  return reviewsById;
}

export function getTotalReviews() {
  // const totalReviews = Reviews.findAll({
  //   attributes: ["id", "message", "score", "userId", "activity"],
  //   include: [
  //     { model: SuperM, attributes: ["name", "id"] },
  //     {
  //       model: Users,
  //       as: "user",
  //       attributes: ["avatar", "name", "last_name"],
  //     },
  //   ],
  // });
  const totalReviews = Reviews.findAll({
    attributes: ["id", "message", "score", "userId", "activity"],
    include: [
      { model: SuperM, attributes: ["name", "id"] },
      {
        model: Users,
        as: "user",
        where: {
          activity: {
            [Op.not]: false
          }
        },
        attributes: ["avatar", "name", "last_name"],
      },
    ],
  });
  return totalReviews;
}

export async function createReviews({ message, userId, superMId, score }) {
  let creatingReview = await Reviews.create({
    userId,
    score,
    superMId,
    message,
  });
  let idReview = creatingReview.id;
  let findReview = await Reviews.findOne({
    where: { id: idReview },
    include: {
      model: Users,
      as: "user",
      attributes: ["avatar", "name", "last_name"],
    },
  });
  return findReview;
}

export function deleteReviewById(id) {
  const reviewDelete = Reviews.destroy({
    where: { id },
    include: [
      {
        model: Users,
        attributes: ["avatar", "name", "last_name"],
      },
    ],
  });
  return reviewDelete;
}

export async function showReview({
  id,
  activity,
  type_account_logged,
  reviewId,
}) {
  let usersId = await Users.findOne({ where: { id } });
  if (!usersId) {
    throw Error("User id don't found");
  }

  let updateDone;
  if (type_account_logged === "3") {
    // console.log("entro el admin");
    updateDone = Reviews.update(
      { activity: activity },
      { where: { id: reviewId } }
    );
  } else {
    // console.log("entro sin ser admin ==>");

    const post = Reviews.findOne({ where: { id: reviewId, userId: id } });
    if (post) {
      updateDone = Reviews.update(
        { activity: activity },
        { where: { id: reviewId } }
      );
    }
  }
  return updateDone;
}
