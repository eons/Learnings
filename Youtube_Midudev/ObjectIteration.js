//https://www.youtube.com/watch?v=Mz9HSiXSSVU&list=WL&index=20&ab_channel=midulive

const results=
{
    news: [],
    profiles:
    {
        users: []
    }
}

const mappedResults= Object.keys(results).map(key =>
    {
        console.log(key);
        const value= results[key];
        console.log(key, '->', value);
    });

    Object.values(results);

    Object.entries(results)
        .map(entry => 
            {
                const [key, values] = entry
                console.log({key, values});
            })