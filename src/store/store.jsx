import {create} from 'zustand'
import {immer} from 'zustand/middleware/immer'
import {devtools} from 'zustand/middleware'
import {persist} from 'zustand/middleware'
export const useStore=create(persist(devtools(immer((set)=>({
page:1,
nextPage:(index)=>set(state=>{
 state.page=index==7?7:index+1
}),
prevPage:(index)=>set(state=>{
 state.page=index==1?1:index-1
})
}))),{name:'store1',version:1}))