import { mount } from '@vue/test-utils'
import ActionCard from '@/components/ActionCard'

const mockPost = {
    "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
}


describe('HistoryCard.vue', () => {
    let wrapper = null;
    beforeEach(()=> {
        wrapper = mount(ActionCard, {
            propsData: {
                action: {
                    element: mockPost,
                    initialIndex: 0,
                    stackId: 0,
                    swappedIndex:1
                }
            }
        });
    })

    afterEach(()=> {
        wrapper.destroy;
    });

    it('should render card', () =>{
        expect(wrapper.find('.card').exists()).toBe(true)
    });
    it('should render content', () => {
        expect(wrapper.find('p').exists()).toBe(true)
    });
    it('should emit time-travel action on button click', async () => {
        await wrapper.find('.time-travel-button').trigger('click');

        expect(wrapper.emitted()).toHaveProperty('time-travel');
    });
})
