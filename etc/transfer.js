const fs = require('fs');

const group_data = require('./sitelist.js');

let config = {
    "sites": [],
    "setting": {}
}

group_data.forEach((group) => {
    group.sites.forEach((site) => {
        config.sites.push({
            "title": site.name,
            "description": site?.description ? site.description : "",
            "homeUrl": site?.home ? site.home : (site?.search ? site.search.match(/https?:\/\/.*?\//g) : ""),
            "searchStr": site?.search ? site.search : "",
            "tags": [group.name],
            "favorite": false
        });
    })
})

fs.writeFileSync('config.json', JSON.stringify(config, null, 2));