import axios from 'axios';

// Must be on ENV_VARS file. This is just for demo purposes
const BASE_URL = 'https://6222994f666291106a29f999.mockapi.io/api/v1';

export const httpClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
