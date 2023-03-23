
//agregando comentarios
import Reviews from "../models/review.js";
import { createReviews, getReviewsById, deleteReviewById, showReview, getTotalReviews, getReviewsByUserId } from "../helpers/reviews.helper.js";
import SuperM from "../models/superM.js";

export async function getAllReviews(req, res) {
    const allReviews = await getTotalReviews();
    try {
        if (allReviews.length == 0) {
            return res.status(400).send("There are no comments")
        } else return res.status(200).json(allReviews);
    }
    catch (error) {
        return res.status(400).json({ err: error.message });
    }
};

export async function getRevById(req, res) {
    try {
        const { id } = req.params;
        const response = await getReviewsByUserId(id);
        if (!response) return res.status(404).send("Not found 404");
        return res.status(200).json(response);
    } catch(error) {
        return res.status(500).json({ err: error.message })
    };
};

export async function postReview(req, res) {
    try {
        const bodyReview = req.body;
        let infoCreateReview = await createReviews(bodyReview);
        return res.status(200).json(infoCreateReview);
    } catch (error) {
        return res.status(400).json({ err: error.message })
    };
}

export async function deleteReview(req, res) {
    const { id } = req.body;
    try {
        const deletedReview = await deleteReviewById(id)
        if (deletedReview === 0) {
            throw Error("No comment found with that ID")
        }
        res.status(200).json("Comment has been deleted successfully");
    } catch (error) {
        res.status(500).send({ err: error.message });
    }
};

export async function updateReviews(req, res) {
    const dataToUpdate = req.body;
    try {
        await showReview(dataToUpdate)
        res.status(200).json("borrado exitoso");
    } catch (error) {
        res.status(500).send({ err: error.message });
    }
}
