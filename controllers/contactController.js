// import ContactService from "../services/contactService.js";

// export const createContact = async (req, res) => {
//   try {
//     const contact = await ContactService.createContact(req.body);
//     res.status(201).json(contact);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// export const getAllContacts = async (req, res) => {
//   try {
//     const { contacts, total, page, totalPages } =
//       await ContactService.getAllContacts(req.query);
//     res.json({ contacts, total, page, totalPages });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// export const getContactById = async (req, res) => {
//   try {
//     const contact = await ContactService.getContactById(req.params.id);
//     if (!contact) {
//       return res.status(404).json({ message: "Contact not found" });
//     }
//     res.json(contact);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// export const updateContact = async (req, res) => {
//   try {
//     const contact = await ContactService.updateContact(req.params.id, req.body);
//     if (!contact) {
//       return res.status(404).json({ message: "Contact not found" });
//     }
//     res.json(contact);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// export const deleteContact = async (req, res) => {
//   try {
//     const contact = await ContactService.deleteContact(req.params.id);
//     if (!contact) {
//       return res.status(404).json({ message: "Contact not found" });
//     }
//     res.json({ message: "Contact deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // import ContactService from "../services/contactService.js";

// // export const createContact = async (req, res) => {
// //   try {
// //     const contact = await ContactService.createContact(req.body);
// //     res.status(201).json(contact);
// //   } catch (error) {
// //     res.status(400).json({ error: error.message });
// //   }
// // };

// // export const getAllContacts = async (req, res) => {
// //   try {
// //     const { contacts, total, page, totalPages } =
// //       await ContactService.getAllContacts(req.query);
// //     res.json({ contacts, total, page, totalPages });
// //   } catch (error) {
// //     res.status(500).json({ error: error.message });
// //   }
// // };

// // export const getContactById = async (req, res) => {
// //   try {
// //     const contact = await ContactService.getContactById(req.params.id);
// //     if (!contact) {
// //       return res.status(404).json({ message: "Contact not found" });
// //     }
// //     res.json(contact);
// //   } catch (error) {
// //     res.status(500).json({ error: error.message });
// //   }
// // };

// // export const updateContact = async (req, res) => {
// //   try {
// //     const contact = await ContactService.updateContact(req.params.id, req.body);
// //     if (!contact) {
// //       return res.status(404).json({ message: "Contact not found" });
// //     }
// //     res.json(contact);
// //   } catch (error) {
// //     res.status(400).json({ error: error.message });
// //   }
// // };

// // export const deleteContact = async (req, res) => {
// //   try {
// //     const contact = await ContactService.deleteContact(req.params.id);
// //     if (!contact) {
// //       return res.status(404).json({ message: "Contact not found" });
// //     }
// //     res.json({ message: "Contact deleted successfully" });
// //   } catch (error) {
// //     res.status(500).json({ error: error.message });
// //   }
// // };
import ContactService from "../services/contactService.js";

export const createContact = async (req, res) => {
  try {
    const contact = await ContactService.createContact(req.body);
    // res.status(201).json(contact);
    res.status(201).json({ message: "Contact Created Succesfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllContacts = async (req, res) => {
  try {
    const { contacts, total, page, totalPages } =
      await ContactService.getAllContacts(req.query);
    res.json({ contacts, total, page, totalPages });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getContactById = async (req, res) => {
  try {
    const contact = await ContactService.getContactById(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.json(contact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateContact = async (req, res) => {
  try {
    const contact = await ContactService.updateContact(req.params.id, req.body);
    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.json(contact);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteContact = async (req, res) => {
  try {
    const contact = await ContactService.deleteContact(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.json({ message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
