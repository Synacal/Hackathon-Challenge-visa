import mongoose from 'mongoose';

const VisaApplicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dob: { type: Date, required: true },
  nationality: { type: String, required: true },
  travelHistory: { type: String, required: false },
  // Removed other fields such as passportNumber, passportExpiry, passportBio, passportPhoto, purposeOfVisit
});

const VisaApplication =
  mongoose.models.VisaApplication ||
  mongoose.model('VisaApplication', VisaApplicationSchema, 'visaapplications');

export default VisaApplication;
