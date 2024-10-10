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
                  spns += `<div class="badge badge-outline border-red-300 ">${tag}</div>`
            })
            const recipeCard = document.createElement("div")
            recipeCard.classList = " border p-5 rounded-lg shadow-md flex flex-col gap-3 justify-between"
            recipeCard.innerHTML = `
             <img  class=" rounded-lg w-full " src="${image}">
             <h1 class=" text-2xl font-bold my-5">${name}</h1>
             <div class="flex gap-3 flex-wrap"> ${spns} </div>
             <button class="btn mt-6 w-full bg-red-400">Cook this</button>
            
            `
            recipeCont.appendChild(recipeCard)


      })
}