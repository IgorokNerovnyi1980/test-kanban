export const API = {
    url: 'https://newsapi.org/v2/top-headlines?',
    cantry: 'us',
    key: 'd0a98c7bc6be488cabf56ee0e965b091'
};

// export const standartReq = `${API.url}${API.cantry}${API.key}`
export const standartReq = `${API.url}country=${API.cantry}&apiKey=${API.key}`
