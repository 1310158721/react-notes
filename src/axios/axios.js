import axios from 'axios'

// public文件夹中的mock文件夹里面的json文件的基本路径
axios.defaults.baseURL = window.location.origin + '/mock/'

export const axiosGet = (url, params = {}) => {
	return new Promise(resolve => {
		axios.get(url, {params: params}).then(res => {
			resolve(res)
		}).catch(err => {
			console.log(err)
		})
	})
} 