import { mount } from '@vue/test-utils'
import Card from '@/core-components/Card'

describe('Card.vue', () => {
    let wrapper = null;
    beforeEach(()=> {
        wrapper = mount(Card, {
            slots: {
                content: '<p>Some content here</p>',
                action: '<button>Some button here</button>',
            }
        })
    });

    afterEach(()=> {
        wrapper.destroy;
    });
    it('should render', () => {
        expect(wrapper.find('.card').exists()).toBe(true)
    });
    it('should render content slot',()=> {
        expect(wrapper.find('p').exists()).toBe(true)
    })
    it('should render action slot',()=> {
        expect(wrapper.find('button').exists()).toBe(true)
    })
    
})