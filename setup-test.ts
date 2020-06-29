import { cleanup } from '@testing-library/react'
import { matchers } from 'jest-emotion'
import '@testing-library/jest-dom/extend-expect'

expect.extend(matchers)
afterEach(cleanup)
