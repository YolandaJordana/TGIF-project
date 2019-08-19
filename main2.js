// document.getElementById("senate-data").innerHTML = JSON.stringify(data,null,2);

var members = data.results[0].members;
console.log(data.results[0].members);

function createTable(senate) {
  let tbody = document.getElementById("tbody");
  tbody.innerHTML = " ";

  for (let i = 0; i < senate.length; i++) {
    let tr = document.createElement("tr");

    let name = document.createElement("td");
    name.textContent =
      senate[i].first_name +
      " " +
      senate[i].last_name +
      " " +
      (senate[i].middle_name || "");

    let party = document.createElement("td");
    party.textContent = senate[i].party;

    let state = document.createElement("td");
    state.textContent = senate[i].state;

    let seniority = document.createElement("td");
    seniority.textContent = senate[i].seniority;

    let votes = document.createElement("td");
    votes.textContent = senate[i].votes_with_party_pct;

    tr.append(name, party, state, seniority, votes);

    tbody.appendChild(tr);
  }
}
createTable(members);

let statistics = {
  reps: 0,
  rep_votes: 0,
  dems: 0,
  dem_votes: 0,
  inds: 0,
  inds_votes: 0
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
  statistics.totalAvgD = statistics.dem_votes / statistics.dem;
  statistics.totalAvgI = statistics.inds_votes / statistics.inds;
}

calcStats();

// TableGlance
// function painTable() {
//   document.getElementById("numbRepublicans").innerHTML = statistics.reps;
//   document.getElementById("votesRepublicans").innerHTML = statistics.totalAvgR.toFixed(2);
//   document.getElementById("numbDemocrats").innerHTML = statistics.dems;
//   document.getElementById("votesDemocrats").innerHTML = statistics.totalAvgD.toFixed(2);
//   document.getElementById("numbIndependents").innerHTML = statistics.inds;
//   document.getElementById("votesIndependents").innerHTML = statistics.totalAvgI.toFixed(2);
// }



//   return statesSortedUnique;
// }

document.getElementById("check_democrat").addEventListener("change", test);
document.getElementById("check_republican").addEventListener("change", test);
document.getElementById("stateSelector").addEventListener("change", test);

function test() {
  let partyD = document.getElementById("check_democrat");

  let partyR = document.getElementById("check_republican");
  let partyI = document.getElementById("check_independent");
  let currentState = document.getElementById("stateSelector").value;
  // console.log("funciona", partyR.checked, partyD.checked, partyI.checked);

  //creo un array nuevo y hago un for, siempre dentro de la funcion
  let ValueCheckbox = [];
  for (let i = 0; i < members.length; i++) {
    if (partyD.checked && members[i].party == "D" && (currentState == members[i].state || currentState == 'All')) {
      ValueCheckbox.push(members[i]);
    }

    if (partyR.checked && members[i].party == "R" && (currentState == members[i].state || currentState == 'All')) {
      ValueCheckbox.push(members[i]);
    }

    if (partyI.checked && members[i].party == "I" && (currentState == members[i].state || currentState == 'All')) {
      ValueCheckbox.push(members[i]);
    }

  }

  // createTable(ValueCheckbox);

  if (
    partyR.checked == false &&
    partyD.checked == false &&
    partyI.checked == false
  ) {
    createTable(members);
  } else {
    createTable(ValueCheckbox);
  }
}

//states


function populateStates() {
  let states = [];
  for (let i = 0; i < members.length; i++) {
    //si la lista states no incluye el estado de la lista súbemelo
    if (!states.includes(members[i].state)) {
      states.push(members[i].state);
    }
  }
  states.sort();
  for (let i = 0; i < states.length; i++) {
    let option = document.createElement('option');
    option.innerHTML = states[i];
    document.getElementById('stateSelector').append(option);
  }
}
populateStates();