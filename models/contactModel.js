// import mongoose from "mongoose";

// const { Schema } = mongoose;

// const ContactNameSchema = new Schema({
//   first: { type: String, required: true },
//   last: { type: String, required: true },
// });

// const AddressSchema = new Schema({
//   mailing_street: String,
//   mailing_city: String,
//   mailing_state: String,
//   mailing_zip: String,
//   mailing_country: String,
//   other_street: String,
//   other_city: String,
//   other_state: String,
//   other_zip: String,
//   other_country: String,
// });

// const VisitSummarySchema = new Schema({
//   most_recent_visit: { type: Date },
//   average_time_spent: { type: Number },
//   referrer: { type: String },
//   first_visit: { type: Date },
//   number_of_chats: { type: Number },
//   visitor_score: { type: Number },
//   days_visited: { type: Number },
// });

// const ContactOwnerSchema = new Schema({
//   user_id: { type: Schema.Types.ObjectId, required: true },
//   name: { type: String, required: true },
// });

// const RelatedListsSchema = new Schema({
//   notes: [{ note_id: { type: Schema.Types.ObjectId }, content: String }],
//   cadences: [{ cadence_id: { type: Schema.Types.ObjectId }, name: String }],
//   attachments: [
//     { attachment_id: { type: Schema.Types.ObjectId }, filename: String },
//   ],
//   deals: [
//     {
//       deal_id: { type: Schema.Types.ObjectId },
//       amount: Number,
//       stage: String,
//       close_date: Date,
//     },
//   ],
//   activities: [
//     { activity_id: { type: Schema.Types.ObjectId }, type: String, date: Date },
//   ],
//   products: [{ product_id: { type: Schema.Types.ObjectId }, name: String }],
//   cases: [{ case_id: { type: Schema.Types.ObjectId }, status: String }],
//   quotes: [{ quote_id: { type: Schema.Types.ObjectId }, amount: Number }],
//   sales_orders: [{ order_id: { type: Schema.Types.ObjectId }, amount: Number }],
//   purchase_orders: [
//     { purchase_id: { type: Schema.Types.ObjectId }, amount: Number },
//   ],
//   emails: [
//     {
//       email_id: { type: Schema.Types.ObjectId },
//       subject: String,
//       date_sent: Date,
//     },
//   ],
//   invoices: [{ invoice_id: { type: Schema.Types.ObjectId }, amount: Number }],
//   campaigns: [{ campaign_id: { type: Schema.Types.ObjectId }, name: String }],
//   social: [
//     {
//       social_id: { type: Schema.Types.ObjectId },
//       platform: String,
//       activity: String,
//     },
//   ],
//   projects: [{ project_id: { type: Schema.Types.ObjectId }, name: String }],
//   visits: [{ visit_id: { type: Schema.Types.ObjectId }, date: Date }],
// });

// const ContactSchema = new Schema({
//   contact_name: ContactNameSchema,
//   account_name: { type: String, required: true },
//   email: { type: String, required: true },
//   phone: { type: String },
//   mobile: { type: String },
//   department: { type: String },
//   address: AddressSchema,
//   description: { type: String },
//   visit_summary: VisitSummarySchema,
//   contact_owner: ContactOwnerSchema,
//   lead_source: { type: String },
//   vendor_name: { type: String },
//   title: { type: String },
//   home_phone: { type: String },
//   other_phone: { type: String },
//   related_lists: RelatedListsSchema,
// });

// const Contact = mongoose.model("Contact", ContactSchema);

// export default Contact;

import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  contact_name: {
    first: { type: String, required: true },
    last: { type: String, required: true },
  },
  account_name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  mobile: { type: String },
  department: { type: String },
  address: {
    mailing_street: { type: String },
    mailing_city: { type: String },
    mailing_state: { type: String },
    mailing_zip: { type: String },
    mailing_country: { type: String },
    other_street: { type: String },
    other_city: { type: String },
    other_state: { type: String },
    other_zip: { type: String },
    other_country: { type: String },
  },
  description: { type: String },
  visit_summary: {
    most_recent_visit: { type: Date },
    average_time_spent: { type: Number },
    referrer: { type: String },
    first_visit: { type: Date },
    number_of_chats: { type: Number },
    visitor_score: { type: Number },
    days_visited: { type: Number },
  },
  contact_owner: {
    name: { type: String },
  },
  lead_source: { type: String },
  vendor_name: { type: String },
  title: { type: String },
  home_phone: { type: String },
  other_phone: { type: String },
  related_lists: {
    notes: [
      {
        content: { type: String },
      },
    ],
    cadences: [
      {
        name: { type: String },
      },
    ],
    attachments: [
      {
        filename: { type: String },
      },
    ],
    deals: [
      {
        amount: { type: Number },
        stage: { type: String },
        close_date: { type: Date },
      },
    ],
    activities: [
      {
        type: { type: String },
        date: { type: Date },
      },
    ],
    products: [
      {
        name: { type: String },
      },
    ],
    cases: [
      {
        status: { type: String },
      },
    ],
    quotes: [
      {
        amount: { type: Number },
      },
    ],
    sales_orders: [
      {
        amount: { type: Number },
      },
    ],
    purchase_orders: [
      {
        amount: { type: Number },
      },
    ],
    emails: [
      {
        subject: { type: String },
        date_sent: { type: Date },
      },
    ],
    invoices: [
      {
        amount: { type: Number },
      },
    ],
    campaigns: [
      {
        name: { type: String },
      },
    ],
    social: [
      {
        platform: { type: String },
        activity: { type: String },
      },
    ],
    projects: [
      {
        name: { type: String },
      },
    ],
    visits: [
      {
        date: { type: Date },
      },
    ],
  },
});

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
