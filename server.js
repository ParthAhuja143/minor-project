const express = require('express');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

app.get('/:sleepTime', async (req,res) => {
    const sleepTimeInSeconds = req.params.sleepTime;

    const waitForSleepTime = async () => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(), sleepTimeInSeconds*1000);
        })
    }

    await waitForSleepTime();

    res.json({status: "OK"});
});

app.listen(4000, () => {
    console.log('Server running on port 4000')
})