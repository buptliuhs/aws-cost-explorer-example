import {CostExplorer} from "aws-sdk";

const main = async () => {
    const costExplorer = new CostExplorer({region: "us-east-1"});
    const cost = await costExplorer.getCostAndUsage({
        TimePeriod: {
            Start: "2021-04-01",
            End: "2021-05-01",
        },
        Granularity: "MONTHLY",
        GroupBy: [
            // {
            //     Type: "DIMENSION",
            //     Key: "SERVICE",
            // },
            {
                Type: "DIMENSION",
                Key: "REGION",
            }
        ],
        Metrics: [
            "BLENDED_COST",
        ],
    }).promise();
    console.log(JSON.stringify(cost));
};

main().then(r => {
    console.log("DONE");
});

