// Fills the taxpayer side of the official Form 13614-C (Rev. 10-2026) fillable PDF.
// Columns marked "Must be completed by certified volunteer" are intentionally left blank.
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

export const FORM_URL = "/pdfs/Form-13614-C-fillable.pdf";
const P1 = "form1[0].page1[0].";
const P2 = "form1[0].page2[0].";
const P3 = "form1[0].page3[0].";
const P4 = "form1[0].page4[0].";
const P5 = "form1[0].page5[0].";

const yes = (v) => v === true || v === "yes";

function usDate(iso, shortYear = false) {
  if (!iso) return "";
  const [y, m, d] = iso.split("-");
  if (!d) return iso;
  return `${m}/${d}/${shortYear ? y.slice(2) : y}`;
}

const YN = (v) => (v === "yes" ? "Y" : v === "no" ? "N" : "");

export async function fill13614C(formData, { staffSummary, templateBytes } = {}) {
  const bytes =
    templateBytes ||
    (await fetch(FORM_URL).then((r) => {
      if (!r.ok) throw new Error("Could not load Form 13614-C");
      return r.arrayBuffer();
    }));
  const pdf = await PDFDocument.load(bytes);
  const form = pdf.getForm();
  // The IRS file also carries an XFA copy of the form; remove it so every PDF viewer shows the filled fields.
  form.deleteXFA();
  // pdf-lib treats every field as needing new drawings when it loads a form. Keep the IRS's own
  // drawings for everything; only the text fields we fill get new ones (setText marks them again).
  form.getFields().forEach((f) => form.markFieldAsClean(f.ref));

  const helv = await pdf.embedFont(StandardFonts.Helvetica);
  const text = (name, value) => {
    if (value === undefined || value === null || value === "") return;
    try {
      const f = form.getTextField(name);
      const max = f.getMaxLength();
      f.setText(max ? String(value).slice(0, max) : String(value));
      f.updateAppearances(helv);
      form.markFieldAsClean(f.ref);
    } catch (e) {
      console.warn("13614-C text field not filled:", name, e.message);
    }
  };
  const check = (name, on = true) => {
    if (!on) return;
    try {
      const box = form.getCheckBox(name);
      box.check();
      // Keep the IRS's own checkmark drawing; the form has no "off" drawing for pdf-lib to regenerate.
      form.markFieldAsClean(box.ref);
    } catch (e) {
      console.warn("13614-C checkbox not filled:", name, e.message);
    }
  };
  const yesNo = (base, yesName, noName, v) => {
    if (v === "yes") check(base + yesName);
    if (v === "no") check(base + noName);
  };
  const youSpouseNo = (base, names, v = {}) => {
    check(base + names[0], !!v.you);
    check(base + names[1], !!v.spouse);
    check(base + names[2], !!v.no);
  };

  const p = formData.personal || {};
  const st = p.status || {};
  const inc = formData.income || {};
  const ex = formData.expenses || {};
  const o = formData.optional || {};

  // ---- Page 1
  text(P1 + "yourFirstName[0]", p.firstName);
  text(P1 + "yourMiddleInitial[0]", p.middleInitial);
  text(P1 + "yourLastName[0]", p.lastName);
  text(P1 + "yourDateOfBirth[0]", usDate(p.dob));
  text(P1 + "yourJobTitle[0]", p.jobTitle);
  if (p.maritalStatus === "married") {
    text(P1 + "spousesFirstName[0]", p.spouseFirstName);
    text(P1 + "spousesMiddleInitial[0]", p.spouseMiddleInitial);
    text(P1 + "spousesLastName[0]", p.spouseLastName);
    text(P1 + "spousesDateOfBirth[0]", usDate(p.spouseDob));
    text(P1 + "spousesJobTitle[0]", p.spouseJobTitle);
    text(P1 + "spousesTelephoneNumber[0]", p.spousePhone);
  }
  text(P1 + "mailingAddress[0]", p.address);
  text(P1 + "maillingApartmentNumber[0]", p.apt);
  text(P1 + "mailingCity[0]", p.city);
  text(P1 + "mailingState[0]", p.state);
  text(P1 + "mailingZIPCode[0]", p.zip);
  text(P1 + "yourTelephoneNumber[0]", p.phone);
  text(P1 + "yourEmailAddress[0]", p.email);

  yesNo(P1 + "anyoneElseClaim[0].", "otherClaimYes[0]", "otherClaimNo[0]", p.claimedByOther);
  yesNo(P1 + "liveTwoStates[0].", "twoStatesYes[0]", "twoStatesNo[0]", p.twoStates);

  const c1 = P1 + "youSpouseWereIn[0].column1[0].";
  const c2 = P1 + "youSpouseWereIn[0].column2[0].";
  youSpouseNo(c1 + "usCitizen[0].", ["usCitizenYou[0]", "usCitizenSpouse[0]", "usCitizenNo[0]"], st.citizen);
  youSpouseNo(c1 + "usOnVisa[0].", ["onVisaYou[0]", "onVisaSpouse[0]", "onVisaNo[0]"], st.visa);
  youSpouseNo(c1 + "fullTimeStudent[0].", ["studentYou[0]", "studentSpouse[0]", "studentNo[0]"], st.student);
  youSpouseNo(c2 + "legallyBlind[0].", ["legallyBlindYou[0]", "legallyBlindSpouse[0]", "legallyBlindNo[0]"], st.blind);
  youSpouseNo(c2 + "totallyPermanentlyDisabled[0].", ["disabledYou[0]", "disabledSpouse[0]", "disabledNo[0]"], st.disabled);
  youSpouseNo(c2 + "issuedIdentityProtection[0].", ["identityProtectionYou[0]", "identityProtectionSpouse[0]", "identityProtectionNo[0]"], st.ipPin);
  youSpouseNo(c2 + "holdDigitalAssets[0].", ["digitalAssetsYou[0]", "digitalAssetsSpouse[0]", "digitalAssetsNo[0]"], st.digitalAssets);

  check(P1 + "dueARefund[0].refundDirectDeposit[0]", p.refund === "directDeposit");
  check(P1 + "dueARefund[0].refundSplitAccounts[0]", p.refund === "split");
  if (p.refund === "other") {
    check(P1 + "dueARefund[0].refundOther[0]");
    text(P1 + "dueARefund[0].refundOtherExplain[0]", p.refundOther);
  }
  check(P1 + "haveBlanceDue[0].blanceBankAccount[0]", p.balanceDue === "bankAccount");
  if (p.balanceDue === "other") {
    check(P1 + "haveBlanceDue[0].blanceMailPayment[0]"); // this is the "Other" box on the 10-2026 form
    text(P1 + "haveBlanceDue[0].TextField1[0]", p.balanceDueOther);
  }

  youSpouseNo(P1 + "writtenCommunicationLanguage[0].", ["otherLanguageYou[0]", "otherLanguageSpouse[0]", "otherLanguageNo[0]"], p.otherLanguage);
  text(P1 + "writtenCommunicationLanguage[0].whatLanguage[0]", p.languageName);
  youSpouseNo(P1 + "presidentialElectionFund[0].", ["presidentialElectionFundYou[0]", "presidentialElectionFundSpouse[0]", "presidentialElectionFundNo[0]"], p.presidentialFund);

  const ms = P1 + "maritalStatus[0].";
  check(ms + "statusNeverMarried[0]", p.maritalStatus === "never");
  if (p.maritalStatus === "married") {
    check(ms + "statusMarried[0]");
    yesNo(ms + "lastDay[0].", "lastDayYes[0]", "lastDayNo[0]", p.marriedLastDay);
    yesNo(ms + "liveApart[0].", "liveApartYes[0]", "liveApartNo[0]", p.livedApart);
  }
  if (p.maritalStatus === "divorced") {
    check(ms + "statusDivorced[0].statusDivorced[0]");
    text(ms + "statusDivorced[0].dateFinalDecree[0]", usDate(p.divorceDate));
  }
  if (p.maritalStatus === "separated") {
    check(ms + "statusLegallySeparated[0].statusLegallySeparated[0]");
    text(ms + "statusLegallySeparated[0].dateSeparateDecree[0]", usDate(p.separationDate));
  }
  if (p.maritalStatus === "widowed") {
    check(ms + "statusWidowed[0].statusWidowed[0]");
    text(ms + "statusWidowed[0].yearSpousesDeath[0]", p.spouseDeathYear);
  }

  const people = formData.dependents || [];
  people.slice(0, 4).forEach((d, i) => {
    const r = `${P1}namesOf[0].Row${i + 1}[0].`;
    text(r + "nameFirstLast[0]", d.name);
    text(r + "dateOfBirth[0]", usDate(d.dob, true));
    text(r + "relationshipToYou[0]", d.relationship);
    text(r + "monthsLivedHome[0]", d.months);
    text(r + "singleMarried[0]", d.maritalStatus);
    text(r + "usCitizen[0]", YN(d.citizen));
    text(r + "residentUSCandaMexico[0]", YN(d.resident));
    text(r + "fullTimeStudent[0]", YN(d.student));
    text(r + "totallyPermanentlyDisabled[0]", YN(d.disabled));
    text(r + "issuedIPPIN[0]", YN(d.ipPin));
  });

  // ---- Page 2 (left side only)
  const rm = P2 + "receivedMoneyFrom[0].";
  check(rm + "wagesPartFull[0]", yes(inc.wages));
  if (yes(inc.wages)) text(rm + "howManyJobs[0]", inc.jobs);
  check(rm + "receivedMoneyTimps[0]", yes(inc.tips));
  check(rm + "retirementAccount[0]", yes(inc.retirement));
  check(rm + "disabilityBenefits[0].disabilityBenefits[0]", yes(inc.disability));
  check(rm + "socialSecurityRailroad[0]", yes(inc.socialSecurity));
  check(rm + "unemploymentBenefits[0]", yes(inc.unemployment));
  check(rm + "refundStateLocal[0]", yes(inc.stateRefund));
  check(rm + "interestOrDividends[0]", yes(inc.interestDividends));
  check(rm + "saleStocksBonds[0]", yes(inc.stockSales));
  yesNo(rm + "reportALoss[0].", "reportLossYes[0]", "reportLossNo[0]", inc.priorCapitalLoss);
  check(rm + "receivedAlimony[0]", yes(inc.alimony));
  check(rm + "incomeRentingHouse[0]", yes(inc.rentHome));
  if (yes(inc.rentHome)) yesNo(rm + "useAsPersonal[0].", "personalResidenceYes[0]", "personalResidenceNo[0]", inc.rentHomeUnder15);
  check(rm + "incomeRentingVehicle[0]", yes(inc.rentProperty));
  check(rm + "gamblingLotteryWinnings[0]", yes(inc.gambling));
  check(rm + "paymentsContractSelf[0]", yes(inc.selfEmployment));
  if (yes(inc.selfEmployment)) yesNo(rm + "lossLastReturn[0].", "reportLossYes[0]", "reportLossNo[0]", inc.selfEmploymentPriorLoss);
  yesNo(rm + "lossLastReturn[0].", "gigIncomeYes[0]", "reportLossNo[1]", inc.gig);
  check(rm + "otherMoneyReceived[0].otherMoneyReceived[0]", yes(inc.otherMoney));

  // ---- Page 3 (left side only)
  const pf = P3 + "paidFollowingExpenses[0].";
  check(pf + "mortgageinterest[0]", yes(ex.mortgage));
  check(pf + "taxesStateLocal[0]", yes(ex.taxes));
  check(pf + "mendicalDentalPrescription[0]", yes(ex.medical));
  check(pf + "charitableContributions[0]", yes(ex.charity));
  const pe = P3 + "paidExpenses[0].";
  check(pe + "studentLoanInterest[0]", yes(ex.studentLoan));
  check(pe + "childDependentCare[0]", yes(ex.childCare));
  check(pe + "contributionsRetirementAccount[0]", yes(ex.retirementContrib));
  check(pe + "schooldSupplies[0]", yes(ex.educator));
  check(pe + "alimonyPayments[0]", yes(ex.alimonyPaid));
  const fh = P3 + "followingHappenDuring[0].";
  check(fh + "tookEducationalClasses[0].tookEducationalClasses[0]", yes(ex.education));
  check(fh + "sellAHome[0]", yes(ex.homeSale));
  check(fh + "healthSavingsAccount[0]", yes(ex.hsa));
  check(fh + "purchaseMarketplaceInsurance[0]", yes(ex.marketplace));
  check(fh + "otherPurchase[0]", yes(ex.newVehicle)); // "Purchased a new vehicle" on the 10-2026 form
  check(fh + "forgaveByLender[0].forgaveByLender[0]", yes(ex.debtCancelled));
  check(fh + "lossRelatedDisaster[0]", yes(ex.disasterLoss));
  check(fh + "taxCreditDisallowed[0].taxCreditDisallowed[0]", yes(ex.creditDisallowed));
  check(fh + "receivedLetterBill[0]", yes(ex.irsLetter));
  check(fh + "estimatedTaxPayments[0].estimatedTaxPayments[0]", yes(ex.estimatedPayments));
  check(fh + "lastYearsReturn[0]", yes(ex.lastYearReturn));

  // ---- Page 4 (optional)
  const oq = P4 + "optionalQuestions[0].";
  const ability = { veryWell: "veryWell[0]", well: "well[0]", notWell: "notWell[0]", notAtAll: "notAtAll[0]", noAnswer: "notAnswer[0]" };
  if (ability[o.conversation]) check(oq + "carryConversationEnglish[0]." + ability[o.conversation]);
  if (ability[o.read]) check(oq + "readNewspaperEnglish[0]." + ability[o.read]);
  const hd = { yes: "disabilityYes[0]", no: "disabilityNo[0]", noAnswer: "notAnswer[0]" };
  if (hd[o.householdDisability]) check(oq + "memberHouseholdDisability[0]." + hd[o.householdDisability]);
  const vet = { yes: "veteranYes[0]", no: "veteranNo[0]", noAnswer: "notAnswer[0]" };
  if (vet[o.veteran]) check(oq + "youSpouseVeteran[0]." + vet[o.veteran]);
  const raceField = {
    americanIndian: "americanIndian[0]", asian: "asian[0]", black: "blackAfricanAmerican[0]", hispanic: "hispanicLatino[0]",
    middleEastern: "middleEsternNorthAfrican[0]", pacificIslander: "hawaiianPacific[0]", white: "white[0]",
  };
  (o.race || []).forEach((k) => raceField[k] && check(P4 + "yourRaceEthnicity[0]." + raceField[k]));
  if (p.maritalStatus === "married") {
    (o.spouseRace || []).forEach((k) => raceField[k] && check(P4 + "yourSpousesRaceEthnicity[0]." + raceField[k]));
  }

  // ---- Page 5: additional notes (taxpayer's notes plus details that have no box on the form)
  const notes = [];
  if (formData.notes?.trim()) notes.push(formData.notes.trim());
  const follow = [];
  if (yes(inc.wages) && inc.overtime) follow.push(`Received overtime pay: ${inc.overtime}`);
  if (yes(inc.tips) && inc.tipsOnW2) follow.push(`All tips reported on W-2: ${inc.tipsOnW2}`);
  if (yes(inc.retirement) && inc.retirementTaxableShown) follow.push(`1099-R box 2a shows taxable amount: ${inc.retirementTaxableShown}`);
  if (yes(inc.retirement) && inc.qcd) follow.push(`Retirement money paid directly to charity: ${inc.qcd}`);
  if (yes(inc.socialSecurity) && inc.railroadPension) follow.push(`Railroad Retirement pension (RRB-1099-R): ${inc.railroadPension}`);
  if (yes(inc.otherMoney) && inc.otherMoneyDesc) follow.push(`Other money received: ${inc.otherMoneyDesc}`);
  if (yes(ex.retirementContrib) && ex.retirementContribType) follow.push(`Retirement contribution type: ${{ roth401k: "Roth IRA or 401(k)", traditional: "Traditional IRA", unsure: "Not sure" }[ex.retirementContribType]}`);
  if (yes(ex.newVehicle) && ex.newVehicleLoan) follow.push(`New vehicle bought with a loan: ${ex.newVehicleLoan}`);
  if (p.digitalAssetsActivity) follow.push(`Digital assets: ${p.digitalAssetsActivity === "holdOnly" ? "only bought, held, transferred between own wallets, or received as gift/inheritance" : "sold, exchanged, spent, or received as payment"}`);
  if (follow.length) notes.push("Answers to follow-up questions (online intake):\n- " + follow.join("\n- "));
  if (people.length > 4) {
    notes.push(
      "Additional household members:\n" +
        people.slice(4).map((d) =>
          `- ${d.name || "(no name)"}, DOB ${usDate(d.dob, true)}, ${d.relationship || ""}, ${d.months || "?"} months, ${d.maritalStatus || ""}, citizen ${YN(d.citizen)}, resident US/CA/MX ${YN(d.resident)}, student ${YN(d.student)}, disabled ${YN(d.disabled)}, IP PIN ${YN(d.ipPin)}`
        ).join("\n")
    );
  }
  drawNotes(pdf.getPage(4), notes.join("\n\n"), helv);

  if (staffSummary) await appendStaffSummary(pdf, staffSummary, helv);

  return pdf.save({ updateFieldAppearances: false });
}

