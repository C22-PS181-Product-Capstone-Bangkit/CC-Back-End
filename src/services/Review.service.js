const { nanoid } = require("nanoid");
const db = require("../models");
const Review = db.Review;

const ReviewService = () => {
  const createReview = async (
    idAccount,
    idRestaurant,
    subject,
    description,
    rating
  ) => {
    const review = await getReview();
    if (!subject || !rating) {
      return 0;
    }
    if (review) {
      const isReview = await Review.findOne({
        where: { idAccount, idRestaurant },
      });
      if (isReview) return 1;
    }
    const result = await Review.create({
      id: `review-${nanoid(10)}`,
      idRestaurant: idRestaurant,
      idAccount: idAccount,
      subject: subject,
      description: description,
      rating: rating,
    });
    return result;
  };

  const updateReviewById = async (
    id,
    idAccount,
    subject,
    description,
    rating
  ) => {
    const result = await Review.update(
      { subject, description, rating },
      { where: { id, idAccount } }
    );
    return result[0];
  };

  const deleteReviewById = async (id) => {
    const result = await Review.destroy({ where: { id } });
    return result;
  };

  const getReview = async () => {
    const review = await Review.findAll();
    if (!review) {
      return 0;
    }
    return review;
  };

  const getReviewById = async (id) => {
    const review = await Review.findOne({ where: { id } });
    if (!review) {
      return 0;
    }
    return review;
  };

  const getReviewByUserId = async (idAccount) => {
    const review = await Review.findAll({ where: { idAccount } });
    if(!review) {
      return [];
    }
    return review;
  }

  return {
    createReview,
    updateReviewById,
    deleteReviewById,
    getReview,
    getReviewById,
    getReviewByUserId
  };
};

module.exports = ReviewService;
