import { resolve } from 'path'
import { Nuxt, Builder } from 'nuxt'
import moxios from 'moxios'
import config from '../nuxt.config'

// We keep the nuxt and server instance
// So we can close them at the end of the test
let nuxt = null

// Init Nuxt.js and create a server listening on localhost:4000
beforeAll(async () => {
  const config = {
    dev: false,
    rootDir: resolve(__dirname, '..')
  }
  // TODO consider using our own config
  nuxt = new Nuxt(config)
  await new Builder(nuxt).build()
  await nuxt.server.listen(4000, 'localhost')
  moxios.install()
}, 30000)

afterAll(() => {
  moxios.uninstall()
  nuxt.close()
})

// Example of testing only generated html
describe('testing routes from /pages', () => {
  it('Route / exists and renders HTML', async (done) => {
    const { html } = await nuxt.server.renderRoute('/test')
    expect(html.includes('<h1 class="display-4">')).toBe(true)
    done()
  })
})
