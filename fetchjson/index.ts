import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1'

axios.get(url).then(response => {
  const todo = response.data

  const ID = todo.id
  const title = todo.title
  const finished = todo.completed

  console.log(`
    The Todo with ID: ${ID}
    Has title of: ${title}
    Is it finished? ${finished} 
  `)
})