import { successResponse } from "../../helpers/response";

export const allUsers = async (req, res) => {
  const userData = [
    {
      name: "Dimas Raka Septiawan",
    },
    {
      name: "Sergio Aguero",
    },
  ];

  res.status(201).json(successResponse({ data: userData }));
};
