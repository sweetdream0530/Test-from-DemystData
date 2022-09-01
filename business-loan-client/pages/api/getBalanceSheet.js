export default function getBalanceSheet(req, res) {
    /*
        This function would authorise a user against a chosen accounting provider.
        It would select accounting provider based on req.body.accountingProvider.
        The API call to the accounting provider would be implemented at a deeper layer than in this file.
        This would make it easier to change the accounting provider without changing this file.

        The request format is as follows:
        {
            accountingProvider: 'xero',
            authToken: 'authToken',
            businessName: 'businessName',
            startYear: 'startYear'
        }
    */  

    res.status(200).json({
        sheet: [
            {
                "year": 2020,
                "month": 12,
                "profitOrLoss": 250000,
                "assetsValue": 1234
            },
            {
                "year": 2020,
                "month": 11,
                "profitOrLoss": 1150,
                "assetsValue": 5789
            },
            {
                "year": 2020,
                "month": 10,
                "profitOrLoss": 2500,
                "assetsValue": 22345
            },
            {
                "year": 2020,
                "month": 9,
                "profitOrLoss": -187000,
                "assetsValue": 223452
            },
            {
                "year": 2020,
                "month": 8,
                "profitOrLoss": 250000,
                "assetsValue": 1234
            },
            {
                "year": 2020,
                "month": 7,
                "profitOrLoss": 1150,
                "assetsValue": 5789
            },
            {
                "year": 2020,
                "month": 6,
                "profitOrLoss": 2500,
                "assetsValue": 22345
            },
            {
                "year": 2020,
                "month": 5,
                "profitOrLoss": -187000,
                "assetsValue": 223452
            },
            {
                "year": 2020,
                "month": 4,
                "profitOrLoss": 250000,
                "assetsValue": 1234
            },
            {
                "year": 2020,
                "month": 3,
                "profitOrLoss": 1150,
                "assetsValue": 5789
            },
            {
                "year": 2020,
                "month": 2,
                "profitOrLoss": 2500,
                "assetsValue": 22345
            },
            {
                "year": 2020,
                "month": 1,
                "profitOrLoss": -187000,
                "assetsValue": 223452
            }
        ]
    });
}