import Papa from 'papaparse';


// Filters csv to make logic easeir to pick team
// lets also make it json so the react obj code is easier to read
// returns:
//  matches: [
//    {team1:"",teams2:"",week:"",score:""}
//    ...
//    ... 
//]
// where each item of array corresponds to a row
const formatData = (data,group) => {
    if (data == null || data[0] == null) {
        console.log("NULL data")
        return null
    }

    // build an array of group names
    // console.log('xxxxxxxxxxxxxgroup: ',group)
    const TeamNameInGroup = group.map((team) => {
        return team.name.toUpperCase();
    })
    // console.log('groupNAMES: ', TeamNameInGroup)

    // For each row of the data  
    const filteredData = data.filter((row) => {
        const nameOfTeam1 = row["Team 1"].toUpperCase()
        // if the team is in the group we want to include that in the data filter

        return TeamNameInGroup.includes(nameOfTeam1)
    })

    return filteredData
}
// note this is getting caleld once for each division *2 react strict == 6 times

const filterGroupFromMatches = async (group) => {
    // published csv url
    const publicSheetUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRM9wY0hE8SBHevcgzpRRCIocyDMtH5qEkcQLjgmH-D5GThiT4LtjFXcBQrLTHUdXPfe2gczi7AowoQ/pub?gid=0&single=true&output=csv"
    let result = null
    try {
        const response = await fetch(publicSheetUrl);
        const csvText = await response.text();
        const parsedData = Papa.parse(csvText, { header: true });
        result = formatData(parsedData.data,group)
        // console.log('###### FILTER DATA UTIL: ', result)
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    return result
};

export default filterGroupFromMatches
