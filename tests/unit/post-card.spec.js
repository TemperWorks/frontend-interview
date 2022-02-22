import { mount } from '@vue/test-utils'
import PostCard from '@/components/PostCard'



describe('PostCard.vue', () => {
  let wrapper = null;
  let firstElementWrapper = null;
  let lastElementWrapper = null;

  beforeEach(()=> {
    wrapper = mount(PostCard, {
      propsData:{
        postItem: {
          "userId": 1,
          "id": 2,
          "title": "qui est esse",
          "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        index: 1,
        length: 3
      },
      },
    );
    firstElementWrapper = mount(PostCard, { 
      propsData: {
        postItem: {
          "userId": 1,
          "id": 1,
          "title": "qui est esse",
          "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        index: 0,
        length: 3
      }
    });
    lastElementWrapper = mount(PostCard, { 
      propsData: {
        postItem: {
          "userId": 1,
          "id": 3,
          "title": "qui est esse",
          "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        index: 1,
        length:2,
      }
    });
  });

  afterEach(()=> {
    wrapper.destroy;
    firstElementWrapper.destroy;
    lastElementWrapper.destroy;
  });

  it('should render card', () => {
    const card = wrapper.find(".card").exists();

    expect(card).toEqual(true);
  });
  
  it.todo('should render content')

  it('should render up and down buttons if its middle element', () => {
     expect(wrapper.find('.up').exists()).toBe(true);
     expect(wrapper.find('.down').exists()).toBe(true);
  });

  it('should render only down button if its first element', () => {
    expect(firstElementWrapper.find('.up').exists()).toBe(false);
    expect(firstElementWrapper.find('.down').exists()).toBe(true);
  });

  it('should render only up button if its last element', () => {
    expect(lastElementWrapper.find('.up').exists()).toBe(true);
    expect(lastElementWrapper.find('.down').exists()).toBe(false);
  });

  it('should emit click up action', async ()=> {
      await wrapper.find('.up').trigger('click');

      expect(wrapper.emitted()).toHaveProperty('clicked-up');
  });

  it('should emit click down action', async () => {
    await wrapper.find('.down').trigger('click');

    expect(wrapper.emitted()).toHaveProperty('clicked-down');
  })
})
