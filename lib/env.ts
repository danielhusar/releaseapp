export const production = process.env.NODE_ENV === 'production'
export const test = process.env.NODE_ENV === 'test'
export const dev = !production && !test
export const env = production ? 'production' : test ? 'test' : 'dev'
