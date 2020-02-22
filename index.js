window.addEventListener('load',()=>{
    fetchPage();
    registerSW();
});

async function fetchPage()
{
    const res = fetch(topHeadlineUrl);
    const json = await res.json();
    const main = document.querySelector("main");

    console.log("Page Fetch")
}


async function registerSW()
{
    // console.log("Page Fetch")
    if('serviceWorker' in navigator)
    {
        try{
           await navigator.serviceWorker.register('service-worker.js');
        }
        catch(e)
        {
            console.log('SW Reg Failed')
        }
    }


}