import axios from 'axios'

interface Todo {
  id: number;
  title: string;
  completed: boolean
}

const url = 'https://jsonplaceholder.typicode.com/todos/1'

axios.get(url).then(response => {
  const todo = response.data as Todo

  const ID = todo.id
  const title = todo.title
  const finished = todo.completed
  logTodo(ID, title, finished)
  
})

const logTodo = (id: number, title: string, finished: boolean) => {
  console.log(`
    The Todo with ID: ${id}
    Has title of: ${title}
    Is it finished? ${finished} 
  `)
  
}