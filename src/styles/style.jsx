import styled from 'styled-components'
export const Character=styled.div`
width: 100%;
border-radius: 20px;
& img {
  border-radius: 20px;
  width: 400px;
  height: 400px;
  margin: 30px auto -20px auto;
}
`
export const Types=styled.div`
width: 100%;
margin: auto;
text-align: center;
`
export const Series=styled.div`
width: 60%;
  margin:10px auto;
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(100px,1fr));
  & div {
    margin: auto;
    width: 160px;  
  }
`
export const Search=styled.div`
display: flex;
flex-wrap: wrap;
width: 80%;
margin: 0px auto 0px auto;
justify-content:space-around ;
`
export const SerLink=styled.div`
margin: auto;
  width: 200px;
  justify-content: center;
  & input {
    margin:auto
  }
`
export const Main=styled.main`
min-height: 600px;
  min-width: 500px;
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(500px,1fr));
  width: 100%;
  row-gap: 20px;
  column-gap: 20px;
`
export const Item=styled.div`
margin: auto;
overflow: hidden;
display: flex;
width: 500px;
height: 200px;
background-color: rgb(78, 78, 78);
border-radius: 10px;
& img {
    width: 200px;
  height: 200px;
}
`
export const SortButton=styled.button`
margin-top: 20px;
margin-bottom: 20px;
text-transform: uppercase;
line-height: 5px;
width: 70px;
height: 30px;
border-radius: 5px;
`
export const Episode=styled.div`
width: 400px;
  margin: auto;
`