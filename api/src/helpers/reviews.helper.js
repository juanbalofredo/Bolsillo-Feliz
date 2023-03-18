import Reviews from "../models/review.js";
import Users from "../models/users.js";
import SuperM from "../models/superM.js";

export function getReviewsById(id) {
  const reviewById = Reviews.findOne({
    where: { id },
    attributes: ["id", "message", "score", "userId", "activity"],
    include: { model: SuperM, attributes: ["name", "id"] },
  });
  return reviewById;
}

export function getTotalReviews() {
  const totalReviews = Reviews.findAll({
    attributes: ["id", "message", "score", "userId", "activity"],
    include: [
      { model: SuperM, attributes: ["name", "id"] },
      {
        model: Users,
        as: "user",
        attributes: ["avatar", "name", "last_name"],
      },
    ],
  });
  return totalReviews;
}

export async function createReviews({ message, userId, superMId, score }) {
  // console.log(message, "esto es message");
  // console.log(userId, "esto es userId");
  // console.log(superMId, "esto es SuperMid");
  // console.log(score, "esto es score");

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
  // console.log("esto es findReview ==>", findReview.dataValues);
  return findReview;
}

export function deleteReviewById(id) {
  // console.log(id)
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
  // console.log("esto es userId", usersId);
  if (!usersId) {
    // console.log("entro a la condicion !userId");
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
