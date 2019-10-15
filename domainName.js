// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

function domainName(url) {
    const cases = ['http://', 'https://', 'www.', ];
    let domain = '';

    function cleaner(param) {
        if (url.startsWith(param)) {
            url = url.replace(param, '');

            return url;
        };
    }

    cases.map(cleaner);

    domain = url.split('.');

    return domain[0];
}


console.log(domainName('https://www.zqi51bm1ql0-gtfbft0.biz/error'));


// Test.assertEquals(domainName("http://google.com"), "google");
// Test.assertEquals(domainName("http://google.co.jp"), "google");
// Test.assertEquals(domainName("www.xakep.ru"), "xakep");
// Test.assertEquals(domainName("https://youtube.com"), "youtube");