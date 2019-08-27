var members = data.results[0].members;
console.log(members);

let statistics = {
    reps: 0,
    rep_votes: 0,
    dems: 0,
    dems_votes: 0,
    inds: 0,
    inds_votes: 0,
    total: 0,
};

function calcStats() {
    members.forEach(member => {
        if (member.party == "R") {
            statistics.reps++;
            statistics.rep_votes += member.votes_with_party_pct;
        }
        if (member.party == "D") {
            statistics.dems++;
            statistics.dems_votes += member.votes_with_party_pct;
        }
        if (member.party == "I") {
            statistics.inds++;
            statistics.inds_votes += member.votes_with_party_pct;
        }
    });

    statistics.totalAvgR = statistics.rep_votes / statistics.reps;
    statistics.totalAvgD = statistics.dems_votes / statistics.dems;
    statistics.totalAvgI = statistics.inds_votes / statistics.inds;
}

calcStats();
// TableGlance
function paintTable() {

    document.getElementById("numRepublicans").innerHTML = statistics.reps;
    document.getElementById("votesRepublicans").innerHTML = statistics.totalAvgR.toFixed(2);
    document.getElementById("numDemocrats").innerHTML = statistics.dems;
    document.getElementById("votesDemocrats").innerHTML = statistics.totalAvgD.toFixed(2);
    document.getElementById("numIndependents").innerHTML = statistics.inds;
    document.getElementById("votesIndependents").innerHTML = statistics.totalAvgI.toFixed(2);
    document.getElementById("numTotal").innerHTML = statistics.reps + statistics.dems + statistics.inds;
    document.getElementById("votesTotal").innerHTML = ((statistics.totalAvgR + statistics.totalAvgD + statistics.totalAvgI) / 3).toFixed(2);


}

paintTable();


// var total = document.getElementById('total');
//     total.insertCell().innerHTML = statistics.numberD + statistics.numberR + statistics.numberI;
//     total.insertCell().innerHTML = statistics.totalPartyPercentage;

// function sortMembersByMissedVotes(members) {
// var members = Array.from(members);
// members.sort(function (a, b) {
// return (a.missed_votes_pct > b.missed_votes_pct) ? 1 : ((b.missed_votes_pct > a.missed_votes_pct) ? -1 : 0);
// });
// return members;
// }


// LeastEngagedTable and MostEngagedTable
console.log(members);
// let table = document.getElementById("LeastEngagedTable");
// let ordenados = members.sort(function (a, b) {
//     return b.missed_votes_pct - a.missed_votes_pct
// });
// let diezprimeros = ordenados.slice(0, (members.length * 0, 10));
// for (let i = 0; i < diezprimeros.length; i++) {
//     let row = document.createElement('tr');
//     row.insertCell().textContent = diezprimeros[i].first_name;
//     row.insertCell().textContent = diezprimeros[i].last_name;
//     row.insertCell().textContent = diezprimeros[i].missed_votes;
//     row.insertCell().textContent = diezprimeros[i].missed_votes_pct + "%";
//     table.append(row);
// }


function printEngageTable(id) {
    let table = document.getElementById(id);
    let ordenados;
    if (id == "LeastEngagedTable") {
        ordenados = members.sort(function (a, b) {
            return b.missed_votes_pct - a.missed_votes_pct
        });
    } else {
        ordenados = members.sort(function (a, b) {
            return a.missed_votes_pct - b.missed_votes_pct
        });
    }
    let diezprimeros = ordenados.slice(0, (members.length * 0, 10));
    for (let i = 0; i < diezprimeros.length; i++) {
        let row = document.createElement('tr');
        row.insertCell().textContent = diezprimeros[i].first_name;
        row.insertCell().textContent = diezprimeros[i].last_name;
        row.insertCell().textContent = diezprimeros[i].missed_votes;
        row.insertCell().textContent = diezprimeros[i].missed_votes_pct + "%";
        table.append(row);
    }
}
printEngageTable("LeastEngagedTable");
printEngageTable("MostEngagedTable");


// if (middleName === null) {
//     middleName = "";