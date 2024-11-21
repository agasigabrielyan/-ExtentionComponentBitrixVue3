export default {
    props: {
      elements: {
          type: Array,
          required: true
      }
    },
    data() {

    },
    template: `
        <transition name="fade">
            <div v-if="elements.length" class="elements-list">
                <div v-for="(element, index) in elements" :key="index">
                    {{ element.NAME }}
                </div>
            </div>
        </transition>
    `
}