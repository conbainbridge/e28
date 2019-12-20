import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import NoteSlip from '@/components/NoteSlip.vue'

describe('NoteSlip.vue', () => {
  it('shows one note', () => {
    let note = {
      note: "Cool, there's another note here!",
      title: "note3"
    }
    const wrapper = shallowMount(NoteSlip, {
      propsData: { note }
    })
    expect(wrapper.text()).to.include(note.title)
  })
})
