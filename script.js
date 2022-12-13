function getPokemons() {
    return [
        {
            nome: 'Pikachu',
            tipo: 'eletric',
            imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png'
        },
        {
            nome: 'Squirtle',
            tipo: 'water',
            imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png'
        }
        
    ]
}

var pokemons = getPokemons();
  for (let index = 0; index < pokemons.length; index++) {
    var pokemon = pokemons[index];
    document.getElementById("table-pokemons").innerHTML += "<tr> <td>"+ pokemon.nome + "</td> <td>"+ pokemon.tipo +"</td> <td><img class='img-fluid' src=" + pokemon.imagem + "></td> </tr>";    
  }



function salvar(event){
    event.preventDefault();


    var nomePokemon =  document.getElementById("nome").value;
    var tipoPokemon =  document.getElementById("tipo").value;
    var imagemPokemon = document.getElementById("imagem").value;

    if (nomePokemon === '') {
        alert('campo nome não pode ser vazio');    
        return;
    }
    if (tipoPokemon === '') {
        alert('campo tipo não pode ser vazio');    
        return;
    }
    if (imagemPokemon === '') {
        alert('campo imagem não pode ser vazio'); 
        return;   
    }

     pokemons.push({
        nome: nomePokemon,
        tipo: tipoPokemon,
        imagem: imagemPokemon
    })

    addPokemon(nomePokemon, tipoPokemon, imagemPokemon);
    limparCampos();
    
}



function addPokemon(nome, tipo, imagem) {
    document.getElementById("table-pokemons").innerHTML += "<tr> <td>"+ nome + "</td> <td>"+ tipo +"</td> <td><img class='img-fluid' src=" + imagem + "></td> </tr>";
}

function limparCampos(){
    document.getElementById('nome').value = '';
    document.getElementById('tipo').value = '';
    document.getElementById('imagem').value = '';
}
