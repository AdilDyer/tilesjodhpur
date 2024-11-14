import mongoose from "mongoose";
const customerReviewSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    comment: {
      type: String,
    },

    videoLink: {
      type: String,
      validate: {
        validator: function (v: any) {
          return /^https?:\/\/[\w.-]+(?:\.[\w.-]+)+[\w\-_~:/?#[\]@!$&'()*+,;=.]+$/.test(
            v
          ); // Simple URL validation
        },
        message: (props: any) => `${props.value} is not a valid URL!`, // Custom error message
      },
    },
    images: {
      type: [String],
      validate: {
        validator: function (v: any) {
          return v.every((image: any) =>
            /^https?:\/\/[\w.-]+(?:\.[\w.-]+)+[\w\-_~:/?#[\]@!$&'()*+,;=.]+$/.test(
              image
            )
          );
        },
        message: (props: any) => `One or more images are not valid URLs!`,
      },
    },
  },
  { timestamps: true }
);

export default mongoose.models.CustomerReview ||
  mongoose.model("CustomerReview", customerReviewSchema);
