// 图书API
import httpInstance from "../utils/http"

export const getTestList = async () => {
  const response = await httpInstance.get('/test/testmusic')
  return response.data
}
  