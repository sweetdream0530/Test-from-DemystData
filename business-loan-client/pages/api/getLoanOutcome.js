export default function getLoanOutcome(req, res) {
    /*
        This API would submit an application to the decision engine.
        
        the request format is as follows:
        {
            application: {
                id: 'a955c346-efb5-4ade-acf3-776bdf355a5e',
                directorName: 'directorName',
                directorEmail: 'directorEmail',
                directorPhone: 'directorPhone',
                businessName: 'businessName',
                businessAddress: 'businessAddress',
                businessPhone: 'businessPhone',
                businessEmail: 'businessEmail',
                yearEstablished: 'yearEstablished',
                loanAmount: 'loanAmount',
                sheet: [
                    {
                        "year": 2020,
                        "month": 12,
                        "profitOrLoss": 250000,
                        "assetsValue": 1234
                    }, ...
                ]
            }
        }

        the response format is as follows:
        {
            applicationId: 'a955c346-efb5-4ade-acf3-776bdf355a5e',
            outcome: 'approved' or 'rejected',
            reason: 'reason for rejection',
            approvedAmount: 2000,
            approvedTerm: '1 year',
            approvedInterestRate: '10%'
        }
    */

    let preAssessment = 20; //default value

    // Assumes entries are in reverse chronological order.
    // Might be smart to sort them.
    profit12Months = req.body.sheet.slice(0,12).reduce(
        (acc, curr) => acc + curr.profitOrLoss, 0
    );

    assets12MonthsAverage = req.body.sheet.slice(0,12).reduce(
        (acc, curr) => acc + curr.assetsValue, 0
    ) / 12;

    if (profit12Months > 0) {
        preAssessment = 60;
    }

    if (assets12MonthsAverage > req.body.loanAmount) {
        preAssessment = 100;
    }


    // Map API request to decision engine request format.
    const decisionEngineRequestBody = {
        applicationId: req.body.application.id,
        businessName: req.body.businessName,
        yearEstablished: req.body.yearEstablished,
        annualSummary: req.body.sheet.reduce(
            (acc, entry) => {  {
                const key = entry['year'];
                acc[key] ??= 0;
                acc[key] += entry['profitOrLoss'];
                return acc;
            };}),
        preAssessment: preAssessment.toString()
    };

    // Would make API call to decision engine. For now, just return a mock response.
    const loanOutcome = {
        applicationId: req.body.application.id,
        outcome: 'approved',
        approvedAmount: req.body.loanAmount * preAssessment / 100,
        approvedTerm: '1 year',
        approvedInterestRate: '10%'
    }

    res.status(200).json(loanOutcome);
}