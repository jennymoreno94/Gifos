const data = [{
    name: "joy",
    analytics_response_payload: "e=ZXZlbnRfdHlwZT1UQUdfU0VBUkNIJmNpZD1mNjYzY2VhNTRk…WU3ZTdmMWU1M2E2MzM2YjkzZTRjZTgmbmFtZT1qb3kmcT1qbw"
  },
  {
    name: "joy joy",
    analytics_response_payload: "e=ZXZlbnRfdHlwZT1UQUdfU0VBUkNIJmNpZD1mNjYzY2VhNTRk…dmMWU1M2E2MzM2YjkzZTRjZTgmbmFtZT1qb3kram95JnE9am8"
  },
  {
    name: "joy joy joy",
    analytics_response_payload: "e=ZXZlbnRfdHlwZT1UQUdfU0VBUkNIJmNpZD1mNjYzY2VhNTRk…1M2E2MzM2YjkzZTRjZTgmbmFtZT1qb3kram95K2pveSZxPWpv"
  },
  {
    name: "joyeux",
    analytics_response_payload: "e=ZXZlbnRfdHlwZT1UQUdfU0VBUkNIJmNpZD1mNjYzY2VhNTRk…TdmMWU1M2E2MzM2YjkzZTRjZTgmbmFtZT1qb3lldXgmcT1qbw"
  },
  {
    name: "joker",
    analytics_response_payload: "e=ZXZlbnRfdHlwZT1UQUdfU0VBUkNIJmNpZD1mNjYzY2VhNTRk…3ZTdmMWU1M2E2MzM2YjkzZTRjZTgmbmFtZT1qb2tlciZxPWpv"
  }
  ]

let search = document.getElementById("search");
search.addEventListener("input", (e) => {
  const suggestionsList = document.getElementById(`suggestions-list`);
  if (e.target.value) {
    let FilterData = [];
    if (data.length > 0) {
      FilterData = data.filter((da) => da.name.includes(e.target.value));
      const searchAutocomplete =
        `<ul class="list">
            ${FilterData.map(item => `
              <li class="option-list"><i class="fa fa-search"></i>${item.name}</li>
            `).join('')}
        </ul>`;

      if (FilterData.length !== 0) {
        suggestionsList.innerHTML = searchAutocomplete
        search.style.borderBottomRightRadius = '0em'
        search.style.borderBottomLeftRadius = '0em'
      } else {
        suggestionsList.innerHTML = ''
        search.style.borderBottomRightRadius = '2em'
        search.style.borderBottomLeftRadius = '2em'
      }
    }
  } else {
    search.style.borderBottomRightRadius = '2em'
    search.style.borderBottomLeftRadius = '2em'
    suggestionsList.innerHTML = ''
  }

  const optionList = document.querySelectorAll(".option-list");
  optionList.forEach(li => li.addEventListener("click", event => {
    suggestionsList.innerHTML = ''
    search.style.borderBottomRightRadius = '2em'
    search.style.borderBottomLeftRadius = '2em'
    search.value = event.currentTarget.textContent
  }))

})