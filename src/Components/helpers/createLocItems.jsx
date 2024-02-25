
function createLocItems(dimension,type,created) {
  return [
    {
        name:"dimension",
        value:dimension
    },
    {
        name:"type",
        value:type
    },
    {
        name:"created",
        value:created
    }
  ]
}

export default createLocItems