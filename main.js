
document.querySelector('#Rbtn').addEventListener('click', clicked)

function clicked() {
    //  console.log("Button clicked")
    axios.get('https://swapi.dev/api/planets/?search=Alderaan')
        .then((res) => {
            // let { residents } = res.data.results
            let alderaanRes = res.data.results[0].residents
            for (i = 0; i < alderaanRes.length; i++) {
                // console.log(alderaanRes[i])
                axios.get(alderaanRes[i])
                    .then((res) => {
                        // console.log(res.data.name)
                        let name = document.createElement('h2');
                        name.textContent = res.data.name
                        document.body.appendChild(name)
                    })
            }
        })

}




