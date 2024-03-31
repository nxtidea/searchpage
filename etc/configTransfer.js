
const group_data = require('./sitelist.js');
const fs = require('fs');

output_config = {}
output_config.sites = []


for (const group of group_data) {
    for (const item of group.sites) {
        output_config.sites.push({
            title: item.name,
            description: item.description ? item.description : "",
            homeUrl: item.home ? item.home : "",
            searchStr: item.search ? item.search : "",
            tags: [group.name],
            favorite: false
        })
    }
}

fs.writeFileSync('./output.json', JSON.stringify(output_config, null, 2));