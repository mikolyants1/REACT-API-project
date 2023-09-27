import {create} from 'zustand'
import {immer} from 'zustand/middleware/immer'
import {devtools,persist} from 'zustand/middleware'
export const useStore=create(persist(devtools(immer((set)=>({
page:1,
nextPage:()=>set(state=>{
  state.page+=1
}),
prevPage:()=>set(state=>{
  state.page-=1
})
}))),{name:'store1',version:1}))