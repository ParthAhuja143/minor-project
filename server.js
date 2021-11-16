import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.get('/', async (req,res) => {
    const sleepTimeInSeconds = process.env.SLEEP_TIME_IN_SECONDS;

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