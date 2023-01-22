export const userValidSchema = {
  body: {
    type: "object",
    required: [
      "_id",
      "name",
      "lastname",
      "age",
      "studies",
      "favoriteLanguages",
    ],
    properties: {
      _id: {
        type: "number",
      },
      name: {
        type: "string",
      },
      lastname: {
        type: "string",
      },
      age: {
        type: "number",
        minimum: 1,
        maximum: 100,
      },
      studies: {
        type: "array",
        items: {
          type: "object",
          required: ["name", "university"],
          properties: {
            name: {
              type: "string",
            },
            university: {
              type: "string",
            },
          },
        },
      },
      favoriteLanguages: {
        type: "array",
        items: {
          type: "string",
        },
      },
    },
  },
};
