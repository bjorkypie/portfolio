
//typing animations

async function init () {
  const node = document.querySelector("#type-text")

  await sleep(1000)
  node.text = ""
  await node.type('Hi, ')

  while (true) {
    await node.type('I\'m Madeline!')
    await sleep(2000)
    await node.delete('Hi, I\'m Madeline!')
    await node.type('I\'m a Full-Stack Developer.')
    await sleep(2000)
    await node.delete('Full-Stack Developer.')
		await node.type('gardener.')
		await sleep(2000)
		await node.delete('Full-Stack Developer.')
		await node.type('gardener.')
		await sleep(2000)
		await node.delete('gardener.')
		await node.type('runner.')
		await sleep(2000)
		await node.delete('runner.')
		await node.type('designer.')
		await sleep(2000)
		await node.delete('\'m a designer.')
		await node.type(' am my cat\'s personal assistant...')
		await sleep(2000)
		await node.type(' and I have two 70+ pound "lap dogs."')
		await sleep(2000)
		await node.delete('I am my cat\'s personal assistant... and I have two 70+ pound "lap dogs."')
		await node.type('Hire me!')

  }
}
//, Gardener, Software Engineer, Runner, CopyWriter, Designer, App Builder, Dog Walker, Cat Handler


// Source code 🚩

const sleep = time => new Promise(resolve => setTimeout(resolve, time))

class TypeAsync extends HTMLSpanElement {
  get text () {
    return this.innerText
  }
  set text (value) {
    return this.innerHTML = value
  }

  get typeInterval () {
    const randomMs = 100 * Math.random()
    return randomMs < 50 ? 10 : randomMs
  }

  async type (text) {
    for (let character of text) {
      this.text += character
      await sleep(this.typeInterval)
    }
  }

  async delete (text) {
    for (let character of text) {
      this.text = this.text.slice(0, this.text.length -1)
      await sleep(this.typeInterval)
    }
  }
}

customElements.define('type-async', TypeAsync, { extends: 'span' })


init()
