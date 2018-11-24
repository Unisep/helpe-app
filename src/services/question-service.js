import { http } from './http'

const save = question => http.post('/questions', { ...question })
const find = id => http.get(`/questions/${id}`)
const load = () => http.get('/questions')

export default {
  save,
  find,
  load
}