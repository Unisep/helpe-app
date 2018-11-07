import { http } from './http'

const save = question => http.post('/questions', { ...question })

export default {
  save
}