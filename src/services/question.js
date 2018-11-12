import { http } from './http'

const save = question => http.post('/questions', { ...question })
const load = () => http.get('/questions')

export default {
  save,
  load
}