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
    attributes: ["id", "message", "score", "userId", "activity","userName"],
    include: { model: SuperM, attributes: ["name", "id"] },
  });
  return totalReviews;
}

export async function createReviews({
  message,
  userName,
  userId,
  superMId,
  score,
}) {
  console.log(message, userName, userId, superMId, score);
  await Reviews.create({
    userId,
    userName,
    score,
    superMId,
    message,
  });
}

export function deleteReviewById(id) {
  const reviewDelete = Reviews.destroy({
    where: { id },
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
  console.log("esto es userId", usersId);
  if (!usersId) {
    console.log("entro a la condicion !userId");
    throw Error("User id don't found");
  }

  let updateDone;
  if (type_account_logged === "3") {
    console.log("entro el admin");
    updateDone = Reviews.update(
      { activity: activity },
      { where: { id: reviewId } }
    );
  } else {
    console.log("entro sin ser admin ==>");

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
