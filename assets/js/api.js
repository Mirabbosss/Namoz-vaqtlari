const baseURL = "https://islomapi.uz";

// DAILY
async function getDaily(URL, region) {
    try{
        const req = await fetch(`${URL}/api/present/day/?region=${region}`);
        const res = await req.json();
        return res;
    }

    catch(err){
        console.log(err);
    }
}


// WEEKLY
async function getWeekly(URL, region) {
    try{
        const req = await fetch(`${URL}/api/present/day/?region=${region}`);
        const res = await req.json();
        return res;
    }

    catch(err){
        console.log(err);
    }
}


// MONTHLY
async function getMonthly(URL, region, duration) {
    try{
        const req = await fetch(`${URL}api/monthly?region=${region}&month=${duration}`);
        const res = await req.json();
        return res;
    }

    catch(err){
        console.log(err);
    }
}
