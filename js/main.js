const lodeAllRecipes = async () => {
      const res = await fetch("https://dummyjson.com/recipes")
      const data = await res.json()
      displayRecipes(data.recipes)

}

lodeAllRecipes()


const displayRecipes = (data) => {
      const recipeCont = document.getElementById("recipesCont")
      data.map(recipe => {
            const { name, tags, image } = recipe
            console.log(tags);

            let spns = ""

            tags.forEach(tag => {
                  spns += `<div class="badge badge-outline">${tag}</div>`
            })
            const recipeCard = document.createElement("div")
            recipeCard.innerHTML = `
             <img src="${image}">
             <h1>${name}</h1>
             <div class="flex gap-3"> ${spns} </div>
            
            `
            recipeCont.appendChild(recipeCard)


      })
}