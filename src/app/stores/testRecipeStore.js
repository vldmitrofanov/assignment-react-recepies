import { makeAutoObservable, runInAction } from 'mobx'
import agent from '../api/agent'


export default class TestRecipeStore {
  testRecipeRegistry = new Array()
  featuredTestRecipeRegistry = new Array()
  loadingRecepies = false
  loadingFeaturedRecepies = false
  currentPage = 0
  totalPages = 0
  testRecipe = {}

  constructor() {
    makeAutoObservable(this)
  }
  get featuredTestRecipies() {
    return this.featuredTestRecipeRegistry
  }
  get testRecipies() {
    return this.testRecipeRegistry
  }

  loadTestRecipies = async (page = 1) => {
    this.loadingRecepies = true
    this.testRecipeRegistry = new Array()
    try {
      const response = await agent.TestRecipies.list(page)
      runInAction(() => {
        response.data.forEach((recipe) => {
          const newRecipe = this.setTestRecipe(recipe)
          this.testRecipeRegistry.push(newRecipe)
        })
        this.currentPage = parseInt(response.page)
        this.totalPages = parseInt(response.pages)
      })
    } catch (e) {
      console.log(e)
    } finally {
      runInAction(() => {
        this.loadingRecepies = false
      })
    }
  }

  loadFeaturedTestRecipies = async (page = 1) => {
    this.loadingFeaturedRecepies = true
    try {
      const response = await agent.TestRecipies.listFeatured(page)
      runInAction(() => {
        response.data.forEach((recipe) => {
          const newRecipe = this.setTestRecipe(recipe)
          this.featuredTestRecipeRegistry.push(newRecipe)
        })
      })
    } catch (e) {
      console.log(e)
    } finally {
      runInAction(() => {
        this.loadingFeaturedRecepies = false
      })
    }
  }

  loadTestRecipe = async (id) => {
    this.loadingRecepies = true
    this.testRecipe = {}
    try {
      const recipe = await agent.TestRecipies.details(id)
      runInAction(() => {
        const newRecipe = this.setTestRecipe(recipe)
        this.testRecipe = newRecipe
        console.log(recipe.id)
      })
    } catch (e) {
      console.log(e)
    } finally {
      runInAction(() => {
        this.loadingRecepies = false
      })
    }
  }

  setTestRecipe = (recipe) => {
    const minutes = parseInt(recipe.cooking_time)
    recipe.cookingTime =
      `${minutes > 60 ? Math.floor(minutes / 60) + ' hr' : ''}  ${(minutes % 60) > 0
        ? (minutes % 60) + ' min'
        : ''}`
    return recipe
  }
}
