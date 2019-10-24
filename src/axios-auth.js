import axios from "axios";

const publicKey = "939cb27c6bb02076dbf4044dcaa36316";

function ajax(requestType, url, data = {}) {
	return new Promise((resolve, reject) => {
		return axios({
			method: requestType,
			url: url,
			params: Object.assign(data, {appid: publicKey})
		})
			.then((response) => {
				resolve(response)
			})
			.catch(({response}) => {
				if (response) {
					reject(response.data)
				} else {
					reject()
				}
			})
	})
}

export default ajax
