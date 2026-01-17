// src/data/intakeSchema.js

const intakeFormSchema = {
  personalInfo: {
    // Taxpayer
    firstName: "",
    middleName: "",
    lastName: "",
    ssn: "",
    dob: "",
    phone: "",
    email: "",
    address: {
      street: "",
      apt: "",
      city: "",
      state: "",
      zip: "",
    },
    filingStatus: "", // "single", "married_filing_jointly", "married_filing_separately", "head_of_household", "qualifying_widow"
    spouse: {
      firstName: "",
      middleName: "",
      lastName: "",
      ssn: "",
      dob: "",
    },
  },

  dependents: [
    /* Example:
    {
      firstName: "",
      middleName: "",
      lastName: "",
      ssn: "",
      dob: "",
      relationship: "",
      monthsLivedWithTaxpayer: 12,
      disabled: false
    }
    */
  ],

  income: {
    // Employment W-2
    hasWages: false,
    numW2s: 0,

    // Self-Employment
    hasSelfEmployment: false,
    num1099Misc: 0,
    selfEmploymentExpenses: 0,

    // Retirement
    hasRetirement: false,
    num1099R: 0,
    qcdAmount: 0,

    // Social Security / Railroad
    hasSocialSecurity: false,
    numSSA1099: 0,

    // Unemployment
    hasUnemployment: false,
    num1099G: 0,

    // Interest & Dividends
    hasInterestDividends: false,
    num1099INT: 0,
    num1099DIV: 0,

    // Stock / Capital gains
    hasStockSales: false,
    num1099B: 0,
    capitalLossCarryover: 0,

    // Alimony
    hasAlimony: false,
    alimonyAmount: 0,

    // Rental Income
    hasRentalIncome: false,
    personalResidenceRental: false,

    // Gambling
    hasGambling: false,
    numW2G: 0,

    // Other Income
    hasOtherIncome: false,
    otherIncomeDescription: "",

    // Notes
    incomeNotes: "",
  },

  expenses: {
    childcare: 0,
    education: 0,
    medical: 0,
    otherExpenses: "",
  },

  healthInsurance: {
    marketplaceCoverage: false,
    monthsCovered: 0,
    everyoneCovered: false,
  },

  otherTaxes: {
    stateLocalTaxesPaid: 0,
    estimatedPayments: 0,
    otherTaxesNotes: "",
  },

  notes: {
    comments: "",
  },
};

export default intakeFormSchema;
