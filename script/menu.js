/*HEADER*/

/*const theme = document.querySelector('#mode')
theme.addEventListener("click", () => {
    const dark = document.documentElement.getAttribute('data-theme')
    if (dark === null) {
        document.documentElement.setAttribute('data-theme', 'dark')
        localStorage.setItem('data-theme', 'dark')
    } else {
        document.documentElement.removeAttribute('data-theme')
        localStorage.removeItem('data-theme')
    }

})

function Menu() {
    var element = document.body;
    element.classList.toggle("visible_menu");
}*/
/*HEADER*/

/*BUSQUEDA*/
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
                        `<ul>
                            ${FilterData.map(item => `
                            <li class="option-list"><i class="fa fa-search"></i>${item.name}</li>
                            `).join('')}
                        </ul>`;  
                suggestionsList.innerHTML = FilterData.length !== 0 ? searchAutocomplete : ''           
            }     
            } else {
                suggestionsList.innerHTML = ''
            }
})

/*BUSQUEDAs*/