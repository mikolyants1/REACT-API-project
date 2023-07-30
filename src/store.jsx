import create from 'zustand'
import {immer} from 'zustand/middleware/immer'
import {devtools} from 'zustand/middleware'
import {persist} from 'zustand/middleware'
 export const useStore=create(persist(devtools(immer((set)=>({
  page:0,
  style:{

  },
  add:(x)=>set(state=>{
    state.page=x
  }),
  next:(x)=>set(state=>{
 state.page=x+1
  }),
  prev:(x)=>set(state=>{
    state.page=x-1
  })
 }))),{name:'call',version:1}))