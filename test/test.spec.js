import { mount } from '@vue/test-utils'
import Test from '@/pages/test.vue'

describe('Test', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Test)
    expect(wrapper.isVueInstance()).toBeTruthy()

    console.log(wrapper.html())
    /*
    <div class="wrap">
      <h1 class="d-none d-md-block display-4">
        Testing!
      </h1> <button type="button" class="v-btn v-btn--contained theme--light v-size--default"><span class="v-btn__content">
        Hi Leif
      </span></button>
    </div>
    */ 
  })
})
