
const btn_enviar = document.getElementById('btn_enviar')
btn_enviar.addEventListener('click',(e)=>{
    fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas`,{
        method:'GET'
    })
    .then(res=>res.json())
    .then(dados=>{
        const marcas = document.createElement('select')
        const body = document.body
        const dados_marcas = dados
        dados.forEach((m,i)=>{
            const options_marca = document.createElement('option')
            marcas.appendChild(options_marca)
            options_marca.innerText = dados[i].nome
            body.appendChild(marcas)
            btn_enviar.style.display = 'none'
        })
        const btn_cars = document.createElement('button')
        btn_cars.innerText = 'pesquisar carro'
        body.appendChild(btn_cars)

        btn_cars.addEventListener('click',(e)=>{
            dados_marcas.forEach((m,i)=>{
                fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${dados_marcas[i].codigo}/modelos`,{
                    method:'GET'
                })
                .then(res=>res.json())
                .then(dados=>{
                    const cars = document.createElement('select')
                    const body = document.body
                    console.log(dados.modelos)
                })
            })
            
        })

    })
    .catch((err)=>{
        console.log(err)
    })
})

 
