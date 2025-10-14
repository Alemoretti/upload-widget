import axios from "axios"

interface UploadFileToStorageParams {
  file: File
}

export async function uploadFileToStorage({ file }: UploadFileToStorageParams) {
  const data = new FormData()
  data.append('file', file)

  const response = await axios.post('http://localhost:3333/uploads', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })

  return { url: response.data.url }
}