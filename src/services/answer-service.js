import { http } from './http'

const save = answer => http.post('/answers', { ...answer })
const load = id => http.get(`/answers?question_id=${id}`)

export default {
  save,
  load
}