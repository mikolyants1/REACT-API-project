import styled from 'styled-components'
export const Character=styled.div`
width: 100%;
border-radius: 20px;
font-size:20px;
display:flex;
flex-direction:column;
align-items:center;
margin-top:30px;
& img {
  border-radius: 20px;
  width: 400px;
  height: 400px;
}
`
export const Block=styled.div`
width:100%;
justify-content:center;
display:flex;
text-align:center
`
export const Spin=styled.div`
  width:60px;
  height:60px;
  border-radius:50%;
  border-left:15px solid rgb(37, 36, 36);
  border-top:15px solid white;
  border-bottom:15px solid white;
  border-right:15px solid white;
  rotate:${props=>props.spin}deg
`
export const Types=styled.div`
width: 100%;
margin: auto;
text-align: center;
`
export const Status=styled.div`
margin-top:-25px;
`
export const Series=styled.div`
width: 60%;
  margin:10px auto;
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(100px,1fr));
  & div {
    width: 160px;  
  }
`
export const View=styled.div`
text-align: center;
`
export const Search=styled.div`
display: flex;
flex-wrap: wrap;
width: 70%;
margin: 0px auto 0px auto;
justify-content:space-around ;
`
export const SerLink=styled.div`
text-align:center;
margin: auto;
  width: 200px;
  justify-content: center;
`
export const Input=styled.input`
  margin:auto;
  border-radius:5px;
`
export const Main=styled.main`
font-size:20px;
min-height: 600px;
  min-width: 500px;
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(500px,1fr));
  width: 90%;
  margin:auto;
  row-gap: 20px;
  column-gap: 20px;
`
export const LocMain=styled.main`
font-size:20px;
min-height: 600px;
  min-width: 500px;
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
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
export const LocItem=styled.div`
margin: auto;
overflow: hidden;
display: flex;
width: 300px;
height:300px;
background-color: rgb(78, 78, 78);
border-radius: 10px;
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
export const Table=styled.table`
width: 400px;
  margin: auto;
  font-size:20px
`
export const LocLink=styled.div`
 margin-top:50px;
 text-align:center;
`
export const InfoDiv=styled.div`
  width: 100%;
  height: 100%;
`
export const Span=styled.span`
color:grey;

`
export const Cell=styled.td`
  width: 200px;
  text-align: center;
  min-height: 50px;
  border:1px solid white ;
`
export const Head=styled.th`
width: 200px;
text-align: center;
min-height: 50px;
border:1px solid white ;
`
export const Header=styled.thead`
width:100%
`
export const Body=styled.tbody`
width:100%
`
export const Title=styled.h1`
  font-size: 30px;
  text-align:center;
`
export const Text=styled.div`
  margin-bottom: -20px;
`
export const Label=styled.label`
font-size:20px;
`
