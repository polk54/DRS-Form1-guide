document.addEventListener('DOMContentLoaded', () => {
    const formFields = document.querySelectorAll('.form-field');
    const infoBox = document.getElementById('infoBox');
    const infoTitle = document.getElementById('infoTitle');
    const infoContent = document.getElementById('infoContent');

    formFields.forEach(field => {
        field.addEventListener('click', () => {
            const fieldId = field.getAttribute('data-field');
            const info = getFieldInfo(fieldId);
            infoTitle.textContent = field.querySelector('label').textContent;
            infoContent.innerHTML = info;
            infoBox.style.display = 'block';
        });
    });

    document.addEventListener('click', (event) => {
        if (!infoBox.contains(event.target) && !event.target.closest('.form-field')) {
            infoBox.style.display = 'none';
        }
    });
});

function getFieldInfo(fieldId) {
    const fieldInfo = {
        'F01': "Enter the name of the debtor country. Each country has an associated DRS Country Code, which can be found in the Country Reference File. This code is used for both the debtor country and creditor country fields.",

        'F02': "Assign a unique debt number, consisting of not more than 12 contiguous digits or letters. This number must be unique and once assigned, should be used consistently for the same debt instrument in all subsequent reports, including Forms 2 and 3. If multiple administrative units prepare reports, coordinate to avoid duplicate numbers.",

        'F02a': "If there's a different loan number used in the reporting country or assigned by the lender, enter it here.",

        'F03': "Enter the name of the actual debtor (or debtors, if more than one) as shown in the loan document. This is the institution financially responsible for servicing the loan. The government should be shown as debtor only if the debt will be repaid from budgeted funds of the central government.",

        'F04': "Select the type of borrower from the following categories:<br><br>" +
               "<ol>" +
               "<li><strong>Central government:</strong> The government of the country as such, including administrative departments thereof.</li>" +
               "<li><strong>Central Bank:</strong> The monetary authority, normally the agency that issues currency and holds the country's international reserves.</li>" +
               "<li><strong>Local government:</strong> All political subdivisions – states, provinces, municipalities, etc.</li>" +
               "<li><strong>Public corporation:</strong> Incorporated or unincorporated entities wholly owned by the governmental sector, which usually cover most of their expenses by selling goods or services to the public. Includes both non-financial and financial corporations, except for official development banks.</li>" +
               "<li><strong>Mixed enterprise:</strong> Incorporated or unincorporated entities, financial and non-financial (excluding development banks), in which the public sector has more than 50 percent (but less than 100 percent) of voting power.</li>" +
               "<li><strong>Official development bank:</strong> Financial intermediaries primarily engaged in making long-term loans beyond the capacity of conventional institutions, and which do not accept monetary deposits.</li>" +
               "<li><strong>Private:</strong> All borrowers not included in the preceding categories. Individual loan reporting is only required for loans with service guaranteed by a public sector agency.</li>" +
               "</ol>",

        'F05': "If a public body in the reporting country guarantees service on the debt (but not simply for exchange transfer), enter the name of the guarantor here. This would be an agency in the public sector other than the debtor; e.g., the central government may guarantee the debt of a public Corporation. Also show the name of a public sector guarantor of private debt in this item.",

        'F06': "Answer 'yes' only if the debt service payments (principal and interest) are to be financed directly through the government budget. This information will help reconcile statistics on external debt with statistics on public finance and contingent liabilities.",

        'F07': "Enter a brief description of the purpose of the loan (e.g., to finance a specific project, to pay for imports, to refinance all or part of an existing debt). If the loan is for a specific project, give the name of the project and describe the project according to the economic sector in which it falls. Provide enough information to enable the loan to be classified according to economic sector. Note that the information should disclose the nature of the enterprise or program benefiting from the loan, not the nature of the products being financed.",

        'F08': "Select the type of agreement:<br><br>" +
               "<ul>" +
               "<li><strong>Normal:</strong> Most debt agreements are of this type, consisting of a single loan, with the purpose, rate(s) of interest, and maturity date(s) specified in the agreement.</li>" +
               "<li><strong>Debt refinancing:</strong> This category covers only voluntary refinancing, i.e. when a new loan is contracted (at more advantageous terms) to repay the outstanding balance of one or several previously contracted loans.</li>" +
               "<li><strong>Debt rescheduling:</strong> This category covers all arrangements made in order to give the debtor relief from the obligation to meet originally scheduled payments, which may be either in arrears or due in the future. This can include principal and interest arrears, in current and future maturities due, short term debt and private non-guaranteed debt.</li>" +
               "<li><strong>Other:</strong> Describe in the Notes section (item 22).</li>" +
               "</ul>",

        'F09': "Specify the pattern of principal repayments:<br><br>" +
               "<ol>" +
               "<li>Equal payments</li>" +
               "<li>Annuity</li>" +
               "<li>One lump sum</li>" +
               "<li>Other (provide schedule on Form 1A)</li>" +
               "</ol>" +
               "Indicate if repayment is based on total commitment or each drawing. If based on drawings, provide:" +
               "<ul>" +
               "<li>The number of months from drawing to first principal repayment</li>" +
               "<li>The number of principal payments on each drawing</li>" +
               "</ul>",

        'F10': "Enter the following information:<br><br>" +
               "<ul>" +
               "<li>First date of principal repayment</li>" +
               "<li>Final date of principal repayment (maturity date)</li>" +
               "<li>Number of payments per year</li>" +
               "</ul>" +
               "If payments are based on each drawing, provide dates based on the best possible estimate.",

        'F11': "For rescheduling loans only. Enter:" +
               "<ul>" +
               "<li>The start date of the consolidation period</li>" +
               "<li>The end date of the consolidation period</li>" +
               "</ul>" +
               "Complete Form 1A showing the dates and amounts rescheduled in each year.",

        'F12': "Enter the exact name of the lender. If it is a foreign government, indicate which agency or department. If there is more than one creditor, as in the case of a syndicated bank credit, give the name of the lead manager and indicate in item 22 whether the syndicate comprises institutions of only one or of several countries.",

        'F12a': "Enter the name of the official agency in the creditor country that is the guarantor (if any).",

        'F13': "Enter the country of residence of the creditor, not necessarily of its nationality. (Loans from a United Kingdom branch of a Japanese bank, for instance, are classified under 'United Kingdom', not under 'Japan'). If creditors of more than one country are involved, including bonds issued in more than one country (e.g. 'Euro' bonds), enter the word 'multiple'. If the lender is an official international organization, so indicate; do not enter the country where the organization is located.",

        'F14': "Select the type of creditor:<br><br>" +
               "<ol>" +
               "<li><strong>Exporter:</strong> Indicate this category only if the credit is extended directly by the exporter itself (frequently referred to as 'suppliers' credit).</li>" +
               "<li><strong>Commercial bank or other financial institution:</strong> These include all commercial banks, whether or not publicly owned, as well as other financial institutions, such as finance companies, merchant banks, insurance companies, and the like.</li>" +
               "<li><strong>International organization:</strong> Note that loans from the World Bank, IDA, IADB, IMF, AfDB, and AsDB need not be reported. Only other international organizations are included here.</li>" +
               "<li><strong>Government or public agency:</strong> This category includes loans from central, provincial or local governments, central banks (but not government-owned commercial banks), and public enterprises (notably, governmental export-financing institutions, development banks, and the like).</li>" +
               "<li><strong>Bond:</strong> Include all bond issues, whether publicly offered or privately placed.</li>" +
               "<li><strong>Nationalization:</strong> Include here only bonds or other evidences of indebtedness issued directly to the previous owners of nationalized properties.</li>" +
               "</ol>",

        'F15': "Enter the commitment date, which is the date on which the loan agreement was signed or, if the debt consists of bonds, the date of issue.",

        'F16': "Enter the amount of the commitment in the currency specified in item 17.1. For suppliers' credits, the amount of the commitment should consist only of that portion being financed on credit. In general, this would be the value of the shipment, minus all cash payments made by the purchaser. For bond issues, the face or nominal value of the total issue is considered to be the amount of the commitment, without deducting underwriting commissions or discounts. The amount of the commitment should exclude future interest payments. Show the total amount of the commitment even if it is contemplated that the whole loan will not in fact be drawn. For a rescheduling loan, also give the components of the total amount rescheduled (consolidated) under items 16.1 to 16.6.",

        'F17': "<strong>17.1:</strong> Enter the currency in which the amounts are reported, normally the one in which the payment is due.<br><br>" +
               "<strong>17.2:</strong> Enter the currency in which the debt is repayable. If the loan has several currency tranches, i.e., is divided into parts with each part payable in a different currency, the amounts may be combined and expressed in one currency, making the necessary conversion at the exchange rates prevailing on the date of the commitment. Alternatively, each tranche may be reported as a separate sub-loan. If the debt can be repaid in any one of several currencies at the creditor's option, enter the word 'multiple' and describe the arrangements in item 22.",

        'F18': "Specify the type of interest:<br><br>" +
               "<ol>" +
               "<li>No interest during the entire life of the loan</li>" +
               "<li>Interest included in principal</li>" +
               "<li>Fixed rate/rates</li>" +
               "<li>Variable rate/rates, usually tied to some money market rate (e.g., London interbank offer rate (LIBOR), New York prime)</li>" +
               "<li>Other (Form 1A required)</li>" +
               "</ol>" +
               "For variable rates, specify the base rate(s) used in items 18.6 and 18.7.",

        'F19': "Enter the following:<br><br>" +
               "<ul>" +
               "<li>First fixed interest rate</li>" +
               "<li>First variable interest rate margin</li>" +
               "<li>Second fixed interest rate (if applicable)</li>" +
               "<li>Second variable interest rate margin (if applicable)</li>" +
               "</ul>" +
               "If more than two rates apply, provide additional rates in item 22 'notes'.",

        'F20': "Enter the following information:<br><br>" +
               "<ul>" +
               "<li>First interest payment date (month and year)</li>" +
               "<li>Final interest payment date (month and year)</li>" +
               "<li>Number of interest payments per year</li>" +
               "<li>If more than one interest (or margin) rate applies, give the date when the second interest/margin rate comes into effect</li>" +
               "</ul>",

        'F21': "If there is a commitment charge applicable to the undrawn portion of the loan commitment, enter the annual rate here. If there are front-end charges, enter the amount and an explanation thereof in a footnote. The term front-end charges include management, participation, legal and registration fees, and similar charges payable by the debtor.",

        'F22': "Use this space for any additional notes or explanations related to the loan agreement. This may include details on multiple creditors, currency arrangements, or additional interest rate information."
    };

    return fieldInfo[fieldId] || "No additional information available for this field.";
}