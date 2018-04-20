import axios from 'axios'
import * as config from '../config'

const ax: any = axios.create({
  baseURL: config.API_ROOT
})