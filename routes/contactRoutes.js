import express from "express";
import {
  createContact,
  getAllContacts,
  getContactById,
  updateContact,
  deleteContact,
} from "../controllers/contactController.js";

const router = express.Router();

router.post("/contacts", createContact); // Create a new contact
router.get("/contacts", getAllContacts); // Get all contacts with optional filtering
router.get("/contacts/:id", getContactById); // Get a specific contact by ID
router.put("/contacts/:id", updateContact); // Update a specific contact by ID
router.delete("/contacts/:id", deleteContact); // Delete a specific contact by ID

export default router;

// import express from "express";
// import {
//   createContact,
//   getAllContacts,
//   getContactById,
//   updateContact,
//   deleteContact,
// } from "../controllers/contactController.js";

// const router = express.Router();

// router.post("/contacts", createContact);
// router.get("/contacts", getAllContacts);
// router.get("/contacts/:id", getContactById);
// router.put("/contacts/:id", updateContact);
// router.delete("/contacts/:id", deleteContact);

// export default router;