// Writes notes on the ruled lines of page 5 (the form's text box ignores the rules and overlaps them).
// Rules sit every 18 pt from 54 pt to 432 pt below the top of the 792 x 612 landscape page.
function drawNotes(page, notesText, font) {
  if (!notesText) return;
  const size = 10;
  const maxW = 750;
  const lines = [];
  notesText.split("\n").forEach((para) => {
    if (!para.trim()) return lines.push("");
    let cur = "";
    para.split(" ").forEach((w) => {
      const next = cur ? cur + " " + w : w;
      if (cur && font.widthOfTextAtSize(next, size) > maxW) {
        lines.push(cur);
        cur = w;
      } else cur = next;
    });
    lines.push(cur);
  });
  const height = page.getHeight();
  const rules = [];
  for (let top = 54; top <= 432; top += 18) rules.push(top);
  const fits = lines.length <= rules.length ? lines : [...lines.slice(0, rules.length - 1), "(More notes were provided online; see TaxCare's records.)"];
  fits.forEach((t, i) => {
    if (t) page.drawText(t, { x: 20, y: height - rules[i] + 3, size, font, color: rgb(0, 0, 0) });
  });
}

// Adds a TaxCare-only cover sheet with the scope screening result. Not part of the IRS form.
async function appendStaffSummary(pdf, { reference, submittedAt, scope, name, service }, font) {
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
  const page = pdf.addPage([612, 792]);
  let y = 740;
  const line = (t, { size = 11, f = font, color = rgb(0.1, 0.1, 0.1), indent = 0 } = {}) => {
    const words = String(t).split(" ");
    let cur = "";
    const maxW = 540 - indent;
    const flush = () => {
      page.drawText(cur, { x: 36 + indent, y, size, font: f, color });
      y -= size + 5;
      cur = "";
    };
    words.forEach((w) => {
      const next = cur ? cur + " " + w : w;
      if (cur && f.widthOfTextAtSize(next, size) > maxW) {
        flush();
        cur = w;
      } else {
        cur = next;
      }
    });
    if (cur) flush();
  };
  const label = { in: "IN SCOPE (Basic)", review: "NEEDS COORDINATOR REVIEW", out: "OUT OF SCOPE for Basic certification" }[scope.status];
  line("The TaxCare Group — Online Intake Screening (staff copy only)", { size: 15, f: bold });
  y -= 6;
  line(`Reference: ${reference}`);
  line(`Taxpayer: ${name || "(not provided)"}`);
  line(`Submitted: ${submittedAt}`);
  line(`Service requested: ${service === "portal" ? "No appointment (TaxSlayer Customer Portal)" : "Appointment with a volunteer"}`, { f: bold });
  line(`Rules: ${scope.rulesVersion}`, { size: 9, color: rgb(0.35, 0.35, 0.35) });
  y -= 8;
  line(`Result: ${label}`, { size: 13, f: bold, color: scope.status === "out" ? rgb(0.6, 0.15, 0.1) : scope.status === "review" ? rgb(0.55, 0.4, 0) : rgb(0.1, 0.4, 0.2) });
  y -= 6;
  if (!scope.hits.length) line("No answers outside Basic certification were found. Confirm all items during the interview.");
  scope.hits.forEach((h) => {
    line(`${h.level === "out" ? "OUT" : "REVIEW"}: ${h.text}`, { f: bold });
    line(h.staff, { size: 10, indent: 14, color: rgb(0.3, 0.3, 0.3) });
    y -= 4;
  });
  y -= 10;
  line("This screening is based on the taxpayer's own answers. A certified volunteer must still complete the interview and the volunteer columns of Form 13614-C.", { size: 9, color: rgb(0.35, 0.35, 0.35) });
}
