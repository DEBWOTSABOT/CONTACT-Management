// import Contact from "../models/contactModel.js";

// class ContactService {
//   static async createContact(data) {
//     const contact = new Contact(data);
//     return await contact.save();
//   }

//   static async getAllContacts(query) {
//     const filters = {};
//     if (query.name) {
//       filters["contact_name.first"] = { $regex: query.name, $options: "i" };
//     }
//     if (query.email) {
//       filters.email = query.email;
//     }

//     const limit = parseInt(query.limit, 10) || 10;
//     const page = parseInt(query.page, 10) || 1;

//     const contacts = await Contact.find(filters)
//       .limit(limit)
//       .skip((page - 1) * limit)
//       .populate("related_lists.notes.note_id")
//       .populate("related_lists.cadences.cadence_id")
//       .populate("related_lists.attachments.attachment_id")
//       .populate("related_lists.deals.deal_id")
//       .populate("related_lists.activities.activity_id")
//       .populate("related_lists.products.product_id")
//       .populate("related_lists.cases.case_id")
//       .populate("related_lists.quotes.quote_id")
//       .populate("related_lists.sales_orders.order_id")
//       .populate("related_lists.purchase_orders.purchase_id")
//       .populate("related_lists.emails.email_id")
//       .populate("related_lists.invoices.invoice_id")
//       .populate("related_lists.campaigns.campaign_id")
//       .populate("related_lists.social.social_id")
//       .populate("related_lists.projects.project_id")
//       .populate("related_lists.visits.visit_id")
//       .exec();

//     const total = await Contact.countDocuments(filters);

//     return {
//       contacts,
//       total,
//       page,
//       totalPages: Math.ceil(total / limit),
//     };
//   }

//   static async getContactById(id) {
//     return await Contact.findById(id)
//       .populate("related_lists.notes.note_id")
//       .populate("related_lists.cadences.cadence_id")
//       .populate("related_lists.attachments.attachment_id")
//       .populate("related_lists.deals.deal_id")
//       .populate("related_lists.activities.activity_id")
//       .populate("related_lists.products.product_id")
//       .populate("related_lists.cases.case_id")
//       .populate("related_lists.quotes.quote_id")
//       .populate("related_lists.sales_orders.order_id")
//       .populate("related_lists.purchase_orders.purchase_id")
//       .populate("related_lists.emails.email_id")
//       .populate("related_lists.invoices.invoice_id")
//       .populate("related_lists.campaigns.campaign_id")
//       .populate("related_lists.social.social_id")
//       .populate("related_lists.projects.project_id")
//       .populate("related_lists.visits.visit_id")
//       .exec();
//   }

//   static async updateContact(id, data) {
//     return await Contact.findByIdAndUpdate(id, data, {
//       new: true,
//       runValidators: true,
//     })
//       .populate("related_lists.notes.note_id")
//       .populate("related_lists.cadences.cadence_id")
//       .populate("related_lists.attachments.attachment_id")
//       .populate("related_lists.deals.deal_id")
//       .populate("related_lists.activities.activity_id")
//       .populate("related_lists.products.product_id")
//       .populate("related_lists.cases.case_id")
//       .populate("related_lists.quotes.quote_id")
//       .populate("related_lists.sales_orders.order_id")
//       .populate("related_lists.purchase_orders.purchase_id")
//       .populate("related_lists.emails.email_id")
//       .populate("related_lists.invoices.invoice_id")
//       .populate("related_lists.campaigns.campaign_id")
//       .populate("related_lists.social.social_id")
//       .populate("related_lists.projects.project_id")
//       .populate("related_lists.visits.visit_id")
//       .exec();
//   }

//   static async deleteContact(id) {
//     return await Contact.findByIdAndDelete(id);
//   }
// }

// export default ContactService;

// // import Contact from "../models/contactModel.js";

// // class ContactService {
// //   static async createContact(data) {
// //     const contact = new Contact(data);
// //     return await contact.save();
// //   }

// //   static async getAllContacts(query) {
// //     const filters = {};
// //     if (query.name) {
// //       filters["contact_name.first"] = { $regex: query.name, $options: "i" };
// //     }
// //     if (query.email) {
// //       filters.email = query.email;
// //     }

// //     const limit = parseInt(query.limit, 10) || 10;
// //     const page = parseInt(query.page, 10) || 1;

// //     const contacts = await Contact.find(filters)
// //       .limit(limit)
// //       .skip((page - 1) * limit)
// //       .exec();

// //     const total = await Contact.countDocuments(filters);

// //     return {
// //       contacts,
// //       total,
// //       page,
// //       totalPages: Math.ceil(total / limit),
// //     };
// //   }

// //   static async getContactById(id) {
// //     return await Contact.findById(id);
// //   }

// //   static async updateContact(id, data) {
// //     return await Contact.findByIdAndUpdate(id, data, {
// //       new: true,
// //       runValidators: true,
// //     });
// //   }

// //   static async deleteContact(id) {
// //     return await Contact.findByIdAndDelete(id);
// //   }
// // }

// // export default ContactService;
import Contact from "../models/contactModel.js";

class ContactService {
  // Create a new contact
  static async createContact(data) {
    const contact = new Contact(data);
    return await contact.save();
  }

  // Retrieve all contacts with optional filters
  static async getAllContacts(query) {
    const filters = {};

    // Filter by name, email, or other criteria if provided
    if (query.name) {
      filters["contact_name.first"] = { $regex: query.name, $options: "i" };
    }
    if (query.email) {
      filters.email = query.email;
    }

    const limit = parseInt(query.limit, 10) || 10;
    const page = parseInt(query.page, 10) || 1;

    const contacts = await Contact.find(filters)
      .limit(limit)
      .skip((page - 1) * limit)
      .exec();

    const total = await Contact.countDocuments(filters);

    return {
      contacts,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    };
  }

  // Retrieve a contact by its ID
  static async getContactById(id) {
    return await Contact.findById(id);
  }

  // Update an existing contact
  static async updateContact(id, data) {
    return await Contact.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
  }

  // Delete a contact
  static async deleteContact(id) {
    return await Contact.findByIdAndDelete(id);
  }
}

export default ContactService;
