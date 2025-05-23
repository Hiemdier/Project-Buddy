import { Schema, model, Document } from 'mongoose';

interface IUnitCoverage {
    length_ft: number;
    width_ft: number;
    height_ft: number;
    width_in: number;
    length_in: number;
    thickness_in: number;
    weight_lb: number;
    weight_ton: number;
    sqft: number;
    quantity: number;
}

interface IMaterial extends Document {
    name: string;
    category: 'fencing' | 'paint' | 'drywall' | 'lumber' | 'concrete' | 'roofing' | 'plumbing' | 'electrical' | 'flooring' | 'insulation' | 'decking' | 'stain' | 'landscaping' | 'hardware' | 'tools' | 'HVAC' | 'siding' | 'masonry';
    unit: string;  
    unitCoverage: IUnitCoverage;
    priceUSD: number;
    vendor?: string;
    lastUpdated: Date;
    projectId?: Number;
}


const materialSchema = new Schema<IMaterial>({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['fencing', 'paint', 'drywall', 'lumber', 'concrete', 'roofing', 'plumbing', 'electrical', 'flooring', 'insulation', 'decking', 'stain', 'landscaping', 'hardware', 'tools', 'HVAC', 'siding', 'masonry'], // Add other categories as needed
    required: true
  },
  unit: {
    type: String,
    required: true
  },
  unitCoverage: {
    type: new Schema<IUnitCoverage>({
      length_ft: { type: Number },
      width_ft: { type: Number },
      height_ft: { type: Number },
      width_in: { type: Number },
      length_in: { type: Number },
      thickness_in: { type: Number },
      weight_lb: { type: Number },
      weight_ton: { type: Number },
      sqft: { type: Number },
      quantity: { type: Number }
    }),
    default: {
        length_ft: 0,
        width_ft: 0,
        height_ft: 0,
        width_in: 0,
        length_in: 0,
        thickness_in: 0,
        weight_lb: 0,
        weight_ton: 0,
        sqft: 0,
        quantity: 0
    }
  },
  priceUSD: {
    type: Number
  },
  vendor: {
    type: String
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  },
  projectId: {
    type: Number,
    ref : 'Project'
  }
});

const Material = model<IMaterial>('Material', materialSchema);

export default Material;